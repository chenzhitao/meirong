package com.jiumi.business.service;

import java.util.List;
import com.jiumi.business.domain.OmsOrderItem;

/**
 * 订单项Service接口
 *
 * @author jiumi
 * @date 2021-11-25
 */
public interface IOmsOrderItemService
{
    /**
     * 查询订单项
     *
     * @param id 订单项主键
     * @return 订单项
     */
    public OmsOrderItem selectOmsOrderItemById(String id);

    /**
     * 查询订单项列表
     *
     * @param omsOrderItem 订单项
     * @return 订单项集合
     */
    public List<OmsOrderItem> selectOmsOrderItemList(OmsOrderItem omsOrderItem);

    /**
     * 新增订单项
     *
     * @param omsOrderItem 订单项
     * @return 结果
     */
    public int insertOmsOrderItem(OmsOrderItem omsOrderItem);

    /**
     * 修改订单项
     *
     * @param omsOrderItem 订单项
     * @return 结果
     */
    public int updateOmsOrderItem(OmsOrderItem omsOrderItem);

    /**
     * 批量删除订单项
     *
     * @param ids 需要删除的订单项主键集合
     * @return 结果
     */
    public int deleteOmsOrderItemByIds(String[] ids);

    /**
     * 删除订单项信息
     *
     * @param id 订单项主键
     * @return 结果
     */
    public int deleteOmsOrderItemById(String id);
}
