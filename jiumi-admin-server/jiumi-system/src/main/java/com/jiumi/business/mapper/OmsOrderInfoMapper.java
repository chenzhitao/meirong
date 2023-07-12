package com.jiumi.business.mapper;

import java.util.List;
import com.jiumi.business.domain.OmsOrderInfo;

/**
 * 订单Mapper接口
 *
 * @author jiumi
 * @date 2021-11-25
 */
public interface OmsOrderInfoMapper
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
     * 删除订单
     *
     * @param id 订单主键
     * @return 结果
     */
    public int deleteOmsOrderInfoById(String id);

    /**
     * 批量删除订单
     *
     * @param ids 需要删除的数据主键集合
     * @return 结果
     */
    public int deleteOmsOrderInfoByIds(String[] ids);

    OmsOrderInfo selectOmsOrderInfoByCode(String orderCode);

    OmsOrderInfo selectOmsOrderInfoByOutTradeNo(String outTradeNo);

    List<OmsOrderInfo> selectOmsOrderUnRevsiveList();

    List<OmsOrderInfo> selectOmsOrderSnycAllocate();

    void updateOmsOrderOllacate(OmsOrderInfo order);
}
