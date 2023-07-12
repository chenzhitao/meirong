package com.jiumi.business.domain;

import com.jiumi.common.annotation.Excel;
import com.jiumi.common.core.domain.BaseEntity;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

/**
 * 项目订单详情对象 oms_order_item_detail
 *
 * @author jiumi
 * @date 2022-02-07
 */
public class OmsConsumerVO extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** id */
    private Long id;

    /** 单价 */
    @Excel(name = "单价")
    private BigDecimal price;
    private BigDecimal discountPrice;

    private Long cardId;

    private int lastTimes;

    private String name;

    private List<Map> sub1;
    private List<Map> sub2;

    private List<Map> sub3;

    public BigDecimal getDiscountPrice() {
        return discountPrice;
    }

    public void setDiscountPrice(BigDecimal discountPrice) {
        this.discountPrice = discountPrice;
    }

    public List<Map> getSub1() {
        return sub1;
    }

    public void setSub1(List<Map> sub1) {
        this.sub1 = sub1;
    }

    public List<Map> getSub2() {
        return sub2;
    }

    public void setSub2(List<Map> sub2) {
        this.sub2 = sub2;
    }

    public List<Map> getSub3() {
        return sub3;
    }

    public void setSub3(List<Map> sub3) {
        this.sub3 = sub3;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public Long getCardId() {
        return cardId;
    }

    public void setCardId(Long cardId) {
        this.cardId = cardId;
    }

    public int getLastTimes() {
        return lastTimes;
    }

    public void setLastTimes(int lastTimes) {
        this.lastTimes = lastTimes;
    }
}
