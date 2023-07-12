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
import com.jiumi.finance.domain.UserRechargeDetail;
import com.jiumi.finance.service.IUserRechargeDetailService;
import com.jiumi.common.utils.poi.ExcelUtil;
import com.jiumi.common.core.page.TableDataInfo;

/**
 * 用户充值记录Controller
 *
 * @author jiumi
 * @date 2021-12-23
 */
@RestController
@RequestMapping("/finance/recharge")
public class UserRechargeDetailController extends BaseController
{
    @Autowired
    private IUserRechargeDetailService userRechargeDetailService;

    /**
     * 查询用户充值记录列表
     */
    @PreAuthorize("@ss.hasPermi('finance:recharge:list')")
    @GetMapping("/list")
    public TableDataInfo list(UserRechargeDetail userRechargeDetail)
    {
        startPage();
        List<UserRechargeDetail> list = userRechargeDetailService.selectUserRechargeDetailList(userRechargeDetail);
        return getDataTable(list);
    }

    /**
     * 导出用户充值记录列表
     */
    @PreAuthorize("@ss.hasPermi('finance:recharge:export')")
    @Log(title = "用户充值记录", businessType = BusinessType.EXPORT)
    @GetMapping("/export")
    public AjaxResult export(UserRechargeDetail userRechargeDetail)
    {
        List<UserRechargeDetail> list = userRechargeDetailService.selectUserRechargeDetailList(userRechargeDetail);
        ExcelUtil<UserRechargeDetail> util = new ExcelUtil<UserRechargeDetail>(UserRechargeDetail.class);
        return util.exportExcel(list, "用户充值记录数据");
    }

    /**
     * 获取用户充值记录详细信息
     */
    @PreAuthorize("@ss.hasPermi('finance:recharge:query')")
    @GetMapping(value = "/{id}")
    public AjaxResult getInfo(@PathVariable("id") String id)
    {
        return AjaxResult.success(userRechargeDetailService.selectUserRechargeDetailById(id));
    }

    /**
     * 新增用户充值记录
     */
    @PreAuthorize("@ss.hasPermi('finance:recharge:add')")
    @Log(title = "用户充值记录", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody UserRechargeDetail userRechargeDetail)
    {
        return toAjax(userRechargeDetailService.insertUserRechargeDetail(userRechargeDetail));
    }

    /**
     * 修改用户充值记录
     */
    @PreAuthorize("@ss.hasPermi('finance:recharge:edit')")
    @Log(title = "用户充值记录", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody UserRechargeDetail userRechargeDetail)
    {
        return toAjax(userRechargeDetailService.updateUserRechargeDetail(userRechargeDetail));
    }

    /**
     * 删除用户充值记录
     */
    @PreAuthorize("@ss.hasPermi('finance:recharge:remove')")
    @Log(title = "用户充值记录", businessType = BusinessType.DELETE)
	@DeleteMapping("/{ids}")
    public AjaxResult remove(@PathVariable String[] ids)
    {
        return toAjax(userRechargeDetailService.deleteUserRechargeDetailByIds(ids));
    }
}
