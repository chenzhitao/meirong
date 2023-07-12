package com.jiumi.baseconfig.service;

import java.util.List;
import com.jiumi.baseconfig.domain.BaseBanner;

/**
 * 轮播图Service接口
 *
 * @author jiumi
 * @date 2021-09-08
 */
public interface IBaseBannerService
{
    /**
     * 查询轮播图
     *
     * @param id 轮播图主键
     * @return 轮播图
     */
    public BaseBanner selectBaseBannerById(String id);

    /**
     * 查询轮播图列表
     *
     * @param baseBanner 轮播图
     * @return 轮播图集合
     */
    public List<BaseBanner> selectBaseBannerList(BaseBanner baseBanner);

    /**
     * 新增轮播图
     *
     * @param baseBanner 轮播图
     * @return 结果
     */
    public int insertBaseBanner(BaseBanner baseBanner);

    /**
     * 修改轮播图
     *
     * @param baseBanner 轮播图
     * @return 结果
     */
    public int updateBaseBanner(BaseBanner baseBanner);

    /**
     * 批量删除轮播图
     *
     * @param ids 需要删除的轮播图主键集合
     * @return 结果
     */
    public int deleteBaseBannerByIds(String[] ids);

    /**
     * 删除轮播图信息
     *
     * @param id 轮播图主键
     * @return 结果
     */
    public int deleteBaseBannerById(String id);
}
