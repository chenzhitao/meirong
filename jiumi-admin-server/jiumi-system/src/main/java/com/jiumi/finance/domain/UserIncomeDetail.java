package com.jiumi.finance.domain;

import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.jiumi.common.annotation.Excel;
import com.jiumi.common.core.domain.BaseEntity;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

/**
 * 用户入账记录对象 user_income_detail
 *
 * @author jiumi
 * @date 2021-11-26
 */
public class UserIncomeDetail extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** ID */
    private Long id;

    /** 用户ID */
    @Excel(name = "用户ID")
    private Long userId;

    @Excel(name = "用户姓名")
    private String userName;

    /** 账户金额 */
    @Excel(name = "账户金额")
    private Double accountAmount;

    /** 入账金额 */
    @Excel(name = "入账金额")
    private Double incomeAmount;

    /** 入账时间 */
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @Excel(name = "入账时间", width = 30, dateFormat = "yyyy-MM-dd HH:mm:ss")
    private Date incomeTime;
    private String beginTime;
    private String endTime;



    /** 入账类型 */
    @Excel(name = "入账类型",readConverterExp = "01=推广佣金")
    private String incomeType;

    /** 入账描述 */
    @Excel(name = "入账描述")
    private String incomeDesc;

    private Long sourceUserId;
    private String sourceUserName;
    private String sourceUserAvatar;

    private String sourceShop;

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getSourceShop() {
        return sourceShop;
    }

    public void setSourceShop(String sourceShop) {
        this.sourceShop = sourceShop;
    }

    public Long getSourceUserId() {
        return sourceUserId;
    }

    public void setSourceUserId(Long sourceUserId) {
        this.sourceUserId = sourceUserId;
    }

    public String getSourceUserName() {
        return sourceUserName;
    }

    public void setSourceUserName(String sourceUserName) {
        this.sourceUserName = sourceUserName;
    }

    public String getSourceUserAvatar() {
        return sourceUserAvatar;
    }

    public void setSourceUserAvatar(String sourceUserAvatar) {
        this.sourceUserAvatar = sourceUserAvatar;
    }

    public String getBeginTime() {
        return beginTime;
    }

    public void setBeginTime(String beginTime) {
        this.beginTime = beginTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

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
    public void setAccountAmount(Double accountAmount)
    {
        this.accountAmount = accountAmount;
    }

    public Double getAccountAmount()
    {
        return accountAmount;
    }
    public void setIncomeAmount(Double incomeAmount)
    {
        this.incomeAmount = incomeAmount;
    }

    public Double getIncomeAmount()
    {
        return incomeAmount;
    }
    public void setIncomeTime(Date incomeTime)
    {
        this.incomeTime = incomeTime;
    }

    public Date getIncomeTime()
    {
        return incomeTime;
    }
    public void setIncomeType(String incomeType)
    {
        this.incomeType = incomeType;
    }

    public String getIncomeType()
    {
        return incomeType;
    }
    public void setIncomeDesc(String incomeDesc)
    {
        this.incomeDesc = incomeDesc;
    }

    public String getIncomeDesc()
    {
        return incomeDesc;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.MULTI_LINE_STYLE)
            .append("id", getId())
            .append("userId", getUserId())
            .append("accountAmount", getAccountAmount())
            .append("incomeAmount", getIncomeAmount())
            .append("incomeTime", getIncomeTime())
            .append("incomeType", getIncomeType())
            .append("incomeDesc", getIncomeDesc())
            .append("createBy", getCreateBy())
            .append("createTime", getCreateTime())
            .append("updateBy", getUpdateBy())
            .append("updateTime", getUpdateTime())
            .toString();
    }
}
