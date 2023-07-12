package com.jiumi.shop.domain;

import com.jiumi.common.annotation.Excel;
import com.jiumi.common.core.domain.BaseEntity;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

import java.util.List;

/**
 * 门店对象 base_shop_info
 *
 * @author jiumi
 * @date 2021-11-19
 */
public class BaseShopInfo extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** ID */
    private String id;

    /** 店铺名称 */
    @Excel(name = "店铺名称")
    private String shopName;

    /** 店铺描述 */
    @Excel(name = "店铺描述")
    private String shopDetail;

    /** 地址 */
    @Excel(name = "地址")
    private String address;

    /** 联系人 */
    @Excel(name = "联系人")
    private String contact;

    /** 联系电话 */
    @Excel(name = "联系电话")
    private String phone;

    /** 状态 */
    @Excel(name = "状态")
    private String status;

    /**
     * 上架项目数据
     */
    private List<BaseShopItemConsultant> baseShopItemConsultantList;

    public void setId(String id)
    {
        this.id = id;
    }

    public String getId()
    {
        return id;
    }
    public void setShopName(String shopName)
    {
        this.shopName = shopName;
    }

    public String getShopName()
    {
        return shopName;
    }
    public void setShopDetail(String shopDetail)
    {
        this.shopDetail = shopDetail;
    }

    public String getShopDetail()
    {
        return shopDetail;
    }
    public void setAddress(String address)
    {
        this.address = address;
    }

    public String getAddress()
    {
        return address;
    }
    public void setContact(String contact)
    {
        this.contact = contact;
    }

    public String getContact()
    {
        return contact;
    }
    public void setPhone(String phone)
    {
        this.phone = phone;
    }

    public String getPhone()
    {
        return phone;
    }
    public void setStatus(String status)
    {
        this.status = status;
    }

    public String getStatus()
    {
        return status;
    }

    public List<BaseShopItemConsultant> getBaseShopItemConsultantList() {
        return baseShopItemConsultantList;
    }

    public void setBaseShopItemConsultantList(List<BaseShopItemConsultant> baseShopItemConsultantList) {
        this.baseShopItemConsultantList = baseShopItemConsultantList;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this,ToStringStyle.MULTI_LINE_STYLE)
            .append("id", getId())
            .append("shopName", getShopName())
            .append("shopDetail", getShopDetail())
            .append("address", getAddress())
            .append("contact", getContact())
            .append("phone", getPhone())
            .append("status", getStatus())
            .append("createTime", getCreateTime())
            .append("createBy", getCreateBy())
            .append("updateTime", getUpdateTime())
            .append("updateBy", getUpdateBy())
            .toString();
    }
}
