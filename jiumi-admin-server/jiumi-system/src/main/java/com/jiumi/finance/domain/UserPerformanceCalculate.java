package com.jiumi.finance.domain;

import java.math.BigDecimal;
import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.jiumi.common.annotation.Excel;
import com.jiumi.common.core.domain.BaseEntity;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

/**
 * 技师业绩核算对象 user_performance_calculate
 *
 * @author jiumi
 * @date 2022-02-11
 */
public class UserPerformanceCalculate extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** ID */
    private Long id;

    /** 用户ID */
    @Excel(name = "用户ID")
    private Long userId;

    /** 技师姓名 */
    @Excel(name = "技师姓名")
    private String userName;

    /** 手机号 */
    @Excel(name = "手机号")
    private String userPhone;

    /** 所属分店 */
    @Excel(name = "所属分店")
    private String shopId;

    /** 订单ID */
    private Long orderId;

    /** 分店名称 */
    @Excel(name = "分店名称")
    private String shopName;

    /** 订单编号 */
    @Excel(name = "订单编号")
    private String orderCode;

    /** 支付时间 */
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Excel(name = "支付时间", width = 30, dateFormat = "yyyy-MM-dd")
    private Date payTime;

    /** 订单金额 */
    @Excel(name = "订单金额")
    private BigDecimal orderAmount;

    /** 订单备注 */
    @Excel(name = "订单备注")
    private String orderRemark;

    /** 项目提成 */
    @Excel(name = "项目提成")
    private BigDecimal itemAmount;

    /** 产品提成 */
    @Excel(name = "产品提成")
    private BigDecimal productAmount;

    /** 总提成 */
    @Excel(name = "总提成")
    private BigDecimal sumAmount;

    public void setId(Long id)
    {
        this.id = id;
    }

    public Long getId()
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
    public void setUserPhone(String userPhone)
    {
        this.userPhone = userPhone;
    }

    public String getUserPhone()
    {
        return userPhone;
    }
    public void setShopId(String shopId)
    {
        this.shopId = shopId;
    }

    public String getShopId()
    {
        return shopId;
    }
    public void setOrderId(Long orderId)
    {
        this.orderId = orderId;
    }

    public Long getOrderId()
    {
        return orderId;
    }
    public void setShopName(String shopName)
    {
        this.shopName = shopName;
    }

    public String getShopName()
    {
        return shopName;
    }
    public void setOrderCode(String orderCode)
    {
        this.orderCode = orderCode;
    }

    public String getOrderCode()
    {
        return orderCode;
    }
    public void setPayTime(Date payTime)
    {
        this.payTime = payTime;
    }

    public Date getPayTime()
    {
        return payTime;
    }
    public void setOrderAmount(BigDecimal orderAmount)
    {
        this.orderAmount = orderAmount;
    }

    public BigDecimal getOrderAmount()
    {
        return orderAmount;
    }
    public void setOrderRemark(String orderRemark)
    {
        this.orderRemark = orderRemark;
    }

    public String getOrderRemark()
    {
        return orderRemark;
    }
    public void setItemAmount(BigDecimal itemAmount)
    {
        this.itemAmount = itemAmount;
    }

    public BigDecimal getItemAmount()
    {
        return itemAmount;
    }
    public void setProductAmount(BigDecimal productAmount)
    {
        this.productAmount = productAmount;
    }

    public BigDecimal getProductAmount()
    {
        return productAmount;
    }
    public void setSumAmount(BigDecimal sumAmount)
    {
        this.sumAmount = sumAmount;
    }

    public BigDecimal getSumAmount()
    {
        return sumAmount;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.MULTI_LINE_STYLE)
            .append("id", getId())
            .append("userId", getUserId())
            .append("userName", getUserName())
            .append("userPhone", getUserPhone())
            .append("shopId", getShopId())
            .append("orderId", getOrderId())
            .append("shopName", getShopName())
            .append("orderCode", getOrderCode())
            .append("payTime", getPayTime())
            .append("orderAmount", getOrderAmount())
            .append("orderRemark", getOrderRemark())
            .append("itemAmount", getItemAmount())
            .append("productAmount", getProductAmount())
            .append("sumAmount", getSumAmount())
            .append("createBy", getCreateBy())
            .append("createTime", getCreateTime())
            .append("updateBy", getUpdateBy())
            .append("updateTime", getUpdateTime())
            .toString();
    }
}
