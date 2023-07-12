package com.jiumi.business.domain;

import java.math.BigDecimal;
import com.jiumi.common.annotation.Excel;
import com.jiumi.common.core.domain.BaseEntity;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

/**
 * 会员登记配置对象 oms_vip_info
 *
 * @author jiumi
 * @date 2021-12-23
 */
public class OmsVipInfo extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** VIP登记 */
    private Long vipLevel;

    /** vip名称 */
    @Excel(name = "vip名称")
    private String vipName;

    /** 充值金额 */
    @Excel(name = "充值金额")
    private BigDecimal rechargeAmount;

    /** 充值金额 */
    @Excel(name = "充值金额")
    private String discount;

    /** 展示头像 */
    @Excel(name = "展示头像")
    private String vipImg;

    /** 是否可用Y是N否 */
    @Excel(name = "是否可用Y是N否")
    private String status;

    public void setVipLevel(Long vipLevel)
    {
        this.vipLevel = vipLevel;
    }

    public Long getVipLevel()
    {
        return vipLevel;
    }
    public void setVipName(String vipName)
    {
        this.vipName = vipName;
    }

    public String getVipName()
    {
        return vipName;
    }
    public void setRechargeAmount(BigDecimal rechargeAmount)
    {
        this.rechargeAmount = rechargeAmount;
    }

    public BigDecimal getRechargeAmount()
    {
        return rechargeAmount;
    }
    public void setDiscount(String discount)
    {
        this.discount = discount;
    }

    public String getDiscount()
    {
        return discount;
    }
    public void setVipImg(String vipImg)
    {
        this.vipImg = vipImg;
    }

    public String getVipImg()
    {
        return vipImg;
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
            .append("vipLevel", getVipLevel())
            .append("vipName", getVipName())
            .append("rechargeAmount", getRechargeAmount())
            .append("discount", getDiscount())
            .append("vipImg", getVipImg())
            .append("remark", getRemark())
            .append("status", getStatus())
            .toString();
    }
}
