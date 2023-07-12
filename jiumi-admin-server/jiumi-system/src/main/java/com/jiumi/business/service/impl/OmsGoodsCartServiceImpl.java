package com.jiumi.business.service.impl;

import java.util.List;
import com.jiumi.common.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.jiumi.business.mapper.OmsGoodsCartMapper;
import com.jiumi.business.domain.OmsGoodsCart;
import com.jiumi.business.service.IOmsGoodsCartService;

/**
 * 购物车Service业务层处理
 *
 * @author jiumi
 * @date 2021-11-19
 */
@Service
public class OmsGoodsCartServiceImpl implements IOmsGoodsCartService
{
    @Autowired
    private OmsGoodsCartMapper omsGoodsCartMapper;

    /**
     * 查询购物车
     *
     * @param id 购物车主键
     * @return 购物车
     */
    @Override
    public OmsGoodsCart selectOmsGoodsCartById(String id)
    {
        return omsGoodsCartMapper.selectOmsGoodsCartById(id);
    }

    /**
     * 查询购物车列表
     *
     * @param omsGoodsCart 购物车
     * @return 购物车
     */
    @Override
    public List<OmsGoodsCart> selectOmsGoodsCartList(OmsGoodsCart omsGoodsCart)
    {
        return omsGoodsCartMapper.selectOmsGoodsCartList(omsGoodsCart);
    }

    /**
     * 新增购物车
     *
     * @param omsGoodsCart 购物车
     * @return 结果
     */
    @Override
    public int insertOmsGoodsCart(OmsGoodsCart omsGoodsCart)
    {
        omsGoodsCart.setCreateTime(DateUtils.getNowDate());
        return omsGoodsCartMapper.insertOmsGoodsCart(omsGoodsCart);
    }

    /**
     * 修改购物车
     *
     * @param omsGoodsCart 购物车
     * @return 结果
     */
    @Override
    public int updateOmsGoodsCart(OmsGoodsCart omsGoodsCart)
    {
        return omsGoodsCartMapper.updateOmsGoodsCart(omsGoodsCart);
    }

    /**
     * 批量删除购物车
     *
     * @param ids 需要删除的购物车主键
     * @return 结果
     */
    @Override
    public int deleteOmsGoodsCartByIds(String[] ids)
    {
        return omsGoodsCartMapper.deleteOmsGoodsCartByIds(ids);
    }

    /**
     * 删除购物车信息
     *
     * @param id 购物车主键
     * @return 结果
     */
    @Override
    public int deleteOmsGoodsCartById(String id)
    {
        return omsGoodsCartMapper.deleteOmsGoodsCartById(id);
    }

    @Override
    public void deleteOmsGoodsCart(OmsGoodsCart cart) {
        omsGoodsCartMapper.deleteOmsGoodsCart(cart);
    }
}
