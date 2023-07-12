package com.jiumi.pay.domain;

import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;

/**
 * 支付回调实体
 * @author xudong.liu
 * @data 2020/12/20
 */
@Data
public class PayNotifyDO {
    /**
     * 订单号(创建订单时自己生成的)
     */
    private String outTradeNo;

    /**
     * 交易流水号(支付成功后支付宝或微信返回的)
     */
    private String tradeNo;

    /**
     * 支付方式(0:支付宝支付 1:微信native支付 3微信jsapi支付)
     */
    private Integer payWay;

    /**
     * 实付金额(单位元)
     */
    private BigDecimal payAmount;

    /**
     * 支付时间
     */
    private Date payTime;

    /**
     * 公共回传参数
     */
    private String commonReturnParameters;

    public PayNotifyDO(AliPayResultDO aliPayResultDO){
        this.outTradeNo = aliPayResultDO.getOutTradeNo();
        this.tradeNo = aliPayResultDO.getTradeNo();
        this.payWay = 0;
        this.payAmount = aliPayResultDO.getTotalAmount();
        this.payTime = aliPayResultDO.getGmtPayment();
        this.commonReturnParameters = aliPayResultDO.getPassbackParams();
    }

    public PayNotifyDO(WxPayResultDO wxPayResultDO){
        this.outTradeNo = wxPayResultDO.getOutTradeNo();
        this.tradeNo = wxPayResultDO.getTransactionId();
        this.payWay = 1;
        if ("JSAPI".equals(wxPayResultDO.getTradeType())){
            this.payWay = 3;
        }
        this.payAmount = wxPayResultDO.getTotalFee().divide(new BigDecimal("100"));
        this.payTime = wxPayResultDO.getTimeEnd();
        this.commonReturnParameters = wxPayResultDO.getAttach();
    }

}
