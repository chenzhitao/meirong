package com.jiumi.baseconfig.service;

import java.util.List;
import com.jiumi.baseconfig.domain.BaseUserVideo;

/**
 * 用户购买的视频Service接口
 *
 * @author jiumi
 * @date 2021-09-28
 */
public interface IBaseUserVideoService
{
    /**
     * 查询用户购买的视频
     *
     * @param id 用户购买的视频主键
     * @return 用户购买的视频
     */
    public BaseUserVideo selectBaseUserVideoById(String id);

    /**
     * 查询用户购买的视频列表
     *
     * @param baseUserVideo 用户购买的视频
     * @return 用户购买的视频集合
     */
    public List<BaseUserVideo> selectBaseUserVideoList(BaseUserVideo baseUserVideo);

    /**
     * 新增用户购买的视频
     *
     * @param baseUserVideo 用户购买的视频
     * @return 结果
     */
    public int insertBaseUserVideo(BaseUserVideo baseUserVideo);

    /**
     * 修改用户购买的视频
     *
     * @param baseUserVideo 用户购买的视频
     * @return 结果
     */
    public int updateBaseUserVideo(BaseUserVideo baseUserVideo);

    /**
     * 批量删除用户购买的视频
     *
     * @param ids 需要删除的用户购买的视频主键集合
     * @return 结果
     */
    public int deleteBaseUserVideoByIds(String[] ids);

    /**
     * 删除用户购买的视频信息
     *
     * @param id 用户购买的视频主键
     * @return 结果
     */
    public int deleteBaseUserVideoById(String id);
}
