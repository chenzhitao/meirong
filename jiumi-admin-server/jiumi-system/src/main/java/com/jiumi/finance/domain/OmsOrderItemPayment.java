package com.jiumi.finance.domain;

import java.math.BigDecimal;
import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.jiumi.common.annotation.Excel;
import com.jiumi.common.core.domain.BaseEntity;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

/**
 * 跨店结算对象 oms_order_item_payment
 *
 * @author jiumi
 * @date 2022-04-12
 */
public class OmsOrderItemPayment extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** ID */
    private Long id;

    /** 订单ID */
    @Excel(name = "订单ID")
    private Long orderId;

    /** 订单编号 */
    @Excel(name = "订单编号")
    private String orderCode;

    @Excel(name = "下单用户")
    private String orderUser;

    /** 下单时间 */
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Excel(name = "下单时间", width = 30, dateFormat = "yyyy-MM-dd")
    private Date orderTime;

    /** 下单店铺 */
    private String operateSourceShop;

    /** 结算店铺 */
    private String paymentSourceShop;

    /** 下单店铺名称 */
    @Excel(name = "下单店铺名称")
    private String operateSourceShopName;

    /** 结算店铺名称 */
    @Excel(name = "结算店铺名称")
    private String paymentSourceShopName;

    /** 结算状态01未结算02已结算 */
    @Excel(name = "结算状态")
    private String paymentStatus;

    /** 结算用户 */
    @Excel(name = "结算用户")
    private String paymentUser;

    /** 结算时间 */
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Excel(name = "结算时间", width = 30, dateFormat = "yyyy-MM-dd")
    private Date paymentTime;

    /** 结算金额 */
    @Excel(name = "结算金额")
    private BigDecimal paymentAmount;

    @Excel(name = "备注")
    private String remark;

    @Override
    public String getRemark() {
        return remark;
    }

    @Override
    public void setRemark(String remark) {
        this.remark = remark;
    }

    public String getOrderUser() {
        return orderUser;
    }

    public void setOrderUser(String orderUser) {
        this.orderUser = orderUser;
    }

    public void setId(Long id)
    {
        this.id = id;
    }

    public Long getId()
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
    public void setOrderCode(String orderCode)
    {
        this.orderCode = orderCode;
    }

    public String getOrderCode()
    {
        return orderCode;
    }
    public void setOrderTime(Date orderTime)
    {
        this.orderTime = orderTime;
    }

    public Date getOrderTime()
    {
        return orderTime;
    }
    public void setOperateSourceShop(String operateSourceShop)
    {
        this.operateSourceShop = operateSourceShop;
    }

    public String getOperateSourceShop()
    {
        return operateSourceShop;
    }
    public void setPaymentSourceShop(String paymentSourceShop)
    {
        this.paymentSourceShop = paymentSourceShop;
    }

    public String getPaymentSourceShop()
    {
        return paymentSourceShop;
    }
    public void setOperateSourceShopName(String operateSourceShopName)
    {
        this.operateSourceShopName = operateSourceShopName;
    }

    public String getOperateSourceShopName()
    {
        return operateSourceShopName;
    }
    public void setPaymentStatus(String paymentStatus)
    {
        this.paymentStatus = paymentStatus;
    }

    public String getPaymentStatus()
    {
        return paymentStatus;
    }
    public void setPaymentUser(String paymentUser)
    {
        this.paymentUser = paymentUser;
    }

    public String getPaymentUser()
    {
        return paymentUser;
    }
    public void setPaymentSourceShopName(String paymentSourceShopName)
    {
        this.paymentSourceShopName = paymentSourceShopName;
    }

    public String getPaymentSourceShopName()
    {
        return paymentSourceShopName;
    }
    public void setPaymentTime(Date paymentTime)
    {
        this.paymentTime = paymentTime;
    }

    public Date getPaymentTime()
    {
        return paymentTime;
    }
    public void setPaymentAmount(BigDecimal paymentAmount)
    {
        this.paymentAmount = paymentAmount;
    }

    public BigDecimal getPaymentAmount()
    {
        return paymentAmount;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.MULTI_LINE_STYLE)
            .append("id", getId())
            .append("orderId", getOrderId())
            .append("orderCode", getOrderCode())
            .append("orderTime", getOrderTime())
            .append("operateSourceShop", getOperateSourceShop())
            .append("paymentSourceShop", getPaymentSourceShop())
            .append("operateSourceShopName", getOperateSourceShopName())
            .append("paymentStatus", getPaymentStatus())
            .append("paymentUser", getPaymentUser())
            .append("paymentSourceShopName", getPaymentSourceShopName())
            .append("paymentTime", getPaymentTime())
            .append("paymentAmount", getPaymentAmount())
            .append("createTime", getCreateTime())
            .append("createBy", getCreateBy())
            .append("updateTime", getUpdateTime())
            .append("updateBy", getUpdateBy())
            .toString();
    }
}
