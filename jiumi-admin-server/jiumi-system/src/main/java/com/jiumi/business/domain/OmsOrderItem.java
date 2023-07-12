package com.jiumi.business.domain;

import java.math.BigDecimal;
import com.jiumi.common.annotation.Excel;
import com.jiumi.common.core.domain.BaseEntity;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

/**
 * 订单项对象 oms_order_item
 *
 * @author jiumi
 * @date 2021-11-25
 */
public class OmsOrderItem extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** ID */
    private String id;

    /** 订单ID */
    @Excel(name = "订单ID")
    private Long orderId;
    private String orderCode;

    /** 商品ID */
    @Excel(name = "商品ID")
    private Long goodsId;

    private String goodsImg;


    /** 商品名称 */
    @Excel(name = "商品名称")
    private String productName;

    /** skuID */
    @Excel(name = "skuID")
    private Long skuId;
    private String skuAttr;

    /** 购买数量 */
    @Excel(name = "购买数量")
    private Long goodsNum;

    /** 商品价格 */
    @Excel(name = "商品价格")
    private double price;


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

    public String getOrderCode() {
        return orderCode;
    }

    public void setOrderCode(String orderCode) {
        this.orderCode = orderCode;
    }

    public void setId(String id)
    {
        this.id = id;
    }

    public String getId()
    {
        return id;
    }
    public void setOrderId(Long orderId)
    {
        this.orderId = orderId;
    }

    public Long getOrderId()
    {
        return orderId;
    }
    public void setGoodsId(Long goodsId)
    {
        this.goodsId = goodsId;
    }

    public Long getGoodsId()
    {
        return goodsId;
    }
    public void setProductName(String productName)
    {
        this.productName = productName;
    }

    public String getProductName()
    {
        return productName;
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

    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.MULTI_LINE_STYLE)
            .append("id", getId())
            .append("orderId", getOrderId())
            .append("goodsId", getGoodsId())
            .append("productName", getProductName())
            .append("skuId", getSkuId())
            .append("goodsNum", getGoodsNum())
            .append("price", getPrice())
            .toString();
    }
}
