package com.jiumi.finance.service.impl;

import java.util.List;

import com.jiumi.common.core.domain.entity.SysUser;
import com.jiumi.common.utils.DateUtils;
import com.jiumi.common.utils.SecurityUtils;
import org.bouncycastle.jcajce.provider.util.SecretKeyUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.jiumi.finance.mapper.OmsOrderItemPaymentMapper;
import com.jiumi.finance.domain.OmsOrderItemPayment;
import com.jiumi.finance.service.IOmsOrderItemPaymentService;

/**
 * 跨店结算Service业务层处理
 *
 * @author jiumi
 * @date 2022-04-12
 */
@Service
public class OmsOrderItemPaymentServiceImpl implements IOmsOrderItemPaymentService
{
    @Autowired
    private OmsOrderItemPaymentMapper omsOrderItemPaymentMapper;

    /**
     * 查询跨店结算
     *
     * @param id 跨店结算主键
     * @return 跨店结算
     */
    @Override
    public OmsOrderItemPayment selectOmsOrderItemPaymentById(Long id)
    {
        return omsOrderItemPaymentMapper.selectOmsOrderItemPaymentById(id);
    }

    /**
     * 查询跨店结算列表
     *
     * @param omsOrderItemPayment 跨店结算
     * @return 跨店结算
     */
    @Override
    public List<OmsOrderItemPayment> selectOmsOrderItemPaymentList(OmsOrderItemPayment omsOrderItemPayment)
    {
        return omsOrderItemPaymentMapper.selectOmsOrderItemPaymentList(omsOrderItemPayment);
    }

    /**
     * 新增跨店结算
     *
     * @param omsOrderItemPayment 跨店结算
     * @return 结果
     */
    @Override
    public int insertOmsOrderItemPayment(OmsOrderItemPayment omsOrderItemPayment)
    {
        omsOrderItemPayment.setCreateTime(DateUtils.getNowDate());
        return omsOrderItemPaymentMapper.insertOmsOrderItemPayment(omsOrderItemPayment);
    }

    /**
     * 修改跨店结算
     *
     * @param omsOrderItemPayment 跨店结算
     * @return 结果
     */
    @Override
    public int updateOmsOrderItemPayment(OmsOrderItemPayment omsOrderItemPayment)
    {
        SysUser currentUser= SecurityUtils.getLoginUser().getUser();
        omsOrderItemPayment.setUpdateTime(DateUtils.getNowDate());
        omsOrderItemPayment.setUpdateBy(currentUser.getNickName());
        omsOrderItemPayment.setPaymentTime(DateUtils.getNowDate());
        omsOrderItemPayment.setPaymentUser(currentUser.getNickName()+"["+currentUser.getPhonenumber()+"]");
        omsOrderItemPayment.setPaymentStatus("02");
        return omsOrderItemPaymentMapper.updateOmsOrderItemPayment(omsOrderItemPayment);
    }

    /**
     * 批量删除跨店结算
     *
     * @param ids 需要删除的跨店结算主键
     * @return 结果
     */
    @Override
    public int deleteOmsOrderItemPaymentByIds(Long[] ids)
    {
        return omsOrderItemPaymentMapper.deleteOmsOrderItemPaymentByIds(ids);
    }

    /**
     * 删除跨店结算信息
     *
     * @param id 跨店结算主键
     * @return 结果
     */
    @Override
    public int deleteOmsOrderItemPaymentById(Long id)
    {
        return omsOrderItemPaymentMapper.deleteOmsOrderItemPaymentById(id);
    }

    @Override
    public void deleteOmsOrderItemPaymentByOrderId(Long id) {
        omsOrderItemPaymentMapper.deleteOmsOrderItemPaymentByOrderId(id);
    }
}
