package com.jiumi.shop.service;

import java.util.List;
import com.jiumi.shop.domain.BaseConsultantRank;

/**
 * 顾问等级Service接口
 *
 * @author jiumi
 * @date 2022-03-22
 */
public interface IBaseConsultantRankService
{
    /**
     * 查询顾问等级
     *
     * @param levelId 顾问等级主键
     * @return 顾问等级
     */
    public BaseConsultantRank selectBaseConsultantRankByLevelId(Long levelId);

    /**
     * 查询顾问等级列表
     *
     * @param baseConsultantRank 顾问等级
     * @return 顾问等级集合
     */
    public List<BaseConsultantRank> selectBaseConsultantRankList(BaseConsultantRank baseConsultantRank);

    /**
     * 新增顾问等级
     *
     * @param baseConsultantRank 顾问等级
     * @return 结果
     */
    public int insertBaseConsultantRank(BaseConsultantRank baseConsultantRank);

    /**
     * 修改顾问等级
     *
     * @param baseConsultantRank 顾问等级
     * @return 结果
     */
    public int updateBaseConsultantRank(BaseConsultantRank baseConsultantRank);

    /**
     * 批量删除顾问等级
     *
     * @param levelIds 需要删除的顾问等级主键集合
     * @return 结果
     */
    public int deleteBaseConsultantRankByLevelIds(Long[] levelIds);

    /**
     * 删除顾问等级信息
     *
     * @param levelId 顾问等级主键
     * @return 结果
     */
    public int deleteBaseConsultantRankByLevelId(Long levelId);
}
