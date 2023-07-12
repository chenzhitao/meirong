package com.jiumi.goods.domain;

import java.math.BigDecimal;
import java.util.List;

import com.jiumi.common.annotation.Excel;
import com.jiumi.common.core.domain.BaseEntity;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
/**
 * 商品规格对象 oms_goods_sku
 *
 * @author jiumi
 * @date 2021-11-19
 */
public class OmsGoodsSku extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** ID */
    private String id;

    /** 商品ID */
    @Excel(name = "商品ID")
    private Long goodsId;

    /** 规格名称 */
    @Excel(name = "规格名称")
    private String skuName;

    /** 价格 */
    @Excel(name = "价格")
    private double price;

    /** 数量 */
    @Excel(name = "数量")
    private Long stockNum;

    //返佣类型1比例2金额
    private int rebateRatioType;
    private double rebateRatio;
    private double sub1Commissiona;
    private double sub2Commissiona;
    private double sub2Commissionb;
    private double sub3Commissiona;
    private double sub3Commissionb;
    private double sub3Commissionc;


    private List<String> rebateRatioList;

    public List<String> getRebateRatioList() {
        return rebateRatioList;
    }

    public void setRebateRatioList(List<String> rebateRatioList) {
        this.rebateRatioList = rebateRatioList;
    }

    public int getRebateRatioType() {
        return rebateRatioType;
    }

    public void setRebateRatioType(int rebateRatioType) {
        this.rebateRatioType = rebateRatioType;
    }

    public double getRebateRatio() {
        return rebateRatio;
    }

    public void setRebateRatio(double rebateRatio) {
        this.rebateRatio = rebateRatio;
    }

    public double getSub1Commissiona() {
        return sub1Commissiona;
    }

    public void setSub1Commissiona(double sub1Commissiona) {
        this.sub1Commissiona = sub1Commissiona;
    }

    public double getSub2Commissiona() {
        return sub2Commissiona;
    }

    public void setSub2Commissiona(double sub2Commissiona) {
        this.sub2Commissiona = sub2Commissiona;
    }

    public double getSub2Commissionb() {
        return sub2Commissionb;
    }

    public void setSub2Commissionb(double sub2Commissionb) {
        this.sub2Commissionb = sub2Commissionb;
    }

    public double getSub3Commissiona() {
        return sub3Commissiona;
    }

    public void setSub3Commissiona(double sub3Commissiona) {
        this.sub3Commissiona = sub3Commissiona;
    }

    public double getSub3Commissionb() {
        return sub3Commissionb;
    }

    public void setSub3Commissionb(double sub3Commissionb) {
        this.sub3Commissionb = sub3Commissionb;
    }

    public double getSub3Commissionc() {
        return sub3Commissionc;
    }

    public void setSub3Commissionc(double sub3Commissionc) {
        this.sub3Commissionc = sub3Commissionc;
    }


    public void setId(String id)
    {
        this.id = id;
    }

    public String getId()
    {
        return id;
    }
    public void setGoodsId(Long goodsId)
    {
        this.goodsId = goodsId;
    }

    public Long getGoodsId()
    {
        return goodsId;
    }
    public void setSkuName(String skuName)
    {
        this.skuName = skuName;
    }

    public String getSkuName()
    {
        return skuName;
    }
    public void setPrice(double price)
    {
        this.price = price;
    }

    public double getPrice()
    {
        return price;
    }
    public void setStockNum(Long stockNum)
    {
        this.stockNum = stockNum;
    }

    public Long getStockNum()
    {
        return stockNum;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this,ToStringStyle.MULTI_LINE_STYLE)
            .append("id", getId())
            .append("goodsId", getGoodsId())
            .append("skuName", getSkuName())
            .append("price", getPrice())
            .append("stockNum", getStockNum())
            .toString();
    }
}
