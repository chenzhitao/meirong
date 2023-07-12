package com.jiumi.shop.domain;

import java.math.BigDecimal;
import com.jiumi.common.annotation.Excel;
import com.jiumi.common.core.domain.BaseEntity;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

/**
 * 顾问等级对象 base_consultant_rank
 *
 * @author jiumi
 * @date 2022-03-22
 */
public class BaseConsultantRank extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** 顾问等级ID */
    @Excel(name = "顾问等级ID")
    private Long levelId;

    /** 顾问等级名称 */
    @Excel(name = "顾问等级名称")
    private String levelName;

    /** 顾问佣金比例 */
    @Excel(name = "顾问佣金比例")
    private BigDecimal commissionRatio;

    /** 是否可用 */
    @Excel(name = "是否可用")
    private String useFlag;

    public void setLevelId(Long levelId)
    {
        this.levelId = levelId;
    }

    public Long getLevelId()
    {
        return levelId;
    }
    public void setLevelName(String levelName)
    {
        this.levelName = levelName;
    }

    public String getLevelName()
    {
        return levelName;
    }
    public void setCommissionRatio(BigDecimal commissionRatio)
    {
        this.commissionRatio = commissionRatio;
    }

    public BigDecimal getCommissionRatio()
    {
        return commissionRatio;
    }
    public void setUseFlag(String useFlag)
    {
        this.useFlag = useFlag;
    }

    public String getUseFlag()
    {
        return useFlag;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.MULTI_LINE_STYLE)
            .append("levelId", getLevelId())
            .append("levelName", getLevelName())
            .append("commissionRatio", getCommissionRatio())
            .append("useFlag", getUseFlag())
            .append("createBy", getCreateBy())
            .append("createTime", getCreateTime())
            .toString();
    }
}
