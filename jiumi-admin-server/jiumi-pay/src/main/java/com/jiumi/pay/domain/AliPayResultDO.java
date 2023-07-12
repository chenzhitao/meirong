package com.jiumi.pay.domain;
import com.jiumi.pay.domain.util.DateUtils;
import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;
import java.util.Map;

@Data
public class AliPayResultDO {
    //通知发送的时间
    private Date notifyTime;

    //支付宝交易凭证号
    private String tradeNo;

    //原支付请求的商户订单号
    private String outTradeNo;

    //订单标题 商品的标题/交易标题/订单标题/订单关键字等，是请求时对应的参数，原样通知回来
    private String subject;

    //商品描述 该订单的备注、描述、明细等。对应请求时的body参数，原样通知回来
    private String  body;

    //该笔交易的买家付款时间。格式为yyyy-MM-dd HH:mm:ss
    private Date gmtPayment;

    //回传参数 公共回传参数，如果请求时传递了该参数，则返回给商户时会在异步通知时将该参数原样返回。本参数必须进行UrlEncode之后才可以发送给支付宝
    private String passbackParams;

    //交易状态 交易目前所处的状态 TRADE_SUCCESS 	交易支付成功
    private String  tradeStatus;

    //本次交易支付的订单金额，单位为人民币（元）
    private BigDecimal totalAmount;

    public AliPayResultDO(Map<String,String> param){
        this.notifyTime= DateUtils.parse(param.get("notify_time"),"yyyy-MM-dd HH:mm:ss");
        this.gmtPayment= DateUtils.parse(param.get("gmt_payment"),"yyyy-MM-dd HH:mm:ss");
        this.tradeNo=param.get("trade_no");
        this.outTradeNo=param.get("out_trade_no");
        this.subject=param.get("subject");
        this.body=param.get("body");
        this.passbackParams=param.get("passback_params");
        this.totalAmount=new BigDecimal(param.get("total_amount"));
    }
}
