package com.jiumi.shop.service.impl;

import java.util.List;
import com.jiumi.common.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.jiumi.shop.mapper.BaseConsultantRankMapper;
import com.jiumi.shop.domain.BaseConsultantRank;
import com.jiumi.shop.service.IBaseConsultantRankService;

/**
 * 顾问等级Service业务层处理
 *
 * @author jiumi
 * @date 2022-03-22
 */
@Service
public class BaseConsultantRankServiceImpl implements IBaseConsultantRankService
{
    @Autowired
    private BaseConsultantRankMapper baseConsultantRankMapper;

    /**
     * 查询顾问等级
     *
     * @param levelId 顾问等级主键
     * @return 顾问等级
     */
    @Override
    public BaseConsultantRank selectBaseConsultantRankByLevelId(Long levelId)
    {
        return baseConsultantRankMapper.selectBaseConsultantRankByLevelId(levelId);
    }

    /**
     * 查询顾问等级列表
     *
     * @param baseConsultantRank 顾问等级
     * @return 顾问等级
     */
    @Override
    public List<BaseConsultantRank> selectBaseConsultantRankList(BaseConsultantRank baseConsultantRank)
    {
        return baseConsultantRankMapper.selectBaseConsultantRankList(baseConsultantRank);
    }

    /**
     * 新增顾问等级
     *
     * @param baseConsultantRank 顾问等级
     * @return 结果
     */
    @Override
    public int insertBaseConsultantRank(BaseConsultantRank baseConsultantRank)
    {
        baseConsultantRank.setCreateTime(DateUtils.getNowDate());
        return baseConsultantRankMapper.insertBaseConsultantRank(baseConsultantRank);
    }

    /**
     * 修改顾问等级
     *
     * @param baseConsultantRank 顾问等级
     * @return 结果
     */
    @Override
    public int updateBaseConsultantRank(BaseConsultantRank baseConsultantRank)
    {
        return baseConsultantRankMapper.updateBaseConsultantRank(baseConsultantRank);
    }

    /**
     * 批量删除顾问等级
     *
     * @param levelIds 需要删除的顾问等级主键
     * @return 结果
     */
    @Override
    public int deleteBaseConsultantRankByLevelIds(Long[] levelIds)
    {
        return baseConsultantRankMapper.deleteBaseConsultantRankByLevelIds(levelIds);
    }

    /**
     * 删除顾问等级信息
     *
     * @param levelId 顾问等级主键
     * @return 结果
     */
    @Override
    public int deleteBaseConsultantRankByLevelId(Long levelId)
    {
        return baseConsultantRankMapper.deleteBaseConsultantRankByLevelId(levelId);
    }
}
