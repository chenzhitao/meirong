package com.jiumi.goods.service.impl;

import java.util.List;
import com.jiumi.common.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.jiumi.goods.mapper.OmsGoodsTypeMapper;
import com.jiumi.goods.domain.OmsGoodsType;
import com.jiumi.goods.service.IOmsGoodsTypeService;

/**
 * 商品类型Service业务层处理
 *
 * @author jiumi
 * @date 2021-11-19
 */
@Service
public class OmsGoodsTypeServiceImpl implements IOmsGoodsTypeService
{
    @Autowired
    private OmsGoodsTypeMapper omsGoodsTypeMapper;

    /**
     * 查询商品类型
     *
     * @param id 商品类型主键
     * @return 商品类型
     */
    @Override
    public OmsGoodsType selectOmsGoodsTypeById(String id)
    {
        return omsGoodsTypeMapper.selectOmsGoodsTypeById(id);
    }

    /**
     * 查询商品类型列表
     *
     * @param omsGoodsType 商品类型
     * @return 商品类型
     */
    @Override
    public List<OmsGoodsType> selectOmsGoodsTypeList(OmsGoodsType omsGoodsType)
    {
        return omsGoodsTypeMapper.selectOmsGoodsTypeList(omsGoodsType);
    }

    /**
     * 新增商品类型
     *
     * @param omsGoodsType 商品类型
     * @return 结果
     */
    @Override
    public int insertOmsGoodsType(OmsGoodsType omsGoodsType)
    {
        omsGoodsType.setCreateTime(DateUtils.getNowDate());
        return omsGoodsTypeMapper.insertOmsGoodsType(omsGoodsType);
    }

    /**
     * 修改商品类型
     *
     * @param omsGoodsType 商品类型
     * @return 结果
     */
    @Override
    public int updateOmsGoodsType(OmsGoodsType omsGoodsType)
    {
        return omsGoodsTypeMapper.updateOmsGoodsType(omsGoodsType);
    }

    /**
     * 批量删除商品类型
     *
     * @param ids 需要删除的商品类型主键
     * @return 结果
     */
    @Override
    public int deleteOmsGoodsTypeByIds(String[] ids)
    {
        return omsGoodsTypeMapper.deleteOmsGoodsTypeByIds(ids);
    }

    /**
     * 删除商品类型信息
     *
     * @param id 商品类型主键
     * @return 结果
     */
    @Override
    public int deleteOmsGoodsTypeById(String id)
    {
        return omsGoodsTypeMapper.deleteOmsGoodsTypeById(id);
    }
}
