package com.jiumi.business.controller;

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
import com.jiumi.business.domain.OmsOrderItemDetail;
import com.jiumi.business.service.IOmsOrderItemDetailService;
import com.jiumi.common.utils.poi.ExcelUtil;
import com.jiumi.common.core.page.TableDataInfo;

/**
 * 项目订单详情Controller
 *
 * @author jiumi
 * @date 2022-02-07
 */
@RestController
@RequestMapping("/business/itemorderdetail")
public class OmsOrderItemDetailController extends BaseController
{
    @Autowired
    private IOmsOrderItemDetailService omsOrderItemDetailService;

    /**
     * 查询项目订单详情列表
     */
    @PreAuthorize("@ss.hasPermi('business:itemorderdetail:list')")
    @GetMapping("/list")
    public TableDataInfo list(OmsOrderItemDetail omsOrderItemDetail)
    {
        startPage();
        List<OmsOrderItemDetail> list = omsOrderItemDetailService.selectOmsOrderItemDetailList(omsOrderItemDetail);
        return getDataTable(list);
    }

    /**
     * 导出项目订单详情列表
     */
    @PreAuthorize("@ss.hasPermi('business:itemorderdetail:export')")
    @Log(title = "项目订单详情", businessType = BusinessType.EXPORT)
    @GetMapping("/export")
    public AjaxResult export(OmsOrderItemDetail omsOrderItemDetail)
    {
        List<OmsOrderItemDetail> list = omsOrderItemDetailService.selectOmsOrderItemDetailList(omsOrderItemDetail);
        ExcelUtil<OmsOrderItemDetail> util = new ExcelUtil<OmsOrderItemDetail>(OmsOrderItemDetail.class);
        return util.exportExcel(list, "项目订单详情数据");
    }

    /**
     * 获取项目订单详情详细信息
     */
    @PreAuthorize("@ss.hasPermi('business:itemorderdetail:query')")
    @GetMapping(value = "/{id}")
    public AjaxResult getInfo(@PathVariable("id") Long id)
    {
        return AjaxResult.success(omsOrderItemDetailService.selectOmsOrderItemDetailById(id));
    }

    /**
     * 新增项目订单详情
     */
    @PreAuthorize("@ss.hasPermi('business:itemorderdetail:add')")
    @Log(title = "项目订单详情", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody OmsOrderItemDetail omsOrderItemDetail)
    {
        return toAjax(omsOrderItemDetailService.insertOmsOrderItemDetail(omsOrderItemDetail));
    }

    /**
     * 修改项目订单详情
     */
    @PreAuthorize("@ss.hasPermi('business:itemorderdetail:edit')")
    @Log(title = "项目订单详情", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody OmsOrderItemDetail omsOrderItemDetail)
    {
        return toAjax(omsOrderItemDetailService.updateOmsOrderItemDetail(omsOrderItemDetail));
    }

    /**
     * 删除项目订单详情
     */
    @PreAuthorize("@ss.hasPermi('business:itemorderdetail:remove')")
    @Log(title = "项目订单详情", businessType = BusinessType.DELETE)
	@DeleteMapping("/{ids}")
    public AjaxResult remove(@PathVariable Long[] ids)
    {
        return toAjax(omsOrderItemDetailService.deleteOmsOrderItemDetailByIds(ids));
    }
}
