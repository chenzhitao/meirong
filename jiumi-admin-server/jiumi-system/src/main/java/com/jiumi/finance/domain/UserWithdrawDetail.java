package com.jiumi.finance.domain;

import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.jiumi.common.annotation.Excel;
import com.jiumi.common.core.domain.BaseEntity;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;

/**
 * 用户提现记录对象 user_withdraw_detail
 *
 * @author jiumi
 * @date 2021-11-26
 */
public class UserWithdrawDetail extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** ID */
    private Long id;

    /** 用户ID */
    @Excel(name = "用户ID")
    private Long userId;

    /** 提现人姓名 */
    @Excel(name = "提现人姓名")
    private String userName;

    private int payType;
    private String alipayAccount;

    private String bankName;
    private String bankAccount;

    public int getPayType() {
        return payType;
    }

    public void setPayType(int payType) {
        this.payType = payType;
    }

    public String getAlipayAccount() {
        return alipayAccount;
    }

    public void setAlipayAccount(String alipayAccount) {
        this.alipayAccount = alipayAccount;
    }


    public String getBankName() {
        return bankName;
    }

    public void setBankName(String bankName) {
        this.bankName = bankName;
    }

    public String getBankAccount() {
        return bankAccount;
    }

    public void setBankAccount(String bankAccount) {
        this.bankAccount = bankAccount;
    }

    /** 账户金额 */
    @Excel(name = "账户金额")
    private double accountAmount;

    /** 提现金额 */
    @Excel(name = "提现金额")
    private double withdrawAmount;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @Excel(name = "打款时间", width = 30, dateFormat = "yyyy-MM-dd HH:mm:ss")
    private Date paymentTime;
    //打款人
    private String paymentUser;

    public Date getPaymentTime() {
        return paymentTime;
    }

    public void setPaymentTime(Date paymentTime) {
        this.paymentTime = paymentTime;
    }

    public String getPaymentUser() {
        return paymentUser;
    }

    public void setPaymentUser(String paymentUser) {
        this.paymentUser = paymentUser;
    }

    /** 申请时间 */
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @Excel(name = "申请时间", width = 30, dateFormat = "yyyy-MM-dd HH:mm:ss")
    private Date applyTime;

    /** 申请状态 */
    @Excel(name = "申请状态",readConverterExp = "01=提交申请,02=审核通过,03=拒绝提现")
    private String applyStatus;

    /** 审核人 */
    @Excel(name = "审核人")
    private String approveUser;

    /** 审核时间 */
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Excel(name = "审核时间", width = 30, dateFormat = "yyyy-MM-dd")
    private Date approveTime;

    /** 拒绝原因 */
    @Excel(name = "拒绝原因")
    private String backReason;

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
    public void setAccountAmount(double accountAmount)
    {
        this.accountAmount = accountAmount;
    }

    public double getAccountAmount()
    {
        return accountAmount;
    }
    public void setWithdrawAmount(double withdrawAmount)
    {
        this.withdrawAmount = withdrawAmount;
    }

    public double getWithdrawAmount()
    {
        return withdrawAmount;
    }
    public void setApplyTime(Date applyTime)
    {
        this.applyTime = applyTime;
    }

    public Date getApplyTime()
    {
        return applyTime;
    }
    public void setApplyStatus(String applyStatus)
    {
        this.applyStatus = applyStatus;
    }

    public String getApplyStatus()
    {
        return applyStatus;
    }
    public void setApproveUser(String approveUser)
    {
        this.approveUser = approveUser;
    }

    public String getApproveUser()
    {
        return approveUser;
    }
    public void setApproveTime(Date approveTime)
    {
        this.approveTime = approveTime;
    }

    public Date getApproveTime()
    {
        return approveTime;
    }
    public void setBackReason(String backReason)
    {
        this.backReason = backReason;
    }

    public String getBackReason()
    {
        return backReason;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this,ToStringStyle.MULTI_LINE_STYLE)
            .append("id", getId())
            .append("userId", getUserId())
            .append("userName", getUserName())
            .append("accountAmount", getAccountAmount())
            .append("withdrawAmount", getWithdrawAmount())
            .append("applyTime", getApplyTime())
            .append("applyStatus", getApplyStatus())
            .append("approveUser", getApproveUser())
            .append("approveTime", getApproveTime())
            .append("backReason", getBackReason())
            .append("createBy", getCreateBy())
            .append("createTime", getCreateTime())
            .append("updateBy", getUpdateBy())
            .append("updateTime", getUpdateTime())
            .toString();
    }
}
