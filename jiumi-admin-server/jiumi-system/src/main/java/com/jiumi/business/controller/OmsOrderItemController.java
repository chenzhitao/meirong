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
import com.jiumi.business.domain.OmsOrderItem;
import com.jiumi.business.service.IOmsOrderItemService;
import com.jiumi.common.utils.poi.ExcelUtil;
import com.jiumi.common.core.page.TableDataInfo;

/**
 * 订单项Controller
 *
 * @author jiumi
 * @date 2021-11-25
 */
@RestController
@RequestMapping("/business/orderItem")
public class OmsOrderItemController extends BaseController
{
    @Autowired
    private IOmsOrderItemService omsOrderItemService;

    /**
     * 查询订单项列表
     */
    @PreAuthorize("@ss.hasPermi('business:orderItem:list')")
    @GetMapping("/list")
    public TableDataInfo list(OmsOrderItem omsOrderItem)
    {
        startPage();
        List<OmsOrderItem> list = omsOrderItemService.selectOmsOrderItemList(omsOrderItem);
        return getDataTable(list);
    }

    /**
     * 导出订单项列表
     */
    @PreAuthorize("@ss.hasPermi('business:orderItem:export')")
    @Log(title = "订单项", businessType = BusinessType.EXPORT)
    @GetMapping("/export")
    public AjaxResult export(OmsOrderItem omsOrderItem)
    {
        List<OmsOrderItem> list = omsOrderItemService.selectOmsOrderItemList(omsOrderItem);
        ExcelUtil<OmsOrderItem> util = new ExcelUtil<OmsOrderItem>(OmsOrderItem.class);
        return util.exportExcel(list, "订单项数据");
    }

    /**
     * 获取订单项详细信息
     */
    @PreAuthorize("@ss.hasPermi('business:orderItem:query')")
    @GetMapping(value = "/{id}")
    public AjaxResult getInfo(@PathVariable("id") String id)
    {
        return AjaxResult.success(omsOrderItemService.selectOmsOrderItemById(id));
    }

    /**
     * 新增订单项
     */
    @PreAuthorize("@ss.hasPermi('business:orderItem:add')")
    @Log(title = "订单项", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody OmsOrderItem omsOrderItem)
    {
        return toAjax(omsOrderItemService.insertOmsOrderItem(omsOrderItem));
    }

    /**
     * 修改订单项
     */
    @PreAuthorize("@ss.hasPermi('business:orderItem:edit')")
    @Log(title = "订单项", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody OmsOrderItem omsOrderItem)
    {
        return toAjax(omsOrderItemService.updateOmsOrderItem(omsOrderItem));
    }

    /**
     * 删除订单项
     */
    @PreAuthorize("@ss.hasPermi('business:orderItem:remove')")
    @Log(title = "订单项", businessType = BusinessType.DELETE)
	@DeleteMapping("/{ids}")
    public AjaxResult remove(@PathVariable String[] ids)
    {
        return toAjax(omsOrderItemService.deleteOmsOrderItemByIds(ids));
    }
}
