package com.jiumi.goods.service.impl;

import java.util.List;
import com.jiumi.common.utils.DateUtils;
import com.jiumi.common.utils.StringUtils;
import com.jiumi.goods.domain.OmsGoodsSku;
import com.jiumi.goods.mapper.OmsGoodsSkuMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.jiumi.goods.mapper.OmsGoodsInfoMapper;
import com.jiumi.goods.domain.OmsGoodsInfo;
import com.jiumi.goods.service.IOmsGoodsInfoService;

/**
 * 商品管理Service业务层处理
 *
 * @author jiumi
 * @date 2021-11-19
 */
@Service
public class OmsGoodsInfoServiceImpl implements IOmsGoodsInfoService
{
    @Autowired
    private OmsGoodsInfoMapper omsGoodsInfoMapper;

    @Autowired
    private OmsGoodsSkuMapper omsGoodsSkuMapper;

    /**
     * 查询商品管理
     *
     * @param id 商品管理主键
     * @return 商品管理
     */
    @Override
    public OmsGoodsInfo selectOmsGoodsInfoById(String id)
    {
        OmsGoodsInfo omsGoodsInfo = omsGoodsInfoMapper.selectOmsGoodsInfoById(id);
        if(StringUtils.isNotEmpty(id)) {
            OmsGoodsSku sku = new OmsGoodsSku();
            sku.setGoodsId(Long.valueOf(id));
            List<OmsGoodsSku> omsGoodsSkus = omsGoodsSkuMapper.selectOmsGoodsSkuList(sku);
            omsGoodsInfo.setGoodsSku(omsGoodsSkus);
        }
        return omsGoodsInfo;
    }

    /**
     * 查询商品管理列表
     *
     * @param omsGoodsInfo 商品管理
     * @return 商品管理
     */
    @Override
    public List<OmsGoodsInfo> selectOmsGoodsInfoList(OmsGoodsInfo omsGoodsInfo)
    {
        return omsGoodsInfoMapper.selectOmsGoodsInfoList(omsGoodsInfo);
    }

    /**
     * 新增商品管理
     *
     * @param omsGoodsInfo 商品管理
     * @return 结果
     */
    @Override
    public int insertOmsGoodsInfo(OmsGoodsInfo omsGoodsInfo)
    {
        omsGoodsInfo.setCreateTime(DateUtils.getNowDate());
        int i = omsGoodsInfoMapper.insertOmsGoodsInfo(omsGoodsInfo);
        if(!omsGoodsInfo.getGoodsSku().isEmpty()){
            for (OmsGoodsSku omsGoodsSku : omsGoodsInfo.getGoodsSku()) {
                omsGoodsSku.setGoodsId(Long.valueOf(omsGoodsInfo.getId()));
            }
            omsGoodsSkuMapper.insertBatchOmsGoodsSku(omsGoodsInfo.getGoodsSku());
        }
        return i;
    }

    /**
     * 修改商品管理
     *
     * @param omsGoodsInfo 商品管理
     * @return 结果
     */
    @Override
    public int updateOmsGoodsInfo(OmsGoodsInfo omsGoodsInfo)
    {
        omsGoodsInfo.setUpdateTime(DateUtils.getNowDate());
        //删除已前的sku,再添加
        //omsGoodsSkuMapper.deleteOmsGoodsSkuByGoodsId(omsGoodsInfo.getId());
        List<OmsGoodsSku> goodsSku = omsGoodsInfo.getGoodsSku();
        for (OmsGoodsSku omsGoodsSku : goodsSku) {
            if(StringUtils.isNotEmpty(omsGoodsSku.getId())){
                omsGoodsSkuMapper.updateOmsGoodsSku(omsGoodsSku);
            }else{
                omsGoodsSku.setGoodsId(Long.valueOf(omsGoodsInfo.getId()));
                omsGoodsSkuMapper.insertOmsGoodsSku(omsGoodsSku);
            }
        }
        return omsGoodsInfoMapper.updateOmsGoodsInfo(omsGoodsInfo);
    }

    /**
     * 批量删除商品管理
     *
     * @param ids 需要删除的商品管理主键
     * @return 结果
     */
    @Override
    public int deleteOmsGoodsInfoByIds(String[] ids)
    {
        return omsGoodsInfoMapper.deleteOmsGoodsInfoByIds(ids);
    }

    /**
     * 删除商品管理信息
     *
     * @param id 商品管理主键
     * @return 结果
     */
    @Override
    public int deleteOmsGoodsInfoById(String id)
    {
        return omsGoodsInfoMapper.deleteOmsGoodsInfoById(id);
    }

    @Override
    public List<OmsGoodsInfo> selectWxOmsGoodsInfoList(OmsGoodsInfo param) {
        return omsGoodsInfoMapper.selectWxOmsGoodsInfoList(param);
    }

    @Override
    public List<OmsGoodsInfo> selectOmsGoodsInfoReferrerList(OmsGoodsInfo param) {
        return omsGoodsInfoMapper.selectOmsGoodsInfoReferrerList(param);
    }
}
