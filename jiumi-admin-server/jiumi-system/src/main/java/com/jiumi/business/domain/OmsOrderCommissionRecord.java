package com.jiumi.business.domain;

import java.math.BigDecimal;
import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.jiumi.common.annotation.Excel;
import com.jiumi.common.core.domain.BaseEntity;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;


/**
 * 返佣记录对象 oms_order_commission_record
 *
 * @author jiumi
 * @date 2021-12-22
 */
public class OmsOrderCommissionRecord extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** id */
    private String id;

    /** 用户ID */
    @Excel(name = "用户ID")
    private Long userId;

    /** 用户名 */
    @Excel(name = "用户名")
    private String userName;

    /** 订单ID */
    @Excel(name = "订单ID")
    private Long orderId;

    /** 订单金额 */
    @Excel(name = "订单金额")
    private BigDecimal orderAmount;

    /** 返佣比例 */
    @Excel(name = "返佣比例")
    private BigDecimal commissionPercent;

    /** 返佣金额 */
    @Excel(name = "返佣金额")
    private String commissionAmount;

    /** 支付日期 */
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Excel(name = "支付日期", width = 30, dateFormat = "yyyy-MM-dd")
    private Date payTime;

    /** 顾客ID */
    @Excel(name = "顾客ID")
    private Long customerId;

    /** 支付方式 */
    @Excel(name = "支付方式")
    private String payType;

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
    public void setUserName(String userName)
    {
        this.userName = userName;
    }

    public String getUserName()
    {
        return userName;
    }
    public void setOrderId(Long orderId)
    {
        this.orderId = orderId;
    }

    public Long getOrderId()
    {
        return orderId;
    }
    public void setOrderAmount(BigDecimal orderAmount)
    {
        this.orderAmount = orderAmount;
    }

    public BigDecimal getOrderAmount()
    {
        return orderAmount;
    }
    public void setCommissionPercent(BigDecimal commissionPercent)
    {
        this.commissionPercent = commissionPercent;
    }

    public BigDecimal getCommissionPercent()
    {
        return commissionPercent;
    }
    public void setCommissionAmount(String commissionAmount)
    {
        this.commissionAmount = commissionAmount;
    }

    public String getCommissionAmount()
    {
        return commissionAmount;
    }
    public void setPayTime(Date payTime)
    {
        this.payTime = payTime;
    }

    public Date getPayTime()
    {
        return payTime;
    }
    public void setCustomerId(Long customerId)
    {
        this.customerId = customerId;
    }

    public Long getCustomerId()
    {
        return customerId;
    }
    public void setPayType(String payType)
    {
        this.payType = payType;
    }

    public String getPayType()
    {
        return payType;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.MULTI_LINE_STYLE)
            .append("id", getId())
            .append("userId", getUserId())
            .append("userName", getUserName())
            .append("orderId", getOrderId())
            .append("orderAmount", getOrderAmount())
            .append("commissionPercent", getCommissionPercent())
            .append("commissionAmount", getCommissionAmount())
            .append("payTime", getPayTime())
            .append("customerId", getCustomerId())
            .append("payType", getPayType())
            .toString();
    }
}
