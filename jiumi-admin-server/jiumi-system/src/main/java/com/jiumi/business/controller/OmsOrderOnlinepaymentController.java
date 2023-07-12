package com.jiumi.business.controller;


import com.jiumi.business.domain.OmsOrderInfo;
import com.jiumi.business.service.IOmsOrderOfflinepaymentService;
import com.jiumi.business.service.IOmsOrderOnlinepaymentService;
import com.jiumi.common.annotation.Log;
import com.jiumi.common.core.controller.BaseController;
import com.jiumi.common.core.domain.AjaxResult;
import com.jiumi.common.core.page.TableDataInfo;
import com.jiumi.common.enums.BusinessType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * 线下消费Controller
 *
 * @author jiumi
 * @date 2021-11-25
 */
@RestController
@RequestMapping("/business/onlinepayment")
public class OmsOrderOnlinepaymentController extends BaseController {
    @Autowired
    private IOmsOrderOnlinepaymentService omsOrderOnlinepaymentService;

    /**
     * 查询订单列表
     */
    @PreAuthorize("@ss.hasPermi('business:onlinepayment:list')")
    @GetMapping("/list")
    public TableDataInfo list(OmsOrderInfo omsOrderInfo)
    {
        startPage();
        List<OmsOrderInfo> list = omsOrderOnlinepaymentService.selectOnlinpaymentList(omsOrderInfo);
        return getDataTable(list);
    }

    /**
     * 获取订单详细信息
     */
    @PreAuthorize("@ss.hasPermi('business:onlinepayment:query')")
    @GetMapping(value = "/{id}")
    public AjaxResult getInfo(@PathVariable("id") String id)
    {
        return AjaxResult.success(omsOrderOnlinepaymentService.selectOnlinpaymentById(id));
    }




}
