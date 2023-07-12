package com.jiumi.finance.controller;

import java.util.List;
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
import com.jiumi.finance.domain.UserInviteDetail;
import com.jiumi.finance.service.IUserInviteDetailService;
import com.jiumi.common.utils.poi.ExcelUtil;
import com.jiumi.common.core.page.TableDataInfo;

/**
 * 用户邀请Controller
 *
 * @author jiumi
 * @date 2021-11-26
 */
@RestController
@RequestMapping("/finance/inviteDetail")
public class UserInviteDetailController extends BaseController
{
    @Autowired
    private IUserInviteDetailService userInviteDetailService;

    /**
     * 查询用户邀请列表
     */
    @PreAuthorize("@ss.hasPermi('finance:inviteDetail:list')")
    @GetMapping("/list")
    public TableDataInfo list(UserInviteDetail userInviteDetail)
    {
        startPage();
        List<UserInviteDetail> list = userInviteDetailService.selectUserInviteDetailList(userInviteDetail);
        return getDataTable(list);
    }

    /**
     * 导出用户邀请列表
     */
    @PreAuthorize("@ss.hasPermi('finance:inviteDetail:export')")
    @Log(title = "用户邀请", businessType = BusinessType.EXPORT)
    @GetMapping("/export")
    public AjaxResult export(UserInviteDetail userInviteDetail)
    {
        List<UserInviteDetail> list = userInviteDetailService.selectUserInviteDetailList(userInviteDetail);
        ExcelUtil<UserInviteDetail> util = new ExcelUtil<UserInviteDetail>(UserInviteDetail.class);
        return util.exportExcel(list, "用户邀请数据");
    }

    /**
     * 获取用户邀请详细信息
     */
    @PreAuthorize("@ss.hasPermi('finance:inviteDetail:query')")
    @GetMapping(value = "/{id}")
    public AjaxResult getInfo(@PathVariable("id") Long id)
    {
        return AjaxResult.success(userInviteDetailService.selectUserInviteDetailById(id));
    }

    /**
     * 新增用户邀请
     */
    @PreAuthorize("@ss.hasPermi('finance:inviteDetail:add')")
    @Log(title = "用户邀请", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody UserInviteDetail userInviteDetail)
    {
        return toAjax(userInviteDetailService.insertUserInviteDetail(userInviteDetail));
    }

    /**
     * 修改用户邀请
     */
    @PreAuthorize("@ss.hasPermi('finance:inviteDetail:edit')")
    @Log(title = "用户邀请", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody UserInviteDetail userInviteDetail)
    {
        return toAjax(userInviteDetailService.updateUserInviteDetail(userInviteDetail));
    }

    /**
     * 删除用户邀请
     */
    @PreAuthorize("@ss.hasPermi('finance:inviteDetail:remove')")
    @Log(title = "用户邀请", businessType = BusinessType.DELETE)
	@DeleteMapping("/{ids}")
    public AjaxResult remove(@PathVariable Long[] ids)
    {
        return toAjax(userInviteDetailService.deleteUserInviteDetailByIds(ids));
    }
}
