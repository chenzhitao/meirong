package com.jiumi.baseconfig.domain;

import com.jiumi.common.annotation.Excel;
import com.jiumi.common.core.domain.BaseEntity;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

/**
 * 品牌介绍对象 base_brand_detail
 *
 * @author jiumi
 * @date 2021-12-21
 */
public class BaseBrandDetail extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** ID */
    private Long id;

    /** 点评标题 */
    @Excel(name = "点评标题")
    private String title;

    /** 顶部图片 */
    @Excel(name = "顶部图片")
    private String topImg;

    /** 介绍图片 */
    @Excel(name = "介绍图片")
    private String detailImg;

    /** 点评内容 */
    @Excel(name = "点评内容")
    private String content;

    /** 状态 */
    @Excel(name = "状态")
    private String status;

    public void setId(Long id)
    {
        this.id = id;
    }

    public Long getId()
    {
        return id;
    }
    public void setTitle(String title)
    {
        this.title = title;
    }

    public String getTitle()
    {
        return title;
    }
    public void setTopImg(String topImg)
    {
        this.topImg = topImg;
    }

    public String getTopImg()
    {
        return topImg;
    }
    public void setDetailImg(String detailImg)
    {
        this.detailImg = detailImg;
    }

    public String getDetailImg()
    {
        return detailImg;
    }
    public void setContent(String content)
    {
        this.content = content;
    }

    public String getContent()
    {
        return content;
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
        return new ToStringBuilder(this, ToStringStyle.MULTI_LINE_STYLE)
            .append("id", getId())
            .append("title", getTitle())
            .append("topImg", getTopImg())
            .append("detailImg", getDetailImg())
            .append("content", getContent())
            .append("status", getStatus())
            .append("createTime", getCreateTime())
            .append("createBy", getCreateBy())
            .append("updateTime", getUpdateTime())
            .append("updateBy", getUpdateBy())
            .toString();
    }
}
