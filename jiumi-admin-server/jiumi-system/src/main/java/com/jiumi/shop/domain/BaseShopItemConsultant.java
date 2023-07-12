package com.jiumi.shop.domain;

import com.jiumi.common.annotation.Excel;
import com.jiumi.common.core.domain.BaseEntity;
import com.jiumi.common.core.domain.entity.SysUser;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

import java.util.List;

/**
 * 项目顾问对象 base_shop_item_consultant
 *
 * @author jiumi
 * @date 2021-11-25
 */
public class BaseShopItemConsultant extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** ID */
    private String id;

    /** 门店ID */
    @Excel(name = "门店ID")
    private String shopId;
    private String shopName;
    /** 项目ID */
    @Excel(name = "项目ID")
    private Long itemId;

    /** 顾问ID */
    @Excel(name = "顾问ID")
    private String consultantId;

    private List<SysUser> consultantUsers;

    public List<SysUser> getConsultantUsers() {
        return consultantUsers;
    }

    public void setConsultantUsers(List<SysUser> consultantUsers) {
        this.consultantUsers = consultantUsers;
    }

    public String getShopName() {
        return shopName;
    }

    public void setShopName(String shopName) {
        this.shopName = shopName;
    }


    public void setId(String id)
    {
        this.id = id;
    }

    public String getId()
    {
        return id;
    }
    public void setShopId(String shopId)
    {
        this.shopId = shopId;
    }

    public String getShopId()
    {
        return shopId;
    }
    public void setItemId(Long itemId)
    {
        this.itemId = itemId;
    }

    public Long getItemId()
    {
        return itemId;
    }
    public void setConsultantId(String consultantId)
    {
        this.consultantId = consultantId;
    }

    public String getConsultantId()
    {
        return consultantId;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.MULTI_LINE_STYLE)
            .append("id", getId())
            .append("shopId", getShopId())
            .append("itemId", getItemId())
            .append("consultantId", getConsultantId())
            .append("createTime", getCreateTime())
            .toString();
    }
}
