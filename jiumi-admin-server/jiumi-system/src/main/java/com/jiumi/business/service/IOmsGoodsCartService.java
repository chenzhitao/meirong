package com.jiumi.business.service;

import java.util.List;
import com.jiumi.business.domain.OmsGoodsCart;

/**
 * 购物车Service接口
 *
 * @author jiumi
 * @date 2021-11-19
 */
public interface IOmsGoodsCartService
{
    /**
     * 查询购物车
     *
     * @param id 购物车主键
     * @return 购物车
     */
    public OmsGoodsCart selectOmsGoodsCartById(String id);

    /**
     * 查询购物车列表
     *
     * @param omsGoodsCart 购物车
     * @return 购物车集合
     */
    public List<OmsGoodsCart> selectOmsGoodsCartList(OmsGoodsCart omsGoodsCart);

    /**
     * 新增购物车
     *
     * @param omsGoodsCart 购物车
     * @return 结果
     */
    public int insertOmsGoodsCart(OmsGoodsCart omsGoodsCart);

    /**
     * 修改购物车
     *
     * @param omsGoodsCart 购物车
     * @return 结果
     */
    public int updateOmsGoodsCart(OmsGoodsCart omsGoodsCart);

    /**
     * 批量删除购物车
     *
     * @param ids 需要删除的购物车主键集合
     * @return 结果
     */
    public int deleteOmsGoodsCartByIds(String[] ids);

    /**
     * 删除购物车信息
     *
     * @param id 购物车主键
     * @return 结果
     */
    public int deleteOmsGoodsCartById(String id);

    void deleteOmsGoodsCart(OmsGoodsCart cart);
}
