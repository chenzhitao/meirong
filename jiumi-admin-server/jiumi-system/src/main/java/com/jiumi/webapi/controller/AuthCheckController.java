package com.jiumi.webapi.controller;
import cn.hutool.core.date.DateUtil;
import cn.hutool.core.util.NumberUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.jiumi.baseconfig.domain.BaseSearchHistory;
import com.jiumi.baseconfig.domain.BaseUserAddress;
import com.jiumi.baseconfig.domain.BaseUserMsg;
import com.jiumi.baseconfig.service.IBaseSearchHistoryService;
import com.jiumi.baseconfig.service.IBaseUserAddressService;
import com.jiumi.baseconfig.service.IBaseUserMsgService;
import com.jiumi.business.domain.*;
import com.jiumi.business.service.*;
import com.jiumi.common.annotation.Log;
import com.jiumi.common.config.JiumiConfig;
import com.jiumi.common.constant.UserConstants;
import com.jiumi.common.core.controller.BaseController;
import com.jiumi.common.core.domain.AjaxResult;
import com.jiumi.common.core.domain.entity.SysDictData;
import com.jiumi.common.core.domain.entity.SysUser;
import com.jiumi.common.core.domain.model.LoginUser;
import com.jiumi.common.core.page.TableDataInfo;
import com.jiumi.common.core.redis.RedisCache;
import com.jiumi.common.enums.BusinessType;
import com.jiumi.common.utils.DateUtils;
import com.jiumi.common.utils.SecurityUtils;
import com.jiumi.common.utils.StringUtils;
import com.jiumi.finance.domain.*;
import com.jiumi.finance.service.*;
import com.jiumi.goods.domain.BaseNumberCard;
import com.jiumi.goods.domain.OmsGoodsInfo;
import com.jiumi.goods.domain.OmsGoodsSku;
import com.jiumi.goods.service.IBaseNumberCardService;
import com.jiumi.goods.service.IOmsGoodsInfoService;
import com.jiumi.goods.service.IOmsGoodsSkuService;
import com.jiumi.pay.domain.util.AjaxPayResult;
import com.jiumi.pay.domain.util.IpUtil;
import com.jiumi.pay.wxpay.WxPayApi;
import com.jiumi.pay.wxpay.WxPayApiConfigKit;
import com.jiumi.pay.wxpay.WxPayUtil;
import com.jiumi.pay.wxpay.config.WxPayApiConfig;
import com.jiumi.pay.wxpay.enums.TradeType;
import com.jiumi.pay.wxpay.model.UnifiedOrderModel;
import com.jiumi.shop.domain.BaseShopItem;
import com.jiumi.shop.domain.BaseShopItemConsultant;
import com.jiumi.shop.service.IBaseShopItemConsultantService;
import com.jiumi.shop.service.IBaseShopItemService;
import com.jiumi.system.service.ISysConfigService;
import com.jiumi.system.service.ISysDictDataService;
import com.jiumi.system.service.ISysDictTypeService;
import com.jiumi.system.service.ISysUserService;
import io.swagger.annotations.ApiOperation;
import org.apache.commons.lang3.RandomStringUtils;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.util.EntityUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.util.ResourceUtils;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.websocket.server.PathParam;
import java.io.*;
import java.math.BigDecimal;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.*;

import static com.jiumi.pay.domain.util.SignType.HMACSHA256;

/**
 * 需要授权接口
 *
 * @author jiumi
 * @date 2021-08-18
 */
@RestController
@RequestMapping("/api/authcheck")
public class AuthCheckController extends BaseController
{

    private static Logger log = LoggerFactory.getLogger(AuthCheckController.class);

    @Autowired
    private ISysUserService sysUserService;

    @Autowired
    private RedisCache redisCache;

    @Autowired
    private IOmsOrderInfoService omsOrderInfoService;

    @Autowired
    WxPayApiConfig wxPayApiConfig;

    @Autowired
    private IBaseSearchHistoryService baseSearchHistoryService;

    @Autowired
    private IBaseUserAddressService baseUserAddressService;

    @Autowired
    private IBaseUserMsgService baseUserMsgService;
    @Autowired
    private ISysDictTypeService dictTypeService;


    @Autowired
    private IOmsOrderItemService omsOrderItemService;

    @Autowired
    private ISysConfigService configService;

    @Autowired
    private ISysDictDataService sysDictDataService;

    @Autowired
    private IOmsItemApplyService omsItemApplyService;

    @Autowired
    private IBaseShopItemService baseShopItemService;

    @Autowired
    private IOmsGoodsSkuService omsGoodsSkuService;

    @Autowired
    private IOmsGoodsInfoService omsGoodsInfoService;
    @Autowired
    private IOmsGoodsCartService omsGoodsCartService;

    @Autowired
    private IUserIncomeDetailService userIncomeDetailService;

    @Autowired
    private IUserWithdrawDetailService userWithdrawDetailService;

    @Autowired
    private IUserInviteDetailService userInviteDetailService;

    @Autowired
    private IOmsVipInfoService omsVipInfoService;

    @Autowired
    private IBaseShopItemConsultantService baseShopItemConsultantService;

    @Autowired
    private IBaseNumberCardService baseNumberCardService;

    @Autowired
    private IUserRechargeDetailService userRechargeDetailService;

    @Autowired
    private IUserNumberCardDetailService userNumberCardDetailService;
    @Autowired
    private IOmsOrderItemInfoService omsOrderItemInfoService;

    @Autowired
    private IOmsOrderItemDetailService omsOrderItemDetailService;


    private static final int amountPercent=1000;  //支付比例
    private static int freightFree=500;     //满500包邮
    /**
     * 个人信息
     */
    @GetMapping("/getUserInfo")
    @ApiOperation("获取用户详细信息")
    public AjaxResult getUserInfo()
    {
        LoginUser loginUser = SecurityUtils.getLoginUser();
        SysUser user =sysUserService.selectUserById(loginUser.getUser().getUserId());
        String consultantFlag= sysUserService.checkConsultantFlag(user);
        user.setConsultantFlag(consultantFlag);
        OmsVipInfo vipInfo=omsVipInfoService.selectOmsVipInfoByVipLevel(Long.valueOf(user.getVipLevel()));
        Map result=new HashMap();
        result.put("userInfo",user);
        result.put("vipInfo",vipInfo);
        return  AjaxResult.success(result);
    }


    @ApiOperation("立即预约项目")
    @PostMapping(value = "/applyShopItem")
    public AjaxResult applyShopItem(@Validated @RequestBody OmsItemApply omsItemApply)
    {
        omsItemApply.setStatus("01");
        omsItemApply.setApplyUserId(SecurityUtils.getUserId());
        omsItemApply.setCreateBy(SecurityUtils.getUsername());
        omsItemApply.setCreateTime(DateUtils.getNowDate());
        BaseShopItem item=baseShopItemService.selectBaseShopItemById(omsItemApply.getItemId()+"");
        omsItemApply.setShopItem(item);
        int result=omsItemApplyService.insertOmsItemApply(omsItemApply);
        return AjaxResult.success(result);
    }

    @ApiOperation("修改用户信息")
    @PutMapping("/editUserInfo")
    public AjaxResult editUserInfo(@Validated @RequestBody SysUser user)
    {
        sysUserService.checkUserAllowed(user);
        if (StringUtils.isNotEmpty(user.getPhonenumber())
                && UserConstants.NOT_UNIQUE.equals(sysUserService.checkPhoneUnique(user)))
        {
            return AjaxResult.error("修改用户'" + user.getUserName() + "'失败，手机号码已存在");
        }
        else if (StringUtils.isNotEmpty(user.getEmail())
                && UserConstants.NOT_UNIQUE.equals(sysUserService.checkEmailUnique(user)))
        {
            return AjaxResult.error("修改用户'" + user.getUserName() + "'失败，邮箱账号已存在");
        }
        user.setUpdateBy(getUsername());
        return toAjax(sysUserService.updateUser(user));
    }




    @ApiOperation("获取用户消息列表")
    @PostMapping("/getUserMsg")
    public AjaxResult getUserMsg(){
        LoginUser loginUser = SecurityUtils.getLoginUser();
        BaseUserMsg msg=new BaseUserMsg();
        msg.setUserId(loginUser.getUserId());
        List<BaseUserMsg> lsitMsg =baseUserMsgService.selectBaseUserMsgList(msg);
        return AjaxResult.success(lsitMsg);
    }



    @ApiOperation("记录收索历史")
    @GetMapping("/setQueryHistory")
    public AjaxResult setQueryHistory(@PathParam("type") String type, @PathParam("words") String words)
    {
        LoginUser loginUser = SecurityUtils.getLoginUser();
        BaseSearchHistory history=new BaseSearchHistory();
        history.setType(type);
        history.setWords(words);
        history.setCreateTime(DateUtils.getNowDate());
        history.setUserId(loginUser.getUserId());
        return toAjax(baseSearchHistoryService.insertBaseSearchHistory(history));
    }

    @ApiOperation("查询收索历史")
    @GetMapping("/getQueryHistory")
    public AjaxResult getQueryHistory()
    {
        LoginUser loginUser = SecurityUtils.getLoginUser();
        BaseSearchHistory history=new BaseSearchHistory();
        history.setUserId(loginUser.getUserId());
        List<BaseSearchHistory> list=baseSearchHistoryService.selectBaseSearchHistoryList(history);
        return AjaxResult.success(list);
    }

    @ApiOperation("获取用户地址列表")
    @GetMapping("/getUserAddressList")
    public AjaxResult getUserAddressList(BaseUserAddress baseUserAddress)
    {
        LoginUser loginUser = SecurityUtils.getLoginUser();
        baseUserAddress.setUserId(loginUser.getUserId());
        List<BaseUserAddress> list = baseUserAddressService.selectBaseUserAddressList(baseUserAddress);
        return AjaxResult.success(list);
    }

    @ApiOperation("根据ID获取用户地址")
    @GetMapping("/getUserAddressDetail/{id}")
    public AjaxResult getUserAddressDetail(@PathVariable String id)
    {
        BaseUserAddress address=baseUserAddressService.selectBaseUserAddressById(id);
        return AjaxResult.success(address);
    }

    @ApiOperation("添加用户地址")
    @PostMapping("/addUserAddress")
    public AjaxResult addUserAddress(@RequestBody BaseUserAddress baseUserAddress)
    {
        LoginUser loginUser = SecurityUtils.getLoginUser();
        baseUserAddress.setUserId(loginUser.getUserId());
        baseUserAddress.setCreateBy(loginUser.getUsername());
        return toAjax(baseUserAddressService.insertBaseUserAddress(baseUserAddress));
    }

    /**
     * 修改用户地址
     */
    @ApiOperation("修改用户地址")
    @PutMapping("/editUserAddress")
    public AjaxResult editUserAddress(@RequestBody BaseUserAddress baseUserAddress)
    {
        LoginUser loginUser = SecurityUtils.getLoginUser();
        baseUserAddress.setUpdateBy(loginUser.getUsername());
        return toAjax(baseUserAddressService.updateBaseUserAddress(baseUserAddress));
    }

    /**
     * 删除用户地址
     */
    @ApiOperation("删除用户地址")
    @DeleteMapping("/removeUserAddress/{id}")
    public AjaxResult removeUserAddress(@PathVariable String id)
    {
        return toAjax(baseUserAddressService.deleteBaseUserAddressById(id));
    }

    @ApiOperation("设置用户地址为默认")
    @GetMapping("/setUserAddressDefault/{id}/{flag}")
    public AjaxResult setUserAddressDefault(@PathVariable("id") String id,@PathVariable("flag") String flag)
    {
        LoginUser loginUser = SecurityUtils.getLoginUser();
        BaseUserAddress user=new BaseUserAddress();
        user.setUserId(loginUser.getUserId());
        baseUserAddressService.updateAddressCancelDefault(user);
        BaseUserAddress addr=new BaseUserAddress();
        addr.setId(id);
        addr.setDefaultFlag(flag);
        return toAjax(baseUserAddressService.updateBaseUserAddress(addr));
    }

    @ApiOperation("加入购物车")
    @GetMapping("/addGoodsCart")
    public AjaxResult addGoodsCart(@RequestParam(value="goodsId",required = true) Long goodsId,
                                   @RequestParam(value="skuId",required = true) Long skuId,
                                   @RequestParam(value="goodsNum",required = true) String goodsNum)
    {
        if(!NumberUtil.isInteger(goodsNum)){
            return AjaxResult.success("请选择购买数量");
        }
        Long buyNum=Long.valueOf(goodsNum);
        if(buyNum<=0){
            return AjaxResult.success("购买数量不能为0");
        }
        OmsGoodsSku sku=omsGoodsSkuService.selectOmsGoodsSkuById(String.valueOf(skuId));
        if(sku.getStockNum()<buyNum){
            return AjaxResult.success("您购买的商品库存不足，请联系运营人员！");
        }
        LoginUser loginUser = SecurityUtils.getLoginUser();
        OmsGoodsCart param=new OmsGoodsCart();
        param.setGoodsId(goodsId);
        param.setSkuId(skuId);
        param.setUserId(loginUser.getUserId());
        List<OmsGoodsCart> goodsList=omsGoodsCartService.selectOmsGoodsCartList(param);
        int result=0;
        if(goodsList.size()>0){
            OmsGoodsCart cart=goodsList.get(0);
            cart.setGoodsNum(cart.getGoodsNum() + buyNum);
            result=omsGoodsCartService.updateOmsGoodsCart(cart);
        }else{
            OmsGoodsInfo goodsInfo= omsGoodsInfoService.selectOmsGoodsInfoById(goodsId+"");
            OmsGoodsCart cart=new OmsGoodsCart();
            cart.setUserId(loginUser.getUserId());
            cart.setGoodsId(goodsId);
            cart.setSkuId(skuId);
            cart.setGoodsNum(buyNum);
            cart.setGoodsImg(goodsInfo.getHeaderImg());
            cart.setSkuAttr(sku.getSkuName());
            cart.setPrice(sku.getPrice());
            cart.setCreateBy(loginUser.getUsername());
            cart.setCreateTime(DateUtils.getNowDate());
            result=omsGoodsCartService.insertOmsGoodsCart(cart);
        }
        return toAjax(result);
    }

    @ApiOperation("购物车商品列表")
    @GetMapping("/getGoodsCartList")
    public AjaxResult getGoodsCartList()
    {
        AjaxResult result= AjaxResult.success();
        LoginUser loginUser = SecurityUtils.getLoginUser();
        OmsGoodsCart param=new OmsGoodsCart();
        param.setUserId(loginUser.getUserId());
        List<OmsGoodsCart> goodsList=omsGoodsCartService.selectOmsGoodsCartList(param);
        String cust = configService.selectConfigByKey("sys.logistics.cust");
        String freeAmount = configService.selectConfigByKey("sys.logistics.freigh.free");
        if(StringUtils.isNotEmpty(freeAmount)){
            freightFree=Integer.parseInt(freeAmount);
        }
        result.put("goodsList",goodsList);
        result.put("logisticsCust",cust);
        result.put("logisticsFree",freightFree);
        return AjaxResult.success(result);
    }

    @ApiOperation("设置购物车商品数量")
    @GetMapping("/setGoodsCartNum")
    public AjaxResult addGoodsCart(@RequestParam(value="cartId",required = true) String cartId,
                                   @RequestParam(value="goodsNum",required = true) Long goodsNum)
    {
        if(goodsNum<=0){
            return AjaxResult.success("购买数量不能为0");
        }
        OmsGoodsCart goodsCart=omsGoodsCartService.selectOmsGoodsCartById(cartId);
        goodsCart.setGoodsNum(goodsNum);
        int result=omsGoodsCartService.updateOmsGoodsCart(goodsCart);
        return toAjax(result);
    }

    @ApiOperation("移除购物车商品")
    @GetMapping("/removeGoodsCartNum")
    public AjaxResult addGoodsCart(@RequestParam(value="cartId",required = true) String cartId)
    {

        int result=omsGoodsCartService.deleteOmsGoodsCartById(cartId);
        return toAjax(result);
    }


    @ApiOperation("购买商品生成预付订单")
    @GetMapping("/preGoodsOrder")
    public AjaxResult GoodsOrder(@RequestParam(value="goodsId",required = true) Long goodsId,
                                    @RequestParam(value="skuId",required = true) Long skuId,
                                    @RequestParam(value="goodsNum",required = true) Integer goodsNum)
    {
        if(goodsNum==null || goodsNum.intValue()<=0){
            return AjaxResult.error("请填写商品数量");
        }
        OmsGoodsSku sku=omsGoodsSkuService.selectOmsGoodsSkuById(String.valueOf(skuId));
        if(sku.getStockNum().intValue()<goodsNum){
            return AjaxResult.error("库存不足，不允许购买");
        }
        OmsGoodsInfo goodsInfo=omsGoodsInfoService.selectOmsGoodsInfoById(String.valueOf(goodsId));
        if(goodsInfo==null){
            return AjaxResult.error("商品信息不能为空");
        }
        LoginUser loginUser = SecurityUtils.getLoginUser();
        OmsOrderInfo order=new OmsOrderInfo();
        order.setUserId(loginUser.getUserId());
        order.setShopId(loginUser.getUser().getSourceShop());
        String orderCode=DateUtils.dateTimeNow()+ RandomStringUtils.randomNumeric(6);
        order.setOrderCode(orderCode);
        order.setProductNum(goodsNum);
        order.setProductName(goodsInfo.getName());
        order.setOrderType("01");
        String cust = configService.selectConfigByKey("sys.logistics.cust");
        if(StringUtils.isEmpty(cust)){
            cust="8";
        }
        order.setFreightAmount(Long.valueOf(cust));
        order.setFreightRemark("快递，满500包邮");
        double orderAmount=goodsNum*sku.getPrice();
        order.setOrderAmount(orderAmount);
        String freeAmount = configService.selectConfigByKey("sys.logistics.freigh.free");
        if(StringUtils.isNotEmpty(freeAmount)){
            freightFree=Integer.parseInt(freeAmount);
        }
        if(orderAmount>=freightFree){
            order.setSumAmount(orderAmount);
        }else{
            order.setSumAmount(Long.valueOf(cust)+orderAmount);
        }
        List<OmsOrderItem> itemList=new ArrayList();
        OmsOrderItem item=new OmsOrderItem();
        item.setOrderCode(orderCode);
        item.setGoodsId(goodsId);
        item.setSkuId(Long.valueOf(sku.getId()));
        item.setGoodsImg(goodsInfo.getHeaderImg());
        item.setSkuAttr(sku.getSkuName());
        item.setPrice(sku.getPrice());
        item.setProductName(goodsInfo.getName());
        item.setGoodsNum(Long.valueOf(goodsNum));
        itemList.add(item);

        order.setOrderItemList(itemList);
        return AjaxResult.success(order);
    }

    @ApiOperation("立即购买次卡生成预付订单")
    @GetMapping("/preCardsOrder")
    public AjaxResult preCardsOrder(@RequestParam(value="cardId",required = true) Long cardId)
    {
        if(cardId==null){
            return AjaxResult.error("请选择需要购买的次卡");
        }
        BaseNumberCard card=baseNumberCardService.selectBaseNumberCardById(cardId);
        if(card == null){
            return AjaxResult.error("次卡不存在");
        }
        LoginUser loginUser = SecurityUtils.getLoginUser();
        OmsOrderInfo order=new OmsOrderInfo();
        order.setShopId(loginUser.getUser().getSourceShop());
        order.setUserId(loginUser.getUserId());
        String orderCode=DateUtils.dateTimeNow()+ RandomStringUtils.randomNumeric(6);
        order.setOrderCode(orderCode);
        order.setProductNum(1);
        order.setProductName(card.getName());
        order.setFreightAmount(0L);
        order.setOrderType("02");
        order.setFreightRemark("次卡免邮费");
        double orderAmount=card.getPrice().doubleValue();
        order.setOrderAmount(orderAmount);

        List<OmsOrderItem> itemList=new ArrayList();
        OmsOrderItem item=new OmsOrderItem();
        item.setOrderCode(orderCode);
        item.setGoodsId(card.getId());
        item.setSkuId(0L);
        item.setGoodsImg(card.getHeadImg());
        item.setSkuAttr("");
        item.setPrice(card.getPrice().doubleValue());
        item.setProductName(card.getName());
        item.setGoodsNum(1L);
        itemList.add(item);
        order.setOrderItemList(itemList);
        return AjaxResult.success(order);
    }

    @ApiOperation("购物车商品生成预付订单")
    @GetMapping("/preCartGoodsOrder")
    public AjaxResult preCartGoodsOrder(@RequestParam(value="cartId",required = true) String cartId)
    {
        if(StringUtils.isEmpty(cartId)){
            return AjaxResult.error("请选择购物车商品");
        }
        String[] ids =cartId.split(",");
        List<OmsGoodsCart> cartList=new ArrayList<>();
        //先校验库存是否充足
        String msg="";
        for(String id:ids){
            OmsGoodsCart cart= omsGoodsCartService.selectOmsGoodsCartById(id);
            cartList.add(cart);
            OmsGoodsSku sku=omsGoodsSkuService.selectOmsGoodsSkuById(String.valueOf(cart.getSkuId()));
            if(sku.getStockNum().intValue()<cart.getGoodsNum().intValue()){
                OmsGoodsInfo goodsInfo=omsGoodsInfoService.selectOmsGoodsInfoById(String.valueOf(cart.getGoodsId()));
                msg+=goodsInfo.getName()+"库存不足，不允许购买";
                break;
            }
        }
        if(StringUtils.isNotEmpty(msg)){
            return AjaxResult.error(msg);
        }
        if(cartList.size()<=0){
            return AjaxResult.error("请选择购物车商品");
        }

        OmsOrderInfo order=new OmsOrderInfo();
        order.setProductName("");
        cartList.stream().forEach(cart-> {
            OmsGoodsInfo goodsInfo = omsGoodsInfoService.selectOmsGoodsInfoById(String.valueOf(cart.getGoodsId()));
            order.setProductName(order.getProductName()+","+goodsInfo.getName());
        });

        LoginUser loginUser = SecurityUtils.getLoginUser();
        order.setShopId(loginUser.getUser().getSourceShop());
        order.setUserId(loginUser.getUserId());
        order.setUserName(loginUser.getUsername());
        String orderCode=DateUtils.dateTimeNow()+ RandomStringUtils.randomNumeric(6);
        order.setOrderCode(orderCode);
        order.setProductNum(0);
        order.setOrderAmount(0);
        order.setOrderType("01");

        String cust = configService.selectConfigByKey("sys.logistics.cust");
        if(StringUtils.isEmpty(cust)){
            cust="8";
        }

        order.setFreightRemark("快递，满500包邮");

        List<OmsOrderItem> itemList=new ArrayList();
        cartList.stream().forEach(cart->{
            order.setProductNum(order.getProductNum()+cart.getGoodsNum().intValue());
            OmsGoodsInfo goodsInfo=omsGoodsInfoService.selectOmsGoodsInfoById(String.valueOf(cart.getGoodsId()));
            double orderAmount=cart.getGoodsNum()*cart.getPrice();
            order.setOrderAmount(order.getOrderAmount()+orderAmount);

            OmsOrderItem item=new OmsOrderItem();
            item.setOrderCode(orderCode);
            item.setGoodsId(cart.getGoodsId());
            item.setGoodsImg(cart.getGoodsImg());
            item.setSkuId(Long.valueOf(cart.getSkuId()));
            item.setSkuAttr(cart.getSkuAttr());
            item.setPrice(cart.getPrice());
            item.setProductName(goodsInfo.getName());
            item.setGoodsNum(cart.getGoodsNum());
            itemList.add(item);
        });
        if(order.getOrderAmount()>=freightFree){
            order.setSumAmount(order.getOrderAmount());
            order.setFreightAmount(0L);
        }else{
            order.setFreightAmount(Long.valueOf(cust));
            order.setSumAmount(Long.valueOf(cust)+order.getOrderAmount());
        }
        order.setOrderItemList(itemList);
        return AjaxResult.success(order);
    }

    @ApiOperation("购买商品")
    @PostMapping("/quickBuyGoods")
    public AjaxResult quickBuyGoods(@RequestBody OmsOrderInfo orderInfo,HttpServletRequest request)
    {
        log.info("原始参数---->"+orderInfo);
        LoginUser loginUser = SecurityUtils.getLoginUser();
        AjaxResult ajaxResult=AjaxResult.success();
        OmsOrderInfo omsOrder=omsOrderInfoService.selectOmsOrderInfoByCode(orderInfo.getOrderCode());
        if(omsOrder!=null){
            return AjaxResult.error("订单已经存在，不允许继续购买");
        }
        if(StringUtils.isEmpty(orderInfo.getAddressId())){
            return AjaxResult.error("地址不能为空");
        }
        BaseUserAddress address= baseUserAddressService.selectBaseUserAddressById(orderInfo.getAddressId());
        if(address==null && (!"02".equals(orderInfo.getOrderType()))){
            return AjaxResult.error("请选中邮寄地址");
        }

        orderInfo.setUserId(loginUser.getUserId());
        orderInfo.setUserName(loginUser.getUsername());
        orderInfo.setOrderTime(DateUtils.getNowDate());
        orderInfo.setShopId(loginUser.getUser().getSourceShop());
        orderInfo.setOrderStatus("01");
        orderInfo.setConsumeType("01");
        orderInfo.setOllacateFlag("N");
        String cust = configService.selectConfigByKey("sys.logistics.cust");
        if(StringUtils.isEmpty(cust)){
            cust="8";
        }
        if(orderInfo.getOrderAmount()>=freightFree){
            orderInfo.setSumAmount(orderInfo.getOrderAmount());
            orderInfo.setFreightAmount(0L);
        }else{
            orderInfo.setFreightAmount(Long.valueOf(cust));
            orderInfo.setSumAmount(Long.valueOf(cust)+orderInfo.getOrderAmount());
        }
        String outTredeCode= WxPayUtil.generateStr();
        orderInfo.setOutTradeNo(outTredeCode);
        if(address!=null){
            orderInfo.setTakeUser(address.getUserName());
            orderInfo.setTakePhone(address.getPhone());
            orderInfo.setTakeAddress(address.getDistrict() + address.getAddress());
        }

        int orderNum=omsOrderInfoService.insertOmsOrderInfo(orderInfo);
        if(orderNum>0) {
            List<OmsOrderItem> itemList= orderInfo.getOrderItemList();
            itemList.stream().forEach(item->{
                item.setOrderId(Long.valueOf(orderInfo.getId()));
                omsOrderItemService.insertOmsOrderItem(item);
            });

            //订单生成之后删除对应购物车
            itemList.stream().forEach(item->{
                OmsGoodsCart cart=new OmsGoodsCart();
                cart.setUserId(orderInfo.getUserId());
                cart.setGoodsId(item.getGoodsId());
                cart.setSkuId(item.getSkuId());
                omsGoodsCartService.deleteOmsGoodsCart(cart);
            });

        }
        log.info("======================传递参数============================");
        log.info("参数实体---->"+orderInfo);
        if(orderInfo.getPayType()==1){
            SysUser currentuser=sysUserService.selectUserById(loginUser.getUserId());
            if(currentuser.getAccountAmount()<orderInfo.getSumAmount()){
                return AjaxResult.error("账户余额不足，请充值");
            }
            if("02".equals(orderInfo.getOrderType())){
                orderInfo.setOrderStatus("04");
            }else{
                orderInfo.setOrderStatus("02");
            }
            orderInfo.setPayType(1);
            orderInfo.setUpdateBy(SecurityUtils.getUsername());
            orderInfo.setUpdateTime(DateUtils.getNowDate());
            orderInfo.setPayTime(DateUtils.getNowDate());
            omsOrderInfoService.updateOmsOrderInfo(orderInfo);
            if(orderInfo.getSumAmount()<=currentuser.getRechargeAmount()){
                currentuser.setRechargeAmount(orderInfo.getSumAmount());
                currentuser.setIncomeAmount(0);
            }else{
                if((orderInfo.getSumAmount()-currentuser.getRechargeAmount())>currentuser.getIncomeAmount()){
                    return AjaxResult.error("账户余额异常，请联系管理员!");
                }
                currentuser.setRechargeAmount(currentuser.getRechargeAmount());
                currentuser.setIncomeAmount(orderInfo.getSumAmount()-currentuser.getRechargeAmount());
            }
            currentuser.setAccountAmount(orderInfo.getSumAmount());
            currentuser.setUpdateBy(currentuser.getUserName());
            currentuser.setUpdateTime(DateUtils.getNowDate());
            int result=sysUserService.updateUserAccountConsumer(currentuser);
            //清空购物车
            OmsOrderItem param=new OmsOrderItem();
            param.setOrderId(Long.valueOf(orderInfo.getId()));
            List<OmsOrderItem> itemList=omsOrderItemService.selectOmsOrderItemList(param);
            //支付完毕之后删除对应购物车
            itemList.stream().forEach(item->{
                OmsGoodsCart cart=new OmsGoodsCart();
                cart.setUserId(orderInfo.getUserId());
                cart.setGoodsId(item.getGoodsId());
                cart.setSkuId(item.getSkuId());
                omsGoodsCartService.deleteOmsGoodsCart(cart);
            });

            //支付成功减库存
            if(!"02".equals(orderInfo.getOrderType())) {
                omsOrderInfoService.reduceGoodsStocks(orderInfo.getId());
            }

            //如果购买次卡，添加次卡购买记录
            if("02".equals(orderInfo.getOrderType())){
                userNumberCardDetailService.addUserNumberCardDetail(orderInfo.getId());
            }
        }
        else if(orderInfo.getPayType()==2){
            String openid=loginUser.getUser().getWeixinOpenId();

            String ip = IpUtil.getRealIp(request);
            if (com.jiumi.pay.domain.util.StringUtils.isBlank(ip)) {
                ip = "127.0.0.1";
            }
            String notifyUrl = wxPayApiConfig.getDomain().concat("/pay/wxPay/miniNotify");
            WxPayApiConfig wxPayApiConfig = WxPayApiConfigKit.getWxPayApiConfig();

            Map<String, String> packageParams = null;
            log.info("订单信息====>"+orderInfo);
            log.info("total_fee-->"+orderInfo.getOrderAmount());
            log.info("total_fee-->"+String.valueOf(orderInfo.getOrderAmount()));
            try {
                double sumAmout=orderInfo.getSumAmount()*amountPercent/10;
                Integer totalFee=Double.valueOf(sumAmout).intValue();
                Map<String, String> params = UnifiedOrderModel
                        .builder()
                        .appid(wxPayApiConfig.getAppId())
                        .mch_id(wxPayApiConfig.getMchId())
                        .nonce_str(WxPayUtil.generateStr())
                        .body("小象美业-小程序支付")
                        .attach("Node.js 版:https://gitee.com/javen205/TNW")
                        .out_trade_no(outTredeCode)
                        .total_fee(String.valueOf(totalFee))
                        .spbill_create_ip(ip)
                        .notify_url(notifyUrl)
                        .trade_type(TradeType.JSAPI.getTradeType())
                        .openid(openid)
                        .build()
                        .createSign(wxPayApiConfig.getPartnerKey(), HMACSHA256);

                String xmlResult = WxPayApi.pushOrder(false, params);
                log.info("---------------获取的微信参数---------------");
                log.info("-----------xmlResult="+xmlResult);
                Map<String, String> payresult = WxPayUtil.xmlToMap(xmlResult);

                String returnCode = payresult.get("return_code");
                String returnMsg = payresult.get("return_msg");
                log.info("---------------returnCode---------------="+returnCode);
                log.info("---------------returnMsg---------------="+returnMsg);
                if (!WxPayUtil.codeIsOk(returnCode)) {
                    return AjaxResult.error(returnMsg);
                }
                String resultCode = String.valueOf(payresult.get("result_code"));
                log.info("---------------resultCode---------------="+resultCode);
                log.info("---------------returnMsg---------------="+returnMsg);
                if (!WxPayUtil.codeIsOk(resultCode)) {
                    return AjaxResult.error(returnMsg);
                }
                // 以下字段在 return_code 和 result_code 都为 SUCCESS 的时候有返回
                String prepayId =String.valueOf(payresult.get("prepay_id"));
                log.info("---------------prepayId---------------="+prepayId);
                packageParams = WxPayUtil.miniAppPrepayIdCreateSign(wxPayApiConfig.getAppId(), prepayId,
                        wxPayApiConfig.getPartnerKey(), HMACSHA256);
                log.info("小程序支付的参数packageParams:" + packageParams);
            } catch (Exception e) {
                e.printStackTrace();
                log.info("错误信息:" + e.getMessage());
            }
            ajaxResult.put("data",packageParams);
        }else{
           ajaxResult=AjaxResult.error("支付类型错误");
        }
        return ajaxResult;
    }



    @ApiOperation("查询用户订单信息参数:订单状态01待支付02已支付03已收货(已完成)")
    @GetMapping("/getUserOrderInfos/{type}/{pageSize}/{pageNum}")
    public TableDataInfo getUserOrderInfos(@PathVariable("type") String type,
                                        @PathVariable("pageSize") int pageSize,
                                        @PathVariable("pageNum") int pageNum)
    {
        LoginUser loginUser = SecurityUtils.getLoginUser();
        OmsOrderInfo omsOrderInfo=new OmsOrderInfo();
        omsOrderInfo.setUserId(loginUser.getUserId());
        omsOrderInfo.setOrderStatus(type);
        initPage(pageNum,pageSize);
        List<OmsOrderInfo> orderList=omsOrderInfoService.selectOmsOrderInfoList(omsOrderInfo);
        orderList.stream().forEach(order->{
            OmsOrderItem param=new OmsOrderItem();
            param.setOrderId(Long.valueOf(order.getId()));
            List<OmsOrderItem>  itemList=omsOrderItemService.selectOmsOrderItemList(param);
            order.setOrderItemList(itemList);
        });
        return getDataTable(orderList);
    }

    @ApiOperation("获取用户订单详情")
    @GetMapping("/getUserOrderDetail/{orderId}")
    public AjaxResult getUserOrderDetail(@PathVariable("orderId") String orderId)
    {
        OmsOrderInfo order=omsOrderInfoService.selectOmsOrderInfoById(orderId);
        OmsOrderItem param=new OmsOrderItem();
        param.setOrderId(Long.valueOf(order.getId()));
        List<OmsOrderItem>  itemList=omsOrderItemService.selectOmsOrderItemList(param);
        order.setOrderItemList(itemList);
        order.setProductNum(0);
        itemList.stream().forEach(item->{
            order.setProductNum(order.getProductNum()+item.getGoodsNum().intValue());
        });
        return AjaxResult.success(order);
    }

    @ApiOperation("用户取消订单")
    @GetMapping("/userCancelOrder/{orderId}")
    public AjaxResult userCancelOrder(@PathVariable("orderId") String orderId)
    {
        OmsOrderInfo order=omsOrderInfoService.selectOmsOrderInfoById(orderId);
        if(!"01".equals(order.getOrderStatus())){
            return AjaxResult.success("只有未支付的订单才能进行取消操作！");
        }
        OmsOrderInfo info=new OmsOrderInfo();
        info.setId(orderId);
        info.setOrderStatus("00");
        info.setUpdateBy(SecurityUtils.getUsername());
        info.setUpdateTime(DateUtils.getNowDate());
        int result=omsOrderInfoService.updateOmsOrderInfo(info);
        return toAjax(result);
    }

    @ApiOperation("待支付订单支付")
    @GetMapping("/payUserWaitOrder/{orderCode}/{payType}")
    public AjaxResult payUserWaitOrder(@PathVariable("orderCode") String orderCode,@PathVariable("payType") int payType,HttpServletRequest request)
    {
        OmsOrderInfo orderInfo=omsOrderInfoService.selectOmsOrderInfoByCode(orderCode);
        LoginUser loginUser = SecurityUtils.getLoginUser();
        AjaxResult ajaxResult=AjaxResult.success();
        if(!"01".equals(orderInfo.getOrderStatus())){
            return AjaxResult.error("只有未支付的订单才能进行支付");
        }
        if(payType==1){
            SysUser currentuser=sysUserService.selectUserById(loginUser.getUserId());
            if(currentuser.getAccountAmount()<orderInfo.getSumAmount()){
                return AjaxResult.error("账户余额不足，请充值");
            }
            OmsOrderInfo o=new OmsOrderInfo();
            o.setId(orderInfo.getId());
            o.setOrderStatus("02");
            o.setPayTime(DateUtils.getNowDate());
            o.setPayType(1);
            o.setUpdateBy(loginUser.getUsername());
            o.setUpdateTime(DateUtils.getNowDate());
            omsOrderInfoService.updateOmsOrderInfo(o);

            //清空购物车
            OmsOrderItem param=new OmsOrderItem();
            param.setOrderId(Long.valueOf(orderInfo.getId()));
            List<OmsOrderItem> itemList=omsOrderItemService.selectOmsOrderItemList(param);
            //支付完毕之后删除对应购物车
            itemList.stream().forEach(item->{
                OmsGoodsCart cart=new OmsGoodsCart();
                cart.setUserId(orderInfo.getUserId());
                cart.setGoodsId(item.getGoodsId());
                cart.setSkuId(item.getSkuId());
                omsGoodsCartService.deleteOmsGoodsCart(cart);
            });

            currentuser.setAccountAmount(currentuser.getAccountAmount()-orderInfo.getSumAmount());
            currentuser.setUpdateBy(currentuser.getUserName());
            int result=sysUserService.updateUserAccount(currentuser);
            if("01".equals(orderInfo.getOrderType())){
                BaseUserMsg msg=new BaseUserMsg();
                msg.setUserId(orderInfo.getUserId());
                msg.setMsgType("03");
                msg.setMsgTitle("订单提醒");
                msg.setMsgContent("恭喜您于"+ com.jiumi.pay.domain.util.DateUtils.datePath()+"订单支付成功，请及查看结果");
                msg.setCreateTime(com.jiumi.pay.domain.util.DateUtils.getNowDate());
                msg.setMsgCreateTime(com.jiumi.pay.domain.util.DateUtils.getNowDate());
                msg.setMsgState("Y");
                baseUserMsgService.insertBaseUserMsg(msg);
            }
            else if("02".equals(orderInfo.getOrderType())){
                BaseUserMsg msg=new BaseUserMsg();
                msg.setUserId(orderInfo.getUserId());
                msg.setMsgType("03");
                msg.setMsgTitle("充值提醒");
                msg.setMsgContent("恭喜您于"+ com.jiumi.pay.domain.util.DateUtils.datePath()+"充值支付成功，请及查看结果");
                msg.setCreateTime(com.jiumi.pay.domain.util.DateUtils.getNowDate());
                msg.setMsgCreateTime(com.jiumi.pay.domain.util.DateUtils.getNowDate());
                msg.setMsgState("Y");
                baseUserMsgService.insertBaseUserMsg(msg);
            }
        }
        else if(payType==2){
            if(!"01".equals(orderInfo.getOrderStatus())){
                return AjaxResult.error("待支付的订单才能进行支付");
            }
            String openid=loginUser.getUser().getWeixinOpenId();
            String ip = IpUtil.getRealIp(request);
            if (com.jiumi.pay.domain.util.StringUtils.isBlank(ip)) {
                ip = "127.0.0.1";
            }
            String notifyUrl = wxPayApiConfig.getDomain().concat("/pay/wxPay/miniNotify");
            WxPayApiConfig wxPayApiConfig = WxPayApiConfigKit.getWxPayApiConfig();

            Map<String, String> packageParams = null;
            log.info("订单信息====>"+orderInfo);
            log.info("total_fee-->"+orderInfo.getOrderAmount());
            log.info("total_fee-->"+String.valueOf(orderInfo.getSumAmount()));
            String outTredeCode= WxPayUtil.generateStr();
            orderInfo.setOutTradeNo(outTredeCode);
            omsOrderInfoService.updateOmsOrderInfo(orderInfo);
            try {
                double sumAmout=orderInfo.getSumAmount()*amountPercent/10;
                Integer totalFee=Double.valueOf(sumAmout).intValue();
                Map<String, String> params = UnifiedOrderModel
                        .builder()
                        .appid(wxPayApiConfig.getAppId())
                        .mch_id(wxPayApiConfig.getMchId())
                        .nonce_str(WxPayUtil.generateStr())
                        .body("小象美业-小程序支付")
                        .attach("Node.js 版:https://gitee.com/javen205/TNW")
                        .out_trade_no(orderInfo.getOutTradeNo())
                        .total_fee(String.valueOf(totalFee))
                        .spbill_create_ip(ip)
                        .notify_url(notifyUrl)
                        .trade_type(TradeType.JSAPI.getTradeType())
                        .openid(openid)
                        .build()
                        .createSign(wxPayApiConfig.getPartnerKey(), HMACSHA256);

                String xmlResult = WxPayApi.pushOrder(false, params);
                log.info("---------------获取的微信参数---------------");
                log.info("-----------xmlResult="+xmlResult);
                Map<String, String> payresult = WxPayUtil.xmlToMap(xmlResult);

                String returnCode = payresult.get("return_code");
                String returnMsg = payresult.get("return_msg");
                log.info("---------------returnCode---------------="+returnCode);
                log.info("---------------returnMsg---------------="+returnMsg);
                if (!WxPayUtil.codeIsOk(returnCode)) {
                    return AjaxResult.error(returnMsg);
                }
                String resultCode = String.valueOf(payresult.get("result_code"));
                log.info("---------------resultCode---------------="+resultCode);
                log.info("---------------returnMsg---------------="+returnMsg);
                if (!WxPayUtil.codeIsOk(resultCode)) {
                    return AjaxResult.error(returnMsg);
                }
                // 以下字段在 return_code 和 result_code 都为 SUCCESS 的时候有返回
                String prepayId =String.valueOf(payresult.get("prepay_id"));
                log.info("---------------prepayId---------------="+prepayId);
                packageParams = WxPayUtil.miniAppPrepayIdCreateSign(wxPayApiConfig.getAppId(), prepayId,
                        wxPayApiConfig.getPartnerKey(), HMACSHA256);
                log.info("小程序支付的参数packageParams:" + packageParams);
            } catch (Exception e) {
                e.printStackTrace();
                log.info("错误信息:" + e.getMessage());
            }
            ajaxResult.put("data",packageParams);
        }else{
            ajaxResult=AjaxResult.error("支付类型错误");
        }
        return ajaxResult;
    }



    @ApiOperation("确认收货")
    @GetMapping("/confirmReciveOrder/{orderCode}")
    public AjaxResult confirmReciveOrder(@PathVariable("orderCode") String orderCode)
    {
        OmsOrderInfo orderInfo=omsOrderInfoService.selectOmsOrderInfoByCode(orderCode);
        if(orderInfo==null){
            return AjaxResult.error("未查询到该订单");
        }
        if(!"03".equals(orderInfo.getOrderStatus())){
            return AjaxResult.error("该订单还未发货");
        }
        LoginUser loginUser = SecurityUtils.getLoginUser();
        orderInfo.setOrderStatus("04");
        orderInfo.setUpdateBy(loginUser.getUsername());
        orderInfo.setUpdateTime(DateUtils.getNowDate());
        int result= omsOrderInfoService.updateOmsOrderInfo(orderInfo);
        return toAjax(result);
    }

    @ApiOperation("查询用户资金记录:01入账记录02消费记录03提现记录")
    @GetMapping("/getUserAccountDetail/{type}")
    public AjaxResult getUserAccountDetail(@PathVariable("type") String type)
    {
        AjaxResult result= AjaxResult.success();
        LoginUser loginUser = SecurityUtils.getLoginUser();
        SysUser sysUser= sysUserService.selectUserById(loginUser.getUserId());
        String consultantFlag= sysUserService.checkConsultantFlag(sysUser);
        sysUser.setConsultantFlag(consultantFlag);
        result.put("userInfo",sysUser);

        //入账记录
        UserIncomeDetail in=new UserIncomeDetail();
        in.setUserId(loginUser.getUserId());
        List<UserIncomeDetail>  incomeDetail= userIncomeDetailService.selectUserIncomeDetailList(in);
        UserRechargeDetail p=new UserRechargeDetail();
        p.setUserId(loginUser.getUserId());
        List<UserRechargeDetail> rechargeList=userRechargeDetailService.selectUserRechargeDetailList(p);
        rechargeList.stream().forEach(r->{
            UserIncomeDetail income=new UserIncomeDetail();
            income.setUserId(r.getUserId());
            income.setAccountAmount(r.getAccountAmount().doubleValue());
            income.setIncomeAmount(r.getRechargeAmount().doubleValue());
            income.setIncomeTime(r.getRechargeTime());
            income.setIncomeDesc("账户充值");
            incomeDetail.add(income);
        });
        result.put("incomeDetail",incomeDetail);

        //消费记录
        OmsOrderInfo order=new OmsOrderInfo();
        order.setUserId(loginUser.getUserId());
        order.setOrderStatus("04");
        List<OmsOrderInfo> orderList=omsOrderInfoService.selectOmsOrderInfoList(order);
        result.put("orderDetail",orderList);

        //提现记录
        UserWithdrawDetail w=new UserWithdrawDetail();
        w.setUserId(loginUser.getUserId());
        List<UserWithdrawDetail> withdrawList=userWithdrawDetailService.selectUserWithdrawDetailList(w);
        result.put("withdrawDetail",withdrawList);
        return result;
    }


    @ApiOperation("用户申请零钱提现")
    @PostMapping("/applayWithdraw")
    public AjaxResult applayWithdraw(@RequestBody UserWithdrawDetail withdrawDetail)
    {
        if(withdrawDetail.getPayType()==1){
            if(StringUtils.isEmpty(withdrawDetail.getAlipayAccount())){
                return AjaxResult.error("支付宝账号不能为空");
            }
        }
        else if(withdrawDetail.getPayType()==2){
            if(StringUtils.isEmpty(withdrawDetail.getBankName())){
                return AjaxResult.error("银行名称不能为空");
            }
            if(StringUtils.isEmpty(withdrawDetail.getBankAccount())){
                return AjaxResult.error("银行账号不能为空");
            }
        }else{
            return AjaxResult.error("支付类型错误");
        }
        AjaxResult result=AjaxResult.success();
        LoginUser loginUser = SecurityUtils.getLoginUser();
        SysUser sysUser= sysUserService.selectUserById(loginUser.getUserId());
        UserWithdrawDetail withdraw=new UserWithdrawDetail();
        withdraw.setUserId(loginUser.getUserId());
        double accountAmount=sysUser.getIncomeAmount();
        if(withdrawDetail.getWithdrawAmount()<=0){
            return AjaxResult.error("提现金额必须大于0");
        }
        if(accountAmount<withdrawDetail.getWithdrawAmount()){
            return AjaxResult.error("申请金额不能大于可申请金额");
        }
        withdraw.setUserName(withdrawDetail.getUserName());
        withdraw.setPayType(withdrawDetail.getPayType());
        withdraw.setAlipayAccount(withdrawDetail.getAlipayAccount());
        withdraw.setBankName(withdrawDetail.getBankName());
        withdraw.setBankAccount(withdrawDetail.getBankAccount());
        withdraw.setAccountAmount(accountAmount);
        withdraw.setWithdrawAmount(withdrawDetail.getWithdrawAmount());
        withdraw.setApplyTime(DateUtils.getNowDate());
        withdraw.setApplyStatus("01");
        withdraw.setCreateBy(loginUser.getUsername());
        withdraw.setCreateTime(DateUtils.getNowDate());
        int withresult=userWithdrawDetailService.insertUserWithdrawDetail(withdraw);
        if(withresult>0){
            //修改用户金额，添加用户冻结金额
            sysUser.setIncomeAmount(sysUser.getIncomeAmount()-withdrawDetail.getWithdrawAmount());
            sysUser.setAccountAmount(sysUser.getAccountAmount()-withdrawDetail.getWithdrawAmount());
            sysUser.setFreezeAmount(withdrawDetail.getWithdrawAmount());
            int r=sysUserService.updateUserWithdrawAccount(sysUser);
            if(r>0){
                return result;
            }else{
                userWithdrawDetailService.deleteUserWithdrawDetailById(withdraw.getId());
                return AjaxResult.error("操作失败，请联系客服");
            }
        }
        else{
            return AjaxResult.error("操作失败，请联系客服");
        }
    }

    @ApiOperation(value = "生成推广二维码(小程序专用)")
    @GetMapping("/getWxDoctorQrcode")
    public AjaxResult getWxDoctorQrcode() throws IOException {
        String appId=JiumiConfig.getAppid();
        String APPSecret= JiumiConfig.getAppSecret();
        LoginUser user=SecurityUtils.getLoginUser();
        StringBuilder url = new StringBuilder("https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&");
        url.append("appid=");//appid设置
        url.append(appId);
        url.append("&secret=");//secret设置
        url.append(APPSecret);
        log.info("----------------------->url:"+url.toString());
        Map qrcodeResult=new HashMap();
        try {
            HttpClient client = HttpClientBuilder.create().build();//构建一个Client
            HttpGet get = new HttpGet(url.toString());    //构建一个GET请求
            HttpResponse response = client.execute(get);//提交GET请求
            HttpEntity result = response.getEntity();//拿到返回的HttpResponse的"实体"
            String content = EntityUtils.toString(result);
            System.out.println(content);//打印返回的信息
            JSONObject res = JSONObject.parseObject(content);//把信息封装为json
            log.info(res.toJSONString());
            String access_token=res.getString("access_token");

            StringBuilder code = new StringBuilder("https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=").append(access_token);
            System.out.println(code.toString());
            //String paramStr="&page=pages/index/index&scene="+user.getUsername();

            URL qrcodeUrl = new URL("https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token="+access_token);
            HttpURLConnection httpURLConnection = (HttpURLConnection) qrcodeUrl.openConnection();
            httpURLConnection.setRequestMethod("POST");// 提交模式
            // conn.setConnectTimeout(10000);//连接超时 单位毫秒
            // conn.setReadTimeout(2000);//读取超时 单位毫秒
            // 发送POST请求必须设置如下两行
            httpURLConnection.setDoOutput(true);
            httpURLConnection.setDoInput(true);
            // 获取URLConnection对象对应的输出流
            PrintWriter printWriter = new PrintWriter(httpURLConnection.getOutputStream());
            // 发送请求参数
            JSONObject paramJson = new JSONObject();
            log.info("=========================>userId==="+user.getUser().getUserId());
            paramJson.put("scene",user.getUserId());
            paramJson.put("page", "pages/example/index");
            paramJson.put("width", 430);
            paramJson.put("auto_color", true);
            /**
             * line_color生效
             * paramJson.put("auto_color", false);
             * JSONObject lineColor = new JSONObject();
             * lineColor.put("r", 0);
             * lineColor.put("g", 0);
             * lineColor.put("b", 0);
             * paramJson.put("line_color", lineColor);
             * */
            String filePath = JiumiConfig.getQrcodePath();
            String fileName = user.getUser().getUserId()+"-QRCode.png";
            String pathName=filePath+"/"+fileName;

            printWriter.write(paramJson.toString());
            // flush输出流的缓冲
            printWriter.flush();
            //开始获取数据
            BufferedInputStream bis = new BufferedInputStream(httpURLConnection.getInputStream());
            OutputStream os = new FileOutputStream(new File(pathName));
            int len;
            byte[] arr = new byte[1024];
            while ((len = bis.read(arr)) != -1)
            {
                os.write(arr, 0, len);
                os.flush();
            }
            os.close();
            String qrcodePath="/profile/qrcode/"+fileName;
            qrcodeResult.put("url",qrcodePath);
        } catch (Exception e) {
            e.printStackTrace();
            return AjaxResult.error("生成二维码失败"+e.getMessage());
        }
        return AjaxResult.success(qrcodeResult);
    }

    @ApiOperation("用户扫码绑定推荐关系")
    @GetMapping("/applayBindInviteRela")
    public AjaxResult applayBindInviteRela(@RequestParam(value="userId",required = true) Long userId)
    {
        AjaxResult result=AjaxResult.success();
        LoginUser loginUser = SecurityUtils.getLoginUser();
        SysUser sysUser= sysUserService.selectUserById(loginUser.getUserId());
        if(sysUser!=null && sysUser.getReferrerUserId()!=null){
            return AjaxResult.error("您已经绑定过用户，不能重新绑定");
        }
        if(loginUser.getUserId()==userId){
            return AjaxResult.error("您不能绑定自己");
        }
        UserInviteDetail param=new UserInviteDetail();
        param.setUserId(loginUser.getUserId());
        param.setInviteUserId(userId);
        List list=userInviteDetailService.selectUserInviteDetailList(param);
        if(list.size()>0){
            return AjaxResult.error("您已经绑定过用户，不能重新绑定");
        }
        SysUser referrerUser= sysUserService.selectUserById(userId);
        sysUser.setSourceShop(referrerUser.getSourceShop());
        if(referrerUser!=null && "Y".equals(referrerUser.getInviteFlag())){
            sysUser.setReferrerUserId(userId);
        }
        int rst=sysUserService.updateUserInfo(sysUser);
        if(rst>0 && "Y".equals(referrerUser.getInviteFlag())){
            UserInviteDetail detail=new UserInviteDetail();
            detail.setUserId(referrerUser.getUserId());
            detail.setUserName(referrerUser.getNickName()!=null?referrerUser.getNickName():referrerUser.getUserName());
            detail.setInviteUserId(loginUser.getUserId());
            detail.setInviteName(loginUser.getUsername());
            detail.setInviteOpenid(loginUser.getUser().getWeixinOpenId());
            detail.setInviteTime(DateUtils.getNowDate());
            detail.setCreateTime(DateUtils.getNowDate());
            detail.setCreateBy(loginUser.getUsername());
            userInviteDetailService.insertUserInviteDetail(detail);
        }
        return result;
    }

    @ApiOperation("查询我的推广记录")
    @GetMapping("/getMyInviteList")
    public AjaxResult getMyInviteList()
    {
        AjaxResult result= AjaxResult.success();
        LoginUser loginUser = SecurityUtils.getLoginUser();
        //入账记录
        UserInviteDetail in=new UserInviteDetail();
        in.setUserId(loginUser.getUserId());
        initPage(1,5);
        List<UserInviteDetail>  inviteDetail= userInviteDetailService.selectUserInviteDetailList(in);
        result.put("data",inviteDetail);

        //佣金记录
        UserIncomeDetail income=new UserIncomeDetail();
        income.setUserId(loginUser.getUserId());
        initPage(1,5);
        List<UserIncomeDetail> incomeList=userIncomeDetailService.selectUserIncomeDetailList(income);
        result.put("income",incomeList);

        //推广业绩排行榜
        BaseShopItemConsultant consultant=baseShopItemConsultantService.selectConsultantListStr();
        String consultantStr=consultant.getConsultantId();
        UserInviteDetail param=new UserInviteDetail();
        param.setInviteHeader(consultantStr);
        List<UserInviteDetail>  inviteRank= userInviteDetailService.selectUserInviteRankList(param);
        result.put("rank",inviteRank);
        return result;
    }

    @ApiOperation("查询我的全部佣金记录")
    @GetMapping("/getAllMyIncomeList")
    public TableDataInfo getAllMyIncomeList(@RequestParam(value="beginTime",required = false) String beginTime,
                                         @RequestParam(value="endTime",required = false) String endTime,
                                         @RequestParam(value="pageSize",required = true) Integer pageSize,
                                         @RequestParam(value="pageNum",required = true) Integer pageNum
                                         )
    {
        AjaxResult result= AjaxResult.success();
        LoginUser loginUser = SecurityUtils.getLoginUser();
        //入账记录
        UserIncomeDetail income=new UserIncomeDetail();
        if(StringUtils.isNotEmpty(beginTime)){
            income.setBeginTime(beginTime+" 00:00:00");
        }
        if(StringUtils.isNotEmpty(endTime)){
            income.setEndTime(endTime+" 23:59:59");
        }
        income.setUserId(loginUser.getUserId());
        if(pageSize==null || pageNum==null){
            pageSize=1;
            pageNum=5;
        }
        initPage(pageSize,pageNum);
        List<UserIncomeDetail> incomeList=userIncomeDetailService.selectUserIncomeDetailList(income);
        return getDataTable(incomeList);
    }

    @ApiOperation("查询我的全部邀请记录")
    @GetMapping("/getAllMyInviteList")
    public AjaxResult getAllMyInviteList()
    {
        AjaxResult result= AjaxResult.success();
        LoginUser loginUser = SecurityUtils.getLoginUser();
        //入账记录
        UserInviteDetail in=new UserInviteDetail();
        in.setUserId(loginUser.getUserId());
        List<UserInviteDetail>  inviteDetail= userInviteDetailService.selectUserInviteDetailList(in);
        result.put("data",inviteDetail);
        return result;
    }

    @ApiOperation("客户：查询我的预约:状态01已预约 02已接待 03已完成 04 已过期 05已取消")
    @GetMapping("/getMyApplyItemDetail")
    public AjaxResult getMyApplyItemDetail(@RequestParam(value="status",required = false) String status)
    {
        LoginUser loginUser = SecurityUtils.getLoginUser();
        //入账记录
        OmsItemApply apply=new OmsItemApply();
        apply.setApplyUserId(loginUser.getUserId());
        apply.setStatus(status);
        List<OmsItemApply>  applyDetail= omsItemApplyService.selectOmsItemApplyList(apply);
        applyDetail.stream().forEach(detail->{
            OmsOrderItemInfo orderItemInfo=omsOrderItemInfoService.selectOmsOrderItemInfoByApplyId(detail.getId());
            detail.setOrderItemInfo(orderItemInfo);
        });
        return AjaxResult.success(applyDetail);
    }

    @ApiOperation("顾问：查询预约顾问的申请:状态01已预约 02已接待 03已完成 04 已过期 05已取消")
    @GetMapping("/getMyItemDetail")
    public AjaxResult getMyItemDetail(@RequestParam(value="status",required = true) String status)
    {
        LoginUser loginUser = SecurityUtils.getLoginUser();
        //入账记录
        OmsItemApply apply=new OmsItemApply();
        apply.setApplyConsultant(loginUser.getUserId());
        if("01".equals(status)){
            apply.setStatus("'01'");
        }
        else if("02".equals(status)){
            apply.setStatus("'02','03','04','05'");
        }
        else{
            apply.setStatus(status);
        }

        List<OmsItemApply>  applyDetail= omsItemApplyService.selectOmsItemApplyConsultantList(apply);
        return AjaxResult.success(applyDetail);
    }

    @ApiOperation("取消预约")
    @GetMapping("/cancelMyApplyItem/{id}")
    public AjaxResult cancelMyApplyItem(@PathVariable("id") String id)
    {
        OmsItemApply item=omsItemApplyService.selectOmsItemApplyById(id);
        if(item==null){
            return AjaxResult.error("操作失败，未查询到预约项目");
        }
        item.setStatus("05");
        item.setUpdateBy(SecurityUtils.getUsername());
        item.setUpdateTime(DateUtils.getNowDate());
        return toAjax(omsItemApplyService.updateOmsItemApply(item));
    }

    @ApiOperation("更改预约时间")
    @GetMapping("/setMyApplyItemTime")
    public AjaxResult setMyApplyItemTime(@RequestParam(value="id",required = true) String id,
                                         @RequestParam(value="time",required = true) String time
                                         )
    {
        OmsItemApply item=omsItemApplyService.selectOmsItemApplyById(id);
        if(item==null){
            return AjaxResult.error("操作失败，未查询到预约项目");
        }
        Date applyTime=DateUtils.parseDate(time);
        item.setApplyTime(applyTime);
        item.setUpdateBy(SecurityUtils.getUsername());
        item.setUpdateTime(DateUtils.getNowDate());
        return toAjax(omsItemApplyService.updateOmsItemApply(item));
    }

    @ApiOperation("顾问：确认接单02/预约完成03")
    @GetMapping("/setApplyApprove")
    public AjaxResult setApplyApprove(@RequestParam(value="id",required = true) String id,
                                         @RequestParam(value="status",required = true) String status
    )
    {
        OmsItemApply item=omsItemApplyService.selectOmsItemApplyById(id);
        if(item==null){
            return AjaxResult.error("操作失败，未查询到预约项目");
        }
        if("02".equals(status)){
            if(!"01".equals(item.getStatus())){
                return AjaxResult.error("操作失败，预约状态错误");
            }
            BaseUserMsg msg=new BaseUserMsg();
            msg.setUserId(item.getApplyUserId());
            msg.setMsgType("01");
            msg.setMsgTitle("预约提醒");
            msg.setMsgContent("恭喜您于"+ DateUtils.datePath()+"项目预约已接收，请及查看结果");
            msg.setCreateTime(com.jiumi.pay.domain.util.DateUtils.getNowDate());
            msg.setMsgCreateTime(com.jiumi.pay.domain.util.DateUtils.getNowDate());
            msg.setMsgState("Y");
            baseUserMsgService.insertBaseUserMsg(msg);

            item.setStatus(status);
            item.setUpdateBy(SecurityUtils.getUsername());
            item.setUpdateTime(DateUtils.getNowDate());
            return toAjax(omsItemApplyService.updateOmsItemApply(item));
        }
        else if("03".equals(status)){
            if(!"02".equals(item.getStatus())){
                return AjaxResult.error("操作失败，预约状态错误");
            }
            BaseUserMsg msg=new BaseUserMsg();
            msg.setUserId(item.getApplyUserId());
            msg.setMsgType("01");
            msg.setMsgTitle("预约提醒");
            msg.setMsgContent("恭喜您于"+ DateUtils.datePath()+"项目预约已完成，欢迎下次光临");
            msg.setCreateTime(com.jiumi.pay.domain.util.DateUtils.getNowDate());
            msg.setMsgCreateTime(com.jiumi.pay.domain.util.DateUtils.getNowDate());
            msg.setMsgState("Y");
            baseUserMsgService.insertBaseUserMsg(msg);

            item.setStatus(status);
            item.setUpdateBy(SecurityUtils.getUsername());
            item.setUpdateTime(DateUtils.getNowDate());
            return toAjax(omsItemApplyService.updateOmsItemApply(item));

        }else{
            return AjaxResult.error("操作失败，传入状态错误");
        }

    }

    @ApiOperation("获取项目订单详情")
    @GetMapping("/getItemOrderDetail")
    public AjaxResult getItemOrderDetail(@RequestParam(value="id",required = true) String id)
    {
        OmsItemApply apply=omsItemApplyService.selectOmsItemApplyById(id);
        apply.setShopItem(baseShopItemService.selectBaseShopItemById(apply.getItemId()+""));
        if(StringUtils.isNotEmpty(apply.getId())){
            OmsOrderItemInfo orderItemInfo=omsOrderItemInfoService.selectOmsOrderItemInfoByApplyId(apply.getId());

            if(orderItemInfo!=null){
                orderItemInfo.setItemInfo("");
                orderItemInfo.setProductInfo("");
                OmsOrderItemDetail param=new OmsOrderItemDetail();
                param.setOrderId(orderItemInfo.getId());
                List<OmsOrderItemDetail>  detailList=omsOrderItemDetailService.selectOmsOrderItemDetailList(param);
                detailList.stream().forEach(d->{
                    if(d.getConsumerType().intValue()==1){
                        BaseShopItem item= baseShopItemService.selectBaseShopItemById(d.getConsumerId()+"");
                        orderItemInfo.setItemInfo(orderItemInfo.getItemInfo()+"<br/>进行了项目["+item.getItemName()+"],共花费："+d.getFinalAmount());
                    }
                    else if(d.getConsumerType().intValue()==2){
                        OmsGoodsSku sku= omsGoodsSkuService.selectOmsGoodsSkuById(d.getConsumerId()+"");
                        OmsGoodsInfo goods=omsGoodsInfoService.selectOmsGoodsInfoById(sku.getGoodsId()+"");
                        orderItemInfo.setProductInfo(orderItemInfo.getProductInfo()+"<br/>购买了产品["+goods.getName()+"]，共花费"+d.getFinalAmount());
                    }
                });
            }
            apply.setOrderItemInfo(orderItemInfo);
        }
        return AjaxResult.success(apply);
    }

}
