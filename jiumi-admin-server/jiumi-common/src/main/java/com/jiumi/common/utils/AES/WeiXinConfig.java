package com.jiumi.common.utils.AES;

/**
 * 微信封装数据
 */
public class WeiXinConfig {
    private static final long serialVersionUID = 1L;
    private String code;
    private String encryptedData;
    private String iv;

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getEncryptedData() {
        return encryptedData;
    }

    public void setEncryptedData(String encryptedData) {
        this.encryptedData = encryptedData;
    }

    public String getIv() {
        return iv;
    }

    public void setIv(String iv) {
        this.iv = iv;
    }


}
