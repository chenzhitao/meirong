package com.jiumi.pay.domain;

import lombok.Data;

@Data
public class AliPayResponseModel {
    /** 支付宝分配给开发者的应用ID */
    private String appId;

    /** 接口名称 */
    private String method="alipay.trade.app.pay";

    /** 请求使用的编码格式 */
    private String charset;

    /** 商户生成签名字符串所使用的签名算法类型 */
    private String signType;

    /** 商户请求参数的签名串 */
    private String sign;

    /** 发送请求的时间，格式"yyyy-MM-dd HH:mm:ss" */
    private String timestamp;

    /** 调用的接口版本，固定为：1.0 */
    private  String version="1.0";

    /** 支付宝服务器主动通知商户服务器里指定的页面http/https路径。建议商户使用https */
    private String notifyUrl;
    /** 业务参数 */
    private String  biz_content;
}
