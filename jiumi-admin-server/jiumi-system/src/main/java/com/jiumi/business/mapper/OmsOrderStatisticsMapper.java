package com.jiumi.business.mapper;

import com.jiumi.business.domain.OmsOrderStatistics;

import java.util.List;

public interface OmsOrderStatisticsMapper {


    public int selectAllShopInfo();

    List<OmsOrderStatistics> selectList(OmsOrderStatistics omsOrderStatistics);

}
