package com.jiumi.baseconfig.domain;

import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.jiumi.common.annotation.Excel;
import com.jiumi.common.core.domain.BaseEntity;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

/**
 * 用户业务消息对象 base_user_msg
 *
 * @author jiumi
 * @date 2021-09-19
 */
public class BaseUserMsg extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** ID */
    private String id;

    /** 用户的id */
    @Excel(name = "用户的id")
    private Long userId;

    /** 消息类型 */
    @Excel(name = "消息类型")
    private String msgType;

    /** 消息标题 */
    @Excel(name = "消息标题")
    private String msgTitle;

    /** 消息内容 */
    @Excel(name = "消息内容")
    private String msgContent;

    /** 消息状态 */
    @Excel(name = "消息状态")
    private String msgState;

    /** 消息创建时间 */
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Excel(name = "消息创建时间", width = 30, dateFormat = "yyyy-MM-dd")
    private Date msgCreateTime;

    /** 消息阅读时间 */
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Excel(name = "消息阅读时间", width = 30, dateFormat = "yyyy-MM-dd")
    private Date msgReadTime;

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
    public void setMsgType(String msgType)
    {
        this.msgType = msgType;
    }

    public String getMsgType()
    {
        return msgType;
    }
    public void setMsgTitle(String msgTitle)
    {
        this.msgTitle = msgTitle;
    }

    public String getMsgTitle()
    {
        return msgTitle;
    }
    public void setMsgContent(String msgContent)
    {
        this.msgContent = msgContent;
    }

    public String getMsgContent()
    {
        return msgContent;
    }
    public void setMsgState(String msgState)
    {
        this.msgState = msgState;
    }

    public String getMsgState()
    {
        return msgState;
    }
    public void setMsgCreateTime(Date msgCreateTime)
    {
        this.msgCreateTime = msgCreateTime;
    }

    public Date getMsgCreateTime()
    {
        return msgCreateTime;
    }
    public void setMsgReadTime(Date msgReadTime)
    {
        this.msgReadTime = msgReadTime;
    }

    public Date getMsgReadTime()
    {
        return msgReadTime;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.MULTI_LINE_STYLE)
            .append("id", getId())
            .append("userId", getUserId())
            .append("msgType", getMsgType())
            .append("msgTitle", getMsgTitle())
            .append("msgContent", getMsgContent())
            .append("msgState", getMsgState())
            .append("msgCreateTime", getMsgCreateTime())
            .append("msgReadTime", getMsgReadTime())
            .toString();
    }
}
