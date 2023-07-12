package com.jiumi.shop.service;

import java.util.List;

import com.jiumi.shop.domain.BaseAnalyiseVo;
import com.jiumi.shop.domain.BaseShopInfo;

/**
 * 门店Service接口
 *
 * @author jiumi
 * @date 2021-11-19
 */
public interface IBaseShopInfoService
{
    /**
     * 查询门店
     *
     * @param id 门店主键
     * @return 门店
     */
    public BaseShopInfo selectBaseShopInfoById(String id);

    /**
     * 查询门店列表
     *
     * @param baseShopInfo 门店
     * @return 门店集合
     */
    public List<BaseShopInfo> selectBaseShopInfoList(BaseShopInfo baseShopInfo);

    /**
     * 新增门店
     *
     * @param baseShopInfo 门店
     * @return 结果
     */
    public int insertBaseShopInfo(BaseShopInfo baseShopInfo);

    /**
     * 修改门店
     *
     * @param baseShopInfo 门店
     * @return 结果
     */
    public int updateBaseShopInfo(BaseShopInfo baseShopInfo);

    /**
     * 批量删除门店
     *
     * @param ids 需要删除的门店主键集合
     * @return 结果
     */
    public int deleteBaseShopInfoByIds(String[] ids);

    /**
     * 删除门店信息
     *
     * @param id 门店主键
     * @return 结果
     */
    public int deleteBaseShopInfoById(String id);

    List<BaseAnalyiseVo> getShopAnalysisData(BaseAnalyiseVo vo);

    List<BaseAnalyiseVo> getShopAnalysisAddData(BaseAnalyiseVo vo);

    List<BaseAnalyiseVo> getShopAnalysisChargeData(BaseAnalyiseVo vo);
}
