package com.jiumi.shop.domain;

import java.math.BigDecimal;
import java.util.List;

import com.jiumi.common.annotation.Excel;
import com.jiumi.common.core.domain.BaseEntity;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

/**
 * 项目管理对象 base_shop_item
 *
 * @author jiumi
 * @date 2021-11-19
 */
public class BaseShopItem extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** ID */
    private String id;

    /** 项目名称 */
    @Excel(name = "项目名称")
    private String itemName;

    /** 项目品类 */
    @Excel(name = "项目品类")
    private String type;

    /** 项目简介 */
    @Excel(name = "项目简介")
    private String itemRemark;

    /** 项目价格 */
    @Excel(name = "项目价格")
    private BigDecimal itemPrice;

    /** 项目VIP价格 */
    private BigDecimal itemVipPrice;

    /** 银行卡权益 */
    private BigDecimal bankDiscount;

    /** 项目图片 */
    @Excel(name = "项目图片")
    private String headerImg;

    /** 详情图片 */
    private String detailImg;

    /** 项目描述 */
    private String itemDetail;

    /** 是否推荐 */
    @Excel(name = "是否推荐")
    private String referrerFlag;

    /** 项目排序 */
    @Excel(name = "项目排序")
    private Long sortNo;

    /** 项目状态 */
    @Excel(name = "项目状态")
    private String status;

    private int shareRateType;
    private double sharePercent1;
    private double sharePercent2;
    private double sharePercent3;
    private double sharePercent4;

    private Long userId;

    private Long cardId;

    private int lastTimes;

    private BigDecimal price;

    private String onlineFlag;

    public int getShareRateType() {
        return shareRateType;
    }

    public void setShareRateType(int shareRateType) {
        this.shareRateType = shareRateType;
    }

    public double getSharePercent1() {
        return sharePercent1;
    }

    public void setSharePercent1(double sharePercent1) {
        this.sharePercent1 = sharePercent1;
    }

    public double getSharePercent2() {
        return sharePercent2;
    }

    public void setSharePercent2(double sharePercent2) {
        this.sharePercent2 = sharePercent2;
    }

    public double getSharePercent3() {
        return sharePercent3;
    }

    public void setSharePercent3(double sharePercent3) {
        this.sharePercent3 = sharePercent3;
    }

    public double getSharePercent4() {
        return sharePercent4;
    }

    public void setSharePercent4(double sharePercent4) {
        this.sharePercent4 = sharePercent4;
    }

    public String getOnlineFlag() {
        return onlineFlag;
    }

    public void setOnlineFlag(String onlineFlag) {
        this.onlineFlag = onlineFlag;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public Long getCardId() {
        return cardId;
    }

    public void setCardId(Long cardId) {
        this.cardId = cardId;
    }

    public int getLastTimes() {
        return lastTimes;
    }

    public void setLastTimes(int lastTimes) {
        this.lastTimes = lastTimes;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    private List<BaseShopItemConsultant> itemList;

    public List<BaseShopItemConsultant> getItemList() {
        return itemList;
    }

    public void setItemList(List<BaseShopItemConsultant> itemList) {
        this.itemList = itemList;
    }

    public void setId(String id)
    {
        this.id = id;
    }

    public String getId()
    {
        return id;
    }
    public void setItemName(String itemName)
    {
        this.itemName = itemName;
    }

    public String getItemName()
    {
        return itemName;
    }
    public void setType(String type)
    {
        this.type = type;
    }

    public String getType()
    {
        return type;
    }
    public void setItemRemark(String itemRemark)
    {
        this.itemRemark = itemRemark;
    }

    public String getItemRemark()
    {
        return itemRemark;
    }
    public void setItemPrice(BigDecimal itemPrice)
    {
        this.itemPrice = itemPrice;
    }

    public BigDecimal getItemPrice()
    {
        return itemPrice;
    }
    public void setItemVipPrice(BigDecimal itemVipPrice)
    {
        this.itemVipPrice = itemVipPrice;
    }

    public BigDecimal getItemVipPrice()
    {
        return itemVipPrice;
    }
    public void setBankDiscount(BigDecimal bankDiscount)
    {
        this.bankDiscount = bankDiscount;
    }

    public BigDecimal getBankDiscount()
    {
        return bankDiscount;
    }
    public void setHeaderImg(String headerImg)
    {
        this.headerImg = headerImg;
    }

    public String getHeaderImg()
    {
        return headerImg;
    }
    public void setDetailImg(String detailImg)
    {
        this.detailImg = detailImg;
    }

    public String getDetailImg()
    {
        return detailImg;
    }
    public void setItemDetail(String itemDetail)
    {
        this.itemDetail = itemDetail;
    }

    public String getItemDetail()
    {
        return itemDetail;
    }
    public void setReferrerFlag(String referrerFlag)
    {
        this.referrerFlag = referrerFlag;
    }

    public String getReferrerFlag()
    {
        return referrerFlag;
    }
    public void setSortNo(Long sortNo)
    {
        this.sortNo = sortNo;
    }

    public Long getSortNo()
    {
        return sortNo;
    }
    public void setStatus(String status)
    {
        this.status = status;
    }

    public String getStatus()
    {
        return status;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this,ToStringStyle.MULTI_LINE_STYLE)
            .append("id", getId())
            .append("itemName", getItemName())
            .append("type", getType())
            .append("itemRemark", getItemRemark())
            .append("itemPrice", getItemPrice())
            .append("itemVipPrice", getItemVipPrice())
            .append("bankDiscount", getBankDiscount())
            .append("headerImg", getHeaderImg())
            .append("detailImg", getDetailImg())
            .append("itemDetail", getItemDetail())
            .append("referrerFlag", getReferrerFlag())
            .append("sortNo", getSortNo())
            .append("status", getStatus())
            .append("createTime", getCreateTime())
            .append("createBy", getCreateBy())
            .append("updateTime", getUpdateTime())
            .append("updateBy", getUpdateBy())
            .toString();
    }
}
