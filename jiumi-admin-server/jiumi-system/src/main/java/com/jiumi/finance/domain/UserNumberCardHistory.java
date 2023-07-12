package com.jiumi.finance.domain;

import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.jiumi.common.annotation.Excel;
import com.jiumi.common.core.domain.BaseEntity;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

/**
 * 用户次卡使用记录对象 user_number_card_history
 *
 * @author jiumi
 * @date 2022-02-08
 */
public class UserNumberCardHistory extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** ID */
    private Long id;

    /** 用户ID */
    @Excel(name = "用户ID")
    private Long userId;

    private String userPhone;

    private String orderCode;

    private String cardName;
    /** 次卡ID */
    @Excel(name = "次卡ID")
    private Long cardId;

    /** 使用时间 */
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Excel(name = "使用时间", width = 30, dateFormat = "yyyy-MM-dd")
    private Date useTime;

    /** 使用次数 */
    @Excel(name = "使用次数")
    private Integer useTimes;

    /** 剩余次数 */
    @Excel(name = "剩余次数")
    private Integer lastTimes;

    /** 操作技师 */
    @Excel(name = "操作技师")
    private String operateUser;

    @Excel(name = "使用项目")
    private String shopItemName;

    public String getShopItemName() {
        return shopItemName;
    }

    public void setShopItemName(String shopItemName) {
        this.shopItemName = shopItemName;
    }

    public String getOrderCode() {
        return orderCode;
    }

    public void setOrderCode(String orderCode) {
        this.orderCode = orderCode;
    }

    public String getUserPhone() {
        return userPhone;
    }

    public void setUserPhone(String userPhone) {
        this.userPhone = userPhone;
    }

    public String getCardName() {
        return cardName;
    }

    public void setCardName(String cardName) {
        this.cardName = cardName;
    }

    public void setId(Long id)
    {
        this.id = id;
    }

    public Long getId()
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
    public void setCardId(Long cardId)
    {
        this.cardId = cardId;
    }

    public Long getCardId()
    {
        return cardId;
    }
    public void setUseTime(Date useTime)
    {
        this.useTime = useTime;
    }

    public Date getUseTime()
    {
        return useTime;
    }
    public void setUseTimes(Integer useTimes)
    {
        this.useTimes = useTimes;
    }

    public Integer getUseTimes()
    {
        return useTimes;
    }
    public void setLastTimes(Integer lastTimes)
    {
        this.lastTimes = lastTimes;
    }

    public Integer getLastTimes()
    {
        return lastTimes;
    }
    public void setOperateUser(String operateUser)
    {
        this.operateUser = operateUser;
    }

    public String getOperateUser()
    {
        return operateUser;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.MULTI_LINE_STYLE)
            .append("id", getId())
            .append("userId", getUserId())
            .append("cardId", getCardId())
            .append("useTime", getUseTime())
            .append("useTimes", getUseTimes())
            .append("lastTimes", getLastTimes())
            .append("operateUser", getOperateUser())
            .append("createBy", getCreateBy())
            .append("createTime", getCreateTime())
            .append("updateBy", getUpdateBy())
            .append("updateTime", getUpdateTime())
            .toString();
    }
}
