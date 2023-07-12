package com.jiumi.business.mapper;

import java.util.List;
import com.jiumi.business.domain.OmsItemApply;

/**
 * 门店项目预约Mapper接口
 *
 * @author jiumi
 * @date 2021-11-19
 */
public interface OmsItemApplyMapper
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
     * 删除门店项目预约
     *
     * @param id 门店项目预约主键
     * @return 结果
     */
    public int deleteOmsItemApplyById(String id);

    /**
     * 批量删除门店项目预约
     *
     * @param ids 需要删除的数据主键集合
     * @return 结果
     */
    public int deleteOmsItemApplyByIds(String[] ids);

    void selectOmsOrderUnRevsiveList();

    List<OmsItemApply> selectOmsItemApplyConsultantList(OmsItemApply apply);
}
