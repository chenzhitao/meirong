package com.jiumi.business.service.impl;

import java.util.List;

import com.jiumi.system.service.ISysUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.jiumi.business.mapper.OmsOrderItemMapper;
import com.jiumi.business.domain.OmsOrderItem;
import com.jiumi.business.service.IOmsOrderItemService;

/**
 * 订单项Service业务层处理
 *
 * @author jiumi
 * @date 2021-11-25
 */
@Service
public class OmsOrderItemServiceImpl implements IOmsOrderItemService
{
    @Autowired
    private OmsOrderItemMapper omsOrderItemMapper;


    /**
     * 查询订单项
     *
     * @param id 订单项主键
     * @return 订单项
     */
    @Override
    public OmsOrderItem selectOmsOrderItemById(String id)
    {
        return omsOrderItemMapper.selectOmsOrderItemById(id);
    }

    /**
     * 查询订单项列表
     *
     * @param omsOrderItem 订单项
     * @return 订单项
     */
    @Override
    public List<OmsOrderItem> selectOmsOrderItemList(OmsOrderItem omsOrderItem)
    {
        return omsOrderItemMapper.selectOmsOrderItemList(omsOrderItem);
    }

    /**
     * 新增订单项
     *
     * @param omsOrderItem 订单项
     * @return 结果
     */
    @Override
    public int insertOmsOrderItem(OmsOrderItem omsOrderItem)
    {
        return omsOrderItemMapper.insertOmsOrderItem(omsOrderItem);
    }

    /**
     * 修改订单项
     *
     * @param omsOrderItem 订单项
     * @return 结果
     */
    @Override
    public int updateOmsOrderItem(OmsOrderItem omsOrderItem)
    {
        return omsOrderItemMapper.updateOmsOrderItem(omsOrderItem);
    }

    /**
     * 批量删除订单项
     *
     * @param ids 需要删除的订单项主键
     * @return 结果
     */
    @Override
    public int deleteOmsOrderItemByIds(String[] ids)
    {
        return omsOrderItemMapper.deleteOmsOrderItemByIds(ids);
    }

    /**
     * 删除订单项信息
     *
     * @param id 订单项主键
     * @return 结果
     */
    @Override
    public int deleteOmsOrderItemById(String id)
    {
        return omsOrderItemMapper.deleteOmsOrderItemById(id);
    }
}
