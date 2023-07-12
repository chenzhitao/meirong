
package com.jiumi.pay.wxpay.model;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Builder
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Getter
public class GetTransferInfoModel extends BaseModel {
    private String nonce_str;
    private String sign;
    private String partner_trade_no;
    private String mch_id;
    private String appid;

}
