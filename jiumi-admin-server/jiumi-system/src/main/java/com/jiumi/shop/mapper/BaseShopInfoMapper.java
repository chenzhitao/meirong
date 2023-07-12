package com.jiumi.shop.mapper;

import java.util.List;

import com.jiumi.shop.domain.BaseAnalyiseVo;
import com.jiumi.shop.domain.BaseShopInfo;

/**
 * 门店Mapper接口
 *
 * @author jiumi
 * @date 2021-11-19
 */
public interface BaseShopInfoMapper
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
     * 查询门店数量
     */
    public int selectAllShopInfo();
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
     * 删除门店
     *
     * @param id 门店主键
     * @return 结果
     */
    public int deleteBaseShopInfoById(String id);

    /**
     * 批量删除门店
     *
     * @param ids 需要删除的数据主键集合
     * @return 结果
     */
    public int deleteBaseShopInfoByIds(String[] ids);

    List<BaseAnalyiseVo> getShopAnalysisData(BaseAnalyiseVo vo);

    List<BaseAnalyiseVo> getShopAnalysisAddData(BaseAnalyiseVo vo);

    List<BaseAnalyiseVo> getShopAnalysisChargeData(BaseAnalyiseVo vo);
}
