package com.jiumi.baseconfig.service.impl;

import java.util.List;
import com.jiumi.common.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.jiumi.baseconfig.mapper.BaseUserVideoMapper;
import com.jiumi.baseconfig.domain.BaseUserVideo;
import com.jiumi.baseconfig.service.IBaseUserVideoService;

/**
 * 用户购买的视频Service业务层处理
 *
 * @author jiumi
 * @date 2021-09-28
 */
@Service
public class BaseUserVideoServiceImpl implements IBaseUserVideoService
{
    @Autowired
    private BaseUserVideoMapper baseUserVideoMapper;

    /**
     * 查询用户购买的视频
     *
     * @param id 用户购买的视频主键
     * @return 用户购买的视频
     */
    @Override
    public BaseUserVideo selectBaseUserVideoById(String id)
    {
        return baseUserVideoMapper.selectBaseUserVideoById(id);
    }

    /**
     * 查询用户购买的视频列表
     *
     * @param baseUserVideo 用户购买的视频
     * @return 用户购买的视频
     */
    @Override
    public List<BaseUserVideo> selectBaseUserVideoList(BaseUserVideo baseUserVideo)
    {
        return baseUserVideoMapper.selectBaseUserVideoList(baseUserVideo);
    }

    /**
     * 新增用户购买的视频
     *
     * @param baseUserVideo 用户购买的视频
     * @return 结果
     */
    @Override
    public int insertBaseUserVideo(BaseUserVideo baseUserVideo)
    {
        baseUserVideo.setCreateTime(DateUtils.getNowDate());
        return baseUserVideoMapper.insertBaseUserVideo(baseUserVideo);
    }

    /**
     * 修改用户购买的视频
     *
     * @param baseUserVideo 用户购买的视频
     * @return 结果
     */
    @Override
    public int updateBaseUserVideo(BaseUserVideo baseUserVideo)
    {
        return baseUserVideoMapper.updateBaseUserVideo(baseUserVideo);
    }

    /**
     * 批量删除用户购买的视频
     *
     * @param ids 需要删除的用户购买的视频主键
     * @return 结果
     */
    @Override
    public int deleteBaseUserVideoByIds(String[] ids)
    {
        return baseUserVideoMapper.deleteBaseUserVideoByIds(ids);
    }

    /**
     * 删除用户购买的视频信息
     *
     * @param id 用户购买的视频主键
     * @return 结果
     */
    @Override
    public int deleteBaseUserVideoById(String id)
    {
        return baseUserVideoMapper.deleteBaseUserVideoById(id);
    }
}
