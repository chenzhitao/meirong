package com.jiumi.common.utils.AES;

import com.alibaba.fastjson.JSONObject;
import org.apache.commons.codec.binary.Base64;

public class WXCore {
    private static final String WATERMARK = "watermark";
    private static final String APPID = "appid";
    /**
     * 解密数据
     * @return
     * @throws Exception
     */
    public static String decrypt(String appId, String encryptedData, String sessionKey, String iv){
        String result = "";
        try {
            AES aes = new AES();
            byte[] resultByte = aes.decrypt(Base64.decodeBase64(encryptedData), Base64.decodeBase64(sessionKey), Base64.decodeBase64(iv));
            if(null != resultByte && resultByte.length > 0){
                result = new String(WxPKCS7Encoder.decode(resultByte));
                JSONObject jsonObject = JSONObject.parseObject(result);
                String decryptAppid = jsonObject.getJSONObject(WATERMARK).getString(APPID);
                if(!appId.equals(decryptAppid)){
                    result = "";
                }
            }
        } catch (Exception e) {
            result = "";
            e.printStackTrace();
        }
        return result;
    }


    public static void main(String[] args) throws Exception{
        String appId = "wx4079b10e4cd142fd";
        String encryptedData = "o70MEsfjfaZiFcp+wGYPukAXtdHbDkYecREvb55cP8CXaeXjlRFTn0mvg2oZqL5fdpS8X+pEv7elRQlo7djUIWFwUYFIwlJaDZesxip2GlXbV+tz90grqZsQjjFZ6xDBkOUJkQ176SSWjyzpXS/7yMmtl0s/QjbFkD9aLSpvUfFinAgoLhRiCQHRIkMaXoeqFtR6J0YGZZEcOF93KULW2w==";
        String sessionKey = "OihxysGn8hKXkd0yA5x1+A==";
        String iv = "ymRwJkLMQsq3a4rNVHtE6g==";
        System.out.println(decrypt(appId, encryptedData, sessionKey, iv));
    }
}
