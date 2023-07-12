package com.jiumi.baseconfig.service;

import java.util.List;
import com.jiumi.baseconfig.domain.BaseBrandDetail;

/**
 * 品牌介绍Service接口
 *
 * @author jiumi
 * @date 2021-12-21
 */
public interface IBaseBrandDetailService
{
    /**
     * 查询品牌介绍
     *
     * @param id 品牌介绍主键
     * @return 品牌介绍
     */
    public BaseBrandDetail selectBaseBrandDetailById(Long id);

    /**
     * 查询品牌介绍列表
     *
     * @param baseBrandDetail 品牌介绍
     * @return 品牌介绍集合
     */
    public List<BaseBrandDetail> selectBaseBrandDetailList(BaseBrandDetail baseBrandDetail);

    /**
     * 新增品牌介绍
     *
     * @param baseBrandDetail 品牌介绍
     * @return 结果
     */
    public int insertBaseBrandDetail(BaseBrandDetail baseBrandDetail);

    /**
     * 修改品牌介绍
     *
     * @param baseBrandDetail 品牌介绍
     * @return 结果
     */
    public int updateBaseBrandDetail(BaseBrandDetail baseBrandDetail);

    /**
     * 批量删除品牌介绍
     *
     * @param ids 需要删除的品牌介绍主键集合
     * @return 结果
     */
    public int deleteBaseBrandDetailByIds(Long[] ids);

    /**
     * 删除品牌介绍信息
     *
     * @param id 品牌介绍主键
     * @return 结果
     */
    public int deleteBaseBrandDetailById(Long id);
}
