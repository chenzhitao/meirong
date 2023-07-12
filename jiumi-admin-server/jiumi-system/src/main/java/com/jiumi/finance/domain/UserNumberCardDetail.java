package com.jiumi.finance.domain;

import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.jiumi.common.annotation.Excel;
import com.jiumi.common.core.domain.BaseEntity;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

/**
 * 购买次卡记录对象 user_number_card_detail
 *
 * @author jiumi
 * @date 2022-02-08
 */
public class UserNumberCardDetail extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** ID */
    private Long id;

    /** 用户ID */
    @Excel(name = "用户ID")
    private Long userId;

    private String userPhone;

    private String cardName;
    /** 次卡ID */
    @Excel(name = "次卡ID")
    private Long cardId;

    /** 购买时间 */
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Excel(name = "购买时间", width = 30, dateFormat = "yyyy-MM-dd")
    private Date buyTime;

    /** 生效时间 */
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Excel(name = "生效时间", width = 30, dateFormat = "yyyy-MM-dd")
    private Date beginTime;

    /** 截至时间 */
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Excel(name = "截至时间", width = 30, dateFormat = "yyyy-MM-dd")
    private Date endTime;

    /** 总次数 */
    @Excel(name = "总次数")
    private Integer totalTimes;

    /** 使用次数 */
    @Excel(name = "使用次数")
    private Integer useTimes;

    /** 剩余次数 */
    @Excel(name = "剩余次数")
    private Integer lastTimes;

    private String itemName;

    private String orderCode;

    public String getOrderCode() {
        return orderCode;
    }

    public void setOrderCode(String orderCode) {
        this.orderCode = orderCode;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
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
    public void setBuyTime(Date buyTime)
    {
        this.buyTime = buyTime;
    }

    public Date getBuyTime()
    {
        return buyTime;
    }
    public void setBeginTime(Date beginTime)
    {
        this.beginTime = beginTime;
    }

    public Date getBeginTime()
    {
        return beginTime;
    }
    public void setEndTime(Date endTime)
    {
        this.endTime = endTime;
    }

    public Date getEndTime()
    {
        return endTime;
    }
    public void setTotalTimes(Integer totalTimes)
    {
        this.totalTimes = totalTimes;
    }

    public Integer getTotalTimes()
    {
        return totalTimes;
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

    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.MULTI_LINE_STYLE)
            .append("id", getId())
            .append("userId", getUserId())
            .append("cardId", getCardId())
            .append("buyTime", getBuyTime())
            .append("beginTime", getBeginTime())
            .append("endTime", getEndTime())
            .append("totalTimes", getTotalTimes())
            .append("useTimes", getUseTimes())
            .append("lastTimes", getLastTimes())
            .append("createBy", getCreateBy())
            .append("createTime", getCreateTime())
            .append("updateBy", getUpdateBy())
            .append("updateTime", getUpdateTime())
            .toString();
    }
}
