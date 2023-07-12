package com.jiumi.business.service.impl;

import java.util.List;
import com.jiumi.common.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.jiumi.business.mapper.OmsItemApplyMapper;
import com.jiumi.business.domain.OmsItemApply;
import com.jiumi.business.service.IOmsItemApplyService;

/**
 * 门店项目预约Service业务层处理
 *
 * @author jiumi
 * @date 2021-11-19
 */
@Service
public class OmsItemApplyServiceImpl implements IOmsItemApplyService
{
    @Autowired
    private OmsItemApplyMapper omsItemApplyMapper;

    /**
     * 查询门店项目预约
     *
     * @param id 门店项目预约主键
     * @return 门店项目预约
     */
    @Override
    public OmsItemApply selectOmsItemApplyById(String id)
    {
        return omsItemApplyMapper.selectOmsItemApplyById(id);
    }

    /**
     * 查询门店项目预约列表
     *
     * @param omsItemApply 门店项目预约
     * @return 门店项目预约
     */
    @Override
    public List<OmsItemApply> selectOmsItemApplyList(OmsItemApply omsItemApply)
    {
        return omsItemApplyMapper.selectOmsItemApplyList(omsItemApply);
    }

    /**
     * 新增门店项目预约
     *
     * @param omsItemApply 门店项目预约
     * @return 结果
     */
    @Override
    public int insertOmsItemApply(OmsItemApply omsItemApply)
    {
        omsItemApply.setCreateTime(DateUtils.getNowDate());
        return omsItemApplyMapper.insertOmsItemApply(omsItemApply);
    }

    /**
     * 修改门店项目预约
     *
     * @param omsItemApply 门店项目预约
     * @return 结果
     */
    @Override
    public int updateOmsItemApply(OmsItemApply omsItemApply)
    {
        return omsItemApplyMapper.updateOmsItemApply(omsItemApply);
    }

    /**
     * 批量删除门店项目预约
     *
     * @param ids 需要删除的门店项目预约主键
     * @return 结果
     */
    @Override
    public int deleteOmsItemApplyByIds(String[] ids)
    {
        return omsItemApplyMapper.deleteOmsItemApplyByIds(ids);
    }

    /**
     * 删除门店项目预约信息
     *
     * @param id 门店项目预约主键
     * @return 结果
     */
    @Override
    public int deleteOmsItemApplyById(String id)
    {
        return omsItemApplyMapper.deleteOmsItemApplyById(id);
    }

    @Override
    public void selectOmsOrderUnRevsiveList() {
        omsItemApplyMapper.selectOmsOrderUnRevsiveList();
    }

    @Override
    public List<OmsItemApply> selectOmsItemApplyConsultantList(OmsItemApply apply) {
        return omsItemApplyMapper.selectOmsItemApplyConsultantList(apply);
    }
}
