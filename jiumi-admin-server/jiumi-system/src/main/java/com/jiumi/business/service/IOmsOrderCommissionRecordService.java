package com.jiumi.business.service;

import java.util.List;
import com.jiumi.business.domain.OmsOrderCommissionRecord;

/**
 * 返佣记录Service接口
 *
 * @author jiumi
 * @date 2021-12-22
 */
public interface IOmsOrderCommissionRecordService
{
    /**
     * 查询返佣记录
     *
     * @param id 返佣记录主键
     * @return 返佣记录
     */
    public OmsOrderCommissionRecord selectOmsOrderCommissionRecordById(String id);

    /**
     * 查询返佣记录列表
     *
     * @param omsOrderCommissionRecord 返佣记录
     * @return 返佣记录集合
     */
    public List<OmsOrderCommissionRecord> selectOmsOrderCommissionRecordList(OmsOrderCommissionRecord omsOrderCommissionRecord);

    /**
     * 新增返佣记录
     *
     * @param omsOrderCommissionRecord 返佣记录
     * @return 结果
     */
    public int insertOmsOrderCommissionRecord(OmsOrderCommissionRecord omsOrderCommissionRecord);

    /**
     * 修改返佣记录
     *
     * @param omsOrderCommissionRecord 返佣记录
     * @return 结果
     */
    public int updateOmsOrderCommissionRecord(OmsOrderCommissionRecord omsOrderCommissionRecord);

    /**
     * 批量删除返佣记录
     *
     * @param ids 需要删除的返佣记录主键集合
     * @return 结果
     */
    public int deleteOmsOrderCommissionRecordByIds(String[] ids);

    /**
     * 删除返佣记录信息
     *
     * @param id 返佣记录主键
     * @return 结果
     */
    public int deleteOmsOrderCommissionRecordById(String id);
}
