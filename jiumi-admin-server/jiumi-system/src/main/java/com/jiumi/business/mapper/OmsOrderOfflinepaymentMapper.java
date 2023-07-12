package com.jiumi.business.mapper;

import com.jiumi.business.domain.OmsOrderInfo;

import java.util.List;

public interface OmsOrderOfflinepaymentMapper {
    /**
     * 查询订单
     *
     * @param id 订单主键
     * @return 订单
     */
    public OmsOrderInfo selectOfflinpaymentById(String id);

    /**
     * 查询订单列表
     *
     * @param omsOrderInfo 订单
     * @return 订单集合
     */
    public List<OmsOrderInfo> selectOfflinpaymentList(OmsOrderInfo omsOrderInfo);
    /**
     * 新增订单
     *
     * @param omsOrderInfo 订单
     * @return 结果
     */
    public int insertOfflinpayment(OmsOrderInfo omsOrderInfo);

    /**
     * 修改订单
     *
     * @param omsOrderInfo 订单
     * @return 结果
     */
    public int updateOfflinpayment(OmsOrderInfo omsOrderInfo);

    /**
     * 删除订单
     *
     * @param id 订单主键
     * @return 结果
     */
    public int deleteOfflinpaymentById(String id);

    /**
     * 批量删除订单
     *
     * @param ids 需要删除的数据主键集合
     * @return 结果
     */
    public int deleteOfflinpaymentByIds(String[] ids);

    OmsOrderInfo selectOfflinpaymentByCode(String orderCode);

    OmsOrderInfo selectOfflinpaymentByOutTradeNo(String outTradeNo);

}
