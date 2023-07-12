package com.jiumi.finance.service.impl;

import java.util.Date;
import java.util.List;

import com.jiumi.business.domain.OmsOrderInfo;
import com.jiumi.business.domain.OmsOrderItem;
import com.jiumi.business.service.IOmsOrderInfoService;
import com.jiumi.business.service.IOmsOrderItemService;
import com.jiumi.common.utils.DateUtils;
import com.jiumi.goods.domain.BaseNumberCard;
import com.jiumi.goods.service.IBaseNumberCardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.jiumi.finance.mapper.UserNumberCardDetailMapper;
import com.jiumi.finance.domain.UserNumberCardDetail;
import com.jiumi.finance.service.IUserNumberCardDetailService;
import org.springframework.transaction.annotation.Transactional;

/**
 * 购买次卡记录Service业务层处理
 *
 * @author jiumi
 * @date 2022-02-08
 */
@Service
public class UserNumberCardDetailServiceImpl implements IUserNumberCardDetailService
{
    @Autowired
    private UserNumberCardDetailMapper userNumberCardDetailMapper;

    @Autowired
    private IOmsOrderInfoService omsOrderInfoService;

    @Autowired
    private IOmsOrderItemService omsOrderItemService;

    @Autowired
    private IBaseNumberCardService baseNumberCardService;
    /**
     * 查询购买次卡记录
     *
     * @param id 购买次卡记录主键
     * @return 购买次卡记录
     */
    @Override
    public UserNumberCardDetail selectUserNumberCardDetailById(Long id)
    {
        return userNumberCardDetailMapper.selectUserNumberCardDetailById(id);
    }

    /**
     * 查询购买次卡记录列表
     *
     * @param userNumberCardDetail 购买次卡记录
     * @return 购买次卡记录
     */
    @Override
    public List<UserNumberCardDetail> selectUserNumberCardDetailList(UserNumberCardDetail userNumberCardDetail)
    {
        return userNumberCardDetailMapper.selectUserNumberCardDetailList(userNumberCardDetail);
    }

    /**
     * 新增购买次卡记录
     *
     * @param userNumberCardDetail 购买次卡记录
     * @return 结果
     */
    @Override
    public int insertUserNumberCardDetail(UserNumberCardDetail userNumberCardDetail)
    {
        userNumberCardDetail.setCreateTime(DateUtils.getNowDate());
        return userNumberCardDetailMapper.insertUserNumberCardDetail(userNumberCardDetail);
    }

    /**
     * 修改购买次卡记录
     *
     * @param userNumberCardDetail 购买次卡记录
     * @return 结果
     */
    @Override
    public int updateUserNumberCardDetail(UserNumberCardDetail userNumberCardDetail)
    {
        userNumberCardDetail.setUpdateTime(DateUtils.getNowDate());
        return userNumberCardDetailMapper.updateUserNumberCardDetail(userNumberCardDetail);
    }

    /**
     * 批量删除购买次卡记录
     *
     * @param ids 需要删除的购买次卡记录主键
     * @return 结果
     */
    @Override
    public int deleteUserNumberCardDetailByIds(Long[] ids)
    {
        return userNumberCardDetailMapper.deleteUserNumberCardDetailByIds(ids);
    }

    /**
     * 删除购买次卡记录信息
     *
     * @param id 购买次卡记录主键
     * @return 结果
     */
    @Override
    public int deleteUserNumberCardDetailById(Long id)
    {
        return userNumberCardDetailMapper.deleteUserNumberCardDetailById(id);
    }

    @Override
    public List<UserNumberCardDetail> selectUserNumberCardDetailListByItemId(UserNumberCardDetail param) {
        return userNumberCardDetailMapper.selectUserNumberCardDetailListByItemId(param);
    }

    @Transactional
    @Override
    public void addUserNumberCardDetail(String id) {
        OmsOrderInfo orderInfo= omsOrderInfoService.selectOmsOrderInfoById(id);
        if("02".equals(orderInfo.getOrderType())){
            OmsOrderItem param=new OmsOrderItem();
            param.setOrderId(Long.valueOf(orderInfo.getId()));
            List<OmsOrderItem> itemList=omsOrderItemService.selectOmsOrderItemList(param);
            itemList.stream().forEach(item->{
                BaseNumberCard card= baseNumberCardService.selectBaseNumberCardById(item.getGoodsId());
                UserNumberCardDetail detail=new UserNumberCardDetail();
                detail.setUserId(orderInfo.getUserId());
                detail.setCardId(card.getId());
                detail.setBuyTime(orderInfo.getPayTime());
                detail.setBeginTime(orderInfo.getPayTime());
                Date endDate=DateUtils.addDays(orderInfo.getPayTime(),card.getDay().intValue());
                detail.setEndTime(endDate);
                detail.setTotalTimes(card.getNum().intValue());
                detail.setUseTimes(0);
                detail.setLastTimes(card.getNum().intValue());
                detail.setCreateBy("系统自动");
                detail.setCreateTime(DateUtils.getNowDate());
                this.insertUserNumberCardDetail(detail);
            });
        }

    }

    @Override
    public List<UserNumberCardDetail> selectUserNumberCardDetailListByUserId(UserNumberCardDetail param) {
        return userNumberCardDetailMapper.selectUserNumberCardDetailListByUserId(param);
    }
}
