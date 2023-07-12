package com.jiumi.goods.domain;

import java.math.BigDecimal;
import com.jiumi.common.annotation.Excel;
import com.jiumi.common.core.domain.BaseEntity;
import com.jiumi.shop.domain.BaseShopItem;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

/**
 * 次卡对象 base_number_card
 *
 * @author jiumi
 * @date 2022-01-26
 */
public class BaseNumberCard extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** id */
    private Long id;

    /** 次卡名称 */
    @Excel(name = "次卡名称")
    private String name;

    /** 次卡有效期 */
    @Excel(name = "次卡有效期")
    private Long day;

    /** 关联项目 */
    @Excel(name = "关联项目")
    private Long shopItemId;
    private String shopItemName;

    /** 次卡次数 */
    @Excel(name = "次卡次数")
    private Long num;

    /** 次卡价格 */
    @Excel(name = "次卡价格")
    private BigDecimal price;

    /** 上架状态 */
    @Excel(name = "上架状态")
    private String status;

    /** 项目分类 */
    @Excel(name = "项目分类")
    private Long goodsTypeId;

    /** 商品简介 */
    @Excel(name = "商品简介")
    private String introduction;

    /** 次卡头图 */
    @Excel(name = "次卡头图")
    private String headImg;

    /** 详情图片 */
    @Excel(name = "详情图片")
    private String detailsImg;

    /** 次卡详情 */
    @Excel(name = "次卡详情")
    private String details;

    /**
     * 项目信息
     */
    private BaseShopItem baseShopItem;

    public String getShopItemName() {
        return shopItemName;
    }

    public void setShopItemName(String shopItemName) {
        this.shopItemName = shopItemName;
    }

    public void setId(Long id)
    {
        this.id = id;
    }

    public Long getId()
    {
        return id;
    }
    public void setName(String name)
    {
        this.name = name;
    }

    public String getName()
    {
        return name;
    }
    public void setDay(Long day)
    {
        this.day = day;
    }

    public Long getDay()
    {
        return day;
    }
    public void setShopItemId(Long shopItemId)
    {
        this.shopItemId = shopItemId;
    }

    public Long getShopItemId()
    {
        return shopItemId;
    }
    public void setNum(Long num)
    {
        this.num = num;
    }

    public Long getNum()
    {
        return num;
    }
    public void setPrice(BigDecimal price)
    {
        this.price = price;
    }

    public BigDecimal getPrice()
    {
        return price;
    }
    public void setStatus(String status)
    {
        this.status = status;
    }

    public String getStatus()
    {
        return status;
    }
    public void setGoodsTypeId(Long goodsTypeId)
    {
        this.goodsTypeId = goodsTypeId;
    }

    public Long getGoodsTypeId()
    {
        return goodsTypeId;
    }
    public void setIntroduction(String introduction)
    {
        this.introduction = introduction;
    }

    public String getIntroduction()
    {
        return introduction;
    }
    public void setHeadImg(String headImg)
    {
        this.headImg = headImg;
    }

    public String getHeadImg()
    {
        return headImg;
    }
    public void setDetailsImg(String detailsImg)
    {
        this.detailsImg = detailsImg;
    }

    public String getDetailsImg()
    {
        return detailsImg;
    }
    public void setDetails(String details)
    {
        this.details = details;
    }

    public String getDetails()
    {
        return details;
    }

    public BaseShopItem getBaseShopItem() {
        return baseShopItem;
    }

    public void setBaseShopItem(BaseShopItem baseShopItem) {
        this.baseShopItem = baseShopItem;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.MULTI_LINE_STYLE)
            .append("id", getId())
            .append("name", getName())
            .append("day", getDay())
            .append("shopItemId", getShopItemId())
            .append("num", getNum())
            .append("price", getPrice())
            .append("status", getStatus())
            .append("goodsTypeId", getGoodsTypeId())
            .append("introduction", getIntroduction())
            .append("headImg", getHeadImg())
            .append("detailsImg", getDetailsImg())
            .append("details", getDetails())
            .append("createTime", getCreateTime())
            .append("createBy", getCreateBy())
            .append("updateTime", getUpdateTime())
            .append("updateBy", getUpdateBy())
            .toString();
    }
}
