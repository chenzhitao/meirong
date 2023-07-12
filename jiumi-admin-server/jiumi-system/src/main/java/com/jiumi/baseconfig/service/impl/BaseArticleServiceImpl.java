package com.jiumi.baseconfig.service.impl;

import java.util.List;
import com.jiumi.common.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.jiumi.baseconfig.mapper.BaseArticleMapper;
import com.jiumi.baseconfig.domain.BaseArticle;
import com.jiumi.baseconfig.service.IBaseArticleService;

/**
 * 问题管理Service业务层处理
 *
 * @author jiumi
 * @date 2021-09-05
 */
@Service
public class BaseArticleServiceImpl implements IBaseArticleService
{
    @Autowired
    private BaseArticleMapper baseArticleMapper;

    /**
     * 查询问题管理
     *
     * @param id 问题管理主键
     * @return 问题管理
     */
    @Override
    public BaseArticle selectBaseArticleById(String id)
    {
        return baseArticleMapper.selectBaseArticleById(id);
    }

    /**
     * 查询问题管理列表
     *
     * @param baseArticle 问题管理
     * @return 问题管理
     */
    @Override
    public List<BaseArticle> selectBaseArticleList(BaseArticle baseArticle)
    {
        return baseArticleMapper.selectBaseArticleList(baseArticle);
    }

    /**
     * 新增问题管理
     *
     * @param baseArticle 问题管理
     * @return 结果
     */
    @Override
    public int insertBaseArticle(BaseArticle baseArticle)
    {
        baseArticle.setCreateTime(DateUtils.getNowDate());
        return baseArticleMapper.insertBaseArticle(baseArticle);
    }

    /**
     * 修改问题管理
     *
     * @param baseArticle 问题管理
     * @return 结果
     */
    @Override
    public int updateBaseArticle(BaseArticle baseArticle)
    {
        baseArticle.setUpdateTime(DateUtils.getNowDate());
        return baseArticleMapper.updateBaseArticle(baseArticle);
    }

    /**
     * 批量删除问题管理
     *
     * @param ids 需要删除的问题管理主键
     * @return 结果
     */
    @Override
    public int deleteBaseArticleByIds(String[] ids)
    {
        return baseArticleMapper.deleteBaseArticleByIds(ids);
    }

    /**
     * 删除问题管理信息
     *
     * @param id 问题管理主键
     * @return 结果
     */
    @Override
    public int deleteBaseArticleById(String id)
    {
        return baseArticleMapper.deleteBaseArticleById(id);
    }
}
