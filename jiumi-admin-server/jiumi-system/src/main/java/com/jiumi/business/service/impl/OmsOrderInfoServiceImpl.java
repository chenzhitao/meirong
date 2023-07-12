package com.jiumi.business.service.impl;

import java.util.List;

import com.jiumi.business.domain.OmsOrderItem;
import com.jiumi.business.mapper.OmsOrderItemMapper;
import com.jiumi.common.utils.DateUtils;
import com.jiumi.goods.domain.OmsGoodsSku;
import com.jiumi.goods.service.IOmsGoodsSkuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.jiumi.business.mapper.OmsOrderInfoMapper;
import com.jiumi.business.domain.OmsOrderInfo;
import com.jiumi.business.service.IOmsOrderInfoService;

/**
 * 订单Service业务层处理
 *
 * @author jiumi
 * @date 2021-11-25
 */
@Service
public class OmsOrderInfoServiceImpl implements IOmsOrderInfoService
{
    @Autowired
    private OmsOrderInfoMapper omsOrderInfoMapper;
    @Autowired
    private OmsOrderItemMapper omsOrderItemMapper;

    @Autowired
    private IOmsGoodsSkuService omsGoodsSkuService;


    /**
     * 查询订单
     *
     * @param id 订单主键
     * @return 订单
     */
    @Override
    public OmsOrderInfo selectOmsOrderInfoById(String id)
    {
        OmsOrderInfo omsOrderInfo = omsOrderInfoMapper.selectOmsOrderInfoById(id);
        //查询订单详情
        omsOrderInfo.getId();
        OmsOrderItem omsOrderItem = new OmsOrderItem();
        omsOrderItem.setOrderId(Long.valueOf(omsOrderInfo.getId()));
        List<OmsOrderItem> omsOrderItems = omsOrderItemMapper.selectOmsOrderItemList(omsOrderItem);
        omsOrderInfo.setOrderItemList(omsOrderItems);
        return omsOrderInfo;
    }

    /**
     * 查询订单列表
     *
     * @param omsOrderInfo 订单
     * @return 订单
     */
    @Override
    public List<OmsOrderInfo> selectOmsOrderInfoList(OmsOrderInfo omsOrderInfo)
    {
        return omsOrderInfoMapper.selectOmsOrderInfoList(omsOrderInfo);
    }

    /**
     * 新增订单
     *
     * @param omsOrderInfo 订单
     * @return 结果
     */
    @Override
    public int insertOmsOrderInfo(OmsOrderInfo omsOrderInfo)
    {
        omsOrderInfo.setCreateTime(DateUtils.getNowDate());
        return omsOrderInfoMapper.insertOmsOrderInfo(omsOrderInfo);
    }

    /**
     * 修改订单
     *
     * @param omsOrderInfo 订单
     * @return 结果
     */
    @Override
    public int updateOmsOrderInfo(OmsOrderInfo omsOrderInfo)
    {
        omsOrderInfo.setUpdateTime(DateUtils.getNowDate());
        return omsOrderInfoMapper.updateOmsOrderInfo(omsOrderInfo);
    }

    /**
     * 批量删除订单
     *
     * @param ids 需要删除的订单主键
     * @return 结果
     */
    @Override
    public int deleteOmsOrderInfoByIds(String[] ids)
    {
        return omsOrderInfoMapper.deleteOmsOrderInfoByIds(ids);
    }

    /**
     * 删除订单信息
     *
     * @param id 订单主键
     * @return 结果
     */
    @Override
    public int deleteOmsOrderInfoById(String id)
    {
        return omsOrderInfoMapper.deleteOmsOrderInfoById(id);
    }

    @Override
    public OmsOrderInfo selectOmsOrderInfoByCode(String orderCode) {
        return omsOrderInfoMapper.selectOmsOrderInfoByCode(orderCode);
    }

    @Override
    public OmsOrderInfo selectOmsOrderInfoByOutTradeNo(String outTradeNo) {
        return omsOrderInfoMapper.selectOmsOrderInfoByOutTradeNo(outTradeNo);
    }

    @Override
    public List<OmsOrderInfo> selectOmsOrderUnRevsiveList() {
        return omsOrderInfoMapper.selectOmsOrderUnRevsiveList();
    }

    @Override
    public List<OmsOrderInfo> selectOmsOrderSnycAllocate() {
        return omsOrderInfoMapper.selectOmsOrderSnycAllocate();
    }

    @Override
    public void updateOmsOrderOllacate(OmsOrderInfo order) {
        omsOrderInfoMapper.updateOmsOrderOllacate(order);
    }

    @Override
    public void reduceGoodsStocks(String orderId) {
        OmsOrderItem omsOrderItem = new OmsOrderItem();
        omsOrderItem.setOrderId(Long.valueOf(orderId));
        List<OmsOrderItem> omsOrderItems = omsOrderItemMapper.selectOmsOrderItemList(omsOrderItem);
        omsOrderItems.stream().forEach(item->{
            OmsGoodsSku actual= omsGoodsSkuService.selectOmsGoodsSkuById(String.valueOf(item.getSkuId()));
            if(item.getSkuId()==null || actual==null){
                OmsGoodsSku sku=new OmsGoodsSku();
                if(actual.getStockNum()>=item.getGoodsNum()){
                    sku.setStockNum(actual.getStockNum()-item.getGoodsNum());
                }else{
                    sku.setStockNum(0L);
                }
                sku.setId(String.valueOf(item.getSkuId()));
                omsGoodsSkuService.updateOmsGoodsStrock(sku);
            }
        });
    }
}
