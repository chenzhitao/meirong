package com.jiumi.business.service.impl;

import com.jiumi.business.domain.OmsOrderInfo;
import com.jiumi.business.mapper.OmsOrderOfflinepaymentMapper;
import com.jiumi.business.service.IOmsOrderOfflinepaymentService;
import com.jiumi.common.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IOmsOrderOfflinepaymentServiceImpl implements IOmsOrderOfflinepaymentService {
    @Autowired
    private OmsOrderOfflinepaymentMapper omsOrderOfflinepaymentMapper;




    /**
     * 查询订单
     *
     * @param id 订单主键
     * @return 订单
     */
    @Override
    public OmsOrderInfo selectOfflinpaymentById(String id)
    {
        return omsOrderOfflinepaymentMapper.selectOfflinpaymentById(id);
    }

    /**
     * 查询订单列表
     *
     * @param omsOrderInfo 订单
     * @return 订单
     */
    @Override
    public List<OmsOrderInfo> selectOfflinpaymentList(OmsOrderInfo omsOrderInfo)
    {
        return omsOrderOfflinepaymentMapper.selectOfflinpaymentList(omsOrderInfo);
    }
    /**
     * 新增订单
     *
     * @param omsOrderInfo 订单
     * @return 结果
     */
    @Override
    public int insertOfflinpayment(OmsOrderInfo omsOrderInfo)
    {
        omsOrderInfo.setCreateTime(DateUtils.getNowDate());
        return omsOrderOfflinepaymentMapper.insertOfflinpayment(omsOrderInfo);
    }

    /**
     * 修改订单
     *
     * @param omsOrderInfo 订单
     * @return 结果
     */
    @Override
    public int updateOfflinpayment(OmsOrderInfo omsOrderInfo)
    {
        omsOrderInfo.setUpdateTime(DateUtils.getNowDate());
        return omsOrderOfflinepaymentMapper.updateOfflinpayment(omsOrderInfo);
    }

    /**
     * 批量删除订单
     *
     * @param ids 需要删除的订单主键
     * @return 结果
     */
    @Override
    public int deleteOfflinpaymentByIds(String[] ids)
    {
        return omsOrderOfflinepaymentMapper.deleteOfflinpaymentByIds(ids);
    }

    /**
     * 删除订单信息
     *
     * @param id 订单主键
     * @return 结果
     */
    @Override
    public int deleteOfflinpaymentById(String id)
    {
        return omsOrderOfflinepaymentMapper.deleteOfflinpaymentById(id);
    }

    @Override
    public OmsOrderInfo selectOfflinpaymentByCode(String orderCode) {
        return omsOrderOfflinepaymentMapper.selectOfflinpaymentByCode(orderCode);
    }

    @Override
    public OmsOrderInfo selectOfflinpaymentByOutTradeNo(String outTradeNo) {
        return omsOrderOfflinepaymentMapper.selectOfflinpaymentByOutTradeNo(outTradeNo);
    }

}
