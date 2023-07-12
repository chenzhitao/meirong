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
import com.jiumi.finance.domain.UserPerformanceCalculate;
import com.jiumi.finance.service.IUserPerformanceCalculateService;
import com.jiumi.common.utils.poi.ExcelUtil;
import com.jiumi.common.core.page.TableDataInfo;

/**
 * 技师业绩核算Controller
 *
 * @author jiumi
 * @date 2022-02-11
 */
@RestController
@RequestMapping("/finance/usercalculate")
public class UserPerformanceCalculateController extends BaseController
{
    @Autowired
    private IUserPerformanceCalculateService userPerformanceCalculateService;

    /**
     * 查询技师业绩核算列表
     */
    @GetMapping("/list")
    public TableDataInfo list(UserPerformanceCalculate userPerformanceCalculate)
    {
        startPage();
        List<UserPerformanceCalculate> list = userPerformanceCalculateService.selectUserPerformanceCalculateList(userPerformanceCalculate);
        return getDataTable(list);
    }

    /**
     * 导出技师业绩核算列表
     */
    @Log(title = "技师业绩核算", businessType = BusinessType.EXPORT)
    @GetMapping("/export")
    public AjaxResult export(UserPerformanceCalculate userPerformanceCalculate)
    {
        List<UserPerformanceCalculate> list = userPerformanceCalculateService.selectUserPerformanceCalculateList(userPerformanceCalculate);
        ExcelUtil<UserPerformanceCalculate> util = new ExcelUtil<UserPerformanceCalculate>(UserPerformanceCalculate.class);
        return util.exportExcel(list, "技师业绩核算数据");
    }

    /**
     * 获取技师业绩核算详细信息
     */
    @PreAuthorize("@ss.hasPermi('finance:usercalculate:query')")
    @GetMapping(value = "/{id}")
    public AjaxResult getInfo(@PathVariable("id") Long id)
    {
        return AjaxResult.success(userPerformanceCalculateService.selectUserPerformanceCalculateById(id));
    }

    /**
     * 新增技师业绩核算
     */
    @PreAuthorize("@ss.hasPermi('finance:usercalculate:add')")
    @Log(title = "技师业绩核算", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody UserPerformanceCalculate userPerformanceCalculate)
    {
        return toAjax(userPerformanceCalculateService.insertUserPerformanceCalculate(userPerformanceCalculate));
    }

    /**
     * 修改技师业绩核算
     */
    @PreAuthorize("@ss.hasPermi('finance:usercalculate:edit')")
    @Log(title = "技师业绩核算", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody UserPerformanceCalculate userPerformanceCalculate)
    {
        return toAjax(userPerformanceCalculateService.updateUserPerformanceCalculate(userPerformanceCalculate));
    }

    /**
     * 删除技师业绩核算
     */
    @PreAuthorize("@ss.hasPermi('finance:usercalculate:remove')")
    @Log(title = "技师业绩核算", businessType = BusinessType.DELETE)
	@DeleteMapping("/{ids}")
    public AjaxResult remove(@PathVariable Long[] ids)
    {
        return toAjax(userPerformanceCalculateService.deleteUserPerformanceCalculateByIds(ids));
    }
}
