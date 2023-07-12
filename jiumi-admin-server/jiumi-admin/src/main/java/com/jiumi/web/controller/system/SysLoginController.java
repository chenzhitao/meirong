package com.jiumi.web.controller.system;

import java.util.*;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.jiumi.common.config.JiumiConfig;
import com.jiumi.common.constant.UserConstants;
import com.jiumi.common.core.redis.RedisCache;
import com.jiumi.common.utils.AES.WXCore;
import com.jiumi.common.utils.AES.WeiXinConfig;
import com.jiumi.common.utils.StringUtils;
import com.jiumi.system.service.ISysUserService;
import io.swagger.annotations.ApiOperation;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.util.EntityUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.jiumi.common.constant.Constants;
import com.jiumi.common.core.domain.AjaxResult;
import com.jiumi.common.core.domain.entity.SysMenu;
import com.jiumi.common.core.domain.entity.SysUser;
import com.jiumi.common.core.domain.model.LoginBody;
import com.jiumi.common.core.domain.model.LoginUser;
import com.jiumi.common.utils.SecurityUtils;
import com.jiumi.common.utils.ServletUtils;
import com.jiumi.framework.web.service.SysLoginService;
import com.jiumi.framework.web.service.SysPermissionService;
import com.jiumi.framework.web.service.TokenService;
import com.jiumi.system.service.ISysMenuService;

/**
 * 登录验证
 *
 * @author jiumi
 */
@RestController
public class SysLoginController
{

    private static final Logger log = LoggerFactory.getLogger(SysLoginController.class);
    @Autowired
    private SysLoginService loginService;

    @Autowired
    private ISysMenuService menuService;

    @Autowired
    private SysPermissionService permissionService;

    @Autowired
    private TokenService tokenService;

    @Autowired
    private ISysUserService userService;

    @Autowired
    private RedisCache redisCache;
    /**
     * 登录方法
     *
     * @param loginBody 登录信息
     * @return 结果
     */
    @PostMapping("/login")
    public AjaxResult login(@RequestBody LoginBody loginBody)
    {
        AjaxResult ajax = AjaxResult.success();
        // 生成令牌
        String token = loginService.login(loginBody.getUsername(), loginBody.getPassword(), loginBody.getCode(),
                loginBody.getUuid());
        ajax.put(Constants.TOKEN, token);
        return ajax;
    }

    /**
     * 获取用户信息
     *
     * @return 用户信息
     */
    @GetMapping("getInfo")
    public AjaxResult getInfo()
    {
        LoginUser loginUser = tokenService.getLoginUser(ServletUtils.getRequest());
        SysUser user = loginUser.getUser();
        // 角色集合
        Set<String> roles = permissionService.getRolePermission(user);
        // 权限集合
        Set<String> permissions = permissionService.getMenuPermission(user);
        AjaxResult ajax = AjaxResult.success();
        ajax.put("user", user);
        ajax.put("roles", roles);
        ajax.put("permissions", permissions);
        return ajax;
    }

    /**
     * 获取路由信息
     *
     * @return 路由信息
     */
    @GetMapping("getRouters")
    public AjaxResult getRouters()
    {
        Long userId = SecurityUtils.getUserId();
        List<SysMenu> menus = menuService.selectMenuTreeByUserId(userId);
        return AjaxResult.success(menuService.buildMenus(menus));
    }

    @ApiOperation(value = "微信登陆")
    @GetMapping("/wxLogin")
    public AjaxResult wxLogin(@RequestParam(value="code",required = true) String code,
                              @RequestParam(value="avatar",required = true) String avatar,
                              @RequestParam(value="sex",required = true) String sex,
                              @RequestParam(value="nickName",required = true) String nickName)
    {
        AjaxResult ajax = AjaxResult.success();
        String appId=JiumiConfig.getAppid();
        String APPSecret=JiumiConfig.getAppSecret();
        log.info("appid:"+appId);
        log.info("APPSecret:"+APPSecret);
        Map<String, Object> mapResult=new HashMap<>();
        if("debug".equalsIgnoreCase(code)){
            mapResult.put("openid",code);
        }else{
            mapResult=getWxUserOpenid(code,appId,APPSecret);
        }
        mapResult.put("avatar",avatar);
        mapResult.put("sex",sex);
        mapResult.put("nickName",nickName);
        Object openid=mapResult.get("openid");
        String unionid=String.valueOf(mapResult.get("unionid"));
        if(StringUtils.isNull(openid)){
            return AjaxResult.error("获取openid失败!");
        }
        log.info("=====================================");
        System.out.println(mapResult);
        // 生成令牌
        Map<String,Object> result = loginService.loginWeiXin(mapResult);
        ajax.put("data",result);
        return ajax;
    }

    @ApiOperation(value = "获取微信openid")
    @GetMapping("/getUserOpenid/{code}")
    public AjaxResult getUserOpenid(@PathVariable("code") String code)
    {
        String appId=JiumiConfig.getAppid();
        String APPSecret=JiumiConfig.getAppSecret();
        log.info("appid:"+appId);
        log.info("APPSecret:"+APPSecret);
        Map<String, Object> mapResult=new HashMap<>();
        if("debug".equalsIgnoreCase(code)){
            mapResult.put("openid",code);
        }else{
            mapResult=getWxUserOpenid(code,appId,APPSecret);
        }
        return AjaxResult.success(mapResult);
    }


    //获取openid
    public static Map<String, Object> getWxUserOpenid(String code, String APPID, String APPSecret) {
        //拼接url
        StringBuilder url = new StringBuilder("https://api.weixin.qq.com/sns/jscode2session?");
        url.append("appid=");//appid设置
        url.append(APPID);
        url.append("&secret=");//secret设置
        url.append(APPSecret);
        url.append("&js_code=");//code设置
        url.append(code);
        url.append("&grant_type=authorization_code");
        Map<String, Object> map = null;
        try {
            HttpClient client = HttpClientBuilder.create().build();//构建一个Client
            HttpGet get = new HttpGet(url.toString());    //构建一个GET请求
            HttpResponse response = client.execute(get);//提交GET请求
            HttpEntity result = response.getEntity();//拿到返回的HttpResponse的"实体"
            String content = EntityUtils.toString(result);
            System.out.println(content);//打印返回的信息
            JSONObject res = JSONObject.parseObject(content);//把信息封装为json
            log.info(res.toJSONString());
            //把信息封装到map
            map = parseJSON2Map(res);//这个小工具的代码在下面
        } catch (Exception e) {
            e.printStackTrace();
        }
        return map;
    }


    //json转map,这个小工具是我从网上找的,谢谢作者
    public static Map<String, Object> parseJSON2Map(JSONObject json) {
        Map<String, Object> map = new HashMap<String, Object>();
        // 最外层解析
        for (Object k : json.keySet()) {
            Object v = json.get(k);
            // 如果内层还是数组的话，继续解析
            if (v instanceof JSONArray) {
                List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
                @SuppressWarnings("unchecked")
                Iterator it = ((JSONArray) v).iterator();
                while (it.hasNext()) {
                    JSONObject json2 = (JSONObject)it.next();
                    list.add(parseJSON2Map(json2));
                }
                map.put(k.toString(), list);
            } else {
                map.put(k.toString(), v);
            }
        }
        return map;
    }

    @ApiOperation(value = "解析微信手机号")
    @PostMapping("/getWxPhoneNumber")
    public AjaxResult getWxPhoneNumber(@RequestBody WeiXinConfig weiXinConfig)
    {
        AjaxResult ajax = AjaxResult.success();
        String appId= JiumiConfig.getAppid();
        String APPSecret= JiumiConfig.getAppSecret();
        log.info("appid:"+appId);
        log.info("APPSecret:"+APPSecret);
        Map<String, Object> mapResult=getWxUserOpenid(weiXinConfig.getCode(),appId,APPSecret);
        Object sessionKey=mapResult.get("session_key");
        String openid=String.valueOf(mapResult.get("openid"));
        if(StringUtils.isNull(sessionKey)){
            return AjaxResult.error("获取openid失败!");
        }
        log.info("=====================================");
        log.info("=====================================sessionKey"+sessionKey);
        System.out.println(mapResult);
        String result= WXCore.decrypt(appId, weiXinConfig.getEncryptedData(), String.valueOf(sessionKey), weiXinConfig.getIv());
        log.info(result);
        // 生成令牌
        JSONObject jsonObj= JSONObject.parseObject(result);
        String phoneNumber=jsonObj.getString("phoneNumber");

        SysUser checkUser= userService.selectUserByPhone(phoneNumber);
        if(checkUser!=null && StringUtils.isEmpty(checkUser.getWeixinOpenId())){
            SysUser user= userService.selectuserByWxUserId(openid);

            checkUser.setWeixinOpenId(user.getWeixinOpenId());
            checkUser.setWeixinUnionId(user.getWeixinUnionId());
            userService.updateUserInfo(checkUser);
            userService.deleteUserActualById(user.getUserId());
            LoginUser loginUser = new LoginUser();
            loginUser.setUser(checkUser);
            loginUser.setUserId(checkUser.getUserId());
            tokenService.refreshToken(loginUser);
        }else{
            SysUser user= userService.selectuserByWxUserId(openid);
            user.setPhonenumber(phoneNumber);
            userService.updateUserPhone(user);
        }


        ajax.put("data",jsonObj);
        return ajax;
    }

    /**
     * 获取用户浏览列表
     */
    @GetMapping("/api/authcheck/editUserPhone/{phone}/{code}")
    @ApiOperation("修改登陆手机")
    public AjaxResult editUserPhone(@PathVariable("phone") String phone,@PathVariable("code") String code)
    {
        LoginUser loginUser = SecurityUtils.getLoginUser();
        String key = "phone_verify_code" + phone;
        String cacheCode=redisCache.getCacheObject(key)+"";
        if(!code.equals(cacheCode)){
            return AjaxResult.error("验证码错误");
        }
        SysUser sysuser=new SysUser();
        sysuser.setPhonenumber(phone);
        sysuser.setUserId(loginUser.getUserId());
        if (UserConstants.NOT_UNIQUE.equals(userService.checkUserNameUnique(phone)))
        {
            return AjaxResult.error("新增用户'" + phone+ "'失败，登录账号已存在");
        }
        else if (StringUtils.isNotEmpty(phone)&& UserConstants.NOT_UNIQUE.equals(userService.checkPhoneUnique(sysuser)))
        {
            SysUser checkUser= userService.selectUserByPhone(phone);
            if(checkUser!=null && StringUtils.isEmpty(checkUser.getWeixinOpenId())){
                SysUser user= userService.selectuserByWxUserId(loginUser.getUser().getWeixinOpenId());
                checkUser.setWeixinOpenId(user.getWeixinOpenId());
                checkUser.setWeixinUnionId(user.getWeixinUnionId());
                userService.updateUserInfo(checkUser);
                userService.deleteUserActualById(user.getUserId());
                loginUser.setUser(checkUser);
                loginUser.setUserId(checkUser.getUserId());
                tokenService.refreshToken(loginUser);
            }else {
                return AjaxResult.error("用户绑定手机号'" + phone + "'失败，手机号码已存在");
            }
        }else{
            int r=userService.updateUserPhone(sysuser);
        }
        return  AjaxResult.success("绑定成功");
    }


}
