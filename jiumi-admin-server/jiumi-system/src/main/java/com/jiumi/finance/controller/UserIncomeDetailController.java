package com.jiumi.finance.controller;

import java.util.List;

import com.jiumi.common.core.domain.entity.SysUser;
import com.jiumi.common.utils.SecurityUtils;
import com.jiumi.common.utils.StringUtils;
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
import com.jiumi.finance.domain.UserIncomeDetail;
import com.jiumi.finance.service.IUserIncomeDetailService;
import com.jiumi.common.utils.poi.ExcelUtil;
import com.jiumi.common.core.page.TableDataInfo;

/**
 * 用户入账记录Controller
 *
 * @author jiumi
 * @date 2021-11-26
 */
@RestController
@RequestMapping("/finance/imcomeDetail")
public class UserIncomeDetailController extends BaseController
{
    @Autowired
    private IUserIncomeDetailService userIncomeDetailService;

    /**
     * 查询用户入账记录列表
     */
    @PreAuthorize("@ss.hasPermi('finance:imcomeDetail:list')")
    @GetMapping("/list")
    public TableDataInfo list(UserIncomeDetail userIncomeDetail)
    {
        SysUser sysUser= SecurityUtils.getLoginUser().getUser();
        if(!sysUser.isAdmin()){
            String shopId= sysUser.getSourceShop();
            if(StringUtils.isEmpty(shopId)){
                shopId="''";
            }
            userIncomeDetail.setSourceShop(shopId);
        }
        startPage();
        List<UserIncomeDetail> list = userIncomeDetailService.selectUserIncomeDetailList(userIncomeDetail);
        return getDataTable(list);
    }

    /**
     * 导出用户入账记录列表
     */
    @PreAuthorize("@ss.hasPermi('finance:imcomeDetail:export')")
    @Log(title = "用户入账记录", businessType = BusinessType.EXPORT)
    @GetMapping("/export")
    public AjaxResult export(UserIncomeDetail userIncomeDetail)
    {
        SysUser sysUser= SecurityUtils.getLoginUser().getUser();
        if(!sysUser.isAdmin()){
            String shopId= sysUser.getSourceShop();
            if(StringUtils.isEmpty(shopId)){
                shopId="''";
            }
            userIncomeDetail.setSourceShop(shopId);
        }
        List<UserIncomeDetail> list = userIncomeDetailService.selectUserIncomeDetailList(userIncomeDetail);
        ExcelUtil<UserIncomeDetail> util = new ExcelUtil<UserIncomeDetail>(UserIncomeDetail.class);
        return util.exportExcel(list, "用户入账记录数据");
    }

    /**
     * 获取用户入账记录详细信息
     */
    @PreAuthorize("@ss.hasPermi('finance:imcomeDetail:query')")
    @GetMapping(value = "/{id}")
    public AjaxResult getInfo(@PathVariable("id") Long id)
    {
        return AjaxResult.success(userIncomeDetailService.selectUserIncomeDetailById(id));
    }

    /**
     * 新增用户入账记录
     */
    @PreAuthorize("@ss.hasPermi('finance:imcomeDetail:add')")
    @Log(title = "用户入账记录", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody UserIncomeDetail userIncomeDetail)
    {
        return toAjax(userIncomeDetailService.insertUserIncomeDetail(userIncomeDetail));
    }

    /**
     * 修改用户入账记录
     */
    @PreAuthorize("@ss.hasPermi('finance:imcomeDetail:edit')")
    @Log(title = "用户入账记录", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody UserIncomeDetail userIncomeDetail)
    {
        return toAjax(userIncomeDetailService.updateUserIncomeDetail(userIncomeDetail));
    }

    /**
     * 删除用户入账记录
     */
    @PreAuthorize("@ss.hasPermi('finance:imcomeDetail:remove')")
    @Log(title = "用户入账记录", businessType = BusinessType.DELETE)
	@DeleteMapping("/{ids}")
    public AjaxResult remove(@PathVariable Long[] ids)
    {
        return toAjax(userIncomeDetailService.deleteUserIncomeDetailByIds(ids));
    }
}
