package com.jiumi.business.service.impl;

import com.jiumi.business.domain.OmsOrderStatistics;
import com.jiumi.business.mapper.OmsOrderStatisticsMapper;
import com.jiumi.business.service.IOmsOrderStatisticsService;
import com.jiumi.shop.mapper.BaseShopInfoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OmsOrderStatisticsServiceImpl implements IOmsOrderStatisticsService {


    @Autowired
    private OmsOrderStatisticsMapper omsOrderStatisticsMapper;


    @Override
    public List<OmsOrderStatistics> selectLsit(OmsOrderStatistics omsOrderStatistics) {

        return omsOrderStatisticsMapper.selectList(omsOrderStatistics);
    }
}
