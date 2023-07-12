package com.jiumi.goods.mapper;

import java.util.List;
import com.jiumi.goods.domain.OmsGoodsSku;

/**
 * 商品规格Mapper接口
 *
 * @author jiumi
 * @date 2021-11-19
 */
public interface OmsGoodsSkuMapper
{
    /**
     * 查询商品规格
     *
     * @param id 商品规格主键
     * @return 商品规格
     */
    public OmsGoodsSku selectOmsGoodsSkuById(String id);

    /**
     * 查询商品规格列表
     *
     * @param omsGoodsSku 商品规格
     * @return 商品规格集合
     */
    public List<OmsGoodsSku> selectOmsGoodsSkuList(OmsGoodsSku omsGoodsSku);

    /**
     * 新增商品规格
     *
     * @param omsGoodsSku 商品规格
     * @return 结果
     */
    public int insertOmsGoodsSku(OmsGoodsSku omsGoodsSku);

    /**
     * 修改商品规格
     *
     * @param omsGoodsSku 商品规格
     * @return 结果
     */
    public int updateOmsGoodsSku(OmsGoodsSku omsGoodsSku);

    /**
     * 删除商品规格
     *
     * @param id 商品规格主键
     * @return 结果
     */
    public int deleteOmsGoodsSkuById(String id);

    /**
     * 批量删除商品规格
     *
     * @param ids 需要删除的数据主键集合
     * @return 结果
     */
    public int deleteOmsGoodsSkuByIds(String[] ids);

    /**
     * 根据商品id删除sku
     * @param goodsId
     * @return
     */
    int deleteOmsGoodsSkuByGoodsId(String goodsId);

    int insertBatchOmsGoodsSku(List<OmsGoodsSku> goodsSku);

    void updateOmsGoodsStrock(OmsGoodsSku sku);

    List<OmsGoodsSku> selectOmsAllGoodsSkuList(OmsGoodsSku omsGoodsSku);
}
