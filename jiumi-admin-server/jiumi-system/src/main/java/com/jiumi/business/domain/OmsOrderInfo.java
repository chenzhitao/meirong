package com.jiumi.business.domain;

import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.jiumi.common.annotation.Excel;
import com.jiumi.common.core.domain.BaseEntity;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

/**
 * 订单对象 oms_order_info
 *
 * @author jiumi
 * @date 2021-11-25
 */
@ApiModel(value = "OmsOrderInfo", description = "订单")
public class OmsOrderInfo extends BaseEntity {
    private static final long serialVersionUID = 1L;

    /**
     * ID
     */
    private String id;

    /**
     * 门店ID
     */
    private String shopId;
    /**
     * 用户ID
     */
    @Excel(name = "用户ID")
    private Long userId;

    /**
     * 购买用户
     */
    @Excel(name = "购买用户")
    private String userName;

    /**
     * 商品名称
     */
    @Excel(name = "商品名称")
    private String productName;

    private int productNum;

    /**
     * 订单编号
     */
    @Excel(name = "订单编号")
    private String orderCode;

    /**
     * 下单时间
     */
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @Excel(name = "下单时间", width = 30, dateFormat = "yyyy-MM-dd HH:mm:ss")
    private Date orderTime;

    /**
     * 微信支付下单号
     */
    @Excel(name = "微信支付下单号")
    private String outTradeNo;

    /**
     * 订单类型01商品
     */
    @Excel(name = "订单类型01商品")
    private String orderType;


    /**
     * 订单金额
     */
    @Excel(name = "订单金额")
    private double orderAmount;

    /**
     * 运费
     */
    @Excel(name = "运费")
    private double freightAmount;
    private String freightRemark;

    /**
     * 总金额
     */
    @Excel(name = "总金额")
    private double sumAmount;
    /**
     * 消费类型
     */
    private String consumeType;


    public String getConsumeType() {
        return consumeType;
    }

    public void setConsumeType(String consumeType) {
        this.consumeType = consumeType;
    }


    /**
     * 支付时间
     */
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @Excel(name = "支付时间", width = 30, dateFormat = "yyyy-MM-dd HH:mm:ss")
    private Date payTime;

    /**
     * 订单状态01待支付02已支付03已发货04已收货(已完成)
     */
    @Excel(name = "订单状态01待支付02已支付03已发货04已收货(已完成)")
    private String orderStatus;

    /**
     * 物流单号
     */
    @Excel(name = "物流单号")
    private String logisticsCode;

    /**
     * 物流类型
     */
    @Excel(name = "物流类型")
    private String logisticsType;

    /**
     * 收货人姓名
     */
    @Excel(name = "收货人姓名")
    private String takeUser;

    /**
     * 收货人手机号
     */
    @Excel(name = "收货人手机号")
    private String takePhone;

    /**
     * 收货人地址
     */
    @Excel(name = "收货人地址")
    private String takeAddress;

    private String addressId;

    @ApiModelProperty("支付类型1钱包支付2微信支付")
    private int payType;

    private List<OmsOrderItem> orderItemList;

    private String ollacateFlag;

    public String getOllacateFlag() {
        return ollacateFlag;
    }

    public void setOllacateFlag(String ollacateFlag) {
        this.ollacateFlag = ollacateFlag;
    }

    public String getShopId() {
        return shopId;
    }

    public void setShopId(String shopId) {
        this.shopId = shopId;
    }

    public List<OmsOrderItem> getOrderItemList() {
        return orderItemList;
    }

    public void setOrderItemList(List<OmsOrderItem> orderItemList) {
        this.orderItemList = orderItemList;
    }

    public String getFreightRemark() {
        return freightRemark;
    }

    public void setFreightRemark(String freightRemark) {
        this.freightRemark = freightRemark;
    }

    public String getAddressId() {
        return addressId;
    }

    public void setAddressId(String addressId) {
        this.addressId = addressId;
    }

    public int getPayType() {
        return payType;
    }

    public void setPayType(int payType) {
        this.payType = payType;
    }

    public int getProductNum() {
        return productNum;
    }

    public void setProductNum(int productNum) {
        this.productNum = productNum;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getId() {
        return id;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserName() {
        return userName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getProductName() {
        return productName;
    }

    public void setOrderCode(String orderCode) {
        this.orderCode = orderCode;
    }

    public String getOrderCode() {
        return orderCode;
    }

    public void setOrderTime(Date orderTime) {
        this.orderTime = orderTime;
    }

    public Date getOrderTime() {
        return orderTime;
    }

    public void setOutTradeNo(String outTradeNo) {
        this.outTradeNo = outTradeNo;
    }

    public String getOutTradeNo() {
        return outTradeNo;
    }

    public void setOrderType(String orderType) {
        this.orderType = orderType;
    }

    public String getOrderType() {
        return orderType;
    }

    public void setOrderAmount(double orderAmount) {
        this.orderAmount = orderAmount;
    }

    public double getOrderAmount() {
        return orderAmount;
    }

    public void setFreightAmount(double freightAmount) {
        this.freightAmount = freightAmount;
    }

    public double getFreightAmount() {
        return freightAmount;
    }

    public void setSumAmount(double sumAmount) {
        this.sumAmount = sumAmount;
    }

    public double getSumAmount() {
        return sumAmount;
    }

    public void setPayTime(Date payTime) {
        this.payTime = payTime;
    }

    public Date getPayTime() {
        return payTime;
    }

    public void setOrderStatus(String orderStatus) {
        this.orderStatus = orderStatus;
    }

    public String getOrderStatus() {
        return orderStatus;
    }

    public void setLogisticsCode(String logisticsCode) {
        this.logisticsCode = logisticsCode;
    }

    public String getLogisticsCode() {
        return logisticsCode;
    }

    public void setLogisticsType(String logisticsType) {
        this.logisticsType = logisticsType;
    }

    public String getLogisticsType() {
        return logisticsType;
    }

    public void setTakeUser(String takeUser) {
        this.takeUser = takeUser;
    }

    public String getTakeUser() {
        return takeUser;
    }

    public void setTakePhone(String takePhone) {
        this.takePhone = takePhone;
    }

    public String getTakePhone() {
        return takePhone;
    }

    public void setTakeAddress(String takeAddress) {
        this.takeAddress = takeAddress;
    }

    public String getTakeAddress() {
        return takeAddress;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.MULTI_LINE_STYLE)
                .append("id", getId())
                .append("userId", getUserId())
                .append("userName", getUserName())
                .append("productName", getProductName())
                .append("orderCode", getOrderCode())
                .append("orderTime", getOrderTime())
                .append("outTradeNo", getOutTradeNo())
                .append("orderType", getOrderType())
                .append("orderAmount", getOrderAmount())
                .append("freightAmount", getFreightAmount())
                .append("sumAmount", getSumAmount())
                .append("payTime", getPayTime())
                .append("orderStatus", getOrderStatus())
                .append("logisticsCode", getLogisticsCode())
                .append("logisticsType", getLogisticsType())
                .append("takeUser", getTakeUser())
                .append("takePhone", getTakePhone())
                .append("takeAddress", getTakeAddress())
                .append("createTime", getCreateTime())
                .append("createBy", getCreateBy())
                .append("updateTime", getUpdateTime())
                .append("updateBy", getUpdateBy())
                .toString();
    }
}
