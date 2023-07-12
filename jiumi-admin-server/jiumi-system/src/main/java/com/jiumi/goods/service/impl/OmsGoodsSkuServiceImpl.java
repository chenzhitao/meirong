package com.jiumi.goods.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.jiumi.goods.mapper.OmsGoodsSkuMapper;
import com.jiumi.goods.domain.OmsGoodsSku;
import com.jiumi.goods.service.IOmsGoodsSkuService;

/**
 * 商品规格Service业务层处理
 *
 * @author jiumi
 * @date 2021-11-19
 */
@Service
public class OmsGoodsSkuServiceImpl implements IOmsGoodsSkuService
{
    @Autowired
    private OmsGoodsSkuMapper omsGoodsSkuMapper;

    /**
     * 查询商品规格
     *
     * @param id 商品规格主键
     * @return 商品规格
     */
    @Override
    public OmsGoodsSku selectOmsGoodsSkuById(String id)
    {
        return omsGoodsSkuMapper.selectOmsGoodsSkuById(id);
    }

    /**
     * 查询商品规格列表
     *
     * @param omsGoodsSku 商品规格
     * @return 商品规格
     */
    @Override
    public List<OmsGoodsSku> selectOmsGoodsSkuList(OmsGoodsSku omsGoodsSku)
    {
        return omsGoodsSkuMapper.selectOmsGoodsSkuList(omsGoodsSku);
    }

    /**
     * 新增商品规格
     *
     * @param omsGoodsSku 商品规格
     * @return 结果
     */
    @Override
    public int insertOmsGoodsSku(OmsGoodsSku omsGoodsSku)
    {
        return omsGoodsSkuMapper.insertOmsGoodsSku(omsGoodsSku);
    }

    /**
     * 修改商品规格
     *
     * @param omsGoodsSku 商品规格
     * @return 结果
     */
    @Override
    public int updateOmsGoodsSku(OmsGoodsSku omsGoodsSku)
    {
        return omsGoodsSkuMapper.updateOmsGoodsSku(omsGoodsSku);
    }

    /**
     * 批量删除商品规格
     *
     * @param ids 需要删除的商品规格主键
     * @return 结果
     */
    @Override
    public int deleteOmsGoodsSkuByIds(String[] ids)
    {
        return omsGoodsSkuMapper.deleteOmsGoodsSkuByIds(ids);
    }

    /**
     * 删除商品规格信息
     *
     * @param id 商品规格主键
     * @return 结果
     */
    @Override
    public int deleteOmsGoodsSkuById(String id)
    {
        return omsGoodsSkuMapper.deleteOmsGoodsSkuById(id);
    }

    @Override
    public void updateOmsGoodsStrock(OmsGoodsSku sku) {
        omsGoodsSkuMapper.updateOmsGoodsStrock(sku);
    }

    @Override
    public List<OmsGoodsSku> selectOmsAllGoodsSkuList(OmsGoodsSku omsGoodsSku) {
        return omsGoodsSkuMapper.selectOmsAllGoodsSkuList(omsGoodsSku);
    }
}
