package com.jiumi.business.domain;

import com.jiumi.common.core.domain.BaseEntity;

/**
 * @author zl
 */
public class OmsOrderStatistics extends BaseEntity {

    /**
     * 门店ID
     */
    private String shopId;
    /**
     * 门店名称
     */
    private String shopName;
    /**
     * 用户ID
     */
    private String userId;
    private String userName;
    /**
     * 门店消费人员数量     （注意查询出来的数据是总的，方便前端界面展示用）
     */
    private Integer shopUserCount;
    /**
     * 对应类型消费金额     （注意查询出来的数据是总的，方便前端界面展示用）
     */
    private String totalConsumeTypeAmount;
    /**
     * 类型
     */
    private String consumeType;
    /**
     * 合计金额   （注意查询出来的数据是总的，方便前端界面展示用）
     */
    private String totalOrderAmount;

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getShopId() {
        return shopId;
    }

    public void setShopId(String shopId) {
        this.shopId = shopId;
    }

    public String getShopName() {
        return shopName;
    }

    public void setShopName(String shopName) {
        this.shopName = shopName;
    }

    public Integer getShopUserCount() {
        return shopUserCount;
    }

    public void setShopUserCount(Integer shopUserCount) {
        this.shopUserCount = shopUserCount;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getTotalConsumeTypeAmount() {
        return totalConsumeTypeAmount;
    }

    public void setTotalConsumeTypeAmount(String totalConsumeTypeAmount) {
        this.totalConsumeTypeAmount = totalConsumeTypeAmount;
    }

    public String getConsumeType() {
        return consumeType;
    }

    public void setConsumeType(String consumeType) {
        this.consumeType = consumeType;
    }

    public String getTotalOrderAmount() {
        return totalOrderAmount;
    }

    public void setTotalOrderAmount(String totalOrderAmount) {
        this.totalOrderAmount = totalOrderAmount;
    }
}
