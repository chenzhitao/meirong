package com.jiumi.baseconfig.domain;

import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.jiumi.common.annotation.Excel;
import com.jiumi.common.core.domain.BaseEntity;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

/**
 * 问题管理对象 base_article
 *
 * @author jiumi
 * @date 2021-09-05
 */
public class BaseArticle extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** ID */
    private String id;

    /** 标题 */
    @Excel(name = "标题")
    private String title;


    private String type;

    /** 关键字 */
    @Excel(name = "关键字")
    private String words;

    /** 内容 */
    private String content;

    /** 状态是否可用 */
    @Excel(name = "状态是否可用")
    private String status;

    /** 排序 */
    @Excel(name = "排序")
    private Long sortNo;

    /** 发布人 */
    @Excel(name = "发布人")
    private String publishBy;

    /** 图片路径 */
    @Excel(name = "图片路径")
    private String imgUrl;


    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setImgUrl(String imgUrl)
    {
        this.imgUrl = imgUrl;
    }

    public String getImgUrl()
    {
        return imgUrl;
    }

    /** 发布时间 */
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Excel(name = "发布时间", width = 30, dateFormat = "yyyy-MM-dd")
    private Date publishTime;

    public void setId(String id)
    {
        this.id = id;
    }

    public String getId()
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
    public void setWords(String words)
    {
        this.words = words;
    }

    public String getWords()
    {
        return words;
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
    public void setSortNo(Long sortNo)
    {
        this.sortNo = sortNo;
    }

    public Long getSortNo()
    {
        return sortNo;
    }
    public void setPublishBy(String publishBy)
    {
        this.publishBy = publishBy;
    }

    public String getPublishBy()
    {
        return publishBy;
    }
    public void setPublishTime(Date publishTime)
    {
        this.publishTime = publishTime;
    }

    public Date getPublishTime()
    {
        return publishTime;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.MULTI_LINE_STYLE)
            .append("id", getId())
            .append("title", getTitle())
            .append("remark", getRemark())
            .append("words", getWords())
            .append("content", getContent())
            .append("status", getStatus())
            .append("sortNo", getSortNo())
            .append("createBy", getCreateBy())
            .append("createTime", getCreateTime())
            .append("updateBy", getUpdateBy())
            .append("updateTime", getUpdateTime())
            .append("publishBy", getPublishBy())
            .append("publishTime", getPublishTime())
            .toString();
    }
}
