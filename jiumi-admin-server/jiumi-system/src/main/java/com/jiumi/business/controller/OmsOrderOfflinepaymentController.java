package com.jiumi.business.controller;


import java.util.List;

import com.jiumi.business.service.IOmsOrderOfflinepaymentService;
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
import com.jiumi.business.domain.OmsOrderInfo;
import com.jiumi.common.core.page.TableDataInfo;

/**
 * 线上支付Controller
 *
 * @author jiumi
 * @date 2021-11-25
 */
@ComponentScan({ "com.ruoyi.*", "com.test.*" })
@RestController
@RequestMapping("/business/offlinepayment")
public class OmsOrderOfflinepaymentController extends BaseController {
    @Autowired
    private IOmsOrderOfflinepaymentService omsOrderOfflinepaymentService;

    /**
     * 查询订单列表
     */
    @PreAuthorize("@ss.hasPermi('business:offlinepayment:list')")
    @GetMapping("/list")
    public TableDataInfo list(OmsOrderInfo omsOrderInfo)
    {
        startPage();
        List<OmsOrderInfo> list = omsOrderOfflinepaymentService.selectOfflinpaymentList(omsOrderInfo);
        return getDataTable(list);
    }

    /**
     * 获取订单详细信息
     */
    @PreAuthorize("@ss.hasPermi('business:offlinepayment:query')")
    @GetMapping(value = "/{id}")
    public AjaxResult getInfo(@PathVariable("id") String id)
    {
        return AjaxResult.success(omsOrderOfflinepaymentService.selectOfflinpaymentById(id));
    }
    /**
     * 新增订单
     */
    @PreAuthorize("@ss.hasPermi('business:offlinepayment:add')")
    @Log(title = "订单", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody OmsOrderInfo omsOrderInfo)
    {
        return toAjax(omsOrderOfflinepaymentService.insertOfflinpayment(omsOrderInfo));
    }

    /**
     * 修改订单
     */
    @PreAuthorize("@ss.hasPermi('business:offlinepayment:edit')")
    @Log(title = "订单", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody OmsOrderInfo omsOrderInfo)
    {
        return toAjax(omsOrderOfflinepaymentService.updateOfflinpayment(omsOrderInfo));
    }

    /**
     * 删除订单
     */
    @PreAuthorize("@ss.hasPermi('business:offlinepayment:remove')")
    @Log(title = "订单", businessType = BusinessType.DELETE)
    @DeleteMapping("/{ids}")
    public AjaxResult remove(@PathVariable String[] ids)
    {
        return toAjax(omsOrderOfflinepaymentService.deleteOfflinpaymentByIds(ids));
    }
}
