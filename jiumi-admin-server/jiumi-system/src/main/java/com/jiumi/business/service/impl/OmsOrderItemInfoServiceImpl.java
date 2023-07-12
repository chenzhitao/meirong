package com.jiumi.business.service.impl;

import java.math.BigDecimal;
import java.util.*;

import com.jiumi.business.domain.OmsItemApply;
import com.jiumi.business.service.IOmsItemApplyService;
import com.jiumi.business.service.IOmsOrderItemDetailService;
import com.jiumi.common.core.domain.AjaxResult;
import com.jiumi.common.core.domain.entity.SysUser;
import com.jiumi.common.utils.DateUtils;
import com.jiumi.common.utils.SecurityUtils;
import com.jiumi.finance.domain.OmsOrderItemPayment;
import com.jiumi.finance.domain.UserNumberCardDetail;
import com.jiumi.finance.domain.UserNumberCardHistory;
import com.jiumi.finance.domain.UserPerformanceCalculate;
import com.jiumi.finance.service.IOmsOrderItemPaymentService;
import com.jiumi.finance.service.IUserNumberCardDetailService;
import com.jiumi.finance.service.IUserNumberCardHistoryService;
import com.jiumi.finance.service.IUserPerformanceCalculateService;
import com.jiumi.goods.domain.BaseNumberCard;
import com.jiumi.goods.domain.OmsGoodsInfo;
import com.jiumi.goods.domain.OmsGoodsSku;
import com.jiumi.goods.service.IBaseNumberCardService;
import com.jiumi.goods.service.IOmsGoodsInfoService;
import com.jiumi.goods.service.IOmsGoodsSkuService;
import com.jiumi.shop.domain.BaseConsultantRank;
import com.jiumi.shop.domain.BaseShopInfo;
import com.jiumi.shop.domain.BaseShopItem;
import com.jiumi.shop.service.IBaseConsultantRankService;
import com.jiumi.shop.service.IBaseShopInfoService;
import com.jiumi.shop.service.IBaseShopItemService;
import com.jiumi.system.service.ISysUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

import com.jiumi.common.utils.StringUtils;
import org.springframework.transaction.annotation.Transactional;
import com.jiumi.business.domain.OmsOrderItemDetail;
import com.jiumi.business.mapper.OmsOrderItemInfoMapper;
import com.jiumi.business.domain.OmsOrderItemInfo;
import com.jiumi.business.service.IOmsOrderItemInfoService;

/**
 * 项目订单管理Service业务层处理
 *
 * @author jiumi
 * @date 2022-02-07
 */
@Service
public class OmsOrderItemInfoServiceImpl implements IOmsOrderItemInfoService
{
    @Autowired
    private OmsOrderItemInfoMapper omsOrderItemInfoMapper;

    @Autowired
    private IUserNumberCardDetailService userNumberCardDetailService;

    @Autowired
    private IUserNumberCardHistoryService userNumberCardHistoryService;

    @Autowired
    private IUserPerformanceCalculateService userPerformanceCalculateService;

    @Autowired
    private IBaseShopItemService baseShopItemService;

    @Autowired
    private IOmsGoodsInfoService omsGoodsInfoService;

    @Autowired
    private IOmsGoodsSkuService omsGoodsSkuService;

    @Autowired
    private ISysUserService userService;

    @Autowired
    private IBaseShopInfoService baseShopInfoService;

    @Autowired
    private IOmsItemApplyService omsItemApplyService;

    @Autowired
    private IOmsOrderItemDetailService omsOrderItemDetailService;

    @Autowired
    private IBaseConsultantRankService baseConsultantRankService;

    @Autowired
    private IOmsOrderItemPaymentService omsOrderItemPaymentService;
    @Autowired
    private IBaseNumberCardService baseNumberCardService;

    /**
     * 查询项目订单管理
     *
     * @param id 项目订单管理主键
     * @return 项目订单管理
     */
    @Override
    public OmsOrderItemInfo selectOmsOrderItemInfoById(Long id)
    {
        return omsOrderItemInfoMapper.selectOmsOrderItemInfoById(id);
    }

    /**
     * 查询项目订单管理列表
     *
     * @param omsOrderItemInfo 项目订单管理
     * @return 项目订单管理
     */
    @Override
    public List<OmsOrderItemInfo> selectOmsOrderItemInfoList(OmsOrderItemInfo omsOrderItemInfo)
    {
        return omsOrderItemInfoMapper.selectOmsOrderItemInfoList(omsOrderItemInfo);
    }

    /**
     * 新增项目订单管理
     *
     * @param omsOrderItemInfo 项目订单管理
     * @return 结果
     */
    @Transactional(rollbackFor = Exception.class)
    @Override
    public int insertOmsOrderItemInfo(OmsOrderItemInfo omsOrderItemInfo)throws Exception
    {
        omsOrderItemInfo.setCreateTime(DateUtils.getNowDate());
        omsOrderItemInfo.setCreateBy(SecurityUtils.getUsername());
        List<OmsOrderItemDetail>  list=omsOrderItemInfo.getOrderItemList();
        if(list!=null && list.size()>0){
            list.stream().forEach(item->{
                if(item.getConsumerType().intValue()==1 && item.getCardNum().intValue()>0){
                    UserNumberCardDetail cardDetail= userNumberCardDetailService.selectUserNumberCardDetailById(item.getCardId());
                    if(cardDetail!=null){
                        BaseNumberCard card= baseNumberCardService.selectBaseNumberCardById(cardDetail.getCardId());
                        BaseShopItem shopItem= baseShopItemService.selectBaseShopItemById(card.getShopItemId()+"");
                        omsOrderItemInfo.setCardAmount(shopItem.getItemPrice().multiply(new BigDecimal(item.getCardNum())));
                    }
                }
            });
        }
        int rows = omsOrderItemInfoMapper.insertOmsOrderItemInfo(omsOrderItemInfo);
        if(rows>0){
            insertOmsOrderItemDetail(omsOrderItemInfo);
        }
        if("02".equals(omsOrderItemInfo.getOrderStatus())){
            //如果使用次卡，减掉客户次卡记录
            reduceNumberCardHistory(omsOrderItemInfo);
            //扣减商品库存
            reduceProductStock(omsOrderItemInfo);
            //扣除账户余额，计算技师佣金
            calculatePerformance(omsOrderItemInfo);

            //如果是其他店客户，需要进行跨店支付
            branchShopPayment(omsOrderItemInfo);

            //更改预约状态
            OmsItemApply applyInfo= omsItemApplyService.selectOmsItemApplyById(omsOrderItemInfo.getApplyId()+"");
            if(applyInfo!=null){
                applyInfo.setStatus("03");
                applyInfo.setUpdateTime(DateUtils.getNowDate());
                applyInfo.setUpdateBy(SecurityUtils.getUsername());
                omsItemApplyService.updateOmsItemApply(applyInfo);
            }
        }
        return rows;
    }

    @Transactional(rollbackFor = Exception.class)
    @Override
    public void calculatePerformance(OmsOrderItemInfo omsOrderItemInfo)throws Exception{
        //扣除用户账户金额
        SysUser sysUser=new SysUser();
        sysUser.setUserId(omsOrderItemInfo.getUserId());
        sysUser.setUpdateTime(DateUtils.getNowDate());
        sysUser.setUpdateBy(SecurityUtils.getUsername());
        if(omsOrderItemInfo.getPayment1()!=null && omsOrderItemInfo.getPayment1().doubleValue()>0){
            SysUser currentuser=userService.selectUserById(omsOrderItemInfo.getUserId());
            double sumAmount= omsOrderItemInfo.getPayment1().doubleValue();
            if(sumAmount<=currentuser.getRechargeAmount()){
                currentuser.setRechargeAmount(sumAmount);
                currentuser.setIncomeAmount(0);
            }else{
                if((sumAmount-currentuser.getRechargeAmount())>currentuser.getIncomeAmount()){
                    throw  new Exception("账户余额异常，请联系管理员!");
                }
                currentuser.setRechargeAmount(currentuser.getRechargeAmount());
                currentuser.setIncomeAmount(sumAmount-currentuser.getRechargeAmount());
            }
            currentuser.setAccountAmount(sumAmount);
            currentuser.setUpdateBy(currentuser.getUserName());
            currentuser.setUpdateTime(DateUtils.getNowDate());
            userService.updateUserAccountConsumer(currentuser);
        }
        if(omsOrderItemInfo.getPayment2()!=null && omsOrderItemInfo.getPayment2().doubleValue()>0){
            sysUser.setAccountAmount(omsOrderItemInfo.getPayment2().doubleValue());
            userService.updateProductAmount(sysUser);
        }

        //技师计算佣金
        List<UserPerformanceCalculate> calcList=new ArrayList<>();
        List<OmsOrderItemDetail> omsOrderItemDetailList = omsOrderItemInfo.getOrderItemList();
        omsOrderItemDetailList.stream().forEach(item->{
            if(item.getConsumerType()==1){
                UserPerformanceCalculate calculate=new UserPerformanceCalculate();
                calculate.setUserId(item.getConsultant1());
                calculate.setItemAmount(new BigDecimal(0));
                SysUser consultantUser=userService.selectUserById(item.getConsultant1());
                BaseConsultantRank rank= baseConsultantRankService.selectBaseConsultantRankByLevelId(consultantUser.getConsultantRank());
                BaseShopItem shopItem= baseShopItemService.selectBaseShopItemById(String.valueOf(item.getConsumerId()));
                if(rank!=null){
                    BigDecimal amount=shopItem.getPrice().multiply(new BigDecimal((item.getNum())));
                    BigDecimal sharePercent=new BigDecimal(0);
                    if(rank.getLevelId().intValue()==1){
                        sharePercent=new BigDecimal(shopItem.getSharePercent1());
                    }
                    else if(rank.getLevelId().intValue()==2){
                        sharePercent=new BigDecimal(shopItem.getSharePercent2());
                    }
                    else if(rank.getLevelId().intValue()==3){
                        sharePercent=new BigDecimal(shopItem.getSharePercent3());
                    }
                    else if(rank.getLevelId().intValue()==4){
                        sharePercent=new BigDecimal(shopItem.getSharePercent4());
                    }else{
                        sharePercent=rank.getCommissionRatio();
                    }
                    BigDecimal currAmount=new BigDecimal(0);
                    if(shopItem.getShareRateType()==1){
                        currAmount=calculate.getItemAmount().add(amount.multiply(sharePercent)).setScale(2,4);
                    }
                    else if(shopItem.getShareRateType()==2){
                        currAmount=calculate.getItemAmount().add(sharePercent).setScale(2,4);
                    }
                    calculate.setItemAmount(currAmount);
                }else{
                    calculate.setItemAmount(new BigDecimal(0));
                }
                calcList.add(calculate);
            }
        });

        List<OmsOrderItemDetail> omsItemProductDetailList = omsOrderItemInfo.getOrderProductList();
        omsItemProductDetailList.stream().forEach(item->{
            OmsGoodsSku skuInfo= omsGoodsSkuService.selectOmsGoodsSkuById(String.valueOf(item.getConsumerId()));
            OmsGoodsInfo goodsInfo=omsGoodsInfoService.selectOmsGoodsInfoById(String.valueOf(skuInfo.getGoodsId()));
            if(item.getConsumerType()==2 && skuInfo!=null){
                    if(goodsInfo.getRebateRatioType()==1){
                        if("sub1".equals(item.getSubType())){
                            if(item.getConsultant1()!=null && goodsInfo.getSub1Commissiona()>0) {
                                UserPerformanceCalculate dis1 = new UserPerformanceCalculate();
                                dis1.setUserId(item.getConsultant1());
                                double disAmount = item.getPrice().doubleValue()* item.getNum() * goodsInfo.getRebateRatio() * item.getConsultant1Amount().doubleValue();
                                dis1.setProductAmount(new BigDecimal(disAmount));
                                calcList.add(dis1);
                            }
                        }
                        else if("sub2".equals(item.getSubType())){
                            UserPerformanceCalculate dis1 = new UserPerformanceCalculate();
                            dis1.setUserId(item.getConsultant1());
                            double disAmount = item.getPrice().doubleValue() * item.getNum() * goodsInfo.getRebateRatio()* item.getConsultant1Amount().doubleValue();
                            dis1.setProductAmount(new BigDecimal(disAmount));
                            calcList.add(dis1);

                            UserPerformanceCalculate dis2 = new UserPerformanceCalculate();
                            dis2.setUserId(item.getConsultant2());
                            double disAmount2 = item.getPrice().doubleValue() * item.getNum() * goodsInfo.getRebateRatio() * item.getConsultant2Amount().doubleValue();
                            dis2.setProductAmount(new BigDecimal(disAmount2));
                            calcList.add(dis2);
                        }
                        else if("sub3".equals(item.getSubType())){
                            UserPerformanceCalculate dis1 = new UserPerformanceCalculate();
                            dis1.setUserId(item.getConsultant1());
                            double disAmount = item.getPrice().doubleValue() * item.getNum() * goodsInfo.getRebateRatio()* item.getConsultant1Amount().doubleValue();
                            dis1.setProductAmount(new BigDecimal(disAmount));
                            calcList.add(dis1);

                            UserPerformanceCalculate dis2 = new UserPerformanceCalculate();
                            dis2.setUserId(item.getConsultant2());
                            double disAmount2 = item.getPrice().doubleValue() * item.getNum() * goodsInfo.getRebateRatio() * item.getConsultant2Amount().doubleValue();
                            dis2.setProductAmount(new BigDecimal(disAmount2));
                            calcList.add(dis2);

                            UserPerformanceCalculate dis3 = new UserPerformanceCalculate();
                            dis3.setUserId(item.getConsultant3());
                            double disAmount3 = item.getPrice().doubleValue() * item.getNum()* goodsInfo.getRebateRatio() * item.getConsultant3Amount().doubleValue();
                            dis3.setProductAmount(new BigDecimal(disAmount3));
                            calcList.add(dis3);
                        }
                    }
                    else if(goodsInfo.getRebateRatioType()==2){
                        if("sub1".equals(item.getSubType())){
                            if(item.getConsultant1()!=null && goodsInfo.getSub1Commissiona()>0) {
                                UserPerformanceCalculate dis1 = new UserPerformanceCalculate();
                                dis1.setUserId(item.getConsultant1());
                                BigDecimal disAmount =item.getConsultant1Amount().multiply(new BigDecimal(item.getNum()));
                                dis1.setProductAmount(disAmount);
                                calcList.add(dis1);
                            }
                        }
                        if("sub2".equals(item.getSubType())){
                            UserPerformanceCalculate dis1 = new UserPerformanceCalculate();
                            dis1.setUserId(item.getConsultant1());
                            BigDecimal disAmount =item.getConsultant1Amount().multiply(new BigDecimal(item.getNum()));
                            dis1.setProductAmount(disAmount);
                            calcList.add(dis1);

                            UserPerformanceCalculate dis2 = new UserPerformanceCalculate();
                            dis2.setUserId(item.getConsultant2());
                            BigDecimal disAmount2 =item.getConsultant2Amount().multiply(new BigDecimal(item.getNum()));
                            dis2.setProductAmount(disAmount2);
                            calcList.add(dis2);
                        }

                        if("sub3".equals(item.getSubType())){
                            UserPerformanceCalculate dis1 = new UserPerformanceCalculate();
                            dis1.setUserId(item.getConsultant1());
                            BigDecimal disAmount =item.getConsultant1Amount().multiply(new BigDecimal(item.getNum()));
                            dis1.setProductAmount(disAmount);
                            calcList.add(dis1);

                            UserPerformanceCalculate dis2 = new UserPerformanceCalculate();
                            dis2.setUserId(item.getConsultant2());
                            BigDecimal disAmount2 =item.getConsultant2Amount().multiply(new BigDecimal(item.getNum()));
                            dis2.setProductAmount(disAmount2);
                            calcList.add(dis2);

                            UserPerformanceCalculate dis3 = new UserPerformanceCalculate();
                            dis3.setUserId(item.getConsultant3());
                            BigDecimal disAmount3 =item.getConsultant3Amount().multiply(new BigDecimal(item.getNum()));
                            dis3.setProductAmount(disAmount3);
                            calcList.add(dis3);
                        }

                    }
            }
        });

        Map<Long,List<UserPerformanceCalculate>> userData= calcList.stream().collect(Collectors.groupingBy(UserPerformanceCalculate::getUserId));
        Iterator it= userData.keySet().iterator();
        while(it.hasNext()){
           Long uid=(Long)it.next();
            List<UserPerformanceCalculate> ulist=userData.get(uid);
            UserPerformanceCalculate user=new UserPerformanceCalculate();
            user.setUserId(uid);
            SysUser u= userService.selectUserById(uid);
            user.setUserName(u.getNickName());
            user.setUserPhone(u.getPhonenumber());
            BaseShopInfo shop= baseShopInfoService.selectBaseShopInfoById(omsOrderItemInfo.getShopId()+"");
            user.setShopName(shop.getShopName());
            user.setShopId(omsOrderItemInfo.getShopId());
            user.setOrderId(omsOrderItemInfo.getId());
            user.setOrderCode(omsOrderItemInfo.getOrderCode());
            user.setPayTime(omsOrderItemInfo.getPayTime());
            user.setOrderAmount(omsOrderItemInfo.getSumAmount());
            user.setItemAmount(new BigDecimal(0));
            user.setProductAmount(new BigDecimal(0));
            ulist.stream().forEach(c->{
                if(c.getItemAmount()!=null){
                    user.setItemAmount(user.getItemAmount().add(c.getItemAmount()));
                }
                if(c.getProductAmount()!=null){
                    user.setProductAmount(user.getProductAmount().add(c.getProductAmount()));
                }
            });
            user.setSumAmount(user.getItemAmount().add(user.getProductAmount()));
            userPerformanceCalculateService.insertUserPerformanceCalculate(user);
        }
    }

    /**
     * 修改项目订单管理
     *
     * @param omsOrderItemInfo 项目订单管理
     * @return 结果
     */
    @Transactional(rollbackFor = Exception.class)
    @Override
    public int updateOmsOrderItemInfo(OmsOrderItemInfo omsOrderItemInfo)throws Exception
    {
        OmsOrderItemInfo itemInfo=omsOrderItemInfoMapper.selectOmsOrderItemInfoById(omsOrderItemInfo.getId());
        omsOrderItemInfo.setUpdateTime(DateUtils.getNowDate());
        omsOrderItemInfoMapper.deleteOmsOrderItemDetailByOrderId(omsOrderItemInfo.getId());
        insertOmsOrderItemDetail(omsOrderItemInfo);
        if(!"03".equals(itemInfo.getOrderStatus()) && "03".equals(omsOrderItemInfo.getOrderStatus())){
            //更改预约状态
            OmsItemApply applyInfo= omsItemApplyService.selectOmsItemApplyById(omsOrderItemInfo.getApplyId()+"");
            applyInfo.setStatus("03");
            applyInfo.setUpdateTime(DateUtils.getNowDate());
            applyInfo.setUpdateBy(SecurityUtils.getUsername());
            omsItemApplyService.updateOmsItemApply(applyInfo);
        }
        List<OmsOrderItemDetail>  list=omsOrderItemInfo.getOrderItemList();
        if(list!=null && list.size()>0){
            list.stream().forEach(item->{
                if(item.getConsumerType().intValue()==1 && item.getCardNum().intValue()>0){
                    UserNumberCardDetail cardDetail= userNumberCardDetailService.selectUserNumberCardDetailById(item.getCardId());
                    if(cardDetail!=null){
                        BaseNumberCard card= baseNumberCardService.selectBaseNumberCardById(cardDetail.getCardId());
                        BaseShopItem shopItem= baseShopItemService.selectBaseShopItemById(card.getShopItemId()+"");
                        omsOrderItemInfo.setCardAmount(shopItem.getItemPrice().multiply(new BigDecimal(item.getCardNum())));
                    }
                }
            });
        }
        int result= omsOrderItemInfoMapper.updateOmsOrderItemInfo(omsOrderItemInfo);
        if(!"02".equals(itemInfo.getOrderStatus()) && "02".equals(omsOrderItemInfo.getOrderStatus())){
            //如果使用次卡，减掉客户次卡记录
            reduceNumberCardHistory(omsOrderItemInfo);
            //扣减商品库存
            reduceProductStock(omsOrderItemInfo);
            //扣除账户余额，计算技师佣金
            calculatePerformance(omsOrderItemInfo);

            //如果是其他店客户，需要进行跨店支付
            branchShopPayment(omsOrderItemInfo);

            //更改预约状态
            OmsItemApply applyInfo= omsItemApplyService.selectOmsItemApplyById(omsOrderItemInfo.getApplyId()+"");
            if(applyInfo!=null) {
                applyInfo.setStatus("03");
                applyInfo.setUpdateTime(DateUtils.getNowDate());
                applyInfo.setUpdateBy(SecurityUtils.getUsername());
                omsItemApplyService.updateOmsItemApply(applyInfo);
            }
        }
        return result;
    }

    //重置撤销项目订单
    @Transactional(rollbackFor = Exception.class)
    @Override
    public int resetOmsOrderItemInfo(OmsOrderItemInfo omsOrderItemInfo)throws Exception
    {
        OmsOrderItemInfo itemInfo=omsOrderItemInfoMapper.selectOmsOrderItemInfoById(omsOrderItemInfo.getId());
        omsOrderItemInfo.setUpdateTime(DateUtils.getNowDate());
        //1.先将订单进行备份
        omsOrderItemInfoMapper.backOrderItemInfo(omsOrderItemInfo.getId());
        omsOrderItemDetailService.backOmsOrderItemDetail(omsOrderItemInfo.getId());
        //2.还原次卡
        OmsOrderItemDetail param=new OmsOrderItemDetail();
        param.setOrderId(omsOrderItemInfo.getId());
        param.setConsumerType(1);
        List<OmsOrderItemDetail>  itemDetailList=omsOrderItemDetailService.selectOmsOrderItemDetailList(param);
        itemDetailList.stream().forEach(detail->{
            if(detail.getCardId()!=null && detail.getCardNum()>0){
                UserNumberCardHistory his=new UserNumberCardHistory();
                his.setOrderCode(itemInfo.getOrderCode());
                his.setCardId(detail.getCardId());
                his.setUserId(itemInfo.getUserId());
                List<UserNumberCardHistory> hisList=userNumberCardHistoryService.selectUserNumberCardHistoryList(his);
                if(hisList.size()>0){
                    UserNumberCardHistory history=hisList.get(0);
                    UserNumberCardDetail card= userNumberCardDetailService.selectUserNumberCardDetailById(history.getCardId());
                    card.setUseTimes(card.getUseTimes()-detail.getCardNum());
                    card.setLastTimes(card.getLastTimes()+detail.getCardNum());
                    card.setUpdateBy(SecurityUtils.getUsername());
                    card.setUpdateTime(DateUtils.getNowDate());
                    userNumberCardDetailService.updateUserNumberCardDetail(card);
                    userNumberCardHistoryService.deleteUserNumberCardHistoryById(history.getId());
                }
            }
        });
        //还原商品库存
        OmsOrderItemDetail productParam=new OmsOrderItemDetail();
        productParam.setOrderId(omsOrderItemInfo.getId());
        productParam.setConsumerType(2);
        List<OmsOrderItemDetail>  productDetailList=omsOrderItemDetailService.selectOmsOrderItemDetailList(productParam);
        productDetailList.stream().forEach(product->{
            OmsGoodsSku skuInfo= omsGoodsSkuService.selectOmsGoodsSkuById(String.valueOf(product.getConsumerId()));
            skuInfo.setStockNum(skuInfo.getStockNum()+product.getNum());
            omsGoodsSkuService.updateOmsGoodsStrock(skuInfo);
        });
        //归还之前所付金额
        //3.归还用户基本账户余额
        if(itemInfo.getPayment1().doubleValue()>0){
            SysUser currentuser=userService.selectUserById(omsOrderItemInfo.getUserId());
            //还需要退钱
            double backAmount= itemInfo.getPayment1().doubleValue();
            SysUser user=new SysUser();
            user.setUserId(currentuser.getUserId());
            user.setRechargeType("0");
            user.setRechargeAmount(currentuser.getRechargeAmount()+backAmount);
            user.setAccountAmount(currentuser.getAccountAmount()+backAmount);
            userService.setUserRecharge(user,backAmount);
        }
        //3.归还用户产品账户余额
        if(itemInfo.getPayment2().doubleValue()>0){
            SysUser currentuser=userService.selectUserById(omsOrderItemInfo.getUserId());
            //还需要退钱
            double backAmount= itemInfo.getPayment2().doubleValue();
            SysUser user=new SysUser();
            user.setUserId(currentuser.getUserId());
            user.setRechargeType("1");
            user.setRechargeAmount(0);
            user.setProductBalance(currentuser.getProductBalance()+backAmount);
            userService.setUserRecharge(user,backAmount);
        }
        if(omsOrderItemInfo.getSumAmount().doubleValue()<itemInfo.getSumAmount().doubleValue()){
            //3.归还用户基本账户余额
            if(omsOrderItemInfo.getBackPayment1().doubleValue()>0){
                SysUser currentuser=userService.selectUserById(omsOrderItemInfo.getUserId());
                //还需要退钱
                double sumAmount= omsOrderItemInfo.getBackPayment1().doubleValue();
                SysUser user=new SysUser();
                user.setUserId(currentuser.getUserId());
                user.setRechargeType("0");
                user.setRechargeAmount(currentuser.getRechargeAmount()+sumAmount);
                user.setAccountAmount(currentuser.getAccountAmount()+sumAmount);
                userService.setUserRecharge(user,sumAmount);
            }
            //3.归还用户产品账户余额
            if(omsOrderItemInfo.getBackPayment2().doubleValue()>0){
                SysUser currentuser=userService.selectUserById(omsOrderItemInfo.getUserId());
                //还需要退钱
                double sumAmount= omsOrderItemInfo.getBackPayment2().doubleValue();
                SysUser user=new SysUser();
                user.setUserId(currentuser.getUserId());
                user.setRechargeType("1");
                user.setRechargeAmount(0);
                user.setProductBalance(currentuser.getProductBalance()+sumAmount);
                userService.setUserRecharge(user,sumAmount);
            }
        }
        //4.删除订单记录
        omsOrderItemInfoMapper.deleteOmsOrderItemDetailByOrderId(omsOrderItemInfo.getId());
        insertOmsOrderItemDetail(omsOrderItemInfo);
        //5.删除返佣记录
        userPerformanceCalculateService.deleteUserPerformanceCalculateByOrderId(omsOrderItemInfo.getId());

        //6.删除跨店支付记录
        omsOrderItemPaymentService.deleteOmsOrderItemPaymentByOrderId(omsOrderItemInfo.getId());
        //6.重新计算佣金
        if("02".equals(itemInfo.getOrderStatus()) && "02".equals(omsOrderItemInfo.getOrderStatus())){
            //如果使用次卡，减掉客户次卡记录
            reduceNumberCardHistory(omsOrderItemInfo);
            //扣减商品库存
            reduceProductStock(omsOrderItemInfo);
            //扣除账户余额，计算技师佣金
            calculatePerformance(omsOrderItemInfo);

            //如果是其他店客户，需要进行跨店支付
            branchShopPayment(omsOrderItemInfo);
        }
        omsOrderItemInfo.setPayment1(omsOrderItemInfo.getPayment1().subtract(omsOrderItemInfo.getBackPayment1()));
        omsOrderItemInfo.setPayment2(omsOrderItemInfo.getPayment2().subtract(omsOrderItemInfo.getBackPayment2()));
        List<OmsOrderItemDetail>  list=omsOrderItemInfo.getOrderItemList();
        if(list!=null && list.size()>0){
            list.stream().forEach(item->{
                if(item.getConsumerType().intValue()==1 && item.getCardNum().intValue()>0){
                    UserNumberCardDetail cardDetail= userNumberCardDetailService.selectUserNumberCardDetailById(item.getCardId());
                    if(cardDetail!=null){
                        BaseNumberCard card= baseNumberCardService.selectBaseNumberCardById(cardDetail.getCardId());
                        BaseShopItem shopItem= baseShopItemService.selectBaseShopItemById(card.getShopItemId()+"");
                        omsOrderItemInfo.setCardAmount(shopItem.getItemPrice().multiply(new BigDecimal(item.getCardNum())));
                    }
                }
            });
        }
        SysUser newUser=userService.selectUserById(omsOrderItemInfo.getUserId());
        omsOrderItemInfo.setAccountAmount(new BigDecimal(newUser.getAccountAmount()).add(omsOrderItemInfo.getPayment1()));
        int result= omsOrderItemInfoMapper.updateOmsOrderItemInfo(omsOrderItemInfo);
        return result;
    }

    private void reduceNumberCardHistory(OmsOrderItemInfo omsOrderItemInfo) {
        List<OmsOrderItemDetail>  list=omsOrderItemInfo.getOrderItemList();
        if(list!=null && list.size()>0){
            list.stream().forEach(item->{
                if(item.getConsumerType().intValue()==1 && item.getCardNum().intValue()>0){
                    UserNumberCardDetail cardDetail= userNumberCardDetailService.selectUserNumberCardDetailById(item.getCardId());
                    cardDetail.setUseTimes(cardDetail.getUseTimes()+item.getCardNum());
                    cardDetail.setLastTimes(cardDetail.getLastTimes()-item.getCardNum());
                    cardDetail.setUpdateBy(SecurityUtils.getUsername());
                    cardDetail.setUpdateTime(DateUtils.getNowDate());
                    userNumberCardDetailService.updateUserNumberCardDetail(cardDetail);
                    UserNumberCardHistory his=new UserNumberCardHistory();
                    his.setUserId(omsOrderItemInfo.getUserId());
                    his.setCardId(item.getCardId());
                    his.setOrderCode(omsOrderItemInfo.getOrderCode());
                    his.setUseTime(DateUtils.getNowDate());
                    his.setUseTimes(item.getCardNum());
                    his.setLastTimes(cardDetail.getLastTimes());
                    his.setOperateUser(SecurityUtils.getUsername());
                    his.setUpdateBy(SecurityUtils.getUsername());
                    his.setUpdateTime(DateUtils.getNowDate());
                    userNumberCardHistoryService.insertUserNumberCardHistory(his);
                }
            });
        }
    }

    private void reduceProductStock(OmsOrderItemInfo omsOrderItemInfo)throws Exception {
        List<OmsOrderItemDetail>  list=omsOrderItemInfo.getOrderProductList();
        if(list!=null && list.size()>0){
            for(OmsOrderItemDetail item:list){
                if(item.getConsumerType().intValue()==2){
                    OmsGoodsSku skuInfo= omsGoodsSkuService.selectOmsGoodsSkuById(String.valueOf(item.getConsumerId()));
                    if(skuInfo.getStockNum()<item.getNum()){
                        throw new Exception("商品库存不足");
                    }
                    skuInfo.setStockNum(skuInfo.getStockNum()-item.getNum());
                    omsGoodsSkuService.updateOmsGoodsStrock(skuInfo);
                }
            }
        }
    }

    private void branchShopPayment(OmsOrderItemInfo omsOrderItemInfo)throws Exception {
        SysUser currentUser=SecurityUtils.getLoginUser().getUser();
        SysUser orderUser=userService.selectUserById(omsOrderItemInfo.getUserId());
        if(StringUtils.isNotEmpty(orderUser.getSourceShop()) && (!orderUser.getSourceShop().equals(currentUser.getSourceShop()))){
            OmsOrderItemPayment pay=new OmsOrderItemPayment();
            pay.setOrderId(omsOrderItemInfo.getId());
            pay.setOrderCode(omsOrderItemInfo.getOrderCode());
            pay.setOrderTime(omsOrderItemInfo.getOrderTime());
            pay.setOperateSourceShop(currentUser.getSourceShop());
            BaseShopInfo param=new BaseShopInfo();
            param.setStatus("Y");
            List<BaseShopInfo> shopList= baseShopInfoService.selectBaseShopInfoList(param);
            pay.setOperateSourceShopName("");
            shopList.stream().forEach(shop->{
                if(StringUtils.isNotEmpty(currentUser.getSourceShop()) && currentUser.getSourceShop().indexOf(shop.getId())!=-1){
                    if(StringUtils.isEmpty(pay.getOperateSourceShopName())){
                        pay.setOperateSourceShopName(shop.getShopName());
                    }else{
                        pay.setOperateSourceShopName(pay.getOperateSourceShopName()+","+shop.getShopName());
                    }
                }
            });
            pay.setPaymentSourceShop(orderUser.getSourceShop());
            pay.setPaymentSourceShopName("");
            shopList.stream().forEach(shop->{
                if(StringUtils.isNotEmpty(orderUser.getSourceShop()) && orderUser.getSourceShop().indexOf(shop.getId())!=-1){
                    if(StringUtils.isEmpty(pay.getPaymentSourceShopName())){
                        pay.setPaymentSourceShopName(shop.getShopName());
                    }else{
                        pay.setPaymentSourceShopName(pay.getPaymentSourceShopName()+","+shop.getShopName());
                    }
                }
            });
            pay.setPaymentStatus("01");
            pay.setOrderUser(orderUser.getNickName()+"["+orderUser.getPhonenumber()+"]");
            pay.setPaymentAmount(omsOrderItemInfo.getSumAmount());
            pay.setCreateBy(currentUser.getNickName());
            pay.setCreateTime(DateUtils.getNowDate());
            omsOrderItemPaymentService.insertOmsOrderItemPayment(pay);
        }
    }

    /**
     * 批量删除项目订单管理
     *
     * @param ids 需要删除的项目订单管理主键
     * @return 结果
     */
    @Transactional
    @Override
    public int deleteOmsOrderItemInfoByIds(Long[] ids)
    {
        omsOrderItemInfoMapper.deleteOmsOrderItemDetailByOrderIds(ids);
        return omsOrderItemInfoMapper.deleteOmsOrderItemInfoByIds(ids);
    }

    /**
     * 删除项目订单管理信息
     *
     * @param id 项目订单管理主键
     * @return 结果
     */
    @Override
    public int deleteOmsOrderItemInfoById(Long id)
    {
        omsOrderItemInfoMapper.deleteOmsOrderItemDetailByOrderId(id);
        return omsOrderItemInfoMapper.deleteOmsOrderItemInfoById(id);
    }

    @Override
    public OmsOrderItemInfo selectOmsOrderItemInfoByApplyId(String id) {
        return omsOrderItemInfoMapper.selectOmsOrderItemInfoByApplyId(id);
    }

    @Transactional
    @Override
    public int paymentUnPayItemOrder(OmsOrderItemInfo itemOrder)throws Exception {
        itemOrder.setUpdateTime(DateUtils.getNowDate());
        itemOrder.setUpdateBy(SecurityUtils.getUsername());
        itemOrder.setPayTime(DateUtils.getNowDate());
        itemOrder.setOrderStatus("02");
        int result= omsOrderItemInfoMapper.updateOmsOrderItemInfo(itemOrder);
        if(result>0){
            if("02".equals(itemOrder.getOrderStatus())){
                //如果使用次卡，减掉客户次卡记录
                reduceNumberCardHistory(itemOrder);
                //扣减商品库存
                reduceProductStock(itemOrder);
                //扣除账户余额，计算技师佣金
                calculatePerformance(itemOrder);

                //如果是其他店客户，需要进行跨店支付
                branchShopPayment(itemOrder);
                //更改预约状态
                OmsItemApply applyInfo= omsItemApplyService.selectOmsItemApplyById(itemOrder.getApplyId()+"");
                if(applyInfo!=null){
                    applyInfo.setStatus("03");
                    applyInfo.setUpdateTime(DateUtils.getNowDate());
                    applyInfo.setUpdateBy(SecurityUtils.getUsername());
                    omsItemApplyService.updateOmsItemApply(applyInfo);
                }
            }
        }

        return result;
    }

    /**
     * 新增项目订单详情信息
     *
     * @param omsOrderItemInfo 项目订单管理对象
     */
    public void insertOmsOrderItemDetail(OmsOrderItemInfo omsOrderItemInfo)
    {
        List<OmsOrderItemDetail> omsOrderItemDetailList = omsOrderItemInfo.getOrderItemList();
        Long id = omsOrderItemInfo.getId();
        if (StringUtils.isNotNull(omsOrderItemDetailList))
        {
            List<OmsOrderItemDetail> list = new ArrayList<OmsOrderItemDetail>();
            for (OmsOrderItemDetail omsOrderItemDetail : omsOrderItemDetailList)
            {
                omsOrderItemDetail.setOrderId(id);
                omsOrderItemDetail.setConsumerId(omsOrderItemDetail.getConsumerId());
                omsOrderItemDetail.setConsumerType(1);
                omsOrderItemDetail.setCardId(omsOrderItemDetail.getConsumer().getCardId());
                omsOrderItemDetail.setPrice(omsOrderItemDetail.getConsumer().getPrice());
                list.add(omsOrderItemDetail);
            }
            if (list.size() > 0)
            {
                int result=omsOrderItemInfoMapper.batchOmsOrderItemDetail(list);
            }
        }

        List<OmsOrderItemDetail> omsItemProductDetailList = omsOrderItemInfo.getOrderProductList();
        if (StringUtils.isNotNull(omsItemProductDetailList))
        {
            List<OmsOrderItemDetail> list = new ArrayList<OmsOrderItemDetail>();
            for (OmsOrderItemDetail omsOrderItemDetail : omsItemProductDetailList)
            {
                omsOrderItemDetail.setConsumerType(2);
                omsOrderItemDetail.setConsumerId(omsOrderItemDetail.getConsumerId());
                omsOrderItemDetail.setPrice(omsOrderItemDetail.getConsumer().getPrice());
                omsOrderItemDetail.setOrderId(id);
                list.add(omsOrderItemDetail);
            }
            if (list.size() > 0)
            {
                omsOrderItemInfoMapper.batchOmsOrderItemDetail(list);
            }
        }
    }

    @Transactional(rollbackFor = Exception.class)
    @Override
    public int insertNumberCardOrderItemInfo(OmsOrderItemInfo omsOrderItemInfo)throws Exception {
        omsOrderItemInfo.setCreateTime(DateUtils.getNowDate());
        omsOrderItemInfo.setCreateBy(SecurityUtils.getUsername());
        omsOrderItemInfo.setOrderType("03");
        int rows = omsOrderItemInfoMapper.insertOmsOrderItemInfo(omsOrderItemInfo);
        BaseNumberCard card=baseNumberCardService.selectBaseNumberCardById(omsOrderItemInfo.getCardId());
        if(card==null){
            throw  new Exception("次卡不存在!");
        }
        if(rows>0){
            OmsOrderItemDetail omsOrderItemDetail=new OmsOrderItemDetail();
            omsOrderItemDetail.setConsumerType(3);
            omsOrderItemDetail.setConsumerId(card.getId());
            omsOrderItemDetail.setPrice(card.getPrice());
            omsOrderItemDetail.setOrderId(omsOrderItemInfo.getId());
            omsOrderItemDetailService.insertOmsOrderItemDetail(omsOrderItemDetail);
        }
        if("02".equals(omsOrderItemInfo.getOrderStatus())){
            //扣除用户账户金额
            SysUser sysUser=new SysUser();
            sysUser.setUserId(omsOrderItemInfo.getUserId());
            sysUser.setUpdateTime(DateUtils.getNowDate());
            sysUser.setUpdateBy(SecurityUtils.getUsername());
            if(omsOrderItemInfo.getPayment1()!=null && omsOrderItemInfo.getPayment1().doubleValue()>0){
                SysUser currentuser=userService.selectUserById(omsOrderItemInfo.getUserId());
                double sumAmount= omsOrderItemInfo.getPayment1().doubleValue();
                if(sumAmount<=currentuser.getRechargeAmount()){
                    currentuser.setRechargeAmount(sumAmount);
                    currentuser.setIncomeAmount(0);
                }else{
                    if((sumAmount-currentuser.getRechargeAmount())>currentuser.getIncomeAmount()){
                        throw  new Exception("账户余额异常，请联系管理员!");
                    }
                    currentuser.setRechargeAmount(currentuser.getRechargeAmount());
                    currentuser.setIncomeAmount(sumAmount-currentuser.getRechargeAmount());
                }
                currentuser.setAccountAmount(sumAmount);
                currentuser.setUpdateBy(currentuser.getUserName());
                currentuser.setUpdateTime(DateUtils.getNowDate());
                userService.updateUserAccountConsumer(currentuser);
            }
            if(omsOrderItemInfo.getPayment2()!=null && omsOrderItemInfo.getPayment2().doubleValue()>0){
                sysUser.setAccountAmount(omsOrderItemInfo.getPayment2().doubleValue());
                userService.updateProductAmount(sysUser);
            }
            //添加次卡记录
            UserNumberCardDetail detail=new UserNumberCardDetail();
            detail.setUserId(omsOrderItemInfo.getUserId());
            detail.setOrderCode(omsOrderItemInfo.getOrderCode());
            detail.setCardId(card.getId());
            detail.setBuyTime(omsOrderItemInfo.getPayTime());
            Date beginDate=DateUtils.getNowDate();
            detail.setBeginTime(beginDate);
            Date endDate=DateUtils.addDays(beginDate,card.getDay().intValue());
            detail.setEndTime(endDate);
            detail.setTotalTimes(card.getNum().intValue());
            detail.setUseTimes(0);
            detail.setLastTimes(card.getNum().intValue());
            detail.setCreateBy("系统自动");
            detail.setCreateTime(DateUtils.getNowDate());
            userNumberCardDetailService.insertUserNumberCardDetail(detail);
        }
        return rows;
    }
}
