package com.jiumi.business.domain;

import java.math.BigDecimal;
import com.jiumi.common.annotation.Excel;
import com.jiumi.common.core.domain.BaseEntity;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

/**
 * 项目订单详情对象 oms_order_item_detail
 *
 * @author jiumi
 * @date 2022-02-07
 */
public class OmsOrderItemDetail extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** id */
    private Long id;

    /** 订单id */
    @Excel(name = "订单id")
    private Long orderId;

    /** 消费类型1消费项目2消费产品 */
    @Excel(name = "消费类型1消费项目2消费产品")
    private Integer consumerType;
    private String consumerName;

    public String getConsumerName() {
        return consumerName;
    }

    public void setConsumerName(String consumerName) {
        this.consumerName = consumerName;
    }

    /** 消费产品ID类型为1就是消费项目ID类型为2就是消费产品ID */
    @Excel(name = "消费产品ID类型为1就是消费项目ID类型为2就是消费产品ID")
    private Long consumerId;

    private OmsConsumerVO consumer;

    /** 单价 */
    @Excel(name = "单价")
    private BigDecimal price;

    /** 数量 */
    @Excel(name = "数量")
    private Integer num;

    /** 划卡次数 */
    @Excel(name = "划卡次数")
    private Integer cardNum;

    private Long cardId;

    private String subType;


    /** 技师A */
    @Excel(name = "技师A")
    private Long consultant1;

    /** 技师A佣金 */
    @Excel(name = "技师A佣金")
    private BigDecimal consultant1Amount;

    /** 技师B */
    @Excel(name = "技师B")
    private Long consultant2;

    /** 技师B佣金 */
    @Excel(name = "技师B佣金")
    private BigDecimal consultant2Amount;

    /** 技师C */
    @Excel(name = "技师C")
    private Long consultant3;

    /** 技师C佣金 */
    @Excel(name = "技师C佣金")
    private BigDecimal consultant3Amount;

    /** 最终金额 */
    @Excel(name = "最终金额")
    private BigDecimal finalAmount;

    public String getSubType() {
        return subType;
    }

    public void setSubType(String subType) {
        this.subType = subType;
    }

    public Long getCardId() {
        return cardId;
    }

    public void setCardId(Long cardId) {
        this.cardId = cardId;
    }

    public OmsConsumerVO getConsumer() {
        return consumer;
    }

    public void setConsumer(OmsConsumerVO consumer) {
        this.consumer = consumer;
    }

    public void setId(Long id)
    {
        this.id = id;
    }

    public Long getId()
    {
        return id;
    }
    public void setOrderId(Long orderId)
    {
        this.orderId = orderId;
    }

    public Long getOrderId()
    {
        return orderId;
    }
    public void setConsumerType(Integer consumerType)
    {
        this.consumerType = consumerType;
    }

    public Integer getConsumerType()
    {
        return consumerType;
    }
    public void setConsumerId(Long consumerId)
    {
        this.consumerId = consumerId;
    }

    public Long getConsumerId()
    {
        return consumerId;
    }
    public void setPrice(BigDecimal price)
    {
        this.price = price;
    }

    public BigDecimal getPrice()
    {
        return price;
    }
    public void setNum(Integer num)
    {
        this.num = num;
    }

    public Integer getNum()
    {
        return num;
    }
    public void setCardNum(Integer cardNum)
    {
        this.cardNum = cardNum;
    }

    public Integer getCardNum()
    {
        return cardNum;
    }
    public void setConsultant1(Long consultant1)
    {
        this.consultant1 = consultant1;
    }

    public Long getConsultant1()
    {
        return consultant1;
    }
    public void setConsultant1Amount(BigDecimal consultant1Amount)
    {
        this.consultant1Amount = consultant1Amount;
    }

    public BigDecimal getConsultant1Amount()
    {
        return consultant1Amount;
    }
    public void setConsultant2(Long consultant2)
    {
        this.consultant2 = consultant2;
    }

    public Long getConsultant2()
    {
        return consultant2;
    }
    public void setConsultant2Amount(BigDecimal consultant2Amount)
    {
        this.consultant2Amount = consultant2Amount;
    }

    public BigDecimal getConsultant2Amount()
    {
        return consultant2Amount;
    }
    public void setConsultant3(Long consultant3)
    {
        this.consultant3 = consultant3;
    }

    public Long getConsultant3()
    {
        return consultant3;
    }
    public void setConsultant3Amount(BigDecimal consultant3Amount)
    {
        this.consultant3Amount = consultant3Amount;
    }

    public BigDecimal getConsultant3Amount()
    {
        return consultant3Amount;
    }
    public void setFinalAmount(BigDecimal finalAmount)
    {
        this.finalAmount = finalAmount;
    }

    public BigDecimal getFinalAmount()
    {
        return finalAmount;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.MULTI_LINE_STYLE)
            .append("id", getId())
            .append("orderId", getOrderId())
            .append("consumerType", getConsumerType())
            .append("consumerId", getConsumerId())
            .append("price", getPrice())
            .append("num", getNum())
            .append("cardNum", getCardNum())
            .append("consultant1", getConsultant1())
            .append("consultant1Amount", getConsultant1Amount())
            .append("consultant2", getConsultant2())
            .append("consultant2Amount", getConsultant2Amount())
            .append("consultant3", getConsultant3())
            .append("consultant3Amount", getConsultant3Amount())
            .append("finalAmount", getFinalAmount())
            .toString();
    }
}
