package com.jiumi.business.controller;

import java.math.BigDecimal;
import java.util.List;

import com.jiumi.business.domain.OmsConsumerVO;
import com.jiumi.business.domain.OmsOrderItemDetail;
import com.jiumi.business.domain.OmsVipInfo;
import com.jiumi.business.service.IOmsOrderItemDetailService;
import com.jiumi.business.service.IOmsVipInfoService;
import com.jiumi.common.core.domain.entity.SysUser;
import com.jiumi.common.core.domain.model.LoginUser;
import com.jiumi.common.utils.DateUtils;
import com.jiumi.common.utils.SecurityUtils;
import com.jiumi.common.utils.StringUtils;
import com.jiumi.finance.domain.UserNumberCardDetail;
import com.jiumi.finance.service.IUserNumberCardDetailService;
import com.jiumi.goods.domain.BaseNumberCard;
import com.jiumi.goods.domain.OmsGoodsInfo;
import com.jiumi.goods.domain.OmsGoodsSku;
import com.jiumi.goods.service.IBaseNumberCardService;
import com.jiumi.goods.service.IOmsGoodsInfoService;
import com.jiumi.goods.service.IOmsGoodsSkuService;
import com.jiumi.shop.domain.BaseShopInfo;
import com.jiumi.shop.domain.BaseShopItem;
import com.jiumi.shop.service.IBaseShopInfoService;
import com.jiumi.shop.service.IBaseShopItemService;
import com.jiumi.system.service.ISysUserService;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.jiumi.common.annotation.Log;
import com.jiumi.common.core.controller.BaseController;
import com.jiumi.common.core.domain.AjaxResult;
import com.jiumi.common.enums.BusinessType;
import com.jiumi.business.domain.OmsOrderItemInfo;
import com.jiumi.business.service.IOmsOrderItemInfoService;
import com.jiumi.common.utils.poi.ExcelUtil;
import com.jiumi.common.core.page.TableDataInfo;

/**
 * 项目订单管理Controller
 *
 * @author jiumi
 * @date 2022-02-07
 */
@RestController
@RequestMapping("/business/itemorder")
public class OmsOrderItemInfoController extends BaseController
{
    @Autowired
    private IOmsOrderItemInfoService omsOrderItemInfoService;

    @Autowired
    private ISysUserService userService;

    @Autowired
    private IOmsOrderItemDetailService omsOrderItemDetailService;

    @Autowired
    private IUserNumberCardDetailService userNumberCardDetailService;

    @Autowired
    private IOmsVipInfoService omsVipInfoService;

    @Autowired
    private IBaseShopItemService baseShopItemService;
  @Autowired
    private IBaseShopInfoService baseShopInfoService;

    @Autowired
    private IOmsGoodsInfoService omsGoodsInfoService;

    @Autowired
    private IOmsGoodsSkuService omsGoodsSkuService;

    @Autowired
    private IBaseNumberCardService baseNumberCardService;
    /**
     * 查询项目订单管理列表
     */
    @PreAuthorize("@ss.hasPermi('business:itemorder:list')")
    @GetMapping("/list")
    public TableDataInfo list(OmsOrderItemInfo omsOrderItemInfo)
    {
        SysUser sysUser=SecurityUtils.getLoginUser().getUser();
        if(!sysUser.isAdmin()){
            String shopId= sysUser.getSourceShop();
            if(StringUtils.isEmpty(shopId)){
                shopId="''";
            }
            omsOrderItemInfo.setShopId(shopId);
        }
        omsOrderItemInfo.setOrderType("01,02");
        startPage();
        List<OmsOrderItemInfo> list = omsOrderItemInfoService.selectOmsOrderItemInfoList(omsOrderItemInfo);
        return getDataTable(list);
    }

    @GetMapping("/getPayOrderItemList")
    public TableDataInfo getPayOrderItemList(OmsOrderItemInfo omsOrderItemInfo)
    {
        SysUser sysUser=SecurityUtils.getLoginUser().getUser();
        if(!sysUser.isAdmin()){
            String shopId= sysUser.getSourceShop();
            if(StringUtils.isEmpty(shopId)){
                shopId="''";
            }
            omsOrderItemInfo.setShopId(shopId);
        }
        omsOrderItemInfo.setOrderStatus("02");
        startPage();
        List<OmsOrderItemInfo> list = omsOrderItemInfoService.selectOmsOrderItemInfoList(omsOrderItemInfo);
        return getDataTable(list);
    }

    /**
     * 导出项目订单管理列表
     */
    @PreAuthorize("@ss.hasPermi('business:itemorder:export')")
    @Log(title = "项目订单管理", businessType = BusinessType.EXPORT)
    @GetMapping("/export")
    public AjaxResult export(OmsOrderItemInfo omsOrderItemInfo)
    {
        List<OmsOrderItemInfo> list = omsOrderItemInfoService.selectOmsOrderItemInfoList(omsOrderItemInfo);
        ExcelUtil<OmsOrderItemInfo> util = new ExcelUtil<OmsOrderItemInfo>(OmsOrderItemInfo.class);
        return util.exportExcel(list, "项目订单管理数据");
    }

    /**
     * 获取项目订单管理详细信息
     */
    @PreAuthorize("@ss.hasPermi('business:itemorder:query')")
    @GetMapping(value = "/{id}")
    public AjaxResult getInfo(@PathVariable("id") Long id)
    {
        AjaxResult result=AjaxResult.success();
        OmsOrderItemInfo orderInfo=omsOrderItemInfoService.selectOmsOrderItemInfoById(id);
        result.put("orderItem",orderInfo);
        OmsOrderItemDetail itemParam=new OmsOrderItemDetail();
        itemParam.setConsumerType(1);
        itemParam.setOrderId(id);
        List<OmsOrderItemDetail> itemList= omsOrderItemDetailService.selectOmsOrderItemDetailList(itemParam);
        result.put("numberCard","");
        itemList.stream().forEach(item->{
            if(item.getConsumer()==null){
                OmsConsumerVO vo=new OmsConsumerVO();
                vo.setId(item.getConsumerId());
                vo.setDiscountPrice(item.getPrice());
                BaseShopItem shopItem= baseShopItemService.selectBaseShopItemById(""+item.getConsumerId());
                item.setConsumerName(shopItem.getItemName());
                vo.setPrice(shopItem.getPrice());
                UserNumberCardDetail param=new UserNumberCardDetail();
                param.setUserId(orderInfo.getUserId());
                param.setId(Long.valueOf(item.getConsumerId()));
                List<UserNumberCardDetail> cardList= userNumberCardDetailService.selectUserNumberCardDetailListByItemId(param);
                if(cardList!=null && cardList.size()>0){
                    UserNumberCardDetail detail=cardList.get(0);
                    vo.setLastTimes(detail.getLastTimes());
                    vo.setCardId(detail.getId());
                    if(StringUtils.isEmpty(String.valueOf(result.get("numberCard")))){
                        result.put("numberCard",detail.getCardName()+" 总共:"+detail.getTotalTimes()+"次,使用:"+detail.getUseTimes()+"次,剩余"+detail.getLastTimes()+"次；");
                    }else {
                        result.put("numberCard", result.get("numberCard") + "," + detail.getCardName() + " 总共:" + detail.getTotalTimes() + "次,使用:"+detail.getUseTimes()+"次,,剩余" + detail.getLastTimes() + "次；");
                    }
                }
                item.setConsumer(vo);
            }
        });
        result.put("orderItemList",itemList);

        OmsOrderItemDetail productParam=new OmsOrderItemDetail();
        productParam.setConsumerType(2);
        productParam.setOrderId(id);
        List<OmsOrderItemDetail> productList= omsOrderItemDetailService.selectOmsOrderItemDetailList(productParam);
        productList.stream().forEach(item->{
            OmsGoodsSku skuInfo= omsGoodsSkuService.selectOmsGoodsSkuById(String.valueOf(item.getConsumerId()));
            if(skuInfo!=null){
                OmsGoodsInfo goodsInfo=omsGoodsInfoService.selectOmsGoodsInfoById(String.valueOf(skuInfo.getGoodsId()));
                item.setConsumerName(goodsInfo.getName()+skuInfo.getSkuName());
            }
            if(item.getConsumer()==null){
                OmsConsumerVO vo=new OmsConsumerVO();
                vo.setId(item.getConsumerId());
                vo.setPrice(item.getPrice());
                item.setConsumer(vo);
            }
        });
        BaseShopInfo shop=baseShopInfoService.selectBaseShopInfoById(orderInfo.getShopId()+"");
        result.put("shopInfo",shop);
        result.put("orderProductList",productList);
        return result;
    }

    @GetMapping(value = "/queryUserByPhone/{userPhone}")
    public AjaxResult queryUserByPhone(@PathVariable("userPhone") String userPhone)
    {
        AjaxResult result=AjaxResult.success();
        SysUser currentUser=SecurityUtils.getLoginUser().getUser();
        SysUser user=userService.selectUserByPhone(userPhone);
        result.put("otherShop","");
        if(StringUtils.isNotNull(user.getSourceShop()) && !user.getSourceShop().equals(currentUser.getSourceShop())){
            BaseShopInfo param=new BaseShopInfo();
            param.setStatus("Y");
            List<BaseShopInfo> shopList= baseShopInfoService.selectBaseShopInfoList(param);
            shopList.stream().forEach(shop->{
                if(user.getSourceShop().indexOf(shop.getId())!=-1){
                    if(StringUtils.isEmpty(String.valueOf(result.get("otherShop")))){
                        result.put("otherShop",shop.getShopName());
                    }else{
                        result.put("otherShop",result.get("otherShop")+","+shop.getShopName());
                    }
                }
            });

        }
        if(user==null){
            return AjaxResult.error("用户不存在，请核对后再操作！！！");
        }
        UserNumberCardDetail param=new UserNumberCardDetail();
        param.setUserId(user.getUserId());
        List<UserNumberCardDetail> cardList= userNumberCardDetailService.selectUserNumberCardDetailListByUserId(param);
        result.put("numberCard","");
        if(cardList!=null && cardList.size()>0){
            UserNumberCardDetail detail=cardList.get(0);
            if(StringUtils.isEmpty(String.valueOf(result.get("numberCard")))){
                result.put("numberCard",detail.getCardName()+"["+detail.getItemName()+"] 总共:"+detail.getTotalTimes()+"次,使用:"+detail.getUseTimes()+"次,剩余"+detail.getLastTimes()+"次；<br/>");
            }else {
                result.put("numberCard", result.get("numberCard") + detail.getCardName() +"["+detail.getItemName()+"]总共:" + detail.getTotalTimes() + "次,使用:"+detail.getUseTimes()+"次,,剩余" + detail.getLastTimes() + "次；<br/>");
            }
        }
        result.put("userInfo",user);
        String orderCode= "DD"+DateUtils.dateTimeNow()+ RandomStringUtils.randomNumeric(6);
        result.put("orderCode",orderCode);
        OmsVipInfo vipInfo=omsVipInfoService.selectOmsVipInfoByVipLevel(Long.valueOf(user.getVipLevel()));
        result.put("vipInfo",vipInfo);
        return result;
    }

    /**
     * 新增项目订单管理
     */
    @PreAuthorize("@ss.hasPermi('business:itemorder:add')")
    @Log(title = "项目订单管理", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody OmsOrderItemInfo omsOrderItemInfo)throws Exception
    {
        SysUser currentUser=SecurityUtils.getLoginUser().getUser();
        BigDecimal sumAmount=omsOrderItemInfo.getSumAmount();
        if(sumAmount==null || sumAmount.doubleValue()<0){
            return AjaxResult.error("总金额计算错误！");
        }
        if(omsOrderItemInfo.getPayment1().doubleValue()<0 || omsOrderItemInfo.getPayment2().doubleValue()<0 || omsOrderItemInfo.getPayment3().doubleValue()<0 || omsOrderItemInfo.getPayment4().doubleValue()<0 ||omsOrderItemInfo.getPayment5().doubleValue()<0 ||omsOrderItemInfo.getPayment6().doubleValue()<0 ||omsOrderItemInfo.getPayment7().doubleValue()<0 ||omsOrderItemInfo.getPayment8().doubleValue()<0 ||omsOrderItemInfo.getPayment9().doubleValue()<0){
            return AjaxResult.error("支付金额不能小于0！");
        }
        BigDecimal amount=omsOrderItemInfo.getPayment1().add(omsOrderItemInfo.getPayment2()).add(omsOrderItemInfo.getPayment3()).add(omsOrderItemInfo.getPayment4()).add(omsOrderItemInfo.getPayment5()).add(omsOrderItemInfo.getPayment6()).add(omsOrderItemInfo.getPayment7()).add(omsOrderItemInfo.getPayment8()).add(omsOrderItemInfo.getPayment9());
        if(sumAmount.doubleValue()!=amount.doubleValue()){
            return AjaxResult.error("总金额与支付金额不相符！");
        }
        Long userId=omsOrderItemInfo.getUserId();
        SysUser user=userService.selectUserById(userId);
        if(user==null){
            return AjaxResult.error("请绑定正确结算用户账号！");
        }
        if(user.getAccountAmount()<omsOrderItemInfo.getPayment1().doubleValue()){
            return AjaxResult.error("用户付款金额不能大于用户账户余额！");
        }
        if(user.getProductBalance()<omsOrderItemInfo.getPayment2().doubleValue()){
            return AjaxResult.error("用户产品金额不能大于用户产品账户余额！");
        }
        OmsOrderItemDetail itemDetail=omsOrderItemInfo.getOrderItemList().stream().filter(item->item.getConsultant1()==null).findFirst().orElse(null);
        if(itemDetail!=null){
            return AjaxResult.error("服务项目技师不能为空！");
        }
        for(OmsOrderItemDetail pro: omsOrderItemInfo.getOrderProductList()){
            if("sub1".equals(pro.getSubType())){
                if(pro.getConsultant1()==null){
                    throw new Exception("产品技师A不能为空！");
                }
                if(pro.getConsultant1Amount()==null){
                    throw new Exception("产品技师A佣金不能为空！");
                }
            }
            else if("sub2".equals(pro.getSubType())){
                if(pro.getConsultant1()==null){
                    throw new Exception("产品技师A不能为空！");
                }
                if(pro.getConsultant1Amount()==null){
                    throw new Exception("产品技师A佣金不能为空！");
                }
                if(pro.getConsultant2()==null){
                    throw new Exception("产品技师B不能为空！");
                }
                if(pro.getConsultant2Amount()==null){
                    throw new Exception("产品技师B佣金不能为空！");
                }
            }
            else if("sub3".equals(pro.getSubType())){
                if(pro.getConsultant1()==null){
                    throw new Exception("产品技师A不能为空！");
                }
                if(pro.getConsultant1Amount()==null){
                    throw new Exception("产品技师A佣金不能为空！");
                }
                if(pro.getConsultant2()==null){
                    throw new Exception("产品技师B不能为空！");
                }
                if(pro.getConsultant2Amount()==null){
                    throw new Exception("产品技师B佣金不能为空！");
                }
                if(pro.getConsultant3()==null){
                    throw new Exception("产品技师C不能为空！");
                }
                if(pro.getConsultant3Amount()==null){
                    throw new Exception("产品技师C佣金不能为空！");
                }
            }
        }
        if(user.getSourceShop()==null){
            return AjaxResult.error("用户未设置所在店铺！");
        }
        if(user.getSourceShop().indexOf(",")!=-1){
            return AjaxResult.error("用户不允许归属多个店铺，请联系管理员！");
        }
        if(currentUser.getSourceShop().indexOf(",")!=-1){
            return AjaxResult.error("您存在多个归属店铺，不能进行结账操作，请联系管理员！");
        }
        omsOrderItemInfo.setShopId(currentUser.getSourceShop());
        omsOrderItemInfo.setPayTime(DateUtils.getNowDate());
        omsOrderItemInfo.setAccountAmount(new BigDecimal(user.getAccountAmount()));
        return toAjax(omsOrderItemInfoService.insertOmsOrderItemInfo(omsOrderItemInfo));
    }

    @Log(title = "新增次卡订单", businessType = BusinessType.INSERT)
    @PostMapping("/addNumberCardorder")
    public AjaxResult addNumberCardorder(@RequestBody OmsOrderItemInfo omsOrderItemInfo)throws Exception
    {
        SysUser currentUser=SecurityUtils.getLoginUser().getUser();
        BigDecimal sumAmount=omsOrderItemInfo.getSumAmount();
        if(sumAmount==null || sumAmount.doubleValue()<0){
            return AjaxResult.error("总金额计算错误！");
        }
        if(omsOrderItemInfo.getPayment1().doubleValue()<0 || omsOrderItemInfo.getPayment2().doubleValue()<0 || omsOrderItemInfo.getPayment3().doubleValue()<0 || omsOrderItemInfo.getPayment4().doubleValue()<0 ||omsOrderItemInfo.getPayment5().doubleValue()<0 ||omsOrderItemInfo.getPayment6().doubleValue()<0 ||omsOrderItemInfo.getPayment7().doubleValue()<0 ||omsOrderItemInfo.getPayment8().doubleValue()<0||omsOrderItemInfo.getPayment9().doubleValue()<0){
            return AjaxResult.error("支付金额不能小于0！");
        }
        BigDecimal amount=omsOrderItemInfo.getPayment1().add(omsOrderItemInfo.getPayment2()).add(omsOrderItemInfo.getPayment3()).add(omsOrderItemInfo.getPayment4()).add(omsOrderItemInfo.getPayment5()).add(omsOrderItemInfo.getPayment6()).add(omsOrderItemInfo.getPayment7()).add(omsOrderItemInfo.getPayment8()).add(omsOrderItemInfo.getPayment9());
        if(sumAmount.doubleValue()!=amount.doubleValue()){
            return AjaxResult.error("总金额与支付金额不相符！");
        }
        Long userId=omsOrderItemInfo.getUserId();
        SysUser user=userService.selectUserById(userId);
        if(user==null){
            return AjaxResult.error("请绑定正确结算用户账号！");
        }
        if(user.getAccountAmount()<omsOrderItemInfo.getPayment1().doubleValue()){
            return AjaxResult.error("用户付款金额不能大于用户账户余额！");
        }
        if(user.getProductBalance()<omsOrderItemInfo.getPayment2().doubleValue()){
            return AjaxResult.error("用户产品金额不能大于用户产品账户余额！");
        }
        if(user.getSourceShop()==null){
            return AjaxResult.error("用户未设置所在店铺！");
        }
        if(user.getSourceShop().indexOf(",")!=-1){
            return AjaxResult.error("用户不允许归属多个店铺，请联系管理员！");
        }
        if(currentUser.getSourceShop().indexOf(",")!=-1){
            return AjaxResult.error("您存在多个归属店铺，不能进行结账操作，请联系管理员！");
        }
        omsOrderItemInfo.setAccountAmount(new BigDecimal(user.getAccountAmount()));
        omsOrderItemInfo.setShopId(currentUser.getSourceShop());
        omsOrderItemInfo.setPayTime(DateUtils.getNowDate());
        return toAjax(omsOrderItemInfoService.insertNumberCardOrderItemInfo(omsOrderItemInfo));
    }

    /**
     * 修改项目订单管理
     */
    @PreAuthorize("@ss.hasPermi('business:itemorder:edit')")
    @Log(title = "项目订单管理", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody OmsOrderItemInfo omsOrderItemInfo)throws Exception
    {
        BigDecimal sumAmount=omsOrderItemInfo.getSumAmount();
        if(sumAmount==null || sumAmount.doubleValue()<0){
            return AjaxResult.error("总金额计算错误！");
        }
        if(omsOrderItemInfo.getPayment1().doubleValue()<0 || omsOrderItemInfo.getPayment2().doubleValue()<0 || omsOrderItemInfo.getPayment3().doubleValue()<0 || omsOrderItemInfo.getPayment4().doubleValue()<0 ||omsOrderItemInfo.getPayment5().doubleValue()<0 ||omsOrderItemInfo.getPayment6().doubleValue()<0 ||omsOrderItemInfo.getPayment7().doubleValue()<0 ||omsOrderItemInfo.getPayment8().doubleValue()<0 ||omsOrderItemInfo.getPayment9().doubleValue()<0){
            return AjaxResult.error("支付金额不能小于0！");
        }
        BigDecimal amount=omsOrderItemInfo.getPayment1().add(omsOrderItemInfo.getPayment2()).add(omsOrderItemInfo.getPayment3()).add(omsOrderItemInfo.getPayment4()).add(omsOrderItemInfo.getPayment5()).add(omsOrderItemInfo.getPayment6()).add(omsOrderItemInfo.getPayment7()).add(omsOrderItemInfo.getPayment8()).add(omsOrderItemInfo.getPayment9());
        if(sumAmount.doubleValue()!=amount.doubleValue()){
            return AjaxResult.error("总金额与支付金额不相符！");
        }
        Long userId=omsOrderItemInfo.getUserId();
        SysUser user=userService.selectUserById(userId);
        if(user==null){
            return AjaxResult.error("请绑定正确结算用户账号！");
        }
        if(user.getAccountAmount()<omsOrderItemInfo.getPayment1().doubleValue()){
            return AjaxResult.error("用户付款金额不能大于用户账户余额！");
        }
        if(user.getProductBalance()<omsOrderItemInfo.getPayment2().doubleValue()){
            return AjaxResult.error("用户产品金额不能大于用户产品账户余额！");
        }
        OmsOrderItemDetail itemDetail=omsOrderItemInfo.getOrderItemList().stream().filter(item->item.getConsultant1()==null).findFirst().orElse(null);
        if(itemDetail!=null){
            return AjaxResult.error("服务项目技师不能为空！");
        }
        for(OmsOrderItemDetail pro: omsOrderItemInfo.getOrderProductList()){
            if("sub1".equals(pro.getSubType())){
                if(pro.getConsultant1()==null){
                    throw new Exception("产品技师A不能为空！");
                }
                if(pro.getConsultant1Amount()==null){
                    throw new Exception("产品技师A佣金不能为空！");
                }
            }
            else if("sub2".equals(pro.getSubType())){
                if(pro.getConsultant1()==null){
                    throw new Exception("产品技师A不能为空！");
                }
                if(pro.getConsultant1Amount()==null){
                    throw new Exception("产品技师A佣金不能为空！");
                }
                if(pro.getConsultant2()==null){
                    throw new Exception("产品技师B不能为空！");
                }
                if(pro.getConsultant2Amount()==null){
                    throw new Exception("产品技师B佣金不能为空！");
                }
            }
            else if("sub3".equals(pro.getSubType())){
                if(pro.getConsultant1()==null){
                    throw new Exception("产品技师A不能为空！");
                }
                if(pro.getConsultant1Amount()==null){
                    throw new Exception("产品技师A佣金不能为空！");
                }
                if(pro.getConsultant2()==null){
                    throw new Exception("产品技师B不能为空！");
                }
                if(pro.getConsultant2Amount()==null){
                    throw new Exception("产品技师B佣金不能为空！");
                }
                if(pro.getConsultant3()==null){
                    throw new Exception("产品技师C不能为空！");
                }
                if(pro.getConsultant3Amount()==null){
                    throw new Exception("产品技师C佣金不能为空！");
                }
            }
        }
        omsOrderItemInfo.setAccountAmount(new BigDecimal(user.getAccountAmount()));
        return toAjax(omsOrderItemInfoService.updateOmsOrderItemInfo(omsOrderItemInfo));
    }

    @Log(title = "撤销重置项目订单", businessType = BusinessType.UPDATE)
    @PutMapping("/resetItemorder")
    public AjaxResult resetItemorder(@RequestBody OmsOrderItemInfo omsOrderItemInfo)throws Exception
    {
        OmsOrderItemInfo itemOrder= omsOrderItemInfoService.selectOmsOrderItemInfoById(omsOrderItemInfo.getId());
        if("03".equals(itemOrder.getOrderStatus())){
            return AjaxResult.error("只有已完成的订单才能执行该操作");
        }
        BigDecimal sumAmount=omsOrderItemInfo.getSumAmount();
        if(sumAmount==null || sumAmount.doubleValue()<0){
            return AjaxResult.error("总金额计算错误！");
        }
        if(omsOrderItemInfo.getPayment1().doubleValue()<0 || omsOrderItemInfo.getPayment2().doubleValue()<0 || omsOrderItemInfo.getPayment3().doubleValue()<0 || omsOrderItemInfo.getPayment4().doubleValue()<0 ||omsOrderItemInfo.getPayment5().doubleValue()<0 ||omsOrderItemInfo.getPayment6().doubleValue()<0 ||omsOrderItemInfo.getPayment7().doubleValue()<0 ||omsOrderItemInfo.getPayment8().doubleValue()<0){
            return AjaxResult.error("支付金额不能小于0！");
        }
        double totalAmout=sumAmount.doubleValue()+omsOrderItemInfo.getBackPayment1().doubleValue()+omsOrderItemInfo.getBackPayment2().doubleValue();
        BigDecimal amount=omsOrderItemInfo.getPayment1().add(omsOrderItemInfo.getPayment2()).add(omsOrderItemInfo.getPayment3()).add(omsOrderItemInfo.getPayment4()).add(omsOrderItemInfo.getPayment5()).add(omsOrderItemInfo.getPayment6()).add(omsOrderItemInfo.getPayment7()).add(omsOrderItemInfo.getPayment8());
        if(totalAmout!=amount.doubleValue()){
            return AjaxResult.error("总金额与支付金额不相符！");
        }
        Long userId=omsOrderItemInfo.getUserId();
        SysUser user=userService.selectUserById(userId);
        if(user==null){
            return AjaxResult.error("请绑定正确结算用户账号！");
        }
        if(omsOrderItemInfo.getBackPayment1().doubleValue()>itemOrder.getPayment1().doubleValue()){
            return AjaxResult.error("余额账户退回金额不能大于 余额账户支付金额！");
        }
        if(omsOrderItemInfo.getBackPayment2().doubleValue()>itemOrder.getPayment2().doubleValue()){
            return AjaxResult.error("产品账户退回金额不能大于 产品账户支付金额！");
        }
        OmsOrderItemDetail itemDetail=omsOrderItemInfo.getOrderItemList().stream().filter(item->item.getConsultant1()==null).findFirst().orElse(null);
        if(itemDetail!=null){
            return AjaxResult.error("服务项目技师不能为空！");
        }
        for(OmsOrderItemDetail pro: omsOrderItemInfo.getOrderProductList()){
            if("sub1".equals(pro.getSubType())){
                if(pro.getConsultant1()==null){
                    throw new Exception("产品技师A不能为空！");
                }
                if(pro.getConsultant1Amount()==null){
                    throw new Exception("产品技师A佣金不能为空！");
                }
            }
            else if("sub2".equals(pro.getSubType())){
                if(pro.getConsultant1()==null){
                    throw new Exception("产品技师A不能为空！");
                }
                if(pro.getConsultant1Amount()==null){
                    throw new Exception("产品技师A佣金不能为空！");
                }
                if(pro.getConsultant2()==null){
                    throw new Exception("产品技师B不能为空！");
                }
                if(pro.getConsultant2Amount()==null){
                    throw new Exception("产品技师B佣金不能为空！");
                }
            }
            else if("sub3".equals(pro.getSubType())){
                if(pro.getConsultant1()==null){
                    throw new Exception("产品技师A不能为空！");
                }
                if(pro.getConsultant1Amount()==null){
                    throw new Exception("产品技师A佣金不能为空！");
                }
                if(pro.getConsultant2()==null){
                    throw new Exception("产品技师B不能为空！");
                }
                if(pro.getConsultant2Amount()==null){
                    throw new Exception("产品技师B佣金不能为空！");
                }
                if(pro.getConsultant3()==null){
                    throw new Exception("产品技师C不能为空！");
                }
                if(pro.getConsultant3Amount()==null){
                    throw new Exception("产品技师C佣金不能为空！");
                }
            }
        }
        return toAjax(omsOrderItemInfoService.resetOmsOrderItemInfo(omsOrderItemInfo));
    }


    @GetMapping(value = "/paymentItemorder/{id}")
    public AjaxResult paymentItemorder(@PathVariable("id") Long id)throws Exception
    {
        OmsOrderItemInfo itemOrder=omsOrderItemInfoService.selectOmsOrderItemInfoById(id);
        if("03".equals(itemOrder.getOrderStatus())){
            BigDecimal payAmount = itemOrder.getPayment5();
            if(payAmount.doubleValue()<=0){
                return AjaxResult.error("挂账金额错误！");
            }
            BigDecimal sumAmount=itemOrder.getSumAmount();
            if(sumAmount==null || sumAmount.doubleValue()<=0){
                return AjaxResult.error("总金额计算错误，请联系管理员！");
            }
            if(itemOrder.getPayment1().doubleValue()<0 || itemOrder.getPayment2().doubleValue()<0 || itemOrder.getPayment3().doubleValue()<0 || itemOrder.getPayment4().doubleValue()<0 ||itemOrder.getPayment5().doubleValue()<0 ||itemOrder.getPayment6().doubleValue()<0 ||itemOrder.getPayment7().doubleValue()<0 ||itemOrder.getPayment8().doubleValue()<0){
                return AjaxResult.error("支付金额错误，请联系管理员！");
            }
            BigDecimal amount=itemOrder.getPayment1().add(itemOrder.getPayment2()).add(itemOrder.getPayment3()).add(itemOrder.getPayment4()).add(itemOrder.getPayment5()).add(itemOrder.getPayment6()).add(itemOrder.getPayment7()).add(itemOrder.getPayment8());
            if(sumAmount.doubleValue()!=amount.doubleValue()){
                return AjaxResult.error("总金额与支付金额不相符，请联系管理员！");
            }
            OmsOrderItemDetail itemParam=new OmsOrderItemDetail();
            itemParam.setOrderId(itemOrder.getId());
            itemParam.setConsumerType(1);
            List<OmsOrderItemDetail> itemList= omsOrderItemDetailService.selectOmsOrderItemDetailList(itemParam);
            itemOrder.setOrderItemList(itemList);

            OmsOrderItemDetail productParam=new OmsOrderItemDetail();
            productParam.setConsumerType(2);
            productParam.setOrderId(itemOrder.getId());
            List<OmsOrderItemDetail> productList= omsOrderItemDetailService.selectOmsOrderItemDetailList(productParam);
            itemOrder.setOrderProductList(productList);
            OmsOrderItemDetail itemDetail=itemList.stream().filter(item->item.getConsultant1()==null).findFirst().orElse(null);
            if(itemDetail!=null){
                return AjaxResult.error("服务项目技师不能为空！");
            }
            for(OmsOrderItemDetail pro: productList){
                if("sub1".equals(pro.getSubType())){
                    if(pro.getConsultant1()==null){
                        throw new Exception("产品技师A不能为空！");
                    }
                    if(pro.getConsultant1Amount()==null){
                        throw new Exception("产品技师A佣金不能为空！");
                    }
                }
                else if("sub2".equals(pro.getSubType())){
                    if(pro.getConsultant1()==null){
                        throw new Exception("产品技师A不能为空！");
                    }
                    if(pro.getConsultant1Amount()==null){
                        throw new Exception("产品技师A佣金不能为空！");
                    }
                    if(pro.getConsultant2()==null){
                        throw new Exception("产品技师B不能为空！");
                    }
                    if(pro.getConsultant2Amount()==null){
                        throw new Exception("产品技师B佣金不能为空！");
                    }
                }
                else if("sub3".equals(pro.getSubType())){
                    if(pro.getConsultant1()==null){
                        throw new Exception("产品技师A不能为空！");
                    }
                    if(pro.getConsultant1Amount()==null){
                        throw new Exception("产品技师A佣金不能为空！");
                    }
                    if(pro.getConsultant2()==null){
                        throw new Exception("产品技师B不能为空！");
                    }
                    if(pro.getConsultant2Amount()==null){
                        throw new Exception("产品技师B佣金不能为空！");
                    }
                    if(pro.getConsultant3()==null){
                        throw new Exception("产品技师C不能为空！");
                    }
                    if(pro.getConsultant3Amount()==null){
                        throw new Exception("产品技师C佣金不能为空！");
                    }
                }
            }
            int result=omsOrderItemInfoService.paymentUnPayItemOrder(itemOrder);

            return toAjax(result);
        }else{
            return AjaxResult.error("只有挂账的订单才能执行该操作！");
        }
    }
    /**
     * 删除项目订单管理
     */
    @PreAuthorize("@ss.hasPermi('business:itemorder:remove')")
    @Log(title = "项目订单管理", businessType = BusinessType.DELETE)
	@DeleteMapping("/{id}")
    public AjaxResult remove(@PathVariable Long id)
    {
        OmsOrderItemInfo orderItem= omsOrderItemInfoService.selectOmsOrderItemInfoById(id);
        if("02".equals(orderItem.getOrderStatus()) || "03".equals(orderItem.getOrderStatus())){
            return AjaxResult.error("已完成订单、挂账订单不允许删除!");
        }
        return toAjax(omsOrderItemInfoService.deleteOmsOrderItemInfoById(id));
    }
}
