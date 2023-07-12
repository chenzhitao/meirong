package com.jiumi.finance.controller;

import java.util.List;

import com.jiumi.common.core.domain.entity.SysUser;
import com.jiumi.common.utils.DateUtils;
import com.jiumi.common.utils.SecurityUtils;
import com.jiumi.system.service.ISysUserService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.jiumi.common.annotation.Log;
import com.jiumi.common.core.controller.BaseController;
import com.jiumi.common.core.domain.AjaxResult;
import com.jiumi.common.enums.BusinessType;
import com.jiumi.finance.domain.UserWithdrawDetail;
import com.jiumi.finance.service.IUserWithdrawDetailService;
import com.jiumi.common.utils.poi.ExcelUtil;
import com.jiumi.common.core.page.TableDataInfo;

/**
 * 用户提现记录Controller
 *
 * @author jiumi
 * @date 2021-11-26
 */
@RestController
@RequestMapping("/finance/withdraw")
public class UserWithdrawDetailController extends BaseController
{
    @Autowired
    private IUserWithdrawDetailService userWithdrawDetailService;

    @Autowired
    private ISysUserService sysUserService;

    /**
     * 查询用户提现记录列表
     */
    @PreAuthorize("@ss.hasPermi('finance:withdraw:list')")
    @GetMapping("/list")
    public TableDataInfo list(UserWithdrawDetail userWithdrawDetail)
    {
        startPage();
        List<UserWithdrawDetail> list = userWithdrawDetailService.selectUserWithdrawDetailList(userWithdrawDetail);
        return getDataTable(list);
    }

    /**
     * 导出用户提现记录列表
     */
    @PreAuthorize("@ss.hasPermi('finance:withdraw:export')")
    @Log(title = "用户提现记录", businessType = BusinessType.EXPORT)
    @GetMapping("/export")
    public AjaxResult export(UserWithdrawDetail userWithdrawDetail)
    {
        List<UserWithdrawDetail> list = userWithdrawDetailService.selectUserWithdrawDetailList(userWithdrawDetail);
        ExcelUtil<UserWithdrawDetail> util = new ExcelUtil<UserWithdrawDetail>(UserWithdrawDetail.class);
        return util.exportExcel(list, "用户提现记录数据");
    }

    /**
     * 获取用户提现记录详细信息
     */
    @PreAuthorize("@ss.hasPermi('finance:withdraw:query')")
    @GetMapping(value = "/{id}")
    public AjaxResult getInfo(@PathVariable("id") Long id)
    {
        return AjaxResult.success(userWithdrawDetailService.selectUserWithdrawDetailById(id));
    }

    @GetMapping(value = "/paymentWithdrawAmount/{id}")
    public AjaxResult paymentWithdrawAmount(@PathVariable("id") Long id)
    {
        UserWithdrawDetail detail= userWithdrawDetailService.selectUserWithdrawDetailById(id);
        if("02".equals(detail.getApplyStatus())){
            SysUser currentUser = sysUserService.selectUserById(detail.getUserId());
            if(currentUser.getFreezeAmount()>=detail.getWithdrawAmount()){
                userWithdrawDetailService.paymentWithdrawAmount(currentUser,detail);
            }else{
                return AjaxResult.error("该用户金额错误，请联系管理员!");
            }
            return AjaxResult.success("操作成功!");
        }else{
            return AjaxResult.error("状态错误");
        }
    }

    /**
     * 新增用户提现记录
     */
    @PreAuthorize("@ss.hasPermi('finance:withdraw:add')")
    @Log(title = "用户提现记录", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody UserWithdrawDetail userWithdrawDetail)
    {
        return toAjax(userWithdrawDetailService.insertUserWithdrawDetail(userWithdrawDetail));
    }

    /**
     * 修改用户提现记录
     */
    @PreAuthorize("@ss.hasPermi('finance:withdraw:edit')")
    @Log(title = "用户提现记录", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody UserWithdrawDetail userWithdrawDetail)
    {
        return userWithdrawDetailService.updateUserWithdrawDetail(userWithdrawDetail);
    }

    /**
     * 删除用户提现记录
     */
    @PreAuthorize("@ss.hasPermi('finance:withdraw:remove')")
    @Log(title = "用户提现记录", businessType = BusinessType.DELETE)
	@DeleteMapping("/{ids}")
    public AjaxResult remove(@PathVariable Long[] ids)
    {
        return toAjax(userWithdrawDetailService.deleteUserWithdrawDetailByIds(ids));
    }
}
