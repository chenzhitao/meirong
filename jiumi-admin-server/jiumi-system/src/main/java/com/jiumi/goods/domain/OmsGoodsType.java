package com.jiumi.goods.domain;

import com.jiumi.common.annotation.Excel;
import com.jiumi.common.core.domain.BaseEntity;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

/**
 * 商品类型对象 oms_goods_type
 *
 * @author jiumi
 * @date 2021-11-19
 */
public class OmsGoodsType extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** $column.columnComment */
    private String id;

    /** 商品名称 */
    @Excel(name = "商品名称")
    private String typeName;

    /** 商品描述 */
    @Excel(name = "商品描述")
    private String typeDesc;

    /** 商品数量 */
    @Excel(name = "商品数量")
    private Long goodsNum;

    /** 是否可用 */
    @Excel(name = "是否可用")
    private String status;

    /** 排序编号 */
    @Excel(name = "排序编号")
    private Long sortNo;

    public void setId(String id)
    {
        this.id = id;
    }

    public String getId()
    {
        return id;
    }
    public void setTypeName(String typeName)
    {
        this.typeName = typeName;
    }

    public String getTypeName()
    {
        return typeName;
    }
    public void setTypeDesc(String typeDesc)
    {
        this.typeDesc = typeDesc;
    }

    public String getTypeDesc()
    {
        return typeDesc;
    }
    public void setGoodsNum(Long goodsNum)
    {
        this.goodsNum = goodsNum;
    }

    public Long getGoodsNum()
    {
        return goodsNum;
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
        return new ToStringBuilder(this,ToStringStyle.MULTI_LINE_STYLE)
            .append("id", getId())
            .append("typeName", getTypeName())
            .append("typeDesc", getTypeDesc())
            .append("goodsNum", getGoodsNum())
            .append("status", getStatus())
            .append("sortNo", getSortNo())
            .append("createTime", getCreateTime())
            .append("createBy", getCreateBy())
            .toString();
    }
}
