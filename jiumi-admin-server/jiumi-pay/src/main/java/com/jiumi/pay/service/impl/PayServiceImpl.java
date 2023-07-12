package com.jiumi.pay.service.impl;

import com.alipay.api.AlipayApiException;
import com.alipay.api.domain.AlipayTradeQueryModel;
import com.alipay.api.response.AlipayTradeQueryResponse;
import com.google.common.collect.Maps;
import com.jiumi.common.utils.DateUtils;
import com.jiumi.common.utils.StringUtils;
import com.jiumi.pay.alipay.AliPayApi;
import com.jiumi.pay.domain.AliPayResultDO;
import com.jiumi.pay.domain.PayNotifyDO;
import com.jiumi.pay.domain.WxPayResultDO;
import com.jiumi.pay.service.PayService;
import com.jiumi.pay.wxpay.WxPayApi;
import com.jiumi.pay.wxpay.WxPayUtil;
import com.jiumi.pay.wxpay.config.WxPayApiConfig;
import com.jiumi.pay.wxpay.model.UnifiedOrderModel;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;


import static com.jiumi.pay.domain.util.SignType.HMACSHA256;
/**
 *@author xudong.liu
 * @data 2020/12/20
 */
@Service
@Transactional(rollbackFor = Exception.class)
@Slf4j
public class PayServiceImpl implements PayService {


    @Autowired
    WxPayApiConfig wxPayApiConfig;
    /**
     * 处理支付回调
     * @param payNotifyDO 微信支付宝公用支付回调实体
     * @return true 成功 false 失败
     */
    @Override
    public Boolean handlerNotify(PayNotifyDO payNotifyDO) {
        //这里进行业务处理
        return false;
    }

    /**
     * 订单查询
     * @param outTradeNo 订单号
     * @param payWay 支付方式 1支付宝 2微信
     * @return
     */
    @Override
    @Transactional(rollbackFor = Exception.class)
    public Map<String, Object> tradeQuery(String outTradeNo, Integer payWay) {
        if (1 == payWay){
            return tradeQueryAliPay(outTradeNo);
        }else {
            return tradeQueryWxPay(outTradeNo);
        }
    }

    private Map<String, Object> tradeQueryWxPay(String outTradeNo) {
        HashMap<String, Object> resultMap = Maps.newHashMap();
        if(StringUtils.isBlank(outTradeNo)){
            resultMap.put("tradeCode",5);
            resultMap.put("message","订单号不能为空");
            return resultMap;
        }
        /*OrderDO orderByOrderNumber = orderService.getOrderByOrderNumber(outTradeNo);

        if (orderByOrderNumber == null){
            resultMap.put("tradeCode",4);
            resultMap.put("message","没有订单信息");
            return resultMap;
        }*/
        Map<String, String> params = UnifiedOrderModel
                .builder()
                .appid(wxPayApiConfig.getAppId())
                .mch_id(wxPayApiConfig.getMchId())
                .nonce_str(WxPayUtil.generateStr())
                .out_trade_no(outTradeNo)
                .build()
                .createSign(wxPayApiConfig.getPartnerKey(), HMACSHA256);
        //查询微信订单
        String xmlResult = WxPayApi.orderQuery(params);
        Map<String, String> result = WxPayUtil.xmlToMap(xmlResult);
        if ("FAIL".equals(result.get("result_code"))){
            resultMap.put("tradeCode",0);
            resultMap.put("message","没有支付信息");
            return resultMap;
        }
        if ("CLOSED".equals(result.get("trade_state"))){
            resultMap.put("tradeCode", 2);
            resultMap.put("message", "订单已失效");
        }else if ("SUCCESS".equals(result.get("trade_state"))){
            resultMap.put("tradeCode", 1);
            resultMap.put("message", "订单支付成功");
            /*if (orderByOrderNumber.getOrderStatus() == 0) {
                PayNotifyDO payNotifyDO = new PayNotifyDO(new WxPayResultDO(result));
                handlerNotify(payNotifyDO);
            }*/
        }else if ("NOTPAY".equals(result.get("trade_state"))){
            resultMap.put("tradeCode", 0);
            resultMap.put("message", "支付信息已存在，待付款");
        }else {
            resultMap.put("tradeCode", 3);
            resultMap.put("message", "未知错误");
        }
        return resultMap;
    }

    private Map<String, Object> tradeQueryAliPay(String outTradeNo) {
        Map<String, Object> resultMap = Maps.newHashMap();
        if(StringUtils.isBlank(outTradeNo)){
            resultMap.put("tradeCode",5);
            resultMap.put("message","订单号不能为空");
            return resultMap;
        }
       /* OrderDO orderDO = orderService.getOrderByOrderNumber(outTradeNo);

        if (null == orderDO){
            resultMap.put("tradeCode",4);
            resultMap.put("message","没有订单信息");
            return resultMap;
        }*/
        try {
            AlipayTradeQueryModel model = new AlipayTradeQueryModel();
            model.setOutTradeNo(outTradeNo);
            AlipayTradeQueryResponse alipayTradeQueryResponse = AliPayApi.tradeQueryToResponse(model);
            String tradeStatus = alipayTradeQueryResponse.getTradeStatus();
            if (StringUtils.isEmpty(tradeStatus)) {
                resultMap.put("tradeCode", 0);
                resultMap.put("message", "未找到支付信息");
            } else if (tradeStatus.equals("TRADE_CLOSED")) {
                resultMap.put("tradeCode", 2);
                resultMap.put("message", "订单已失效");
            } else if (tradeStatus.equals("TRADE_SUCCESS") || tradeStatus.equals("TRADE_FINISHED")) {
                //订单状态
               /* Integer orderStatus = orderDO.getOrderStatus();
                if (orderStatus == 0) {
                    Map<String, String> params = new HashMap<>();
                    params.put("notify_time)", DateUtils.parseDateToStr("yyyy-MM-dd HH:mm:ss",alipayTradeQueryResponse.getSendPayDate()));
                    params.put("gmt_payment)", DateUtils.parseDateToStr("yyyy-MM-dd HH:mm:ss",new Date()));
                    params.put("trade_no", alipayTradeQueryResponse.getTradeNo());
                    params.put("out_trade_no", alipayTradeQueryResponse.getOutTradeNo());
                    params.put("passback_params",String.valueOf(orderDO.getGoodsType()));
                    params.put("total_amount", alipayTradeQueryResponse.getTotalAmount());

                    PayNotifyDO payNotifyDO = new PayNotifyDO(new AliPayResultDO(params));
                    handlerNotify(payNotifyDO);
                }*/
                resultMap.put("tradeCode", 1);
                resultMap.put("message", "订单已经支付过");
            } else if (tradeStatus.equals("WAIT_BUYER_PAY")) {
                //交易创建，等待买家付款
                resultMap.put("tradeCode", 0);
                resultMap.put("message", "支付信息已存在，待付款");
            } else {
                resultMap.put("tradeCode", 3);
                resultMap.put("message", tradeStatus);
            }
            return resultMap;
        } catch (AlipayApiException e) {
            e.printStackTrace();
        }
        return null;
    }
}
