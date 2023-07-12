package com.jiumi.baseconfig.service.impl;

import java.util.List;
import com.jiumi.common.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.jiumi.baseconfig.mapper.BaseQuestionMapper;
import com.jiumi.baseconfig.domain.BaseQuestion;
import com.jiumi.baseconfig.service.IBaseQuestionService;

/**
 * 问题管理Service业务层处理
 *
 * @author jiumi
 * @date 2021-09-05
 */
@Service
public class BaseQuestionServiceImpl implements IBaseQuestionService
{
    @Autowired
    private BaseQuestionMapper baseQuestionMapper;

    /**
     * 查询问题管理
     *
     * @param id 问题管理主键
     * @return 问题管理
     */
    @Override
    public BaseQuestion selectBaseQuestionById(String id)
    {
        return baseQuestionMapper.selectBaseQuestionById(id);
    }

    /**
     * 查询问题管理列表
     *
     * @param baseQuestion 问题管理
     * @return 问题管理
     */
    @Override
    public List<BaseQuestion> selectBaseQuestionList(BaseQuestion baseQuestion)
    {
        return baseQuestionMapper.selectBaseQuestionList(baseQuestion);
    }

    /**
     * 新增问题管理
     *
     * @param baseQuestion 问题管理
     * @return 结果
     */
    @Override
    public int insertBaseQuestion(BaseQuestion baseQuestion)
    {
        baseQuestion.setCreateTime(DateUtils.getNowDate());
        return baseQuestionMapper.insertBaseQuestion(baseQuestion);
    }

    /**
     * 修改问题管理
     *
     * @param baseQuestion 问题管理
     * @return 结果
     */
    @Override
    public int updateBaseQuestion(BaseQuestion baseQuestion)
    {
        baseQuestion.setUpdateTime(DateUtils.getNowDate());
        return baseQuestionMapper.updateBaseQuestion(baseQuestion);
    }

    /**
     * 批量删除问题管理
     *
     * @param ids 需要删除的问题管理主键
     * @return 结果
     */
    @Override
    public int deleteBaseQuestionByIds(String[] ids)
    {
        return baseQuestionMapper.deleteBaseQuestionByIds(ids);
    }

    /**
     * 删除问题管理信息
     *
     * @param id 问题管理主键
     * @return 结果
     */
    @Override
    public int deleteBaseQuestionById(String id)
    {
        return baseQuestionMapper.deleteBaseQuestionById(id);
    }
}
