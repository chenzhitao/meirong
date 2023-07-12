package com.jiumi.baseconfig.mapper;

import java.util.List;
import com.jiumi.baseconfig.domain.BaseSearchHistory;

/**
 * 搜索历史Mapper接口
 *
 * @author jiumi
 * @date 2021-09-14
 */
public interface BaseSearchHistoryMapper
{
    /**
     * 查询搜索历史
     *
     * @param id 搜索历史主键
     * @return 搜索历史
     */
    public BaseSearchHistory selectBaseSearchHistoryById(String id);

    /**
     * 查询搜索历史列表
     *
     * @param baseSearchHistory 搜索历史
     * @return 搜索历史集合
     */
    public List<BaseSearchHistory> selectBaseSearchHistoryList(BaseSearchHistory baseSearchHistory);

    /**
     * 新增搜索历史
     *
     * @param baseSearchHistory 搜索历史
     * @return 结果
     */
    public int insertBaseSearchHistory(BaseSearchHistory baseSearchHistory);

    /**
     * 修改搜索历史
     *
     * @param baseSearchHistory 搜索历史
     * @return 结果
     */
    public int updateBaseSearchHistory(BaseSearchHistory baseSearchHistory);

    /**
     * 删除搜索历史
     *
     * @param id 搜索历史主键
     * @return 结果
     */
    public int deleteBaseSearchHistoryById(String id);

    /**
     * 批量删除搜索历史
     *
     * @param ids 需要删除的数据主键集合
     * @return 结果
     */
    public int deleteBaseSearchHistoryByIds(String[] ids);
}
