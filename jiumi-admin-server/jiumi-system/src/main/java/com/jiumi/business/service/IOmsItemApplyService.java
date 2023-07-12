package com.jiumi.business.service;

import java.util.List;
import com.jiumi.business.domain.OmsItemApply;

/**
 * 门店项目预约Service接口
 *
 * @author jiumi
 * @date 2021-11-19
 */
public interface IOmsItemApplyService
{
    /**
     * 查询门店项目预约
     *
     * @param id 门店项目预约主键
     * @return 门店项目预约
     */
    public OmsItemApply selectOmsItemApplyById(String id);

    /**
     * 查询门店项目预约列表
     *
     * @param omsItemApply 门店项目预约
     * @return 门店项目预约集合
     */
    public List<OmsItemApply> selectOmsItemApplyList(OmsItemApply omsItemApply);

    /**
     * 新增门店项目预约
     *
     * @param omsItemApply 门店项目预约
     * @return 结果
     */
    public int insertOmsItemApply(OmsItemApply omsItemApply);

    /**
     * 修改门店项目预约
     *
     * @param omsItemApply 门店项目预约
     * @return 结果
     */
    public int updateOmsItemApply(OmsItemApply omsItemApply);

    /**
     * 批量删除门店项目预约
     *
     * @param ids 需要删除的门店项目预约主键集合
     * @return 结果
     */
    public int deleteOmsItemApplyByIds(String[] ids);

    /**
     * 删除门店项目预约信息
     *
     * @param id 门店项目预约主键
     * @return 结果
     */
    public int deleteOmsItemApplyById(String id);

    void selectOmsOrderUnRevsiveList();

    List<OmsItemApply> selectOmsItemApplyConsultantList(OmsItemApply apply);
}
