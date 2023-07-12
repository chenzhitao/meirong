package com.jiumi.business.service;

import java.util.List;
import com.jiumi.business.domain.OmsOrderItemDetail;

/**
 * 项目订单详情Service接口
 *
 * @author jiumi
 * @date 2022-02-07
 */
public interface IOmsOrderItemDetailService
{
    /**
     * 查询项目订单详情
     *
     * @param id 项目订单详情主键
     * @return 项目订单详情
     */
    public OmsOrderItemDetail selectOmsOrderItemDetailById(Long id);

    /**
     * 查询项目订单详情列表
     *
     * @param omsOrderItemDetail 项目订单详情
     * @return 项目订单详情集合
     */
    public List<OmsOrderItemDetail> selectOmsOrderItemDetailList(OmsOrderItemDetail omsOrderItemDetail);

    /**
     * 新增项目订单详情
     *
     * @param omsOrderItemDetail 项目订单详情
     * @return 结果
     */
    public int insertOmsOrderItemDetail(OmsOrderItemDetail omsOrderItemDetail);

    /**
     * 修改项目订单详情
     *
     * @param omsOrderItemDetail 项目订单详情
     * @return 结果
     */
    public int updateOmsOrderItemDetail(OmsOrderItemDetail omsOrderItemDetail);

    /**
     * 批量删除项目订单详情
     *
     * @param ids 需要删除的项目订单详情主键集合
     * @return 结果
     */
    public int deleteOmsOrderItemDetailByIds(Long[] ids);

    /**
     * 删除项目订单详情信息
     *
     * @param id 项目订单详情主键
     * @return 结果
     */
    public int deleteOmsOrderItemDetailById(Long id);

    void backOmsOrderItemDetail(Long id);
}
