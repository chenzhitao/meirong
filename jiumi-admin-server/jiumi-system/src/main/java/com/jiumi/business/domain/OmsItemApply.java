package com.jiumi.business.domain;

import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.jiumi.common.annotation.Excel;
import com.jiumi.common.core.domain.BaseEntity;
import com.jiumi.shop.domain.BaseShopItem;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

/**
 * 门店项目预约对象 oms_item_apply
 *
 * @author jiumi
 * @date 2021-11-19
 */
@ApiModel(value = "OmsItemApply", description = "项目预约")
public class OmsItemApply extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** ID */
    private String id;

    /** 门店ID */
    @ApiModelProperty("门店ID")
    @Excel(name = "门店ID")
    private String shopId;

    private String shopName;

    private BaseShopItem shopItem;
    private OmsOrderItemInfo orderItemInfo;

    /** 项目ID */
    @ApiModelProperty("项目ID")
    @Excel(name = "项目ID")
    private Long itemId;

    private String itemName;

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    @NotNull(message = "项目ID")
    public Long getItemId() {
        return itemId;
    }

    public void setItemId(Long itemId) {
        this.itemId = itemId;
    }

    /** 申请用户ID */
    @ApiModelProperty(name = "申请用户ID")
    @Excel(name = "申请用户ID")
    private Long applyUserId;

    private String applyUserName;
    private String applyUserPhone;

    public OmsOrderItemInfo getOrderItemInfo() {
        return orderItemInfo;
    }

    public void setOrderItemInfo(OmsOrderItemInfo orderItemInfo) {
        this.orderItemInfo = orderItemInfo;
    }

    /** 申请时间 */
    @ApiModelProperty(name = "申请时间")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @Excel(name = "申请时间", width = 30, dateFormat = "yyyy-MM-dd HH:mm:ss")
    private Date applyTime;

    /** 预约顾问ID */
    @ApiModelProperty(name = "预约顾问ID")
    @Excel(name = "预约顾问ID")
    private Long applyConsultant;


    private String applyConsultantName;

    /** 预约状态 */
    @Excel(name = "预约状态")
    private String status;

    public String getApplyUserName() {
        return applyUserName;
    }

    public void setApplyUserName(String applyUserName) {
        this.applyUserName = applyUserName;
    }

    public String getApplyUserPhone() {
        return applyUserPhone;
    }

    public void setApplyUserPhone(String applyUserPhone) {
        this.applyUserPhone = applyUserPhone;
    }

    public String getApplyConsultantName() {
        return applyConsultantName;
    }

    public void setApplyConsultantName(String applyConsultantName) {
        this.applyConsultantName = applyConsultantName;
    }

    public String getShopName() {
        return shopName;
    }

    public void setShopName(String shopName) {
        this.shopName = shopName;
    }

    @NotNull(message = "门店不能为空")
    public String getShopId() {
        return shopId;
    }

    public void setShopId(String shopId) {
        this.shopId = shopId;
    }

    @NotNull(message = "预约顾问ID")
    public Long getApplyConsultant() {
        return applyConsultant;
    }

    public void setApplyConsultant(Long applyConsultant) {
        this.applyConsultant = applyConsultant;
    }

    public BaseShopItem getShopItem() {
        return shopItem;
    }

    public void setShopItem(BaseShopItem shopItem) {
        this.shopItem = shopItem;
    }

    public void setId(String id)
    {
        this.id = id;
    }

    public String getId()
    {
        return id;
    }

    public void setApplyUserId(Long applyUserId)
    {
        this.applyUserId = applyUserId;
    }

    public Long getApplyUserId()
    {
        return applyUserId;
    }
    public void setApplyTime(Date applyTime)
    {
        this.applyTime = applyTime;
    }

    public Date getApplyTime()
    {
        return applyTime;
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
            .append("shopId", getShopId())
            .append("itemId", getItemId())
            .append("applyUserId", getApplyUserId())
            .append("applyTime", getApplyTime())
            .append("applyConsultant", getApplyConsultant())
            .append("status", getStatus())
            .append("createTime", getCreateTime())
            .toString();
    }
}
