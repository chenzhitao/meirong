package com.jiumi.quartz.task;

import com.jiumi.business.domain.OmsOrderInfo;
import com.jiumi.business.domain.OmsOrderItem;
import com.jiumi.business.service.IOmsItemApplyService;
import com.jiumi.business.service.IOmsOrderInfoService;
import com.jiumi.business.service.IOmsOrderItemService;
import com.jiumi.common.core.domain.entity.SysUser;
import com.jiumi.common.utils.DateUtils;
import com.jiumi.finance.domain.UserIncomeDetail;
import com.jiumi.finance.domain.UserPerformanceCalculate;
import com.jiumi.finance.service.IUserIncomeDetailService;
import com.jiumi.finance.service.IUserPerformanceCalculateService;
import com.jiumi.goods.domain.OmsGoodsInfo;
import com.jiumi.goods.service.IOmsGoodsInfoService;
import com.jiumi.goods.service.IOmsGoodsSkuService;
import com.jiumi.shop.domain.BaseShopInfo;
import com.jiumi.shop.domain.BaseShopItemConsultant;
import com.jiumi.shop.service.IBaseShopInfoService;
import com.jiumi.shop.service.IBaseShopItemConsultantService;
import com.jiumi.shop.service.IBaseShopItemService;
import com.jiumi.system.service.ISysUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.jiumi.common.utils.StringUtils;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

/**
 * 定时任务调度测试
 *
 * @author jiumi
 */
@Component("executeTask")
public class executeTask
{

    @Autowired
    private IOmsOrderInfoService omsOrderInfoService;

    @Autowired
    private IOmsOrderItemService omsOrderItemService;

    @Autowired
    private ISysUserService sysUserService;

    @Autowired
    private IOmsGoodsInfoService omsGoodsInfoService;

    @Autowired
    private IUserIncomeDetailService userIncomeDetailService;

    @Autowired
    private IBaseShopItemConsultantService baseShopItemConsultantService;

    @Autowired
    private IBaseShopInfoService baseShopInfoService;

    @Autowired
    private IUserPerformanceCalculateService userPerformanceCalculateService;

    @Autowired
    private IOmsItemApplyService omsItemApplyService;



    public void ryMultipleParams(String s, Boolean b, Long l, Double d, Integer i)
    {
        System.out.println(StringUtils.format("执行多参方法： 字符串类型{}，布尔类型{}，长整型{}，浮点型{}，整形{}", s, b, l, d, i));
    }

    public void ryParams(String params)
    {
        System.out.println("执行有参方法：" + params);
    }

    public void doExecuteComplete()
    {
        //查询出超过七天还没有确认收货的订单自动收货
        List<OmsOrderInfo> orderList= omsOrderInfoService.selectOmsOrderUnRevsiveList();
        orderList.stream().forEach(orderInfo->{
            orderInfo.setOrderStatus("04");
            orderInfo.setUpdateBy("自动确认收货");
            orderInfo.setUpdateTime(DateUtils.getNowDate());
            omsOrderInfoService.updateOmsOrderInfo(orderInfo);
        });
    }

    public void doExecuteSnycAllocate()
    {
        //查询出超过七天还没有确认收货的订单自动收货
        List<OmsOrderInfo> orderList= omsOrderInfoService.selectOmsOrderSnycAllocate();

        orderList.stream().forEach(order->{
            //分配佣金
            OmsOrderItem param=new OmsOrderItem();
            param.setOrderId(Long.valueOf(order.getId()));
            List<OmsOrderItem> itemList=omsOrderItemService.selectOmsOrderItemList(param);
            if("01".equals(order.getOrderType())){
                Long userId=order.getUserId();
                SysUser orderUser=sysUserService.selectUserById(userId);
                if(orderUser!=null){
                    Long referrerUserId=orderUser.getReferrerUserId();
                    //给推荐人添加佣金
                    SysUser sysUser=sysUserService.selectUserById(referrerUserId);

                    if(sysUser!=null){
                        //如果是技师分配技师佣金
                        boolean flag= checkUseridIsConsultant(String.valueOf(referrerUserId));
                        if(flag && "Y".equals(sysUser.getInviteFlag())){
                            UserPerformanceCalculate user=new UserPerformanceCalculate();
                            user.setUserId(referrerUserId);
                            user.setProductAmount(new BigDecimal(0));
                            user.setUserName(sysUser.getUserName());
                            user.setUserPhone(sysUser.getPhonenumber());
                            BaseShopInfo shop= baseShopInfoService.selectBaseShopInfoById(sysUser.getSourceShop()+"");
                            user.setShopName(shop.getShopName());
                            user.setShopId(order.getShopId());
                            user.setOrderId(Long.valueOf(order.getId()));
                            user.setOrderCode(order.getOrderCode());
                            user.setPayTime(order.getPayTime());
                            user.setOrderAmount(new BigDecimal(order.getSumAmount()));
                            user.setItemAmount(new BigDecimal(0));
                            itemList.stream().forEach(item->{
                                OmsGoodsInfo goods= omsGoodsInfoService.selectOmsGoodsInfoById(item.getGoodsId()+"");
                                System.out.println(goods);
                                System.out.println(item);
                                double discount=goods.getSharePercent()*item.getPrice()*item.getGoodsNum();
                                System.out.println(discount);
                                user.setProductAmount(user.getProductAmount().add(new BigDecimal(discount)));
                                user.setSumAmount(user.getItemAmount().add(user.getProductAmount()));
                            });
                            int r=userPerformanceCalculateService.insertUserPerformanceCalculate(user);
                            if(r>0){
                                order.setOllacateFlag("Y");
                                order.setUpdateTime(DateUtils.getNowDate());
                                omsOrderInfoService.updateOmsOrderOllacate(order);
                            }

                            //记录技师收入情况
                            UserIncomeDetail detail=new UserIncomeDetail();
                            detail.setIncomeAmount(Double.valueOf(0));

                            itemList.stream().forEach(item->{
                                OmsGoodsInfo goods= omsGoodsInfoService.selectOmsGoodsInfoById(item.getGoodsId()+"");
                                double discount=goods.getSharePercent()*item.getPrice()*item.getGoodsNum();
                                detail.setIncomeAmount(detail.getIncomeAmount()+discount);
                            });
                            detail.setUserId(referrerUserId);
                            detail.setAccountAmount(sysUser.getAccountAmount());
                            detail.setIncomeType("01");
                            detail.setIncomeDesc("推广用户("+orderUser.getUserName()+")购买商品,返佣金额:"+detail.getIncomeAmount());
                            detail.setIncomeTime(DateUtils.getNowDate());
                            detail.setCreateTime(DateUtils.getNowDate());
                            detail.setSourceUserId(orderUser.getUserId());
                            detail.setSourceUserName(orderUser.getUserName());
                            detail.setSourceUserAvatar(orderUser.getAvatar());
                            int result=userIncomeDetailService.insertUserIncomeDetail(detail);
                        }else{
                            //如果是推广用户分配用户佣金
                            if(sysUser!=null && "Y".equals(sysUser.getInviteFlag())){
                                UserIncomeDetail detail=new UserIncomeDetail();
                                detail.setIncomeAmount(Double.valueOf(0));

                                itemList.stream().forEach(item->{
                                    OmsGoodsInfo goods= omsGoodsInfoService.selectOmsGoodsInfoById(item.getGoodsId()+"");
                                    double discount=goods.getSharePercent()*item.getPrice()*item.getGoodsNum();
                                    detail.setIncomeAmount(detail.getIncomeAmount()+discount);
                                });
                                detail.setUserId(referrerUserId);
                                detail.setAccountAmount(sysUser.getAccountAmount());
                                detail.setIncomeType("01");
                                detail.setIncomeDesc("推广用户("+orderUser.getUserName()+")购买商品,返佣金额:"+detail.getIncomeAmount());
                                detail.setIncomeTime(com.jiumi.pay.domain.util.DateUtils.getNowDate());
                                detail.setCreateTime(com.jiumi.pay.domain.util.DateUtils.getNowDate());
                                detail.setSourceUserId(orderUser.getUserId());
                                detail.setSourceUserName(orderUser.getUserName());
                                detail.setSourceUserAvatar(orderUser.getAvatar());
                                int result=userIncomeDetailService.insertUserIncomeDetail(detail);
                                if(result>0){
                                    sysUser.setIncomeAmount(sysUser.getIncomeAmount()+detail.getIncomeAmount());
                                    sysUser.setAccountAmount(sysUser.getAccountAmount()+detail.getIncomeAmount());
                                    sysUser.setUpdateBy(sysUser.getUserName());
                                    sysUser.setUpdateTime(DateUtils.getNowDate());
                                    int r=sysUserService.updateUserAccount(sysUser);
                                    if(r>0){
                                        order.setOllacateFlag("Y");
                                        order.setUpdateTime(DateUtils.getNowDate());
                                        omsOrderInfoService.updateOmsOrderOllacate(order);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });

    }

    private  boolean checkUseridIsConsultant(String userId){
        boolean flag=false;
        BaseShopItemConsultant consultant=baseShopItemConsultantService.selectConsultantListStr();
        String consultantStr=consultant.getConsultantId();
        if(StringUtils.isNotEmpty(consultantStr)){
            String [] conList=consultantStr.split(",");
            for(String id:conList){
                if(userId.equals(id)){
                    flag=true;
                    break;
                }
            }
        }
        return flag;
    }


    public void doExecuteApplyStatus()
    {
        //将预约时间已过的记录改成 已过期
        omsItemApplyService.selectOmsOrderUnRevsiveList();
    }

}
