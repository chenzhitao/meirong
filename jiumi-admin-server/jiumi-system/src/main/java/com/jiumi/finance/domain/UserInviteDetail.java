package com.jiumi.finance.domain;

import java.math.BigDecimal;
import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.jiumi.common.annotation.Excel;
import com.jiumi.common.core.domain.BaseEntity;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

/**
 * 用户邀请对象 user_invite_detail
 *
 * @author jiumi
 * @date 2021-11-26
 */
@ApiModel(value = "UserInviteDetail", description = "用户邀请记录")
public class UserInviteDetail extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** ID */
    private Long id;

    /** 用户ID */
    @Excel(name = "用户ID")
    private Long userId;

    /** 用户姓名 */
    @ApiModelProperty(name = "用户姓名")
    @Excel(name = "用户姓名")
    private String userName;

    /** 邀请人openid */
    @Excel(name = "邀请人openid")
    private String inviteOpenid;

    private String inviteHeader;

    /** 邀请人姓名 */
    @Excel(name = "邀请人姓名")
    private String inviteName;

    @ApiModelProperty(name = "邀请数量")
    private int inviteNum;

    /** 邀请时间 */
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Excel(name = "邀请时间", width = 30, dateFormat = "yyyy-MM-dd")
    private Date inviteTime;

    /** 奖励金额 */
    @ApiModelProperty(name = "奖励金额")
    @Excel(name = "奖励金额")
    private BigDecimal remardAmount;

    private Long inviteUserId;

    public Long getInviteUserId() {
        return inviteUserId;
    }

    public void setInviteUserId(Long inviteUserId) {
        this.inviteUserId = inviteUserId;
    }

    public int getInviteNum() {
        return inviteNum;
    }

    public String getInviteHeader() {
        return inviteHeader;
    }

    public void setInviteHeader(String inviteHeader) {
        this.inviteHeader = inviteHeader;
    }

    public void setInviteNum(int inviteNum) {
        this.inviteNum = inviteNum;
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
    public void setUserName(String userName)
    {
        this.userName = userName;
    }

    public String getUserName()
    {
        return userName;
    }
    public void setInviteOpenid(String inviteOpenid)
    {
        this.inviteOpenid = inviteOpenid;
    }

    public String getInviteOpenid()
    {
        return inviteOpenid;
    }
    public void setInviteName(String inviteName)
    {
        this.inviteName = inviteName;
    }

    public String getInviteName()
    {
        return inviteName;
    }
    public void setInviteTime(Date inviteTime)
    {
        this.inviteTime = inviteTime;
    }

    public Date getInviteTime()
    {
        return inviteTime;
    }
    public void setRemardAmount(BigDecimal remardAmount)
    {
        this.remardAmount = remardAmount;
    }

    public BigDecimal getRemardAmount()
    {
        return remardAmount;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this,ToStringStyle.MULTI_LINE_STYLE)
            .append("id", getId())
            .append("userId", getUserId())
            .append("userName", getUserName())
            .append("inviteOpenid", getInviteOpenid())
            .append("inviteName", getInviteName())
            .append("inviteTime", getInviteTime())
            .append("remardAmount", getRemardAmount())
            .append("createTime", getCreateTime())
            .append("createBy", getCreateBy())
            .toString();
    }
}
