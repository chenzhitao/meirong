package com.jiumi.business.controller;



import com.jiumi.business.domain.OmsOrderStatistics;
import com.jiumi.business.service.IOmsOrderStatisticsService;
import com.jiumi.common.core.controller.BaseController;
import com.jiumi.common.core.domain.AjaxResult;
import com.jiumi.common.utils.StringUtils;
import com.jiumi.shop.domain.BaseShopInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author zl
 */
@RestController
@RequestMapping("/business/statistics")
public class OmsOrderStatisticsController extends BaseController
{
    @Autowired
    private IOmsOrderStatisticsService omsOrderStatisticsService;

    @GetMapping("/getOrderStatistics")
    public AjaxResult getOrderStatistics(OmsOrderStatistics omsOrderStatistics)
    {
        List<OmsOrderStatistics> omsOrderStatistics1 = omsOrderStatisticsService.selectLsit(omsOrderStatistics);
        omsOrderStatistics1.stream().forEach(order->{
            if(StringUtils.isEmpty(order.getShopId())){
                order.setShopId("0000");
                order.setShopName("无归属店铺");
            }
        });
        return AjaxResult.success(omsOrderStatistics1);
    }
}
