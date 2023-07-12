package com.jiumi.business.service;

import com.jiumi.business.domain.OmsOrderInfo;

import java.util.List;

public interface IOmsOrderOnlinepaymentService {

    /**
     * 查询订单
     *
     * @param id 订单主键
     * @return 订单
     */
    public OmsOrderInfo selectOnlinpaymentById(String id);

    /**
     * 查询订单列表
     *
     * @param omsOrderInfo 订单
     * @return 订单集合
     */
    public List<OmsOrderInfo> selectOnlinpaymentList(OmsOrderInfo omsOrderInfo);


}
