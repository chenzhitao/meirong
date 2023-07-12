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
public class BaseAnalyiseVo extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** ID */
    private String id;

    private String shopIdStr;

    private String beginTime;
    private String endTime;

    /** 店铺名称 */
    @Excel(name = "统计信息")
    private String shopName;

    /** 新增会员 */
    @Excel(name = "新增会员")
    private int addNumD;

    /** 消费笔数 */
    @Excel(name = "消费笔数")
    private int buyNumD;

    @Excel(name = "消费金额")
    private double buyAmountD;

    /** 充值金额 */
    @Excel(name = "充值金额")
    private double chargeAmountD;


    /** 新增会员 */
    @Excel(name = "新增会员")
    private int addNumM;

    /** 消费笔数 */
    @Excel(name = "消费笔数")
    private int buyNumM;

    @Excel(name = "消费金额")
    private double buyAmountM;

    /** 充值金额 */
    @Excel(name = "充值金额")
    private double chargeAmountM;

    public String getShopIdStr() {
        return shopIdStr;
    }

    public void setShopIdStr(String shopIdStr) {
        this.shopIdStr = shopIdStr;
    }

    public String getBeginTime() {
        return beginTime;
    }

    public void setBeginTime(String beginTime) {
        this.beginTime = beginTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getShopName() {
        return shopName;
    }

    public void setShopName(String shopName) {
        this.shopName = shopName;
    }

    public int getAddNumD() {
        return addNumD;
    }

    public void setAddNumD(int addNumD) {
        this.addNumD = addNumD;
    }

    public int getBuyNumD() {
        return buyNumD;
    }

    public void setBuyNumD(int buyNumD) {
        this.buyNumD = buyNumD;
    }

    public double getBuyAmountD() {
        return buyAmountD;
    }

    public void setBuyAmountD(double buyAmountD) {
        this.buyAmountD = buyAmountD;
    }

    public double getChargeAmountD() {
        return chargeAmountD;
    }

    public void setChargeAmountD(double chargeAmountD) {
        this.chargeAmountD = chargeAmountD;
    }

    public int getAddNumM() {
        return addNumM;
    }

    public void setAddNumM(int addNumM) {
        this.addNumM = addNumM;
    }

    public int getBuyNumM() {
        return buyNumM;
    }

    public void setBuyNumM(int buyNumM) {
        this.buyNumM = buyNumM;
    }

    public double getBuyAmountM() {
        return buyAmountM;
    }

    public void setBuyAmountM(double buyAmountM) {
        this.buyAmountM = buyAmountM;
    }

    public double getChargeAmountM() {
        return chargeAmountM;
    }

    public void setChargeAmountM(double chargeAmountM) {
        this.chargeAmountM = chargeAmountM;
    }
}
