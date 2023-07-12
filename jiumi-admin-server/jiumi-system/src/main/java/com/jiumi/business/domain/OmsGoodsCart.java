package com.jiumi.business.domain;

import java.math.BigDecimal;
import com.jiumi.common.annotation.Excel;
import com.jiumi.common.core.domain.BaseEntity;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

/**
 * 购物车对象 oms_goods_cart
 *
 * @author jiumi
 * @date 2021-11-19
 */
public class OmsGoodsCart extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** ID */
    private String id;

    /** 用户ID */
    @Excel(name = "用户ID")
    private Long userId;

    /** 商品ID */
    @Excel(name = "商品ID")
    private Long goodsId;
    private String goodsName;

    private String goodsImg;

    /** 商品ID */
    @Excel(name = "商品ID")
    private Long skuId;

    private String skuAttr;

    /** 数量 */
    @Excel(name = "数量")
    private Long goodsNum;

    /** 价格 */
    @Excel(name = "价格")
    private double price;

    /** 状态 */
    @Excel(name = "状态")
    private String status;

    public String getGoodsName() {
        return goodsName;
    }

    public void setGoodsName(String goodsName) {
        this.goodsName = goodsName;
    }

    public String getSkuAttr() {
        return skuAttr;
    }

    public void setSkuAttr(String skuAttr) {
        this.skuAttr = skuAttr;
    }

    public String getGoodsImg() {
        return goodsImg;
    }

    public void setGoodsImg(String goodsImg) {
        this.goodsImg = goodsImg;
    }

    public void setId(String id)
    {
        this.id = id;
    }

    public String getId()
    {
        return id;
    }
    public void setUserId(Long userId)
    {
        this.userId = userId;
    }

    public Long getUserId()
    {
        return userId;
    }
    public void setGoodsId(Long goodsId)
    {
        this.goodsId = goodsId;
    }

    public Long getGoodsId()
    {
        return goodsId;
    }
    public void setSkuId(Long skuId)
    {
        this.skuId = skuId;
    }

    public Long getSkuId()
    {
        return skuId;
    }
    public void setGoodsNum(Long goodsNum)
    {
        this.goodsNum = goodsNum;
    }

    public Long getGoodsNum()
    {
        return goodsNum;
    }
    public void setPrice(double price)
    {
        this.price = price;
    }

    public double getPrice()
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

    @Override
    public String toString() {
        return new ToStringBuilder(this,ToStringStyle.MULTI_LINE_STYLE)
            .append("id", getId())
            .append("userId", getUserId())
            .append("goodsId", getGoodsId())
            .append("skuId", getSkuId())
            .append("goodsNum", getGoodsNum())
            .append("price", getPrice())
            .append("status", getStatus())
            .append("createTime", getCreateTime())
            .toString();
    }
}
