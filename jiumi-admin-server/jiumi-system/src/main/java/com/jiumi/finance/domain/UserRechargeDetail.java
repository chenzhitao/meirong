package com.jiumi.finance.domain;

import java.math.BigDecimal;
import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.jiumi.common.annotation.Excel;
import com.jiumi.common.core.domain.BaseEntity;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

/**
 * 用户充值记录对象 user_recharge_detail
 *
 * @author jiumi
 * @date 2021-12-23
 */
public class UserRechargeDetail extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** ID */
    private String id;

    /** 用户ID */
    @Excel(name = "用户ID")
    private Long userId;

    /** 用户名 */
    @Excel(name = "用户名")
    private String userName;

    /** 账户金额 */
    @Excel(name = "账户金额")
    private BigDecimal accountAmount;

    /** 入账金额 */
    @Excel(name = "入账金额")
    private BigDecimal rechargeAmount;

    /** vip变更等级 */
    @Excel(name = "vip变更等级")
    private Long vipLevel;

    /** 入账时间 */
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @Excel(name = "入账时间", width = 30, dateFormat = "yyyy-MM-dd HH:mm:ss")
    private Date rechargeTime;

    /** 入账描述 */
    @Excel(name = "入账描述")
    private String rechargeDesc;

    /**
     * 充值类型
     */
    private String rechargeType;


    private String paymentType;

    private String address;
    private String phone;
    private String phonenumber;

    public String getPhonenumber() {
        return phonenumber;
    }

    public void setPhonenumber(String phonenumber) {
        this.phonenumber = phonenumber;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getPaymentType() {
        return paymentType;
    }

    public void setPaymentType(String paymentType) {
        this.paymentType = paymentType;
    }

    public String getRechargeType() {
        return rechargeType;
    }

    public void setRechargeType(String rechargeType) {
        this.rechargeType = rechargeType;
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
    public void setUserName(String userName)
    {
        this.userName = userName;
    }

    public String getUserName()
    {
        return userName;
    }
    public void setAccountAmount(BigDecimal accountAmount)
    {
        this.accountAmount = accountAmount;
    }

    public BigDecimal getAccountAmount()
    {
        return accountAmount;
    }
    public void setRechargeAmount(BigDecimal rechargeAmount)
    {
        this.rechargeAmount = rechargeAmount;
    }

    public BigDecimal getRechargeAmount()
    {
        return rechargeAmount;
    }
    public void setVipLevel(Long vipLevel)
    {
        this.vipLevel = vipLevel;
    }

    public Long getVipLevel()
    {
        return vipLevel;
    }
    public void setRechargeTime(Date rechargeTime)
    {
        this.rechargeTime = rechargeTime;
    }

    public Date getRechargeTime()
    {
        return rechargeTime;
    }
    public void setRechargeDesc(String rechargeDesc)
    {
        this.rechargeDesc = rechargeDesc;
    }

    public String getRechargeDesc()
    {
        return rechargeDesc;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.MULTI_LINE_STYLE)
            .append("id", getId())
            .append("userId", getUserId())
            .append("userName", getUserName())
            .append("accountAmount", getAccountAmount())
            .append("rechargeAmount", getRechargeAmount())
            .append("vipLevel", getVipLevel())
            .append("rechargeTime", getRechargeTime())
            .append("rechargeDesc", getRechargeDesc())
            .append("createBy", getCreateBy())
            .append("createTime", getCreateTime())
            .append("updateBy", getUpdateBy())
            .append("updateTime", getUpdateTime())
            .toString();
    }
}
