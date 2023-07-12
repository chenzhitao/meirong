package com.jiumi.baseconfig.mapper;

import java.util.List;
import com.jiumi.baseconfig.domain.BaseQuestion;

/**
 * 问题管理Mapper接口
 *
 * @author jiumi
 * @date 2021-09-05
 */
public interface BaseQuestionMapper
{
    /**
     * 查询问题管理
     *
     * @param id 问题管理主键
     * @return 问题管理
     */
    public BaseQuestion selectBaseQuestionById(String id);

    /**
     * 查询问题管理列表
     *
     * @param baseQuestion 问题管理
     * @return 问题管理集合
     */
    public List<BaseQuestion> selectBaseQuestionList(BaseQuestion baseQuestion);

    /**
     * 新增问题管理
     *
     * @param baseQuestion 问题管理
     * @return 结果
     */
    public int insertBaseQuestion(BaseQuestion baseQuestion);

    /**
     * 修改问题管理
     *
     * @param baseQuestion 问题管理
     * @return 结果
     */
    public int updateBaseQuestion(BaseQuestion baseQuestion);

    /**
     * 删除问题管理
     *
     * @param id 问题管理主键
     * @return 结果
     */
    public int deleteBaseQuestionById(String id);

    /**
     * 批量删除问题管理
     *
     * @param ids 需要删除的数据主键集合
     * @return 结果
     */
    public int deleteBaseQuestionByIds(String[] ids);
}
