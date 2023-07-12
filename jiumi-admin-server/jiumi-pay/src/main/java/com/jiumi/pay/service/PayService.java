package com.jiumi.pay.service;

import com.jiumi.pay.domain.PayNotifyDO;

import java.util.Map;

/**
 *@author xudong.liu
 * @data 2020/8/7
 */
public interface PayService {
    /**
     * 处理支付回调
     * @param payNotifyDO 微信支付宝公用支付回调实体
     * @return true 成功 false 失败
     */
    Boolean handlerNotify(PayNotifyDO payNotifyDO);

    /**
     * 订单查询
     * @param outTradeNo 订单号
     * @param payWay 支付方式 1支付宝 2微信
     * @return
     */
    Map<String, Object> tradeQuery(String outTradeNo,Integer payWay);
}
