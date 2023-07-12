package com.jiumi.business.controller;

import java.util.List;

import org.springframework.context.annotation.ComponentScan;
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
import com.jiumi.business.domain.OmsOrderCommissionRecord;
import com.jiumi.business.service.IOmsOrderCommissionRecordService;
import com.jiumi.common.utils.poi.ExcelUtil;
import com.jiumi.common.core.page.TableDataInfo;

/**
 * 返佣记录Controller
 *
 * @author jiumi
 * @date 2021-12-22
 */
@ComponentScan({ "com.ruoyi.*", "com.test.*" })
@RestController
@RequestMapping("/business/record")
public class OmsOrderCommissionRecordController extends BaseController
{
    @Autowired
    private IOmsOrderCommissionRecordService omsOrderCommissionRecordService;

    /**
     * 查询返佣记录列表
     */
    @PreAuthorize("@ss.hasPermi('business:record:list')")
    @GetMapping("/list")
    public TableDataInfo list(OmsOrderCommissionRecord omsOrderCommissionRecord)
    {
        startPage();
        List<OmsOrderCommissionRecord> list = omsOrderCommissionRecordService.selectOmsOrderCommissionRecordList(omsOrderCommissionRecord);
        return getDataTable(list);
    }

    /**
     * 导出返佣记录列表
     */
    @PreAuthorize("@ss.hasPermi('business:record:export')")
    @Log(title = "返佣记录", businessType = BusinessType.EXPORT)
    @GetMapping("/export")
    public AjaxResult export(OmsOrderCommissionRecord omsOrderCommissionRecord)
    {
        List<OmsOrderCommissionRecord> list = omsOrderCommissionRecordService.selectOmsOrderCommissionRecordList(omsOrderCommissionRecord);
        ExcelUtil<OmsOrderCommissionRecord> util = new ExcelUtil<OmsOrderCommissionRecord>(OmsOrderCommissionRecord.class);
        return util.exportExcel(list, "返佣记录数据");
    }

    /**
     * 获取返佣记录详细信息
     */
    @PreAuthorize("@ss.hasPermi('business:record:query')")
    @GetMapping(value = "/{id}")
    public AjaxResult getInfo(@PathVariable("id") String id)
    {
        return AjaxResult.success(omsOrderCommissionRecordService.selectOmsOrderCommissionRecordById(id));
    }

    /**
     * 新增返佣记录
     */
    @PreAuthorize("@ss.hasPermi('business:record:add')")
    @Log(title = "返佣记录", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody OmsOrderCommissionRecord omsOrderCommissionRecord)
    {
        return toAjax(omsOrderCommissionRecordService.insertOmsOrderCommissionRecord(omsOrderCommissionRecord));
    }

    /**
     * 修改返佣记录
     */
    @PreAuthorize("@ss.hasPermi('business:record:edit')")
    @Log(title = "返佣记录", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody OmsOrderCommissionRecord omsOrderCommissionRecord)
    {
        return toAjax(omsOrderCommissionRecordService.updateOmsOrderCommissionRecord(omsOrderCommissionRecord));
    }

    /**
     * 删除返佣记录
     */
    @PreAuthorize("@ss.hasPermi('business:record:remove')")
    @Log(title = "返佣记录", businessType = BusinessType.DELETE)
	@DeleteMapping("/{ids}")
    public AjaxResult remove(@PathVariable String[] ids)
    {
        return toAjax(omsOrderCommissionRecordService.deleteOmsOrderCommissionRecordByIds(ids));
    }
}
