package com.jiumi.goods.domain;

import com.jiumi.common.annotation.Excel;
import com.jiumi.common.core.domain.BaseEntity;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

import java.util.List;

/**
 * 商品管理对象 oms_goods_info
 *
 * @author jiumi
 * @date 2021-11-19
 */
public class OmsGoodsInfo extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** ID */
    private String id;

    /** 分类编号 */
    @Excel(name = "分类编号")
    private Long typeId;

    /** 分类名称 */
    @Excel(name = "分类名称")
    private String typeName;

    /** 商品名称 */
    @Excel(name = "商品名称")
    private String name;

    /** 商品简介 */
    @Excel(name = "商品简介")
    private String description;

    /** 商品头图 */
    @Excel(name = "商品头图")
    private String headerImg;

    /** 详情图片 */
    @Excel(name = "详情图片")
    private String detailImg;

    /** 商品详情 */
    @Excel(name = "商品详情")
    private String detail;

    /** 首页是否推荐 */
    @Excel(name = "首页是否推荐")
    private String referrerFlag;

    /** 排序序号 */
    @Excel(name = "排序序号")
    private Long sortNo;

    /** 商品状态 */
    @Excel(name = "商品状态")
    private String status;

    /**sku最少价格*/
    private double price;

    //返佣类型1比例2金额
    private int rebateRatioType;
    private double rebateRatio;
    private double sub1Commissiona;
    private double sub2Commissiona;
    private double sub2Commissionb;
    private double sub3Commissiona;
    private double sub3Commissionb;
    private double sub3Commissionc;

    private String onlineFlag;

    public String getOnlineFlag() {
        return onlineFlag;
    }

    public void setOnlineFlag(String onlineFlag) {
        this.onlineFlag = onlineFlag;
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

    private double sharePercent;

    public double getSharePercent() {
        return sharePercent;
    }

    public void setSharePercent(double sharePercent) {
        this.sharePercent = sharePercent;
    }

    private List<OmsGoodsSku> goodsSku;

    public List<OmsGoodsSku> getGoodsSku() {
        return goodsSku;
    }

    public void setGoodsSku(List<OmsGoodsSku> goodsSku) {
        this.goodsSku = goodsSku;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public void setId(String id)
    {
        this.id = id;
    }

    public String getId()
    {
        return id;
    }
    public void setTypeId(Long typeId)
    {
        this.typeId = typeId;
    }

    public Long getTypeId()
    {
        return typeId;
    }
    public void setTypeName(String typeName)
    {
        this.typeName = typeName;
    }

    public String getTypeName()
    {
        return typeName;
    }
    public void setName(String name)
    {
        this.name = name;
    }

    public String getName()
    {
        return name;
    }
    public void setDescription(String description)
    {
        this.description = description;
    }

    public String getDescription()
    {
        return description;
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
    public void setDetail(String detail)
    {
        this.detail = detail;
    }

    public String getDetail()
    {
        return detail;
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
            .append("typeId", getTypeId())
            .append("typeName", getTypeName())
            .append("name", getName())
            .append("description", getDescription())
            .append("headerImg", getHeaderImg())
            .append("detailImg", getDetailImg())
            .append("detail", getDetail())
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
