package com.jiumi.framework.web.service;

import javax.annotation.Resource;

import com.jiumi.common.utils.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;
import com.jiumi.common.constant.Constants;
import com.jiumi.common.core.domain.entity.SysUser;
import com.jiumi.common.core.domain.model.LoginUser;
import com.jiumi.common.core.redis.RedisCache;
import com.jiumi.common.exception.CustomException;
import com.jiumi.common.exception.user.CaptchaException;
import com.jiumi.common.exception.user.CaptchaExpireException;
import com.jiumi.common.exception.user.UserPasswordNotMatchException;
import com.jiumi.common.utils.DateUtils;
import com.jiumi.common.utils.MessageUtils;
import com.jiumi.common.utils.ServletUtils;
import com.jiumi.common.utils.ip.IpUtils;
import com.jiumi.framework.manager.AsyncManager;
import com.jiumi.framework.manager.factory.AsyncFactory;
import com.jiumi.system.service.ISysConfigService;
import com.jiumi.system.service.ISysUserService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 登录校验方法
 *
 * @author jiumi
 */
@Component
public class SysLoginService
{
    @Autowired
    private TokenService tokenService;

    @Resource
    private AuthenticationManager authenticationManager;

    @Autowired
    private RedisCache redisCache;

    @Autowired
    private ISysUserService userService;

    @Autowired
    private ISysConfigService configService;

    /**
     * 登录验证
     *
     * @param username 用户名
     * @param password 密码
     * @param code 验证码
     * @param uuid 唯一标识
     * @return 结果
     */
    public String login(String username, String password, String code, String uuid)
    {
        boolean captchaOnOff = configService.selectCaptchaOnOff();
        // 验证码开关
        if (captchaOnOff)
        {
            validateCaptcha(username, code, uuid);
        }
        // 用户验证
        Authentication authentication = null;
        try
        {
            // 该方法会去调用UserDetailsServiceImpl.loadUserByUsername
            authentication = authenticationManager
                    .authenticate(new UsernamePasswordAuthenticationToken(username, password));
        }
        catch (Exception e)
        {
            if (e instanceof BadCredentialsException)
            {
                AsyncManager.me().execute(AsyncFactory.recordLogininfor(username, Constants.LOGIN_FAIL, MessageUtils.message("user.password.not.match")));
                throw new UserPasswordNotMatchException();
            }
            else
            {
                AsyncManager.me().execute(AsyncFactory.recordLogininfor(username, Constants.LOGIN_FAIL, e.getMessage()));
                throw new CustomException(e.getMessage());
            }
        }
        AsyncManager.me().execute(AsyncFactory.recordLogininfor(username, Constants.LOGIN_SUCCESS, MessageUtils.message("user.login.success")));
        LoginUser loginUser = (LoginUser) authentication.getPrincipal();
        recordLoginInfo(loginUser.getUser());
        // 生成token
        return tokenService.createToken(loginUser);
    }

    public Map<String,Object> loginWeiXin(Map<String, Object> userInfo)
    {
        Map<String,Object> result=new HashMap();
        String username=String.valueOf(userInfo.get("openid"));
        String unionid=String.valueOf(userInfo.get("unionid"));
        String nickName = (String) userInfo.get("nickName"); // 名称
        String avatar = (String) userInfo.get("avatar"); // 头像
        String sex = (String) userInfo.get("sex"); // 头像
        // 用户验证
        SysUser user=null;
        try
        {
            user=userService.selectuserByWxUserId(username);
            if(user==null){
                user=new SysUser();
                user.setUserType("02");
                user.setUserName(nickName);
                user.setWeixinOpenId(username);
                user.setWeixinUnionId(unionid);
                user.setNickName(nickName);
                user.setSex(sex+"");
                user.setAvatar(avatar);
                user.setCreateBy(nickName);
                String password = configService.selectConfigByKey("sys.user.initPassword");
                user.setPassword(SecurityUtils.encryptPassword(password));
                user.setCreateTime(DateUtils.getNowDate());
                userService.insertUser(user);
            }
        }
        catch (Exception e)
        {
            throw e;
        }
        LoginUser loginUser = new LoginUser();
        loginUser.setUser(user);
        loginUser.setUserId(user.getUserId());
        recordLoginInfo(user);

        String token= tokenService.createToken(loginUser);
        result.put(Constants.TOKEN, token);
        result.put("userinfo",loginUser);
        return result;
    }

    /**
     * 校验验证码
     *
     * @param username 用户名
     * @param code 验证码
     * @param uuid 唯一标识
     * @return 结果
     */
    public void validateCaptcha(String username, String code, String uuid)
    {
        String verifyKey = Constants.CAPTCHA_CODE_KEY + uuid;
        String captcha = redisCache.getCacheObject(verifyKey);
        redisCache.deleteObject(verifyKey);
        if (captcha == null)
        {
            AsyncManager.me().execute(AsyncFactory.recordLogininfor(username, Constants.LOGIN_FAIL, MessageUtils.message("user.jcaptcha.expire")));
            throw new CaptchaExpireException();
        }
        if (!code.equalsIgnoreCase(captcha))
        {
            AsyncManager.me().execute(AsyncFactory.recordLogininfor(username, Constants.LOGIN_FAIL, MessageUtils.message("user.jcaptcha.error")));
            throw new CaptchaException();
        }
    }

    /**
     * 记录登录信息
     */
    public void recordLoginInfo(SysUser user)
    {
        user.setLoginIp(IpUtils.getIpAddr(ServletUtils.getRequest()));
        user.setLoginDate(DateUtils.getNowDate());
        userService.updateUserProfile(user);
    }
}
