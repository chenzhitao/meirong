package com.jiumi.baseconfig.domain;

import com.jiumi.common.annotation.Excel;
import com.jiumi.common.core.domain.BaseEntity;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

/**
 * 用户地址对象 base_user_address
 *
 * @author jiumi
 * @date 2021-09-19
 */
@ApiModel(value = "BaseUserAddress", description = "用户地址")
public class BaseUserAddress extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** ID */
    private String id;

    /** 用户ID */
    @Excel(name = "用户ID")
    private Long userId;

    /** 收件人名字 */
    @ApiModelProperty("收件人名字")
    @Excel(name = "收件人名字")
    private String userName;

    /** 用户邮寄地址 */
    @ApiModelProperty("详细地址")
    @Excel(name = "详细地址")
    private String address;

    /** 电话 */
    @Excel(name = "电话")
    @ApiModelProperty("手机号码")
    private String phone;

    /** 所在地区 */
    @ApiModelProperty("所在地区")
    @Excel(name = "所在地区")
    private String district;

    /** 是否是默认地址 */
    @ApiModelProperty("是否是默认地址")
    @Excel(name = "是否是默认地址")
    private String defaultFlag;

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
    public void setUserName(String userName)
    {
        this.userName = userName;
    }

    public String getUserName()
    {
        return userName;
    }
    public void setAddress(String address)
    {
        this.address = address;
    }

    public String getAddress()
    {
        return address;
    }
    public void setPhone(String phone)
    {
        this.phone = phone;
    }

    public String getPhone()
    {
        return phone;
    }
    public void setDistrict(String district)
    {
        this.district = district;
    }

    public String getDistrict()
    {
        return district;
    }
    public void setDefaultFlag(String defaultFlag)
    {
        this.defaultFlag = defaultFlag;
    }

    public String getDefaultFlag()
    {
        return defaultFlag;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.MULTI_LINE_STYLE)
            .append("id", getId())
            .append("userId", getUserId())
            .append("userName", getUserName())
            .append("address", getAddress())
            .append("phone", getPhone())
            .append("district", getDistrict())
            .append("defaultFlag", getDefaultFlag())
            .append("remark", getRemark())
            .append("createBy", getCreateBy())
            .append("createTime", getCreateTime())
            .append("updateBy", getUpdateBy())
            .append("updateTime", getUpdateTime())
            .toString();
    }
}
