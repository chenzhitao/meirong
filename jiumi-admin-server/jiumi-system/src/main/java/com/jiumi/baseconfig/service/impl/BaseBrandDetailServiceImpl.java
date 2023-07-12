package com.jiumi.baseconfig.service.impl;

import java.util.List;
import com.jiumi.common.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.jiumi.baseconfig.mapper.BaseBrandDetailMapper;
import com.jiumi.baseconfig.domain.BaseBrandDetail;
import com.jiumi.baseconfig.service.IBaseBrandDetailService;

/**
 * 品牌介绍Service业务层处理
 *
 * @author jiumi
 * @date 2021-12-21
 */
@Service
public class BaseBrandDetailServiceImpl implements IBaseBrandDetailService
{
    @Autowired
    private BaseBrandDetailMapper baseBrandDetailMapper;

    /**
     * 查询品牌介绍
     *
     * @param id 品牌介绍主键
     * @return 品牌介绍
     */
    @Override
    public BaseBrandDetail selectBaseBrandDetailById(Long id)
    {
        return baseBrandDetailMapper.selectBaseBrandDetailById(id);
    }

    /**
     * 查询品牌介绍列表
     *
     * @param baseBrandDetail 品牌介绍
     * @return 品牌介绍
     */
    @Override
    public List<BaseBrandDetail> selectBaseBrandDetailList(BaseBrandDetail baseBrandDetail)
    {
        return baseBrandDetailMapper.selectBaseBrandDetailList(baseBrandDetail);
    }

    /**
     * 新增品牌介绍
     *
     * @param baseBrandDetail 品牌介绍
     * @return 结果
     */
    @Override
    public int insertBaseBrandDetail(BaseBrandDetail baseBrandDetail)
    {
        baseBrandDetail.setCreateTime(DateUtils.getNowDate());
        return baseBrandDetailMapper.insertBaseBrandDetail(baseBrandDetail);
    }

    /**
     * 修改品牌介绍
     *
     * @param baseBrandDetail 品牌介绍
     * @return 结果
     */
    @Override
    public int updateBaseBrandDetail(BaseBrandDetail baseBrandDetail)
    {
        baseBrandDetail.setUpdateTime(DateUtils.getNowDate());
        return baseBrandDetailMapper.updateBaseBrandDetail(baseBrandDetail);
    }

    /**
     * 批量删除品牌介绍
     *
     * @param ids 需要删除的品牌介绍主键
     * @return 结果
     */
    @Override
    public int deleteBaseBrandDetailByIds(Long[] ids)
    {
        return baseBrandDetailMapper.deleteBaseBrandDetailByIds(ids);
    }

    /**
     * 删除品牌介绍信息
     *
     * @param id 品牌介绍主键
     * @return 结果
     */
    @Override
    public int deleteBaseBrandDetailById(Long id)
    {
        return baseBrandDetailMapper.deleteBaseBrandDetailById(id);
    }
}
