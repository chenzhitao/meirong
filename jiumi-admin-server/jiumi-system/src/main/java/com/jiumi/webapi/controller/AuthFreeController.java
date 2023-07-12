package com.jiumi.webapi.controller;

import com.jiumi.baseconfig.domain.*;
import com.jiumi.baseconfig.service.IBaseArticleService;
import com.jiumi.baseconfig.service.IBaseBannerService;
import com.jiumi.baseconfig.service.IBaseQuestionService;
import com.jiumi.baseconfig.service.IBaseTextContentService;
import com.jiumi.baseconfig.service.IBaseBrandDetailService;
import com.jiumi.common.constant.UserConstants;
import com.jiumi.common.core.controller.BaseController;
import com.jiumi.common.core.domain.AjaxResult;
import com.jiumi.common.core.domain.entity.SysDictData;
import com.jiumi.common.core.domain.entity.SysUser;
import com.jiumi.common.core.page.TableDataInfo;
import com.jiumi.common.core.redis.RedisCache;
import com.jiumi.common.utils.DateUtils;
import com.jiumi.common.utils.SMSCode;
import com.jiumi.common.utils.SecurityUtils;
import com.jiumi.common.utils.StringUtils;
import com.jiumi.goods.domain.BaseNumberCard;
import com.jiumi.goods.domain.OmsGoodsInfo;
import com.jiumi.goods.domain.OmsGoodsSku;
import com.jiumi.goods.domain.OmsGoodsType;
import com.jiumi.goods.service.IBaseNumberCardService;
import com.jiumi.goods.service.IOmsGoodsInfoService;
import com.jiumi.goods.service.IOmsGoodsSkuService;
import com.jiumi.goods.service.IOmsGoodsTypeService;
import com.jiumi.shop.domain.BaseShopItem;
import com.jiumi.shop.domain.BaseShopItemConsultant;
import com.jiumi.shop.service.IBaseShopItemConsultantService;
import com.jiumi.shop.service.IBaseShopItemService;
import com.jiumi.system.service.ISysConfigService;
import com.jiumi.system.service.ISysDictTypeService;
import com.jiumi.system.service.ISysUserService;
import com.jiumi.webapi.domain.SysUserDo;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * 不需要授权接口
 *
 * @author jiumi
 * @date 2021-08-18
 */
@RestController
@RequestMapping("/api/authfree")
public class AuthFreeController extends BaseController
{
    @Autowired
    private IBaseBannerService baseBannerService;

    @Autowired
    private IBaseTextContentService baseTextContentService;

    @Autowired
    private ISysUserService sysUserService;

    @Autowired
    private RedisCache redisCache;

    @Autowired
    private IBaseQuestionService baseQuestionService;

    @Autowired
    private IBaseArticleService baseArticleService;

    @Autowired
    private ISysConfigService configService;

    @Autowired
    private IBaseBrandDetailService baseBrandDetailService;

    @Autowired
    private ISysDictTypeService sysDictTypeService;

    @Autowired
    private IBaseShopItemService baseShopItemService;

    @Autowired
    private IBaseShopItemConsultantService baseShopItemConsultantService;

    @Autowired
    private IOmsGoodsTypeService omsGoodsTypeService;

    @Autowired
    private IOmsGoodsInfoService omsGoodsInfoService;

    @Autowired
    private IOmsGoodsSkuService omsGoodsSkuService;

    @Autowired
    private IBaseNumberCardService baseNumberCardService;

    @ApiOperation("查询文章类型")
    @GetMapping("/getArticleTypes")
    public AjaxResult getArticleTypes()
    {
        List<SysDictData> dictData=sysDictTypeService.selectDictDataByType("sys_article_type");
        return AjaxResult.success(dictData);
    }

    /**
     * 查询问题管理列表
     */
    @ApiOperation("查询文章列表/根据类型")
    @GetMapping("/getArticleLlist/{type}")
    public TableDataInfo getArticleLlist(@PathVariable("type") String type)
    {
        startPage();
        BaseArticle baseArticle=new BaseArticle();
        baseArticle.setStatus("02");
        baseArticle.setType(type);
        List<BaseArticle> list = baseArticleService.selectBaseArticleList(baseArticle);
        return getDataTable(list);
    }

    /**
     * 获取文章详细信息
     */
    @ApiOperation("获取文章详细信息")
    @GetMapping(value = "/getArticleDetail/{id}")
    public AjaxResult getArticleDetail(@PathVariable("id") String id)
    {
        return AjaxResult.success(baseArticleService.selectBaseArticleById(id));
    }

    /**
     * 查询问题管理列表
     */
    @ApiOperation("查询问题管理列表")
    @GetMapping("/getQuestionList")
    public TableDataInfo getQuestionList(BaseQuestion baseQuestion)
    {
        startPage();
        baseQuestion.setStatus("Y");
        List<BaseQuestion> list = baseQuestionService.selectBaseQuestionList(baseQuestion);
        return getDataTable(list);
    }
    /**
     * 查询轮播图列表
     */
    @ApiOperation("系统banner列表")
    @ApiImplicitParam(name = "type", value = "banner类型01首页", required = true, dataType = "string", paramType = "path")
    @GetMapping("/getBannerList/{type}")
    public AjaxResult getBannerList(@PathVariable("type") String type)
    {
        BaseBanner banner=new BaseBanner();
        banner.setBannerCategory(type);
        List<BaseBanner> list = baseBannerService.selectBaseBannerList(banner);
        return AjaxResult.success(list);
    }

    /**
     * 获取验证码
     */
    @ApiOperation("获取验证码")
    @ApiImplicitParam(name = "phone", value = "手机号", required = true, dataType = "string", paramType = "path")
    @GetMapping("/getPhoneCode/{phone}")
    public AjaxResult getPhoneCode(@PathVariable("phone") String phone)
    {
        AjaxResult result= null;
        try {
            result = SMSCode.sunHaosendSMS(redisCache,phone,"小象美业");
        } catch (Exception e) {
            e.printStackTrace();
            result=AjaxResult.error(e.getMessage());
        }
        return result;
    }

    /**
     * 用户注册接口
     */
    @ApiOperation("用户注册接口")
    @PostMapping("/userRegister")
    public AjaxResult userRegister(@Validated @RequestBody SysUserDo user)
    {
        String key = "phone_verify_code" + user.getUserName();
        String code=redisCache.getCacheObject(key)+"";
        if(!user.getCode().equals(code)){
           return AjaxResult.error("验证码错误");
        }
        if (UserConstants.NOT_UNIQUE.equals(sysUserService.checkUserNameUnique(user.getUserName())))
        {
            return AjaxResult.error("新增用户'" + user.getUserName() + "'失败，登录账号已存在");
        }
        SysUser sysuser=new SysUser();
        sysuser.setUserName(user.getUserName());
        sysuser.setNickName(user.getUserName());
        sysuser.setUserType("02");
        sysuser.setPhonenumber(user.getUserName());
        sysuser.setCreateBy(user.getUserName());
        sysuser.setCreateTime(DateUtils.getNowDate());
        sysuser.setPassword(SecurityUtils.encryptPassword(user.getPassword()));
        int r=sysUserService.insertUser(sysuser);
        return AjaxResult.success(r);
    }

    @ApiOperation("忘记密码重置密码")
    @PutMapping("/resetPwd")
    public AjaxResult resetPwd(@Validated @RequestBody SysUserDo user)
    {
        String key = "phone_verify_code" + user.getUserName();
        String code=redisCache.getCacheObject(key)+"";
        if(!user.getCode().equals(code)){
            return AjaxResult.error("验证码错误");
        }
        String password=SecurityUtils.encryptPassword(user.getPassword());
        return toAjax(sysUserService.resetUserPwd(user.getUserName(),password));
    }

    @ApiOperation("获取协议文本内容")
    @GetMapping("/getProtocolDetail/{id}")
    public AjaxResult getProtocolDetail(@PathVariable("id") String id)
    {
        BaseTextContent text= baseTextContentService.selectBaseTextContentById(id);
        return AjaxResult.success(text);
    }

    @ApiOperation("查询系统客服电话")
    @GetMapping(value = "/getSystemServicePhone")
    public AjaxResult getSystemServicePhone()
    {
        AjaxResult result=AjaxResult.success();
        String phone = configService.selectConfigByKey("sys.customer.service.phone");
        result.put("phone",phone);
        return result;
    }

    @ApiOperation("查询系统快递费用")
    @GetMapping(value = "/getSystemLogisticsCust")
    public AjaxResult getSystemLogisticsCust()
    {
        AjaxResult result=AjaxResult.success();
        String cust = configService.selectConfigByKey("sys.logistics.cust");
        String free = configService.selectConfigByKey("sys.logistics.freigh.free");
        result.put("logisticsCust",cust);
        result.put("logisticsFree",free);
        return result;
    }


    @ApiOperation("品牌介绍")
    @GetMapping(value = "/getBrandDetailInfo")
    public AjaxResult getBrandDetailInfo()
    {
        List<BaseBrandDetail> detail= baseBrandDetailService.selectBaseBrandDetailList(null);
        if(detail.size()==0){
            return AjaxResult.error("内容不存在");
        }
        return AjaxResult.success(detail.get(0));
    }

    @ApiOperation("预约项目列表")
    @GetMapping(value = "/getApplyItems")
    public AjaxResult getApplyItems()
    {
        List<BaseShopItem> shopItems=baseShopItemService.selectApplyShopItemList();
        return AjaxResult.success(shopItems);
    }

    @ApiOperation("预约项目详细信息")
    @GetMapping(value = "/getApplyItemsDetail/{id}")
    public AjaxResult getApplyItems(@PathVariable("id") String id)
    {
        BaseShopItem shopItems=baseShopItemService.selectBaseShopItemById(id);
        List<BaseShopItemConsultant> shopList=baseShopItemConsultantService.selectBaseShopItemConsultantByItemId(id);
        shopList.stream().forEach(shop->{
            String uids=shop.getConsultantId();
            if(StringUtils.isEmpty(uids)){
                uids="''";
            }
           List<SysUser>userlist= sysUserService.selectUserBySomeIds(uids);
            shop.setConsultantUsers(userlist);
        });
        shopItems.setItemList(shopList);
        return AjaxResult.success(shopItems);
    }

    @ApiOperation("获取首页推荐商品")
    @GetMapping(value = "/getReferrerGoods")
    public AjaxResult getReferrerGoods()
    {
        OmsGoodsInfo param=new OmsGoodsInfo();
        param.setStatus("01");
        param.setOnlineFlag("Y");
        List<OmsGoodsInfo> goodsList=omsGoodsInfoService.selectOmsGoodsInfoReferrerList(param);
        goodsList.stream().forEach(goods->{
            OmsGoodsSku sku=new OmsGoodsSku();
            sku.setGoodsId(Long.valueOf(goods.getId()));
            List<OmsGoodsSku> skuList=omsGoodsSkuService.selectOmsGoodsSkuList(sku);
            if(skuList.size()>0){
                goods.setPrice(skuList.get(0).getPrice());
            }
        });

        return AjaxResult.success(goodsList);
    }

    @ApiOperation("获取商品类别")
    @GetMapping(value = "/getGoodsType")
    public AjaxResult getGoodsType()
    {
        OmsGoodsType param=new OmsGoodsType();
        param.setStatus("Y");
        List<OmsGoodsType> types=omsGoodsTypeService.selectOmsGoodsTypeList(param);
        return AjaxResult.success(types);
    }

    @ApiOperation("根据类型获取商品")
    @GetMapping(value = "/getGoodsListByType/{type}")
    public AjaxResult getGoodsListByType(@PathVariable("type") String type)
    {
        List<OmsGoodsInfo> goodsList=new ArrayList<>();
        if("0".equals(type)){
            BaseNumberCard param=new BaseNumberCard();
            param.setStatus("01");
            List<BaseNumberCard> cardList= baseNumberCardService.selectBaseNumberCardList(param);
            for(BaseNumberCard card :cardList){
                OmsGoodsInfo info=new OmsGoodsInfo();
                info.setId(card.getId()+"");
                info.setTypeId(0L);
                info.setName(card.getName());
                info.setDescription(card.getIntroduction());
                info.setHeaderImg(card.getHeadImg());
                info.setDetailImg(card.getDetailsImg());
                info.setDetail(card.getDetails());
                info.setPrice(card.getPrice().doubleValue());
                goodsList.add(info);
            }
        }
        else{
            OmsGoodsInfo param=new OmsGoodsInfo();
            param.setTypeId(Long.valueOf(type));
            param.setStatus("01");
            param.setOnlineFlag("Y");
            goodsList=omsGoodsInfoService.selectWxOmsGoodsInfoList(param);
            goodsList.stream().forEach(goods->{
                OmsGoodsSku sku=new OmsGoodsSku();
                sku.setGoodsId(Long.valueOf(goods.getId()));
                List<OmsGoodsSku> skuList=omsGoodsSkuService.selectOmsGoodsSkuList(sku);
                if(skuList.size()>0){
                    goods.setPrice(skuList.get(0).getPrice());
                }
            });
        }
        return AjaxResult.success(goodsList);
    }

    @ApiOperation("获取商品详细信息")
    @GetMapping(value = "/getGoodsDetail/{id}")
    public AjaxResult getGoodsDetail(@PathVariable("id") String id)
    {
        OmsGoodsInfo goodsInfo=omsGoodsInfoService.selectOmsGoodsInfoById(id);
        OmsGoodsSku param=new OmsGoodsSku();
        param.setGoodsId(Long.valueOf(goodsInfo.getId()));
        List<OmsGoodsSku> skuList=omsGoodsSkuService.selectOmsGoodsSkuList(param);
        goodsInfo.setGoodsSku(skuList);
        return AjaxResult.success(goodsInfo);
    }

    @ApiOperation("获取次卡详细信息")
    @GetMapping(value = "/getCardsDetail/{id}")
    public AjaxResult getCardsDetail(@PathVariable("id") Long id)
    {
        BaseNumberCard card= baseNumberCardService.selectBaseNumberCardById(id);
        return AjaxResult.success(card);
    }

}
