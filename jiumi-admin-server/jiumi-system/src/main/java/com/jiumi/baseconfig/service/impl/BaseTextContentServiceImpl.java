package com.jiumi.baseconfig.service.impl;

import java.util.List;
import com.jiumi.common.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.jiumi.baseconfig.mapper.BaseTextContentMapper;
import com.jiumi.baseconfig.domain.BaseTextContent;
import com.jiumi.baseconfig.service.IBaseTextContentService;

/**
 * 文本管理Service业务层处理
 *
 * @author jiumi
 * @date 2021-09-05
 */
@Service
public class BaseTextContentServiceImpl implements IBaseTextContentService
{
    @Autowired
    private BaseTextContentMapper baseTextContentMapper;

    /**
     * 查询文本管理
     *
     * @param id 文本管理主键
     * @return 文本管理
     */
    @Override
    public BaseTextContent selectBaseTextContentById(String id)
    {
        return baseTextContentMapper.selectBaseTextContentById(id);
    }

    /**
     * 查询文本管理列表
     *
     * @param baseTextContent 文本管理
     * @return 文本管理
     */
    @Override
    public List<BaseTextContent> selectBaseTextContentList(BaseTextContent baseTextContent)
    {
        return baseTextContentMapper.selectBaseTextContentList(baseTextContent);
    }

    /**
     * 新增文本管理
     *
     * @param baseTextContent 文本管理
     * @return 结果
     */
    @Override
    public int insertBaseTextContent(BaseTextContent baseTextContent)
    {
        baseTextContent.setCreateTime(DateUtils.getNowDate());
        return baseTextContentMapper.insertBaseTextContent(baseTextContent);
    }

    /**
     * 修改文本管理
     *
     * @param baseTextContent 文本管理
     * @return 结果
     */
    @Override
    public int updateBaseTextContent(BaseTextContent baseTextContent)
    {
        baseTextContent.setUpdateTime(DateUtils.getNowDate());
        return baseTextContentMapper.updateBaseTextContent(baseTextContent);
    }

    /**
     * 批量删除文本管理
     *
     * @param ids 需要删除的文本管理主键
     * @return 结果
     */
    @Override
    public int deleteBaseTextContentByIds(String[] ids)
    {
        return baseTextContentMapper.deleteBaseTextContentByIds(ids);
    }

    /**
     * 删除文本管理信息
     *
     * @param id 文本管理主键
     * @return 结果
     */
    @Override
    public int deleteBaseTextContentById(String id)
    {
        return baseTextContentMapper.deleteBaseTextContentById(id);
    }
}
