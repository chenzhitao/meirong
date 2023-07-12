package com.jiumi.pay.domain;
import com.jiumi.pay.domain.util.DateUtils;
import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;
import java.util.Map;

@Data
public class WxPayResultDO {
    /**
     * 支付成功，微信流水号
     */
    private String transactionId;

    /**
     * 自己下单时生成的订单号
     */
    private String outTradeNo;

    /**
     * 公共返回参数
     */
    private String attach;

    /**
     * 支付完成时间
     */
    private Date timeEnd;

    /**
     * 订单总金额，单位为分
     */
    private BigDecimal totalFee;

    /**
     * 支付类型 JSAPI NATIVE
     */
    private String tradeType;

    public WxPayResultDO(Map<String, String> params){
        this.transactionId=params.get("transaction_id");
        this.outTradeNo=params.get("out_trade_no");
        this.attach=params.get("attach");
        this.timeEnd= DateUtils.parse(params.get("time_end"),"yyyyMMddHHmmss");
        this.totalFee=new BigDecimal(params.get("total_fee"));
        this.tradeType = params.get("trade_type");
    }

}
