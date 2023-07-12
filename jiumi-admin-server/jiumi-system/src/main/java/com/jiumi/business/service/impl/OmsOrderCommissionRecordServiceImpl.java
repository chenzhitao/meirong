package com.jiumi.business.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.jiumi.business.mapper.OmsOrderCommissionRecordMapper;
import com.jiumi.business.domain.OmsOrderCommissionRecord;
import com.jiumi.business.service.IOmsOrderCommissionRecordService;

/**
 * 返佣记录Service业务层处理
 *
 * @author jiumi
 * @date 2021-12-22
 */
@Service
public class OmsOrderCommissionRecordServiceImpl implements IOmsOrderCommissionRecordService
{
    @Autowired
    private OmsOrderCommissionRecordMapper omsOrderCommissionRecordMapper;

    /**
     * 查询返佣记录
     *
     * @param id 返佣记录主键
     * @return 返佣记录
     */
    @Override
    public OmsOrderCommissionRecord selectOmsOrderCommissionRecordById(String id)
    {
        return omsOrderCommissionRecordMapper.selectOmsOrderCommissionRecordById(id);
    }

    /**
     * 查询返佣记录列表
     *
     * @param omsOrderCommissionRecord 返佣记录
     * @return 返佣记录
     */
    @Override
    public List<OmsOrderCommissionRecord> selectOmsOrderCommissionRecordList(OmsOrderCommissionRecord omsOrderCommissionRecord)
    {
        return omsOrderCommissionRecordMapper.selectOmsOrderCommissionRecordList(omsOrderCommissionRecord);
    }

    /**
     * 新增返佣记录
     *
     * @param omsOrderCommissionRecord 返佣记录
     * @return 结果
     */
    @Override
    public int insertOmsOrderCommissionRecord(OmsOrderCommissionRecord omsOrderCommissionRecord)
    {
        return omsOrderCommissionRecordMapper.insertOmsOrderCommissionRecord(omsOrderCommissionRecord);
    }

    /**
     * 修改返佣记录
     *
     * @param omsOrderCommissionRecord 返佣记录
     * @return 结果
     */
    @Override
    public int updateOmsOrderCommissionRecord(OmsOrderCommissionRecord omsOrderCommissionRecord)
    {
        return omsOrderCommissionRecordMapper.updateOmsOrderCommissionRecord(omsOrderCommissionRecord);
    }

    /**
     * 批量删除返佣记录
     *
     * @param ids 需要删除的返佣记录主键
     * @return 结果
     */
    @Override
    public int deleteOmsOrderCommissionRecordByIds(String[] ids)
    {
        return omsOrderCommissionRecordMapper.deleteOmsOrderCommissionRecordByIds(ids);
    }

    /**
     * 删除返佣记录信息
     *
     * @param id 返佣记录主键
     * @return 结果
     */
    @Override
    public int deleteOmsOrderCommissionRecordById(String id)
    {
        return omsOrderCommissionRecordMapper.deleteOmsOrderCommissionRecordById(id);
    }
}
