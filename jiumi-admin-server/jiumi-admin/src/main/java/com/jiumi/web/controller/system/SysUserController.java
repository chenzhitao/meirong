package com.jiumi.web.controller.system;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import com.jiumi.baseconfig.domain.BaseUserAddress;
import com.jiumi.baseconfig.service.IBaseUserAddressService;
import com.jiumi.business.domain.OmsOrderItemInfo;
import com.jiumi.business.service.IOmsOrderItemInfoService;
import com.jiumi.common.utils.DateUtils;
import com.jiumi.business.domain.OmsOrderInfo;
import com.jiumi.business.service.IOmsOrderInfoService;
import com.jiumi.framework.web.domain.server.Sys;
import com.jiumi.shop.domain.BaseShopInfo;
import com.jiumi.shop.domain.BaseShopItemConsultant;
import com.jiumi.shop.service.IBaseShopInfoService;
import com.jiumi.shop.service.IBaseShopItemConsultantService;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang3.ArrayUtils;
import org.checkerframework.checker.units.qual.A;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import com.jiumi.common.annotation.Log;
import com.jiumi.common.constant.UserConstants;
import com.jiumi.common.core.controller.BaseController;
import com.jiumi.common.core.domain.AjaxResult;
import com.jiumi.common.core.domain.entity.SysRole;
import com.jiumi.common.core.domain.entity.SysUser;
import com.jiumi.common.core.domain.model.LoginUser;
import com.jiumi.common.core.page.TableDataInfo;
import com.jiumi.common.enums.BusinessType;
import com.jiumi.common.utils.SecurityUtils;
import com.jiumi.common.utils.ServletUtils;
import com.jiumi.common.utils.StringUtils;
import com.jiumi.common.utils.poi.ExcelUtil;
import com.jiumi.framework.web.service.TokenService;
import com.jiumi.system.service.ISysPostService;
import com.jiumi.system.service.ISysRoleService;
import com.jiumi.system.service.ISysUserService;

/**
 * 用户信息
 *
 * @author jiumi
 */
@RestController
@RequestMapping("/system/user")
public class SysUserController extends BaseController
{
    @Autowired
    private ISysUserService userService;

    @Autowired
    private ISysRoleService roleService;

    @Autowired
    private ISysPostService postService;

    @Autowired
    private TokenService tokenService;

    @Autowired
    private IBaseUserAddressService userAddressService;

    @Autowired
    private IOmsOrderInfoService omsOrderInfoService;

    @Autowired
    private IOmsOrderItemInfoService omsOrderItemInfoService;

    @Autowired
    private IBaseShopInfoService baseShopInfoService;

    @Autowired
    private IBaseShopItemConsultantService baseShopItemConsultantService;
    /**
     * 获取用户列表
     */
    @GetMapping("/list")
    public TableDataInfo list(SysUser user)
    {
        startPage();
        List<SysUser> list = userService.selectUserList(user);
        return getDataTable(list);
    }

    @Log(title = "用户管理", businessType = BusinessType.EXPORT)
    @PreAuthorize("@ss.hasPermi('system:user:export')")
    @GetMapping("/export")
    public AjaxResult export(SysUser user)
    {
        List<SysUser> list = userService.selectUserList(user);
        ExcelUtil<SysUser> util = new ExcelUtil<SysUser>(SysUser.class);
        return util.exportExcel(list, "用户数据");
    }

    @Log(title = "用户管理", businessType = BusinessType.IMPORT)
    @PreAuthorize("@ss.hasPermi('system:user:import')")
    @PostMapping("/importData")
    public AjaxResult importData(MultipartFile file, boolean updateSupport) throws Exception
    {
        ExcelUtil<SysUser> util = new ExcelUtil<SysUser>(SysUser.class);
        List<SysUser> userList = util.importExcel(file.getInputStream());
        LoginUser loginUser = tokenService.getLoginUser(ServletUtils.getRequest());
        String operName = loginUser.getUsername();
        String message = userService.importUser(userList, updateSupport, operName);
        return AjaxResult.success(message);
    }

    @GetMapping("/importTemplate")
    public AjaxResult importTemplate()
    {
        ExcelUtil<SysUser> util = new ExcelUtil<SysUser>(SysUser.class);
        return util.importTemplateExcel("用户数据");
    }

    /**
     * 根据用户编号获取详细信息
     */
    @GetMapping(value = { "getInfo/{userId}" ,"getInfo/"})
    public AjaxResult getInfo(@PathVariable(value = "userId", required = false) Long userId, OmsOrderInfo omsOrderInfo)
    {
        AjaxResult ajax = AjaxResult.success();
        List<SysRole> roles = roleService.selectRoleAll();
        //订单信息
        ajax.put("orders", omsOrderInfoService.selectOmsOrderInfoList(omsOrderInfo));
        ajax.put("roles", SysUser.isAdmin(userId) ? roles : roles.stream().filter(r -> !r.isAdmin()).collect(Collectors.toList()));
        ajax.put("posts", postService.selectPostAll());
        BaseUserAddress param = new BaseUserAddress();
        param.setUserId(userId);
        List<BaseUserAddress> addressList=userAddressService.selectBaseUserAddressList(param);
        ajax.put("addressInfo",addressList);
        if (StringUtils.isNotNull(userId))
        {
            ajax.put(AjaxResult.DATA_TAG, userService.selectUserById(userId));
            //查询订单信息
            OmsOrderInfo order = new OmsOrderInfo();
            order.setUserId(userId);
            List<OmsOrderInfo> omsOrderInfos = omsOrderInfoService.selectOmsOrderInfoList(order);

            OmsOrderItemInfo orderItem=new OmsOrderItemInfo();
            orderItem.setUserId(userId);
            List<OmsOrderItemInfo> orderItemList=omsOrderItemInfoService.selectOmsOrderItemInfoList(orderItem);
            //订单信息
            ajax.put("orderItemInfos", orderItemList);
            ajax.put("orderInfos", omsOrderInfos);
            ajax.put("postIds", postService.selectPostListByUserId(userId));
            ajax.put("roleIds", roleService.selectRoleListByUserId(userId));
        }
        return ajax;
    }

    /**
     * 新增用户
     */
    @Log(title = "用户管理", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@Validated @RequestBody SysUser user)
    {
        if (UserConstants.NOT_UNIQUE.equals(userService.checkUserNameUnique(user.getUserName())))
        {
            return AjaxResult.error("新增用户'" + user.getUserName() + "'失败，登录账号已存在");
        }
        else if (StringUtils.isNotEmpty(user.getPhonenumber())
                && UserConstants.NOT_UNIQUE.equals(userService.checkPhoneUnique(user)))
        {
            return AjaxResult.error("新增用户'" + user.getUserName() + "'失败，手机号码已存在");
        }
        else if (StringUtils.isNotEmpty(user.getEmail())
                && UserConstants.NOT_UNIQUE.equals(userService.checkEmailUnique(user)))
        {
            return AjaxResult.error("新增用户'" + user.getUserName() + "'失败，邮箱账号已存在");
        }
        user.setCreateBy(getUsername());
        user.setPassword(SecurityUtils.encryptPassword(user.getPassword()));
        Long deptId=SecurityUtils.getLoginUser().getUser().getDeptId();
        if(user.getDeptId()==null){
            user.setDeptId(deptId);
        }
        return toAjax(userService.insertUser(user));
    }

    @Log(title = "用户充值", businessType = BusinessType.INSERT)
    @PostMapping("/setUserRecharge")
    public AjaxResult setUserRecharge(@RequestBody SysUser user)
    {
       /* if(user.getRechargeAmount()<=0){
            return AjaxResult.error("请输入充值金额");
        }*/
        SysUser sysUser=userService.selectUserById(user.getUserId());
        if(sysUser==null){
            return AjaxResult.error("账户不存在");
        }
        String consultantFlag= userService.checkConsultantFlag(user);
        if("Y".equalsIgnoreCase(consultantFlag)){
            return AjaxResult.error("该用户是顾问，不能进行充值操作!");
        }
        user.setVipLevel(sysUser.getVipLevel());
        //判断充值账户类型
        String rechargeType = user.getRechargeType();
        double currentRecharge=user.getRechargeAmount();
        if("0".equals(rechargeType)){
            if((sysUser.getRechargeAmount()+currentRecharge)<0){
                return AjaxResult.error("金额有误，请谨慎操作!");
            }
            if((sysUser.getAccountAmount()+currentRecharge)<0){
                return AjaxResult.error("金额有误，请谨慎操作!");
            }
            //基本账户
            user.setRechargeAmount(sysUser.getRechargeAmount()+currentRecharge);
            user.setAccountAmount(sysUser.getAccountAmount()+currentRecharge);
        }else if("1".equals(rechargeType)){
            //产品账户
            //判断是否有开通产品账户
            String productAccount = sysUser.getProductAccount();
            if(!"1".equals(productAccount)){
                return AjaxResult.error("产品账户未开通不能充值");
            }
            if((sysUser.getProductBalance()+currentRecharge)<0){
                return AjaxResult.error("金额有误，请谨慎操作!");
            }
            user.setRechargeAmount(0);
            user.setProductBalance(sysUser.getProductBalance()+currentRecharge);
        }else{
            return AjaxResult.error("充值账户类型错误");
        }
        if((sysUser.getRechargeAmount()+sysUser.getIncomeAmount())!=sysUser.getAccountAmount()){
            return AjaxResult.error("账户金额错误请联系管理员！");
        }
        user.setUserName(sysUser.getUserName());
        user.setUpdateBy(getUsername());
        user.setUpdateTime(DateUtils.getNowDate());
        int result=userService.setUserRecharge(user,currentRecharge);
        return toAjax(result);
    }

    /**
     * 开通产品账户
     *
     */
    @Log(title = "开通产品账户", businessType = BusinessType.UPDATE)
    @PutMapping("/openUserProductAccount/{userId}")
    public AjaxResult openUserProductAccount(@PathVariable("userId") Long userId)
    {
        SysUser sysUser = userService.selectUserById(userId);

        String consultantFlag= userService.checkConsultantFlag(sysUser);
        if("Y".equalsIgnoreCase(consultantFlag)){
            return AjaxResult.error("该用户是顾问，不能进行该操作!");
        }

        if(StringUtils.isNull(sysUser))
        {
            return AjaxResult.error("用户不存在");
        }
        if("1".equals(sysUser.getProductAccount())){
            return AjaxResult.error("产品账户已开通，不能重复开通");
        }
        SysUser user = new SysUser();
        user.setUserId(sysUser.getUserId());
        user.setProductAccount("1");
        return toAjax( userService.updateUserInfo(user));
    }

    @Log(title = "设置技师等级", businessType = BusinessType.UPDATE)
    @PutMapping("/updateUserConsultantRank")
    public AjaxResult openUserProductAccount(@RequestBody SysUser user)
    {
        SysUser sysUser = userService.selectUserById(user.getUserId());

        String consultantFlag= userService.checkConsultantFlag(sysUser);
        if(!"Y".equalsIgnoreCase(consultantFlag)){
            return AjaxResult.error("该用户不是顾问，不能进行该操作!");
        }

        if(StringUtils.isNull(sysUser))
        {
            return AjaxResult.error("用户不存在");
        }

        SysUser setUser = new SysUser();
        setUser.setUserId(sysUser.getUserId());
        setUser.setConsultantRank(user.getConsultantRank());
        return toAjax( userService.updateUserInfo(setUser));
    }

    @Log(title = "设置客户VIP等级", businessType = BusinessType.UPDATE)
    @PutMapping("/setUserVipLevel")
    public AjaxResult setUserVipLevel(@RequestBody SysUser user)
    {
        SysUser sysUser = userService.selectUserById(user.getUserId());

        String consultantFlag= userService.checkConsultantFlag(sysUser);
        if("Y".equalsIgnoreCase(consultantFlag)){
            return AjaxResult.error("该用户是顾问，不能进行该操作!");
        }

        if(StringUtils.isNull(sysUser))
        {
            return AjaxResult.error("用户不存在");
        }
        if(user.getVipLevel()==sysUser.getVipLevel()){
            return AjaxResult.error("操作失败，VIP等级未作改变!");
        }
        SysUser setUser = new SysUser();
        setUser.setUserId(sysUser.getUserId());
        setUser.setVipLevel(user.getVipLevel());
        return toAjax( userService.updateUserInfo(setUser));
    }
    /**
     * 修改用户
     */
    @Log(title = "用户管理", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@Validated @RequestBody SysUser user)
    {
        userService.checkUserAllowed(user);
        if (StringUtils.isNotEmpty(user.getPhonenumber())
                && UserConstants.NOT_UNIQUE.equals(userService.checkPhoneUnique(user)))
        {
            return AjaxResult.error("修改用户'" + user.getUserName() + "'失败，手机号码已存在");
        }
        else if (StringUtils.isNotEmpty(user.getEmail())
                && UserConstants.NOT_UNIQUE.equals(userService.checkEmailUnique(user)))
        {
            return AjaxResult.error("修改用户'" + user.getUserName() + "'失败，邮箱账号已存在");
        }
        user.setUpdateBy(getUsername());
        return toAjax(userService.updateUser(user));
    }

    /**
     * 删除用户
     */
    @PreAuthorize("@ss.hasPermi('system:user:remove')")
    @Log(title = "用户管理", businessType = BusinessType.DELETE)
    @DeleteMapping("/{userIds}")
    public AjaxResult remove(@PathVariable Long[] userIds)
    {
        if (ArrayUtils.contains(userIds, getUserId()))
        {
            return error("当前用户不能删除");
        }
        return toAjax(userService.deleteUserByIds(userIds));
    }

    /**
     * 重置密码
     */
    @PreAuthorize("@ss.hasPermi('system:user:resetPwd')")
    @Log(title = "用户管理", businessType = BusinessType.UPDATE)
    @PutMapping("/resetPwd")
    public AjaxResult resetPwd(@RequestBody SysUser user)
    {
        userService.checkUserAllowed(user);
        user.setPassword(SecurityUtils.encryptPassword(user.getPassword()));
        user.setUpdateBy(getUsername());
        return toAjax(userService.resetPwd(user));
    }

    /**
     * 状态修改
     */
    @PreAuthorize("@ss.hasPermi('system:user:edit')")
    @Log(title = "用户管理", businessType = BusinessType.UPDATE)
    @PutMapping("/changeStatus")
    public AjaxResult changeStatus(@RequestBody SysUser user)
    {
        userService.checkUserAllowed(user);
        user.setUpdateBy(getUsername());
        return toAjax(userService.updateUserStatus(user));
    }

    /**
     * 根据用户编号获取授权角色
     */
    @PreAuthorize("@ss.hasPermi('system:user:query')")
    @GetMapping("/authRole/{userId}")
    public AjaxResult authRole(@PathVariable("userId") Long userId)
    {
        AjaxResult ajax = AjaxResult.success();
        SysUser user = userService.selectUserById(userId);
        List<SysRole> roles = roleService.selectRolesByUserId(userId);
        ajax.put("user", user);
        ajax.put("roles", SysUser.isAdmin(userId) ? roles : roles.stream().filter(r -> !r.isAdmin()).collect(Collectors.toList()));
        return ajax;
    }

    @GetMapping("/setInviteUser/{userId}")
    public AjaxResult setInviteUser(@PathVariable("userId") Long userId)
    {
        AjaxResult ajax = AjaxResult.success();
        SysUser user = userService.selectUserById(userId);
        SysUser newUser=new SysUser();
        newUser.setUserId(user.getUserId());
        if("Y".equals(user.getInviteFlag())){
            newUser.setInviteFlag("N");
        }else{
            newUser.setInviteFlag("Y");
        }
        int result=userService.updateUserInfo(newUser);
        return toAjax(result);
    }

    /**
     * 用户授权角色
     */
    @PreAuthorize("@ss.hasPermi('system:user:edit')")
    @Log(title = "用户管理", businessType = BusinessType.GRANT)
    @PutMapping("/authRole")
    public AjaxResult insertAuthRole(Long userId, Long[] roleIds)
    {
        userService.insertUserAuth(userId, roleIds);
        return success();
    }


    @GetMapping("/getUsersByRoleKey/{roleKey}")
    public AjaxResult getUsersByRoleKey(@PathVariable("roleKey") String roleKey){
        SysUser currentUser=SecurityUtils.getLoginUser().getUser();
        String shopId=currentUser.getSourceShop();
        if(currentUser.isAdmin()){
            BaseShopInfo param=new BaseShopInfo();
            param.setStatus("Y");
            List<BaseShopInfo> shops= baseShopInfoService.selectBaseShopInfoList(param);
            String allShop="";
            for(BaseShopInfo s:shops){
                if(StringUtils.isEmpty(allShop)){
                    allShop=s.getId();
                }else{
                    allShop+=","+s.getId();
                }
            }
            shopId=allShop;
        }
        if(StringUtils.isEmpty(shopId)){
            shopId="''";
        }
        List<SysUser>  list = userService.selectUserByRoleKey(roleKey,shopId);
        return AjaxResult.success(list);
    }

    @GetMapping("/getShopConsultantList")
    public AjaxResult getShopConsultantList(){
        SysUser currentUser=SecurityUtils.getLoginUser().getUser();
        String shopId=currentUser.getSourceShop();
        if(currentUser.isAdmin()){
            BaseShopInfo param=new BaseShopInfo();
            param.setStatus("Y");
            List<BaseShopInfo> shops= baseShopInfoService.selectBaseShopInfoList(param);
            String allShop="";
            for(BaseShopInfo s:shops){
                if(StringUtils.isEmpty(allShop)){
                    allShop=s.getId();
                }else{
                    allShop+=","+s.getId();
                }
            }
            shopId=allShop;
        }
        if(StringUtils.isEmpty(shopId)){
            shopId="''";
        }
        BaseShopItemConsultant param=new BaseShopItemConsultant();
        param.setShopId(shopId);
        List<BaseShopItemConsultant> consultantList=baseShopItemConsultantService.selectBaseShopItemConsultantList(param);
        String userIds="";
        List<String> idList=new ArrayList<String>();
        consultantList.stream().forEach(cons->{
            String consultantId=cons.getConsultantId();
            if(StringUtils.isNotEmpty(consultantId)){
                String []ids=consultantId.split(",");
                for(String id:ids){
                    if(!idList.contains(id)){
                        idList.add(id);
                    }
                }
            }
        });
        for(String id:idList){
            if(StringUtils.isEmpty(userIds)){
                userIds=id;
            }else{
                userIds=userIds+","+id;
            }
        }
        if(StringUtils.isEmpty(userIds)){
            userIds="''";
        }
        List<SysUser>  list = userService.selectUserBySomeIds(userIds);
        return AjaxResult.success(list);
    }
    @GetMapping({"/getConsultantUserListByShopId/{shopId}/{itemId}","/getConsultantUserListByShopId/{shopId}","/getConsultantUserList"})
    public AjaxResult getConsultantUserListByShopId(@PathVariable(value = "shopId" ,required = false) String shopId,@PathVariable(value = "itemId",required = false) String itemId){
        List<SysUser>  list = userService.selectConsultantUserListByShopId(shopId,itemId);
        return AjaxResult.success(list);
    }

}
