package com.jiumi.goods.service;

import java.util.List;
import com.jiumi.goods.domain.OmsGoodsInfo;

/**
 * 商品管理Service接口
 *
 * @author jiumi
 * @date 2021-11-19
 */
public interface IOmsGoodsInfoService
{
    /**
     * 查询商品管理
     *
     * @param id 商品管理主键
     * @return 商品管理
     */
    public OmsGoodsInfo selectOmsGoodsInfoById(String id);

    /**
     * 查询商品管理列表
     *
     * @param omsGoodsInfo 商品管理
     * @return 商品管理集合
     */
    public List<OmsGoodsInfo> selectOmsGoodsInfoList(OmsGoodsInfo omsGoodsInfo);

    /**
     * 新增商品管理
     *
     * @param omsGoodsInfo 商品管理
     * @return 结果
     */
    public int insertOmsGoodsInfo(OmsGoodsInfo omsGoodsInfo);

    /**
     * 修改商品管理
     *
     * @param omsGoodsInfo 商品管理
     * @return 结果
     */
    public int updateOmsGoodsInfo(OmsGoodsInfo omsGoodsInfo);

    /**
     * 批量删除商品管理
     *
     * @param ids 需要删除的商品管理主键集合
     * @return 结果
     */
    public int deleteOmsGoodsInfoByIds(String[] ids);

    /**
     * 删除商品管理信息
     *
     * @param id 商品管理主键
     * @return 结果
     */
    public int deleteOmsGoodsInfoById(String id);

    List<OmsGoodsInfo> selectWxOmsGoodsInfoList(OmsGoodsInfo param);

    List<OmsGoodsInfo> selectOmsGoodsInfoReferrerList(OmsGoodsInfo param);
}
