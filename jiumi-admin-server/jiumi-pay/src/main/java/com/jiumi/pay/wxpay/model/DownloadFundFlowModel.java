/**
 * <p>WQPay 让支付触手可及，封装了微信支付、支付宝支付、银联支付常用的支付方式以及各种常用的接口。</p>
 *
 * <p>不依赖任何第三方 mvc 框架，仅仅作为工具使用简单快速完成支付模块的开发，可轻松嵌入到任何系统里。 </p>
 *
 * <p>WQPay jiumi</p>
 *
 * <p>Node.js 版: https://gitee.com/javen205/TNW</p>
 *
 * <p>下载资金账单 Model</p>
 *
 * @author Javen
 */
package com.jiumi.pay.wxpay.model;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Builder
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Getter
public class DownloadFundFlowModel extends BaseModel {
    private String appid;
    private String mch_id;
    private String nonce_str;
    private String sign;
    private String sign_type;
    private String bill_date;
    private String account_type;
    private String tar_type;
}
