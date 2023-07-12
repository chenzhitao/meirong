package com.jiumi.baseconfig.mapper;

import java.util.List;
import com.jiumi.baseconfig.domain.BaseArticle;

/**
 * 问题管理Mapper接口
 *
 * @author jiumi
 * @date 2021-09-05
 */
public interface BaseArticleMapper
{
    /**
     * 查询问题管理
     *
     * @param id 问题管理主键
     * @return 问题管理
     */
    public BaseArticle selectBaseArticleById(String id);

    /**
     * 查询问题管理列表
     *
     * @param baseArticle 问题管理
     * @return 问题管理集合
     */
    public List<BaseArticle> selectBaseArticleList(BaseArticle baseArticle);

    /**
     * 新增问题管理
     *
     * @param baseArticle 问题管理
     * @return 结果
     */
    public int insertBaseArticle(BaseArticle baseArticle);

    /**
     * 修改问题管理
     *
     * @param baseArticle 问题管理
     * @return 结果
     */
    public int updateBaseArticle(BaseArticle baseArticle);

    /**
     * 删除问题管理
     *
     * @param id 问题管理主键
     * @return 结果
     */
    public int deleteBaseArticleById(String id);

    /**
     * 批量删除问题管理
     *
     * @param ids 需要删除的数据主键集合
     * @return 结果
     */
    public int deleteBaseArticleByIds(String[] ids);
}
