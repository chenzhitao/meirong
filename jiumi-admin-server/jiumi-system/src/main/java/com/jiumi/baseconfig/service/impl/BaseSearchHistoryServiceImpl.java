package com.jiumi.baseconfig.service.impl;

import java.util.List;
import com.jiumi.common.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.jiumi.baseconfig.mapper.BaseSearchHistoryMapper;
import com.jiumi.baseconfig.domain.BaseSearchHistory;
import com.jiumi.baseconfig.service.IBaseSearchHistoryService;

/**
 * 搜索历史Service业务层处理
 *
 * @author jiumi
 * @date 2021-09-14
 */
@Service
public class BaseSearchHistoryServiceImpl implements IBaseSearchHistoryService
{
    @Autowired
    private BaseSearchHistoryMapper baseSearchHistoryMapper;

    /**
     * 查询搜索历史
     *
     * @param id 搜索历史主键
     * @return 搜索历史
     */
    @Override
    public BaseSearchHistory selectBaseSearchHistoryById(String id)
    {
        return baseSearchHistoryMapper.selectBaseSearchHistoryById(id);
    }

    /**
     * 查询搜索历史列表
     *
     * @param baseSearchHistory 搜索历史
     * @return 搜索历史
     */
    @Override
    public List<BaseSearchHistory> selectBaseSearchHistoryList(BaseSearchHistory baseSearchHistory)
    {
        return baseSearchHistoryMapper.selectBaseSearchHistoryList(baseSearchHistory);
    }

    /**
     * 新增搜索历史
     *
     * @param baseSearchHistory 搜索历史
     * @return 结果
     */
    @Override
    public int insertBaseSearchHistory(BaseSearchHistory baseSearchHistory)
    {
        baseSearchHistory.setCreateTime(DateUtils.getNowDate());
        return baseSearchHistoryMapper.insertBaseSearchHistory(baseSearchHistory);
    }

    /**
     * 修改搜索历史
     *
     * @param baseSearchHistory 搜索历史
     * @return 结果
     */
    @Override
    public int updateBaseSearchHistory(BaseSearchHistory baseSearchHistory)
    {
        return baseSearchHistoryMapper.updateBaseSearchHistory(baseSearchHistory);
    }

    /**
     * 批量删除搜索历史
     *
     * @param ids 需要删除的搜索历史主键
     * @return 结果
     */
    @Override
    public int deleteBaseSearchHistoryByIds(String[] ids)
    {
        return baseSearchHistoryMapper.deleteBaseSearchHistoryByIds(ids);
    }

    /**
     * 删除搜索历史信息
     *
     * @param id 搜索历史主键
     * @return 结果
     */
    @Override
    public int deleteBaseSearchHistoryById(String id)
    {
        return baseSearchHistoryMapper.deleteBaseSearchHistoryById(id);
    }
}
