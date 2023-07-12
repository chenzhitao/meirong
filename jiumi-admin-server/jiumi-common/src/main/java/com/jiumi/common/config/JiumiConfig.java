package com.jiumi.common.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * 读取项目相关配置
 *
 * @author jiumi
 */
@Component
@ConfigurationProperties(prefix = "jiumi")
public class JiumiConfig
{
    /** 项目名称 */
    private String name;

    /** 版本 */
    private String version;

    /** 版权年份 */
    private String copyrightYear;

    /** 实例演示开关 */
    private boolean demoEnabled;

    /** 上传路径 */
    private static String profile;

    private static String domainUrl;

    /** 小程序appid */
    private static String appid;

    /** AppSecret */
    private static String appSecret;

    /** 获取地址开关 */
    private static boolean addressEnabled;

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public String getVersion()
    {
        return version;
    }

    public void setVersion(String version)
    {
        this.version = version;
    }

    public String getCopyrightYear()
    {
        return copyrightYear;
    }

    public void setCopyrightYear(String copyrightYear)
    {
        this.copyrightYear = copyrightYear;
    }

    public boolean isDemoEnabled()
    {
        return demoEnabled;
    }

    public void setDemoEnabled(boolean demoEnabled)
    {
        this.demoEnabled = demoEnabled;
    }

    public static String getProfile()
    {
        return profile;
    }

    public void setProfile(String profile)
    {
        JiumiConfig.profile = profile;
    }

    public static String getDomainUrl()
    {
        return domainUrl;
    }

    public void setDomainUrl(String domainUrl)
    {
        JiumiConfig.domainUrl = domainUrl;
    }

    public static boolean isAddressEnabled()
    {
        return addressEnabled;
    }

    public void setAddressEnabled(boolean addressEnabled)
    {
        JiumiConfig.addressEnabled = addressEnabled;
    }

    public static String getAppid() {
        return appid;
    }

    public void setAppid(String appid) {
        JiumiConfig.appid = appid;
    }

    public static String getAppSecret() {
        return appSecret;
    }

    public void setAppSecret(String appSecret) {
        JiumiConfig.appSecret = appSecret;
    }
    /**
     * 获取头像上传路径
     */
    public static String getAvatarPath()
    {
        return getProfile() + "/avatar";
    }

    /**
     * 获取下载路径
     */
    public static String getDownloadPath()
    {
        return getProfile() + "/download/";
    }

    /**
     * 获取上传路径
     */
    public static String getUploadPath()
    {
        return getProfile() + "/upload";
    }

    public static String getQrcodePath()
    {
        return getProfile() + "/qrcode";
    }
}
