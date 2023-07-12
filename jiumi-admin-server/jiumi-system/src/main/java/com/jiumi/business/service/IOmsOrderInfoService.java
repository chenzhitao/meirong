package com.jiumi.business.service;

import java.util.List;
import com.jiumi.business.domain.OmsOrderInfo;

/**
 * 订单Service接口
 *
 * @author jiumi
 * @date 2021-11-25
 */
public interface IOmsOrderInfoService
{
    /**
     * 查询订单
     *
     * @param id 订单主键
     * @return 订单
     */
    public OmsOrderInfo selectOmsOrderInfoById(String id);

    /**
     * 查询订单列表
     *
     * @param omsOrderInfo 订单
     * @return 订单集合
     */
    public List<OmsOrderInfo> selectOmsOrderInfoList(OmsOrderInfo omsOrderInfo);

    /**
     * 新增订单
     *
     * @param omsOrderInfo 订单
     * @return 结果
     */
    public int insertOmsOrderInfo(OmsOrderInfo omsOrderInfo);

    /**
     * 修改订单
     *
     * @param omsOrderInfo 订单
     * @return 结果
     */
    public int updateOmsOrderInfo(OmsOrderInfo omsOrderInfo);

    /**
     * 批量删除订单
     *
     * @param ids 需要删除的订单主键集合
     * @return 结果
     */
    public int deleteOmsOrderInfoByIds(String[] ids);

    /**
     * 删除订单信息
     *
     * @param id 订单主键
     * @return 结果
     */
    public int deleteOmsOrderInfoById(String id);

    OmsOrderInfo selectOmsOrderInfoByCode(String orderCode);

    OmsOrderInfo selectOmsOrderInfoByOutTradeNo(String outTradeNo);

    List<OmsOrderInfo> selectOmsOrderUnRevsiveList();

    List<OmsOrderInfo> selectOmsOrderSnycAllocate();

    void updateOmsOrderOllacate(OmsOrderInfo order);

    void reduceGoodsStocks(String id);
}
