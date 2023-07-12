package com.jiumi.business.domain;

import java.math.BigDecimal;
import java.util.List;
import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.jiumi.common.annotation.Excel;
import com.jiumi.common.core.domain.BaseEntity;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

/**
 * 项目订单管理对象 oms_order_item_info
 *
 * @author jiumi
 * @date 2022-02-07
 */
public class OmsOrderItemInfo extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** ID */
    private Long id;

    /** 门店ID */

    private String shopId;

    @Excel(name = "门店")
    private String shopName;

    /** 用户ID */
    private Long userId;

    private Long applyId;

    public Long getApplyId() {
        return applyId;
    }

    public void setApplyId(Long applyId) {
        this.applyId = applyId;
    }

    /** 购买用户 */
    @Excel(name = "购买用户")
    private String userName;

    /** 绑定号码 */
    @Excel(name = "绑定号码")
    private String userPhone;

    /** 订单编号 */
    @Excel(name = "订单编号")
    private String orderCode;

    /** 下单时间 */
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @Excel(name = "下单时间", width = 30, dateFormat = "yyyy-MM-dd HH:mm:ss")
    private Date orderTime;

    /** 微信支付下单号 */
    @Excel(name = "微信支付下单号")
    private String outTradeNo;

    /** 订单类型01门店订单 02 预约订单 */
    private String orderType;

    @Excel(name = "账户余额")
    private BigDecimal accountAmount;

    /** 总金额 */
    @Excel(name = "总金额")
    private BigDecimal sumAmount;

    /** 支付类型1余额支付2产品账户3现金支付4银行卡5挂账6免费7微信支付8支付宝支付 */
    private String payType;

    //退回账户余额
    private BigDecimal backPayment1;
    //退回产品金额
    private BigDecimal backPayment2;

    /** 余额支付 */
    @Excel(name = "余额支付")
    private BigDecimal payment1;

    /** 产品账户支付 */
    @Excel(name = "产品账户支付")
    private BigDecimal payment2;

    /** 现金支付 */
    @Excel(name = "现金支付")
    private BigDecimal payment3;

    /** 银行卡支付 */
    @Excel(name = "银行卡支付")
    private BigDecimal payment4;

    /** 挂账支付 */
    @Excel(name = "挂账支付")
    private BigDecimal payment5;

    /** 免费支付 */
    @Excel(name = "免费支付")
    private BigDecimal payment6;

    /** 微信支付 */
    @Excel(name = "微信支付")
    private BigDecimal payment7;

    @Excel(name = "次卡额度")
    private BigDecimal cardAmount;

    /** 支付宝支付 */
    @Excel(name = "支付宝支付")
    private BigDecimal payment8;

    /** 支付宝支付 */
    @Excel(name = "大众点评抵扣")
    private BigDecimal payment9;

    private String itemInfo;
    private String productInfo;

    private Long itemId;
    private Long goodsId;

    public Long getItemId() {
        return itemId;
    }

    public void setItemId(Long itemId) {
        this.itemId = itemId;
    }

    public Long getGoodsId() {
        return goodsId;
    }

    public void setGoodsId(Long goodsId) {
        this.goodsId = goodsId;
    }

    public BigDecimal getCardAmount() {
        return cardAmount;
    }

    public void setCardAmount(BigDecimal cardAmount) {
        this.cardAmount = cardAmount;
    }

    public String getItemInfo() {
        return itemInfo;
    }

    public void setItemInfo(String itemInfo) {
        this.itemInfo = itemInfo;
    }

    public String getProductInfo() {
        return productInfo;
    }

    public void setProductInfo(String productInfo) {
        this.productInfo = productInfo;
    }

    /** 支付时间 */
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @Excel(name = "支付时间", width = 30, dateFormat = "yyyy-MM-dd HH:mm:ss")
    private Date payTime;

    /** 订单状态00取消订单01未完成02已完成03挂账订单 */
    @Excel(name = "订单状态",readConverterExp = "00=取消订单,01=未完成,02=已完成,03=挂账订单")
    private String orderStatus;

    /** 附件 */
    private String orderFile;

    private Long cardId;

    public BigDecimal getAccountAmount() {
        return accountAmount;
    }

    public void setAccountAmount(BigDecimal accountAmount) {
        this.accountAmount = accountAmount;
    }

    public Long getCardId() {
        return cardId;
    }

    public void setCardId(Long cardId) {
        this.cardId = cardId;
    }

    public String getShopName() {
        return shopName;
    }

    public void setShopName(String shopName) {
        this.shopName = shopName;
    }

    /** 项目订单详情信息 */
    private List<OmsOrderItemDetail> orderItemList;
    private List<OmsOrderItemDetail> orderProductList;

    public List<OmsOrderItemDetail> getOrderItemList() {
        return orderItemList;
    }

    public void setOrderItemList(List<OmsOrderItemDetail> orderItemList) {
        this.orderItemList = orderItemList;
    }

    public List<OmsOrderItemDetail> getOrderProductList() {
        return orderProductList;
    }

    public void setOrderProductList(List<OmsOrderItemDetail> orderProductList) {
        this.orderProductList = orderProductList;
    }

    public void setId(Long id)
    {
        this.id = id;
    }

    public Long getId()
    {
        return id;
    }
    public void setShopId(String shopId)
    {
        this.shopId = shopId;
    }

    public String getShopId()
    {
        return shopId;
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
    public void setUserPhone(String userPhone)
    {
        this.userPhone = userPhone;
    }

    public String getUserPhone()
    {
        return userPhone;
    }
    public void setOrderCode(String orderCode)
    {
        this.orderCode = orderCode;
    }

    public String getOrderCode()
    {
        return orderCode;
    }
    public void setOrderTime(Date orderTime)
    {
        this.orderTime = orderTime;
    }

    public Date getOrderTime()
    {
        return orderTime;
    }
    public void setOutTradeNo(String outTradeNo)
    {
        this.outTradeNo = outTradeNo;
    }

    public String getOutTradeNo()
    {
        return outTradeNo;
    }
    public void setOrderType(String orderType)
    {
        this.orderType = orderType;
    }

    public String getOrderType()
    {
        return orderType;
    }
    public void setSumAmount(BigDecimal sumAmount)
    {
        this.sumAmount = sumAmount;
    }

    public BigDecimal getSumAmount()
    {
        return sumAmount;
    }
    public void setPayType(String payType)
    {
        this.payType = payType;
    }

    public String getPayType()
    {
        return payType;
    }

    public BigDecimal getBackPayment1() {
        return backPayment1;
    }

    public void setBackPayment1(BigDecimal backPayment1) {
        this.backPayment1 = backPayment1;
    }

    public BigDecimal getBackPayment2() {
        return backPayment2;
    }

    public void setBackPayment2(BigDecimal backPayment2) {
        this.backPayment2 = backPayment2;
    }
    public void setPayment1(BigDecimal payment1)
    {
        this.payment1 = payment1;
    }

    public BigDecimal getPayment1()
    {
        return payment1;
    }
    public void setPayment2(BigDecimal payment2)
    {
        this.payment2 = payment2;
    }

    public BigDecimal getPayment2()
    {
        return payment2;
    }
    public void setPayment3(BigDecimal payment3)
    {
        this.payment3 = payment3;
    }

    public BigDecimal getPayment3()
    {
        return payment3;
    }
    public void setPayment4(BigDecimal payment4)
    {
        this.payment4 = payment4;
    }

    public BigDecimal getPayment4()
    {
        return payment4;
    }
    public void setPayment5(BigDecimal payment5)
    {
        this.payment5 = payment5;
    }

    public BigDecimal getPayment5()
    {
        return payment5;
    }
    public void setPayment6(BigDecimal payment6)
    {
        this.payment6 = payment6;
    }

    public BigDecimal getPayment6()
    {
        return payment6;
    }
    public void setPayment7(BigDecimal payment7)
    {
        this.payment7 = payment7;
    }

    public BigDecimal getPayment7()
    {
        return payment7;
    }
    public void setPayment8(BigDecimal payment8)
    {
        this.payment8 = payment8;
    }

    public BigDecimal getPayment8()
    {
        return payment8;
    }
    public void setPayTime(Date payTime)
    {
        this.payTime = payTime;
    }

    public BigDecimal getPayment9() {
        return payment9;
    }

    public void setPayment9(BigDecimal payment9) {
        this.payment9 = payment9;
    }

    public Date getPayTime()
    {
        return payTime;
    }
    public void setOrderStatus(String orderStatus)
    {
        this.orderStatus = orderStatus;
    }

    public String getOrderStatus()
    {
        return orderStatus;
    }
    public void setOrderFile(String orderFile)
    {
        this.orderFile = orderFile;
    }

    public String getOrderFile()
    {
        return orderFile;
    }


    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.MULTI_LINE_STYLE)
            .append("id", getId())
            .append("shopId", getShopId())
            .append("userId", getUserId())
            .append("userName", getUserName())
            .append("userPhone", getUserPhone())
            .append("orderCode", getOrderCode())
            .append("orderTime", getOrderTime())
            .append("outTradeNo", getOutTradeNo())
            .append("orderType", getOrderType())
            .append("sumAmount", getSumAmount())
            .append("payType", getPayType())
            .append("payment1", getPayment1())
            .append("payment2", getPayment2())
            .append("payment3", getPayment3())
            .append("payment4", getPayment4())
            .append("payment5", getPayment5())
            .append("payment6", getPayment6())
            .append("payment7", getPayment7())
            .append("payment8", getPayment8())
            .append("payTime", getPayTime())
            .append("orderStatus", getOrderStatus())
            .append("remark", getRemark())
            .append("orderFile", getOrderFile())
            .append("createTime", getCreateTime())
            .append("createBy", getCreateBy())
            .append("updateTime", getUpdateTime())
            .append("updateBy", getUpdateBy())
            .toString();
    }
}
