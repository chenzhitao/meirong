package com.jiumi.business.service.impl;

import com.jiumi.business.domain.OmsOrderInfo;
import com.jiumi.business.mapper.OmsOrderOfflinepaymentMapper;
import com.jiumi.business.mapper.OmsOrderOnlinepaymentMapper;
import com.jiumi.business.service.IOmsOrderOfflinepaymentService;
import com.jiumi.business.service.IOmsOrderOnlinepaymentService;
import com.jiumi.common.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IOmsOrderOnlinepaymentServiceImpl implements IOmsOrderOnlinepaymentService {
    @Autowired
    private OmsOrderOnlinepaymentMapper omsOrderOnlinepaymentMapper;



    /**
     * 查询订单
     *
     * @param id 订单主键
     * @return 订单
     */
    @Override
    public OmsOrderInfo selectOnlinpaymentById(String id)
    {
        OmsOrderInfo omsOrderInfo = omsOrderOnlinepaymentMapper.selectOnlinpaymentById(id);
        return omsOrderInfo;
    }

    /**
     * 查询订单列表
     *
     * @param omsOrderInfo 订单
     * @return 订单
     */
    @Override
    public List<OmsOrderInfo> selectOnlinpaymentList(OmsOrderInfo omsOrderInfo)
    {
        return omsOrderOnlinepaymentMapper.selectOnlinpaymentList(omsOrderInfo);
    }


}
