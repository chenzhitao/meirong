package com.jiumi.business.mapper;

import java.util.List;
import com.jiumi.business.domain.OmsOrderItemInfo;
import com.jiumi.business.domain.OmsOrderItemDetail;

/**
 * 项目订单管理Mapper接口
 *
 * @author jiumi
 * @date 2022-02-07
 */
public interface OmsOrderItemInfoMapper
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
    public int insertOmsOrderItemInfo(OmsOrderItemInfo omsOrderItemInfo);

    /**
     * 修改项目订单管理
     *
     * @param omsOrderItemInfo 项目订单管理
     * @return 结果
     */
    public int updateOmsOrderItemInfo(OmsOrderItemInfo omsOrderItemInfo);

    /**
     * 删除项目订单管理
     *
     * @param id 项目订单管理主键
     * @return 结果
     */
    public int deleteOmsOrderItemInfoById(Long id);

    /**
     * 批量删除项目订单管理
     *
     * @param ids 需要删除的数据主键集合
     * @return 结果
     */
    public int deleteOmsOrderItemInfoByIds(Long[] ids);

    /**
     * 批量删除项目订单详情
     *
     * @param ids 需要删除的数据主键集合
     * @return 结果
     */
    public int deleteOmsOrderItemDetailByIds(Long[] ids);

    /**
     * 批量新增项目订单详情
     *
     * @param omsOrderItemDetailList 项目订单详情列表
     * @return 结果
     */
    public int batchOmsOrderItemDetail(List<OmsOrderItemDetail> omsOrderItemDetailList);


    /**
     * 通过项目订单管理主键删除项目订单详情信息
     *
     * @param id 项目订单管理ID
     * @return 结果
     */
    public int deleteOmsOrderItemDetailByOrderId(Long id);

    void deleteOmsOrderItemDetailByOrderIds(Long[] ids);

    OmsOrderItemInfo selectOmsOrderItemInfoByApplyId(String id);

    void backOrderItemInfo(Long id);

    void backOmsOrderItemDetail(Long id);
}
