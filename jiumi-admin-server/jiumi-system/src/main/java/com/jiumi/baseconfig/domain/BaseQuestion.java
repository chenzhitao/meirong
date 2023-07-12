package com.jiumi.baseconfig.domain;

import com.jiumi.common.annotation.Excel;
import com.jiumi.common.core.domain.BaseEntity;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

/**
 * 问题管理对象 base_question
 *
 * @author jiumi
 * @date 2021-09-05
 */
public class BaseQuestion extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** ID */
    private String id;

    /** 标题 */
    @Excel(name = "标题")
    private String title;

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
            .toString();
    }
}
