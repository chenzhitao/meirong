package com.jiumi.pay.domain;

import com.jiumi.pay.domain.util.JSONUtils;
import lombok.Data;

@Data
public class BizContent {
    /** 非必填  对一笔交易的具体描述信息。如果是多种商品，请将商品描述字符串累加传给body。 Iphone6 16G*/
    private String body;

    /** 必填 商品的标题/交易标题/订单标题/订单关键字等。  大乐透*/
    private String subject;

    /** 必填 商户网站唯一订单号 70501111111S001111119*/

    /**必填  订单总金额，单位为元，精确到小数点后两位，取值范围[0.01,100000000]*/
    private String total_amount;

    /**必填 销售产品码，商家和支付宝签约的产品码，为固定值 QUICK_MSECURITY_PAY */
    private  String product_code ="QUICK_MSECURITY_PAY";

    private String  out_trade_no;
    /**非必填 该笔订单允许的最晚付款时间，逾期将关闭交易。取值范围：1m～15d。m-分钟，h-小时，d-天，1c-当天（1c-当天的情况下，无论交易何时创建，都在0点关闭）。 该参数数值不接受小数点， 如 1.5h，可转换为 90m。
     注：若为空，则默认为15d。  90m*/
    private String  timeout_express;


    /** 非必填 商品主类型：0—虚拟类商品；1—实物类商品
     注：虚拟类商品不支持使用花呗渠道  0*/
    private String goods_type;


    /**非必填 公用回传参数，如果请求时传递了该参数，则返回给商户时会回传该参数。支付宝会在异步通知时将该参数原样返回。本参数必须进行 UrlEncode 之后才可以发送给支付宝*/
    private String passback_params;

    @Override
    public String toString() {
        return JSONUtils.beanToJson(this);
    }
}
