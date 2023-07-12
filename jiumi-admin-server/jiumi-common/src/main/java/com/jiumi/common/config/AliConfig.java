package com.jiumi.common.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * @author yuanwei.zhai
 */
@Component
@ConfigurationProperties(prefix = "ali")
@Data
public class AliConfig {
    private static String AccessKeyId;
    private static String AccessKeySecret;
    private static String Bucket;
    private static String Endpoint;
    private static String imgPrefix;

    public void setAccessKeyId(String accessKeyId) {
        AccessKeyId = accessKeyId;
    }

    public void setAccessKeySecret(String accessKeySecret) {
        AccessKeySecret = accessKeySecret;
    }

    public void setBucket(String bucket) {
        Bucket = bucket;
    }

    public void setEndpoint(String endpoint) {
        Endpoint = endpoint;
    }
    public void setImgPrefix(String imgPrefix) {
        AliConfig.imgPrefix = imgPrefix;
    }

    public static String getImgPrefix() {
        return imgPrefix;
    }



    public static String getAccessKeyId() {
        return AccessKeyId;
    }

    public static String getAccessKeySecret() {
        return AccessKeySecret;
    }

    public static String getBucket() {
        return Bucket;
    }

    public static String getEndpoint() {
        return Endpoint;
    }

}
