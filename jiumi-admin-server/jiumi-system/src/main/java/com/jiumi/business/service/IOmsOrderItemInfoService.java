package com.jiumi.business.service;

import java.util.List;
import com.jiumi.business.domain.OmsOrderItemInfo;

/**
 * 项目订单管理Service接口
 *
 * @author jiumi
 * @date 2022-02-07
 */
public interface IOmsOrderItemInfoService
{
    /**
     * 查询项目订单管理
     *
     * @param id 项目订单管理主键
     * @return 项目订单管理
     */
    public OmsOrderItemInfo selectOmsOrderItemInfoById(Long id);

    /**
     * 查询项目订单管理列表
     *
     * @param omsOrderItemInfo 项目订单管理
     * @return 项目订单管理集合
     */
    public List<OmsOrderItemInfo> selectOmsOrderItemInfoList(OmsOrderItemInfo omsOrderItemInfo);

    /**
     * 新增项目订单管理
     *
     * @param omsOrderItemInfo 项目订单管理
     * @return 结果
     */
    public int insertOmsOrderItemInfo(OmsOrderItemInfo omsOrderItemInfo)throws Exception;

    /**
     * 修改项目订单管理
     *
     * @param omsOrderItemInfo 项目订单管理
     * @return 结果
     */
    public int updateOmsOrderItemInfo(OmsOrderItemInfo omsOrderItemInfo)throws Exception;

    /**
     * 批量删除项目订单管理
     *
     * @param ids 需要删除的项目订单管理主键集合
     * @return 结果
     */
    public int deleteOmsOrderItemInfoByIds(Long[] ids);

    /**
     * 删除项目订单管理信息
     *
     * @param id 项目订单管理主键
     * @return 结果
     */
    public int deleteOmsOrderItemInfoById(Long id);

    OmsOrderItemInfo selectOmsOrderItemInfoByApplyId(String id);

    int paymentUnPayItemOrder(OmsOrderItemInfo itemOrder)throws Exception;

    int resetOmsOrderItemInfo(OmsOrderItemInfo omsOrderItemInfo)throws Exception;

    public void calculatePerformance(OmsOrderItemInfo omsOrderItemInfo)throws Exception;

    int insertNumberCardOrderItemInfo(OmsOrderItemInfo omsOrderItemInfo)throws Exception;
}
