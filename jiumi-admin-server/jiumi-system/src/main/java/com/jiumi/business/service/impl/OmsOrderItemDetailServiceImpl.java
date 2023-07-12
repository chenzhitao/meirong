package com.jiumi.business.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.jiumi.business.mapper.OmsOrderItemDetailMapper;
import com.jiumi.business.domain.OmsOrderItemDetail;
import com.jiumi.business.service.IOmsOrderItemDetailService;

/**
 * 项目订单详情Service业务层处理
 *
 * @author jiumi
 * @date 2022-02-07
 */
@Service
public class OmsOrderItemDetailServiceImpl implements IOmsOrderItemDetailService
{
    @Autowired
    private OmsOrderItemDetailMapper omsOrderItemDetailMapper;

    /**
     * 查询项目订单详情
     *
     * @param id 项目订单详情主键
     * @return 项目订单详情
     */
    @Override
    public OmsOrderItemDetail selectOmsOrderItemDetailById(Long id)
    {
        return omsOrderItemDetailMapper.selectOmsOrderItemDetailById(id);
    }

    /**
     * 查询项目订单详情列表
     *
     * @param omsOrderItemDetail 项目订单详情
     * @return 项目订单详情
     */
    @Override
    public List<OmsOrderItemDetail> selectOmsOrderItemDetailList(OmsOrderItemDetail omsOrderItemDetail)
    {
        return omsOrderItemDetailMapper.selectOmsOrderItemDetailList(omsOrderItemDetail);
    }

    /**
     * 新增项目订单详情
     *
     * @param omsOrderItemDetail 项目订单详情
     * @return 结果
     */
    @Override
    public int insertOmsOrderItemDetail(OmsOrderItemDetail omsOrderItemDetail)
    {
        return omsOrderItemDetailMapper.insertOmsOrderItemDetail(omsOrderItemDetail);
    }

    /**
     * 修改项目订单详情
     *
     * @param omsOrderItemDetail 项目订单详情
     * @return 结果
     */
    @Override
    public int updateOmsOrderItemDetail(OmsOrderItemDetail omsOrderItemDetail)
    {
        return omsOrderItemDetailMapper.updateOmsOrderItemDetail(omsOrderItemDetail);
    }

    /**
     * 批量删除项目订单详情
     *
     * @param ids 需要删除的项目订单详情主键
     * @return 结果
     */
    @Override
    public int deleteOmsOrderItemDetailByIds(Long[] ids)
    {
        return omsOrderItemDetailMapper.deleteOmsOrderItemDetailByIds(ids);
    }

    /**
     * 删除项目订单详情信息
     *
     * @param id 项目订单详情主键
     * @return 结果
     */
    @Override
    public int deleteOmsOrderItemDetailById(Long id)
    {
        return omsOrderItemDetailMapper.deleteOmsOrderItemDetailById(id);
    }

    @Override
    public void backOmsOrderItemDetail(Long id) {
        omsOrderItemDetailMapper.backOmsOrderItemDetail(id);
    }
}
