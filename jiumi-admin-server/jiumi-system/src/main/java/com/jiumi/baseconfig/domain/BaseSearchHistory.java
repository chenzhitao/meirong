package com.jiumi.baseconfig.domain;

import com.jiumi.common.annotation.Excel;
import com.jiumi.common.core.domain.BaseEntity;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

/**
 * 搜索历史对象 base_search_history
 *
 * @author jiumi
 * @date 2021-09-14
 */
public class BaseSearchHistory extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** ID */
    private String id;

    /** 用户ID */
    @Excel(name = "用户ID")
    private Long userId;

    /** 搜索关键字 */
    @Excel(name = "搜索关键字")
    private String words;

    /** 类型 */
    @Excel(name = "类型")
    private String type;

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
    public void setWords(String words)
    {
        this.words = words;
    }

    public String getWords()
    {
        return words;
    }
    public void setType(String type)
    {
        this.type = type;
    }

    public String getType()
    {
        return type;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.MULTI_LINE_STYLE)
            .append("id", getId())
            .append("userId", getUserId())
            .append("words", getWords())
            .append("type", getType())
            .append("createTime", getCreateTime())
            .toString();
    }
}
