package com.jiumi.baseconfig.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.jiumi.baseconfig.mapper.BaseBannerMapper;
import com.jiumi.baseconfig.domain.BaseBanner;
import com.jiumi.baseconfig.service.IBaseBannerService;

/**
 * 轮播图Service业务层处理
 *
 * @author jiumi
 * @date 2021-09-08
 */
@Service
public class BaseBannerServiceImpl implements IBaseBannerService
{
    @Autowired
    private BaseBannerMapper baseBannerMapper;

    /**
     * 查询轮播图
     *
     * @param id 轮播图主键
     * @return 轮播图
     */
    @Override
    public BaseBanner selectBaseBannerById(String id)
    {
        return baseBannerMapper.selectBaseBannerById(id);
    }

    /**
     * 查询轮播图列表
     *
     * @param baseBanner 轮播图
     * @return 轮播图
     */
    @Override
    public List<BaseBanner> selectBaseBannerList(BaseBanner baseBanner)
    {
        return baseBannerMapper.selectBaseBannerList(baseBanner);
    }

    /**
     * 新增轮播图
     *
     * @param baseBanner 轮播图
     * @return 结果
     */
    @Override
    public int insertBaseBanner(BaseBanner baseBanner)
    {
        return baseBannerMapper.insertBaseBanner(baseBanner);
    }

    /**
     * 修改轮播图
     *
     * @param baseBanner 轮播图
     * @return 结果
     */
    @Override
    public int updateBaseBanner(BaseBanner baseBanner)
    {
        return baseBannerMapper.updateBaseBanner(baseBanner);
    }

    /**
     * 批量删除轮播图
     *
     * @param ids 需要删除的轮播图主键
     * @return 结果
     */
    @Override
    public int deleteBaseBannerByIds(String[] ids)
    {
        return baseBannerMapper.deleteBaseBannerByIds(ids);
    }

    /**
     * 删除轮播图信息
     *
     * @param id 轮播图主键
     * @return 结果
     */
    @Override
    public int deleteBaseBannerById(String id)
    {
        return baseBannerMapper.deleteBaseBannerById(id);
    }
}
