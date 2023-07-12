package com.jiumi.shop.service.impl;

import java.util.List;
import com.jiumi.common.utils.DateUtils;
import com.jiumi.shop.domain.BaseAnalyiseVo;
import com.jiumi.shop.domain.BaseShopItemConsultant;
import com.jiumi.shop.mapper.BaseShopItemConsultantMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.jiumi.shop.mapper.BaseShopInfoMapper;
import com.jiumi.shop.domain.BaseShopInfo;
import com.jiumi.shop.service.IBaseShopInfoService;

/**
 * 门店Service业务层处理
 *
 * @author jiumi
 * @date 2021-11-19
 */
@Service
public class BaseShopInfoServiceImpl implements IBaseShopInfoService
{
    @Autowired
    private BaseShopInfoMapper baseShopInfoMapper;
    @Autowired
    private BaseShopItemConsultantMapper baseShopItemConsultantMapper;

    /**
     * 查询门店
     *
     * @param id 门店主键
     * @return 门店
     */
    @Override
    public BaseShopInfo selectBaseShopInfoById(String id)
    {
        return baseShopInfoMapper.selectBaseShopInfoById(id);
    }

    /**
     * 查询门店列表
     *
     * @param baseShopInfo 门店
     * @return 门店
     */
    @Override
    public List<BaseShopInfo> selectBaseShopInfoList(BaseShopInfo baseShopInfo)
    {
        return baseShopInfoMapper.selectBaseShopInfoList(baseShopInfo);
    }

    /**
     * 新增门店
     *
     * @param baseShopInfo 门店
     * @return 结果
     */
    @Override
    public int insertBaseShopInfo(BaseShopInfo baseShopInfo)
    {
        baseShopInfo.setCreateTime(DateUtils.getNowDate());
        int i = baseShopInfoMapper.insertBaseShopInfo(baseShopInfo);
        List<BaseShopItemConsultant> baseShopItemConsultantList = baseShopInfo.getBaseShopItemConsultantList();
        if(!baseShopItemConsultantList.isEmpty()) {
            baseShopItemConsultantList.forEach(item -> {
                item.setShopId(baseShopInfo.getId());
            });
            baseShopItemConsultantMapper.insertBatchBaseShopItemConsultant(baseShopItemConsultantList);
        }
        return i;
    }

    /**
     * 修改门店
     *
     * @param baseShopInfo 门店
     * @return 结果
     */
    @Override
    public int updateBaseShopInfo(BaseShopInfo baseShopInfo)
    {
        baseShopInfo.setUpdateTime(DateUtils.getNowDate());
        //先删除项目
        baseShopItemConsultantMapper.deleteBaseShopItemConsultantByShopId(baseShopInfo.getId());
        List<BaseShopItemConsultant> baseShopItemConsultantList = baseShopInfo.getBaseShopItemConsultantList();
        if(!baseShopItemConsultantList.isEmpty()) {
            baseShopItemConsultantList.forEach(item -> {
                item.setShopId(baseShopInfo.getId());
            });
            baseShopItemConsultantMapper.insertBatchBaseShopItemConsultant(baseShopItemConsultantList);
        }
        return baseShopInfoMapper.updateBaseShopInfo(baseShopInfo);
    }

    /**
     * 批量删除门店
     *
     * @param ids 需要删除的门店主键
     * @return 结果
     */
    @Override
    public int deleteBaseShopInfoByIds(String[] ids)
    {
        return baseShopInfoMapper.deleteBaseShopInfoByIds(ids);
    }

    /**
     * 删除门店信息
     *
     * @param id 门店主键
     * @return 结果
     */
    @Override
    public int deleteBaseShopInfoById(String id)
    {
        return baseShopInfoMapper.deleteBaseShopInfoById(id);
    }

    @Override
    public List<BaseAnalyiseVo> getShopAnalysisData(BaseAnalyiseVo vo) {
        return baseShopInfoMapper.getShopAnalysisData(vo);
    }

    @Override
    public List<BaseAnalyiseVo> getShopAnalysisAddData(BaseAnalyiseVo vo) {
        return baseShopInfoMapper.getShopAnalysisAddData(vo);
    }

    @Override
    public List<BaseAnalyiseVo> getShopAnalysisChargeData(BaseAnalyiseVo vo) {
        return baseShopInfoMapper.getShopAnalysisChargeData(vo);
    }
}
