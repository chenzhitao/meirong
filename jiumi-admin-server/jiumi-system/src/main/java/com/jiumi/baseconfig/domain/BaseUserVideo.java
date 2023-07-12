package com.jiumi.baseconfig.domain;

import com.jiumi.common.annotation.Excel;
import com.jiumi.common.core.domain.BaseEntity;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

/**
 * 用户购买的视频对象 base_user_video
 *
 * @author jiumi
 * @date 2021-09-28
 */
public class BaseUserVideo extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** ID */
    private String id;

    /** 用户ID */
    @Excel(name = "用户ID")
    private Long userId;

    /** 视频ID */
    @Excel(name = "视频ID")
    private Long videoId;

    /** 视频名称 */
    @Excel(name = "视频名称")
    private String videoName;

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
    public void setVideoId(Long videoId)
    {
        this.videoId = videoId;
    }

    public Long getVideoId()
    {
        return videoId;
    }
    public void setVideoName(String videoName)
    {
        this.videoName = videoName;
    }

    public String getVideoName()
    {
        return videoName;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.MULTI_LINE_STYLE)
            .append("id", getId())
            .append("userId", getUserId())
            .append("videoId", getVideoId())
            .append("videoName", getVideoName())
            .append("createTime", getCreateTime())
            .toString();
    }
}
