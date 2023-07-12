package com.jiumi.finance.service;

import java.util.List;
import com.jiumi.finance.domain.OmsOrderItemPayment;

/**
 * 跨店结算Service接口
 *
 * @author jiumi
 * @date 2022-04-12
 */
public interface IOmsOrderItemPaymentService
{
    /**
     * 查询跨店结算
     *
     * @param id 跨店结算主键
     * @return 跨店结算
     */
    public OmsOrderItemPayment selectOmsOrderItemPaymentById(Long id);

    /**
     * 查询跨店结算列表
     *
     * @param omsOrderItemPayment 跨店结算
     * @return 跨店结算集合
     */
    public List<OmsOrderItemPayment> selectOmsOrderItemPaymentList(OmsOrderItemPayment omsOrderItemPayment);

    /**
     * 新增跨店结算
     *
     * @param omsOrderItemPayment 跨店结算
     * @return 结果
     */
    public int insertOmsOrderItemPayment(OmsOrderItemPayment omsOrderItemPayment);

    /**
     * 修改跨店结算
     *
     * @param omsOrderItemPayment 跨店结算
     * @return 结果
     */
    public int updateOmsOrderItemPayment(OmsOrderItemPayment omsOrderItemPayment);

    /**
     * 批量删除跨店结算
     *
     * @param ids 需要删除的跨店结算主键集合
     * @return 结果
     */
    public int deleteOmsOrderItemPaymentByIds(Long[] ids);

    /**
     * 删除跨店结算信息
     *
     * @param id 跨店结算主键
     * @return 结果
     */
    public int deleteOmsOrderItemPaymentById(Long id);

    void deleteOmsOrderItemPaymentByOrderId(Long id);
}
