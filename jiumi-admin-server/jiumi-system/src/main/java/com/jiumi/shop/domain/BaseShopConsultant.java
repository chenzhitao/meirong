package com.jiumi.shop.domain;

import com.jiumi.common.annotation.Excel;
import com.jiumi.common.core.domain.BaseEntity;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

/**
 * 顾问对象 base_shop_consultant
 *
 * @author jiumi
 * @date 2021-11-19
 */
public class BaseShopConsultant extends BaseEntity
{
    private static final long serialVersionUID = 1L;



    /** 顾问ID */
    @Excel(name = "顾问ID")
    private Long userId;

    /** 顾问姓名 */
    @Excel(name = "顾问姓名")
    private String userName;


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

    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.MULTI_LINE_STYLE)
            .append("userId", getUserId())
            .append("userName", getUserName())
            .toString();
    }
}
