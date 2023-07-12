package com.jiumi.webapi.controller;

import cn.hutool.core.util.StrUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.google.zxing.BarcodeFormat;
import com.google.zxing.qrcode.decoder.ErrorCorrectionLevel;
import com.jfinal.kit.HttpKit;
import com.jiumi.baseconfig.domain.BaseUserMsg;
import com.jiumi.baseconfig.service.IBaseUserMsgService;
import com.jiumi.business.domain.OmsGoodsCart;
import com.jiumi.business.domain.OmsOrderInfo;
import com.jiumi.business.domain.OmsOrderItem;
import com.jiumi.business.domain.OmsVipInfo;
import com.jiumi.business.service.IOmsGoodsCartService;
import com.jiumi.business.service.IOmsOrderInfoService;
import com.jiumi.business.service.IOmsOrderItemService;
import com.jiumi.business.service.IOmsVipInfoService;
import com.jiumi.common.annotation.Excel;
import com.jiumi.common.config.JiumiConfig;
import com.jiumi.common.core.domain.entity.SysUser;
import com.jiumi.common.core.domain.model.LoginUser;
import com.jiumi.common.utils.SecurityUtils;
import com.jiumi.finance.domain.UserIncomeDetail;
import com.jiumi.finance.service.IUserIncomeDetailService;
import com.jiumi.finance.service.IUserNumberCardDetailService;
import com.jiumi.goods.domain.OmsGoodsInfo;
import com.jiumi.goods.service.IOmsGoodsInfoService;
import com.jiumi.pay.controller.WxPayApiController;
import com.jiumi.pay.domain.PayNotifyDO;
import com.jiumi.pay.domain.WxPayResultDO;
import com.jiumi.pay.domain.util.*;
import com.jiumi.pay.entity.H5SceneInfo;
import com.jiumi.pay.wxpay.WxPayApi;
import com.jiumi.pay.wxpay.WxPayApiConfigKit;
import com.jiumi.pay.wxpay.WxPayUtil;
import com.jiumi.pay.wxpay.config.WxPayApiConfig;
import com.jiumi.pay.wxpay.enums.TradeType;
import com.jiumi.pay.wxpay.model.*;
import com.jiumi.system.service.ISysUserService;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.util.EntityUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static com.jiumi.pay.domain.util.SignType.HMACSHA256;

/**
 * @author Javen
 */
@Controller
@RequestMapping("/pay/wxPay")
public class WxPayController extends WxPayApiController {
    private static Logger log = LoggerFactory.getLogger(WxPayController.class);

    private static final String USER_PAYING = "USERPAYING";
    private String notifyUrl;
    private String refundNotifyUrl;

    @Autowired
    WxPayApiConfig wxPayApiConfig;

    @Autowired
    private IOmsOrderInfoService omsOrderInfoService;



    @Autowired
    private IBaseUserMsgService baseUserMsgService;

    @Autowired
    private IOmsVipInfoService omsVipInfoService;

    @Autowired
    private ISysUserService sysUserService;

    @Autowired
    private IUserIncomeDetailService userIncomeDetailService;

    @Autowired
    private IOmsOrderItemService omsOrderItemService;

    @Autowired
    private IOmsGoodsInfoService omsGoodsInfoService;

    @Autowired
    private IOmsGoodsCartService omsGoodsCartService;

    @Autowired
    private IUserNumberCardDetailService userNumberCardDetailService;

    public WxPayApiConfig getApiConfig() {
        notifyUrl = wxPayApiConfig.getDomain().concat("/wxPay/payNotify");
        refundNotifyUrl = wxPayApiConfig.getDomain().concat("/pay/wxPay/refundNotify");
        return wxPayApiConfig;
    }

    @RequestMapping("")
    @ResponseBody
    public String index() {
        log.info("欢迎使用 jiumi 支付");
        log.info(wxPayApiConfig.toString());
        return ("欢迎使用 jiumi 支付");
    }


    @GetMapping("/getKey")
    @ResponseBody
    public String getKey() {
        return WxPayApi.getSignKey(wxPayApiConfig.getMchId(), wxPayApiConfig.getPartnerKey(), SignType.MD5);
    }

    /**
     * 微信H5 支付
     * 注意：必须再web页面中发起支付且域名已添加到开发配置中
     */
    @RequestMapping(value = "/wapPay")
    public void wapPay(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String ip = IpUtil.getRealIp(request);
        if (StringUtils.isBlank(ip)) {
            ip = "127.0.0.1";
        }

        H5SceneInfo sceneInfo = new H5SceneInfo();

        H5SceneInfo.H5 h5_info = new H5SceneInfo.H5();
        h5_info.setType("Wap");
        //此域名必须在商户平台--"产品中心"--"开发配置"中添加
        h5_info.setWap_url("https://gitee.com/javen205/WQPay");
        h5_info.setWap_name("WQPay VIP 充值");
        sceneInfo.setH5Info(h5_info);

        WxPayApiConfig wxPayApiConfig = WxPayApiConfigKit.getWxPayApiConfig();

        Map<String, String> params = UnifiedOrderModel
                .builder()
                .appid(wxPayApiConfig.getAppId())
                .mch_id(wxPayApiConfig.getMchId())
                .nonce_str(WxPayUtil.generateStr())
                .body("WQPay 让支付触手可及-H5支付")
                .attach("Node.js 版:https://gitee.com/javen205/TNW")
                .out_trade_no(WxPayUtil.generateStr())
                .total_fee("1000")
                .spbill_create_ip(ip)
                .notify_url(notifyUrl)
                .trade_type(TradeType.MWEB.getTradeType())
                .scene_info(JSON.toJSONString(sceneInfo))
                .build()
                .createSign(wxPayApiConfig.getPartnerKey(), HMACSHA256);

        String xmlResult = WxPayApi.pushOrder(false, params);
        log.info(xmlResult);

        Map<String, String> result = WxPayUtil.xmlToMap(xmlResult);

        String return_code = result.get("return_code");
        String return_msg = result.get("return_msg");
        if (!WxPayUtil.codeIsOk(return_code)) {
            throw new RuntimeException(return_msg);
        }
        String result_code = result.get("result_code");
        if (!WxPayUtil.codeIsOk(result_code)) {
            throw new RuntimeException(return_msg);
        }
        // 以下字段在return_code 和result_code都为SUCCESS的时候有返回

        String prepayId = result.get("prepay_id");
        String webUrl = result.get("mweb_url");

        log.info("prepay_id:" + prepayId + " mweb_url:" + webUrl);
        response.sendRedirect(webUrl);
    }

    /**
     * 公众号支付
     */
    @RequestMapping(value = "/webPay")
    @ResponseBody
    public AjaxPayResult webPay(HttpServletRequest request, @RequestParam("total_fee") String totalFee) {
        // openId，采用 网页授权获取 access_token API：SnsAccessTokenApi获取
        String openId = (String) request.getSession().getAttribute("openId");
        if (openId == null) {
            openId = "11111111";
        }

        if (StrUtil.isEmpty(openId)) {
            return AjaxPayResult.error("openId is null");
        }
        if (StrUtil.isEmpty(totalFee)) {
            return AjaxPayResult.error("请输入数字金额");
        }
        String ip = IpUtil.getRealIp(request);
        if (StrUtil.isEmpty(ip)) {
            ip = "127.0.0.1";
        }

        WxPayApiConfig wxPayApiConfig = WxPayApiConfigKit.getWxPayApiConfig();

        Map<String, String> params = UnifiedOrderModel
                .builder()
                .appid(wxPayApiConfig.getAppId())
                .mch_id(wxPayApiConfig.getMchId())
                .nonce_str(WxPayUtil.generateStr())
                .body("WQPay 让支付触手可及-公众号支付")
                .attach("Node.js 版:https://gitee.com/javen205/TNW")
                .out_trade_no(WxPayUtil.generateStr())
                .total_fee("1000")
                .spbill_create_ip(ip)
                .notify_url(notifyUrl)
                .trade_type(TradeType.JSAPI.getTradeType())
                .openid(openId)
                .build()
                .createSign(wxPayApiConfig.getPartnerKey(), HMACSHA256);

        String xmlResult = WxPayApi.pushOrder(false, params);
        log.info(xmlResult);

        Map<String, String> resultMap = WxPayUtil.xmlToMap(xmlResult);
        String returnCode = resultMap.get("return_code");
        String returnMsg = resultMap.get("return_msg");
        if (!WxPayUtil.codeIsOk(returnCode)) {
            return AjaxPayResult.error(returnMsg);
        }
        String resultCode = resultMap.get("result_code");
        if (!WxPayUtil.codeIsOk(resultCode)) {
            return AjaxPayResult.error(returnMsg);
        }

        // 以下字段在 return_code 和 result_code 都为 SUCCESS 的时候有返回

        String prepayId = resultMap.get("prepay_id");

        Map<String, String> packageParams = WxPayUtil.prepayIdCreateSign(prepayId, wxPayApiConfig.getAppId(),
                wxPayApiConfig.getPartnerKey(), HMACSHA256);

        String jsonStr = JSON.toJSONString(packageParams);
        return new AjaxPayResult().success(jsonStr);
    }

    /**
     * 扫码模式一
     */
    @RequestMapping(value = "/scanCode1")
    @ResponseBody
    public AjaxPayResult scanCode1(HttpServletRequest request, HttpServletResponse response,
                                   @RequestParam("productId") String productId) {
        try {
            if (StringUtils.isBlank(productId)) {
                return AjaxPayResult.error("productId is null");
            }
            WxPayApiConfig config = WxPayApiConfigKit.getWxPayApiConfig();
            //获取扫码支付（模式一）url
            String qrCodeUrl = WxPayUtil.bizPayUrl(config.getPartnerKey(), config.getAppId(), config.getMchId(), productId);
            log.info(qrCodeUrl);
            //生成二维码保存的路径
            String name = "payQRCode1.png";
            log.info(ResourceUtils.getURL("classpath:").getPath());
            Boolean encode = QrCodeUtil.encode(qrCodeUrl, BarcodeFormat.QR_CODE, 3, ErrorCorrectionLevel.H,
                    "png", 200, 200,
                    ResourceUtils.getURL("classpath:").getPath().concat("static").concat(File.separator).concat(name));
            if (encode) {
                //在页面上显示
                return new AjaxPayResult().success(name);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return AjaxPayResult.error("系统异常：" + e.getMessage());
        }
        return null;
    }

    /**
     * 扫码支付模式一回调
     */
    @RequestMapping(value = "/scanCodeNotify")
    @ResponseBody
    public String scanCodeNotify(HttpServletRequest request, HttpServletResponse response) {
        try {
            String result = HttpKit.readData(request);
            log.info("scanCodeNotify>>>" + result);
            /**
             * 获取返回的信息内容中各个参数的值
             */
            Map<String, String> map = WxPayUtil.xmlToMap(result);
            for (String key : map.keySet()) {
                log.info("key= " + key + " and value= " + map.get(key));
            }

            String appId = map.get("appid");
            String openId = map.get("openid");
            String mchId = map.get("mch_id");
            String isSubscribe = map.get("is_subscribe");
            String nonceStr = map.get("nonce_str");
            String productId = map.get("product_id");
            String sign = map.get("sign");

            Map<String, String> packageParams = new HashMap<String, String>(6);
            packageParams.put("appid", appId);
            packageParams.put("openid", openId);
            packageParams.put("mch_id", mchId);
            packageParams.put("is_subscribe", isSubscribe);
            packageParams.put("nonce_str", nonceStr);
            packageParams.put("product_id", productId);

            WxPayApiConfig wxPayApiConfig = WxPayApiConfigKit.getWxPayApiConfig();

            String packageSign = WxPayUtil.createSign(packageParams, wxPayApiConfig.getPartnerKey(), SignType.MD5);

            String ip = IpUtil.getRealIp(request);
            if (StringUtils.isBlank(ip)) {
                ip = "127.0.0.1";
            }
            Map<String, String> params = UnifiedOrderModel
                    .builder()
                    .appid(wxPayApiConfig.getAppId())
                    .mch_id(wxPayApiConfig.getMchId())
                    .nonce_str(WxPayUtil.generateStr())
                    .body("WQPay 让支付触手可及-扫码支付模式一")
                    .attach("Node.js 版:https://gitee.com/javen205/TNW")
                    .out_trade_no(WxPayUtil.generateStr())
                    .total_fee("1")
                    .spbill_create_ip(ip)
                    .notify_url(notifyUrl)
                    .trade_type(TradeType.NATIVE.getTradeType())
                    .openid(openId)
                    .build()
                    .createSign(wxPayApiConfig.getPartnerKey(), HMACSHA256);
            String xmlResult = WxPayApi.pushOrder(false, params);
            log.info("统一下单:" + xmlResult);
            /**
             * 发送信息给微信服务器
             */
            Map<String, String> payResult = WxPayUtil.xmlToMap(xmlResult);
            String returnCode = payResult.get("return_code");
            String resultCode = payResult.get("result_code");
            if (WxPayUtil.codeIsOk(returnCode) && WxPayUtil.codeIsOk(resultCode)) {
                // 以下字段在 return_code 和 result_code 都为 SUCCESS 的时候有返回
                String prepayId = payResult.get("prepay_id");

                Map<String, String> prepayParams = new HashMap<String, String>(10);
                prepayParams.put("return_code", "SUCCESS");
                prepayParams.put("appid", appId);
                prepayParams.put("mch_id", mchId);
                prepayParams.put("nonceStr", System.currentTimeMillis() + "");
                prepayParams.put("prepay_id", prepayId);
                String prepaySign = null;
                if (sign.equals(packageSign)) {
                    prepayParams.put("result_code", "SUCCESS");
                } else {
                    prepayParams.put("result_code", "FAIL");
                    //result_code为FAIL时，添加该键值对，value值是微信告诉客户的信息
                    prepayParams.put("err_code_des", "订单失效");
                }
                prepaySign = WxPayUtil.createSign(prepayParams, wxPayApiConfig.getPartnerKey(), HMACSHA256);
                prepayParams.put("sign", prepaySign);
                String xml = WxPayUtil.toXml(prepayParams);
                log.error(xml);
                return xml;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    /**
     * 扫码支付模式二
     */
    @RequestMapping(value = "/scanCode2")
    @ResponseBody
    public AjaxPayResult scanCode2(HttpServletRequest request, HttpServletResponse response,
                                   @RequestParam("total_fee") String totalFee) {

        if (StringUtils.isBlank(totalFee)) {
            return AjaxPayResult.error("支付金额不能为空");
        }

        String ip = IpUtil.getRealIp(request);
        if (StringUtils.isBlank(ip)) {
            ip = "127.0.0.1";
        }
        WxPayApiConfig wxPayApiConfig = WxPayApiConfigKit.getWxPayApiConfig();

        Map<String, String> params = UnifiedOrderModel
                .builder()
                .appid(wxPayApiConfig.getAppId())
                .mch_id(wxPayApiConfig.getMchId())
                .nonce_str(WxPayUtil.generateStr())
                .body("WQPay 让支付触手可及-扫码支付模式二")
                .attach("Node.js 版:https://gitee.com/javen205/TNW")
                .out_trade_no(WxPayUtil.generateStr())
                .total_fee("1")
                .spbill_create_ip(ip)
                .notify_url(notifyUrl)
                .trade_type(TradeType.NATIVE.getTradeType())
                .build()
                .createSign(wxPayApiConfig.getPartnerKey(), HMACSHA256);

        String xmlResult = WxPayApi.pushOrder(false, params);
        log.info("统一下单:" + xmlResult);

        Map<String, String> result = WxPayUtil.xmlToMap(xmlResult);

        String returnCode = result.get("return_code");
        String returnMsg = result.get("return_msg");
        System.out.println(returnMsg);
        if (!WxPayUtil.codeIsOk(returnCode)) {
            return AjaxPayResult.error("error:" + returnMsg);
        }
        String resultCode = result.get("result_code");
        if (!WxPayUtil.codeIsOk(resultCode)) {
            return AjaxPayResult.error("error:" + returnMsg);
        }
        //生成预付订单success

        String qrCodeUrl = result.get("code_url");
        String name = "payQRCode2.png";

        Boolean encode = QrCodeUtil.encode(qrCodeUrl, BarcodeFormat.QR_CODE, 3, ErrorCorrectionLevel.H, "png", 200, 200,
                request.getSession().getServletContext().getRealPath("/") + File.separator + name);
        if (encode) {
            //在页面上显示
            return new AjaxPayResult().success(name);
        }
        return null;
    }

    /**
     * 刷卡支付
     */
    @RequestMapping(value = "/micropay")
    @ResponseBody
    public AjaxPayResult microPay(HttpServletRequest request, HttpServletResponse response) {
        String authCode = request.getParameter("auth_code");
        String totalFee = request.getParameter("total_fee");
        if (StringUtils.isBlank(totalFee)) {
            return AjaxPayResult.error("支付金额不能为空");
        }
        if (StringUtils.isBlank(authCode)) {
            return AjaxPayResult.error("auth_code参数错误");
        }
        String ip = IpUtil.getRealIp(request);
        if (StringUtils.isBlank(ip)) {
            ip = "127.0.0.1";
        }
        WxPayApiConfig wxPayApiConfig = WxPayApiConfigKit.getWxPayApiConfig();

        Map<String, String> params = MicroPayModel.builder()
                .appid(wxPayApiConfig.getAppId())
                .mch_id(wxPayApiConfig.getMchId())
                .nonce_str(WxPayUtil.generateStr())
                .body("WQPay 让支付触手可及-刷卡支付")
                .attach("Node.js 版:https://gitee.com/javen205/TNW")
                .out_trade_no(WxPayUtil.generateStr())
                .total_fee("1")
                .spbill_create_ip(ip)
                .auth_code(authCode)
                .build()
                .createSign(wxPayApiConfig.getPartnerKey(), HMACSHA256);

        String xmlResult = WxPayApi.microPay(false, params);
        //同步返回结果
        log.info("xmlResult:" + xmlResult);
        Map<String, String> result = WxPayUtil.xmlToMap(xmlResult);
        String returnCode = result.get("return_code");
        String returnMsg = result.get("return_msg");
        if (!WxPayUtil.codeIsOk(returnCode)) {
            //通讯失败
            String errCode = result.get("err_code");
            if (StringUtils.isNotBlank(errCode)) {
                //用户支付中，需要输入密码
                if (USER_PAYING.equals(errCode)) {
                    //等待5秒后调用【查询订单API】
                }
            }
            log.info("提交刷卡支付失败>>" + xmlResult);
            return AjaxPayResult.error(returnMsg);
        }

        String resultCode = result.get("result_code");
        if (!WxPayUtil.codeIsOk(resultCode)) {
            log.info("支付失败>>" + xmlResult);
            String errCodeDes = result.get("err_code_des");
            return AjaxPayResult.error(errCodeDes);
        }
        //支付成功
        return new AjaxPayResult().success(xmlResult);
    }

    /**
     * 微信APP支付
     */
    @RequestMapping(value = "/appPay")
    @ResponseBody
    public AjaxPayResult appPay(HttpServletRequest request, @SessionAttribute("userId") Long uid, @RequestParam Long orderId) {

        String ip = IpUtil.getRealIp(request);
        if (StringUtils.isBlank(ip)) {
            ip = "127.0.0.1";
        }

        WxPayApiConfig wxPayApiConfig = WxPayApiConfigKit.getWxPayApiConfig();

        Map<String, String> params = UnifiedOrderModel
                .builder()
                .appid(wxPayApiConfig.getAppId())
                .mch_id(wxPayApiConfig.getMchId())
                .nonce_str(WxPayUtil.generateStr())
                .body("WQPay 让支付触手可及-App支付")
                .attach("Node.js 版:https://gitee.com/javen205/TNW")
                .out_trade_no(WxPayUtil.generateStr())
                .total_fee("1000")
                .spbill_create_ip(ip)
                .notify_url(notifyUrl)
                .trade_type(TradeType.APP.getTradeType())
                .build()
                .createSign(wxPayApiConfig.getPartnerKey(), SignType.HMACSHA256);

        String xmlResult = WxPayApi.pushOrder(false, params);

        log.info(xmlResult);
        Map<String, String> result = WxPayUtil.xmlToMap(xmlResult);

        String returnCode = result.get("return_code");
        String returnMsg = result.get("return_msg");
        if (!WxPayUtil.codeIsOk(returnCode)) {
            return AjaxPayResult.error(returnMsg);
        }
        String resultCode = result.get("result_code");
        if (!WxPayUtil.codeIsOk(resultCode)) {
            return AjaxPayResult.error(returnMsg);
        }
        // 以下字段在 return_code 和 result_code 都为 SUCCESS 的时候有返回
        String prepayId = result.get("prepay_id");

        Map<String, String> packageParams = WxPayUtil.appPrepayIdCreateSign(wxPayApiConfig.getAppId(), wxPayApiConfig.getMchId(), prepayId,
                wxPayApiConfig.getPartnerKey(), SignType.HMACSHA256);

        String jsonStr = JSON.toJSONString(packageParams);
        log.info("返回apk的参数:" + jsonStr);
        return new AjaxPayResult().success(jsonStr);
    }

    /**
     * 微信小程序支付
     */
    @RequestMapping(value = "/miniAppPay")
    @ResponseBody
    public AjaxPayResult miniAppPay(HttpServletRequest request) {
        //需要通过授权来获取openId
        String code =  request.getParameter("code");
        String appId= JiumiConfig.getAppid();
        LoginUser loginUser = SecurityUtils.getLoginUser();
        String openid=loginUser.getUser().getWeixinOpenId();
        String orderCode = request.getParameter("orderCode");

        String ip = IpUtil.getRealIp(request);
        if (StringUtils.isBlank(ip)) {
            ip = "127.0.0.1";
        }
        OmsOrderInfo order= omsOrderInfoService.selectOmsOrderInfoByCode(orderCode);
        WxPayApiConfig wxPayApiConfig = WxPayApiConfigKit.getWxPayApiConfig();

        String jsonStr = null;
        try {
            Map<String, String> params = UnifiedOrderModel
                    .builder()
                    .appid(wxPayApiConfig.getAppId())
                    .mch_id(wxPayApiConfig.getMchId())
                    .nonce_str(WxPayUtil.generateStr())
                    .body("WQPay 让支付触手可及-小程序支付")
                    .attach("Node.js 版:https://gitee.com/javen205/TNW")
                    .out_trade_no(WxPayUtil.generateStr())
                    .total_fee(String.valueOf(order.getOrderAmount()))
                    .spbill_create_ip(ip)
                    .notify_url(notifyUrl)
                    .trade_type(TradeType.JSAPI.getTradeType())
                    .openid(openid)
                    .build()
                    .createSign(wxPayApiConfig.getPartnerKey(), HMACSHA256);

            String xmlResult = WxPayApi.pushOrder(false, params);
            log.info("---------------获取的微信参数---------------");
            log.info("-----------xmlResult="+xmlResult);
            Map<String, String> result = WxPayUtil.xmlToMap(xmlResult);
            log.info("-------------result-------------");
            log.info(""+result);
            String returnCode = result.get("return_code");
            String returnMsg = result.get("return_msg");
            if (!WxPayUtil.codeIsOk(returnCode)) {
                return AjaxPayResult.error(returnMsg);
            }
            log.info("---------------returnCode---------------="+returnCode);
            log.info("---------------returnMsg---------------="+returnMsg);
            String resultCode = result.get("result_code");
            System.out.println("====>"+result.get("result_code"));
            if (!WxPayUtil.codeIsOk(resultCode)) {
                return AjaxPayResult.error(returnMsg);
            }
            log.info("---------------resultCode---------------="+resultCode);
            log.info("---------------returnMsg---------------="+returnMsg);
            // 以下字段在 return_code 和 result_code 都为 SUCCESS 的时候有返回
            String prepayId = result.get("prepay_id");
            log.info("---------------prepayId---------------="+prepayId);
            Map<String, String> packageParams = WxPayUtil.miniAppPrepayIdCreateSign(wxPayApiConfig.getAppId(), prepayId,
                    wxPayApiConfig.getPartnerKey(), HMACSHA256);
            jsonStr = JSON.toJSONString(packageParams);
            log.info("小程序支付的参数packageParams:" + packageParams);
            log.info("小程序支付的参数jsonStr:" + jsonStr);
        } catch (Exception e) {
            e.printStackTrace();
            log.info("错误信息:" + e.getMessage());
        }
        return new AjaxPayResult().success(jsonStr);
    }

    /**
     * 小程序回调异步通知
     */
    @RequestMapping(value = "/miniNotify")
    @ResponseBody
    public String miniPayNotify(HttpServletRequest request) {
        String xmlMsg = HttpKit.readData(request);
        log.info("支付通知=" + xmlMsg);
        Map<String, String> params = WxPayUtil.xmlToMap(xmlMsg);

        String returnCode = params.get("return_code");

        // 注意重复通知的情况，同一订单号可能收到多次通知，请注意一定先判断订单状态
        // 注意此处签名方式需与统一下单的签名类型一致
        if (WxPayUtil.verifyNotify(params, WxPayApiConfigKit.getWxPayApiConfig().getPartnerKey(), HMACSHA256)) {
            if (WxPayUtil.codeIsOk(returnCode)) {
                PayNotifyDO payNotifyDO = new PayNotifyDO(new WxPayResultDO(params));
                String outTradeNo=payNotifyDO.getOutTradeNo();
                OmsOrderInfo order= omsOrderInfoService.selectOmsOrderInfoByOutTradeNo(outTradeNo);
                if("01".equals(order.getOrderStatus())){
                    if("02".equals(order.getOrderType())){
                        order.setOrderStatus("04");
                    }else {
                        order.setOrderStatus("02");
                    }
                    order.setPayTime(DateUtils.getNowDate());
                    omsOrderInfoService.updateOmsOrderInfo(order);

                    //支付成功减库存
                    if(!"02".equals(order.getOrderType())) {
                        omsOrderInfoService.reduceGoodsStocks(order.getId());
                    }
                    //分配佣金
                    OmsOrderItem param=new OmsOrderItem();
                    param.setOrderId(Long.valueOf(order.getId()));
                    List<OmsOrderItem> itemList=omsOrderItemService.selectOmsOrderItemList(param);
                    //支付完毕之后删除对应购物车
                    itemList.stream().forEach(item->{
                        OmsGoodsCart cart=new OmsGoodsCart();
                        cart.setUserId(order.getUserId());
                        cart.setGoodsId(item.getGoodsId());
                        cart.setSkuId(item.getSkuId());
                        omsGoodsCartService.deleteOmsGoodsCart(cart);
                    });

                    //如果购买次卡，添加次卡购买记录
                    if("02".equals(order.getOrderType())){
                        userNumberCardDetailService.addUserNumberCardDetail(order.getId());
                    }
                    if("01".equals(order.getOrderType())){
                        BaseUserMsg msg=new BaseUserMsg();
                        msg.setUserId(order.getUserId());
                        msg.setMsgType("03");
                        msg.setMsgTitle("订单提醒");
                        msg.setMsgContent("恭喜您于"+DateUtils.datePath()+"订单支付成功，请及查看结果");
                        msg.setCreateTime(DateUtils.getNowDate());
                        msg.setMsgCreateTime(DateUtils.getNowDate());
                        msg.setMsgState("Y");
                        baseUserMsgService.insertBaseUserMsg(msg);
                    }
                    else if("02".equals(order.getOrderType())){
                        BaseUserMsg msg=new BaseUserMsg();
                        msg.setUserId(order.getUserId());
                        msg.setMsgType("03");
                        msg.setMsgTitle("充值提醒");
                        msg.setMsgContent("恭喜您于"+DateUtils.datePath()+"充值支付成功，请及查看结果");
                        msg.setCreateTime(DateUtils.getNowDate());
                        msg.setMsgCreateTime(DateUtils.getNowDate());
                        msg.setMsgState("Y");
                        baseUserMsgService.insertBaseUserMsg(msg);
                    }
                }
                // 更新订单信息
                // 发送通知等
                Map<String, String> xml = new HashMap<String, String>(2);
                xml.put("return_code", "SUCCESS");
                xml.put("return_msg", "OK");
                return WxPayUtil.toXml(xml);
            }
        }
        return null;
    }

    /**
     * 企业付款到零钱
     */
    @RequestMapping(value = "/transfer")
    @ResponseBody
    public String transfer(HttpServletRequest request, @RequestParam("openId") String openId) {

        String ip = IpUtil.getRealIp(request);
        if (StringUtils.isBlank(ip)) {
            ip = "127.0.0.1";
        }

        WxPayApiConfig wxPayApiConfig = WxPayApiConfigKit.getWxPayApiConfig();

        Map<String, String> params = TransferModel.builder()
                .mch_appid(wxPayApiConfig.getAppId())
                .mchid(wxPayApiConfig.getMchId())
                .nonce_str(WxPayUtil.generateStr())
                .partner_trade_no(WxPayUtil.generateStr())
                .openid(openId)
                .check_name("NO_CHECK")
                .amount("100")
                .desc("WQPay 让支付触手可及-企业付款")
                .spbill_create_ip(ip)
                .build()
                .createSign(wxPayApiConfig.getPartnerKey(), HMACSHA256, false);

        // 提现
        String transfers = WxPayApi.transfers(params, wxPayApiConfig.getCertPath(), wxPayApiConfig.getMchId());
        log.info("提现结果:" + transfers);
        Map<String, String> map = WxPayUtil.xmlToMap(transfers);
        String returnCode = map.get("return_code");
        String resultCode = map.get("result_code");
        if (WxPayUtil.codeIsOk(returnCode) && WxPayUtil.codeIsOk(resultCode)) {
            // 提现成功
        } else {
            // 提现失败
        }
        return transfers;
    }

    /**
     * 查询企业付款到零钱
     */
    @RequestMapping(value = "/transferInfo")
    @ResponseBody
    public String transferInfo(@RequestParam("partner_trade_no") String partnerTradeNo) {
        try {
            WxPayApiConfig wxPayApiConfig = WxPayApiConfigKit.getWxPayApiConfig();

            Map<String, String> params = GetTransferInfoModel.builder()
                    .nonce_str(WxPayUtil.generateStr())
                    .partner_trade_no(partnerTradeNo)
                    .mch_id(wxPayApiConfig.getMchId())
                    .appid(wxPayApiConfig.getAppId())
                    .build()
                    .createSign(wxPayApiConfig.getPartnerKey(), HMACSHA256, false);

            return WxPayApi.getTransferInfo(params, wxPayApiConfig.getCertPath(), wxPayApiConfig.getMchId());
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    /**
     * 获取RSA加密公钥
     */
    @RequestMapping(value = "/getPublicKey")
    @ResponseBody
    public String getPublicKey() {
        try {
            WxPayApiConfig wxPayApiConfig = WxPayApiConfigKit.getWxPayApiConfig();

            Map<String, String> params = new HashMap<String, String>(4);
            params.put("mch_id", wxPayApiConfig.getMchId());
            params.put("nonce_str", String.valueOf(System.currentTimeMillis()));
            params.put("sign_type", "MD5");
            String createSign = WxPayUtil.createSign(params, wxPayApiConfig.getPartnerKey(), SignType.MD5);
            params.put("sign", createSign);
            return WxPayApi.getPublicKey(params, wxPayApiConfig.getCertPath(), wxPayApiConfig.getMchId());
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    /**
     * 企业付款到银行卡
     */
    @RequestMapping(value = "/payBank")
    @ResponseBody
    public String payBank() {
        try {
            WxPayApiConfig wxPayApiConfig = WxPayApiConfigKit.getWxPayApiConfig();

            //通过WxPayApi.getPublicKey接口获取RSA加密公钥
            //假设获取到的RSA加密公钥为PUBLIC_KEY(PKCS#8格式)
            final String PUBLIC_KEY = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA6Bl76IwSvBTiibZ+CNRUA6BfahMshZ0WJpHD1GpmvcQjeN6Yrv6c9eIl6gB4nU3isN7bn+LmoVTpH1gHViaV2YyG/zXj4z4h7r+V+ezesMqqorEg38BCNUHNmhnw4/C0I4gBAQ4x0SJOGnfKGZKR9yzvbkJtvEn732JcEZCbdTZmaxkwlenXvM+mStcJaxBCB/h5xJ5VOF5nDbTPzLphIpzddr3zx/Jxjna9QB1v/YSKYXn+iuwruNUXGCvvxBWaBGKrjOdRTRy9adWOgNmtuYDQJ2YOfG8PtPe06ELKjmr2CfaAGrKKUroyaGvy3qxAV0PlT+UQ4ADSXWt/zl0o5wIDAQAB";

            Map<String, String> params = new HashMap<String, String>(10);
            params.put("mch_id", wxPayApiConfig.getMchId());
            params.put("partner_trade_no", System.currentTimeMillis() + "");
            params.put("nonce_str", System.currentTimeMillis() + "");
            //收款方银行卡号
            params.put("enc_bank_no", RsaUtil.encryptByPublicKeyByWx("银行卡号", PUBLIC_KEY));
            //收款方用户名
            params.put("enc_true_name", RsaUtil.encryptByPublicKeyByWx("银行卡持有人姓名", PUBLIC_KEY));
            //收款方开户行
            params.put("bank_code", "1001");
            params.put("amount", "1");
            params.put("desc", "WQPay 让支付触手可及-付款到银行卡");
            params.put("sign", WxPayUtil.createSign(params, wxPayApiConfig.getPartnerKey(), HMACSHA256));
            return WxPayApi.payBank(params, wxPayApiConfig.getCertPath(), wxPayApiConfig.getMchId());
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    /**
     * 查询企业付款到银行
     */
    @RequestMapping(value = "/queryBank")
    @ResponseBody
    public String queryBank(@RequestParam("partner_trade_no") String partnerTradeNo) {
        try {
            WxPayApiConfig wxPayApiConfig = WxPayApiConfigKit.getWxPayApiConfig();

            Map<String, String> params = new HashMap<String, String>(4);
            params.put("mch_id", wxPayApiConfig.getMchId());
            params.put("partner_trade_no", partnerTradeNo);
            params.put("nonce_str", System.currentTimeMillis() + "");
            params.put("sign", WxPayUtil.createSign(params, wxPayApiConfig.getPartnerKey(), SignType.MD5));
            return WxPayApi.queryBank(params, wxPayApiConfig.getCertPath(), wxPayApiConfig.getMchId());
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    /**
     * 微信退款
     */
    @RequestMapping(value = "/refund")
    @ResponseBody
    public String refund(@RequestParam("outTradeNo") String outTradeNo) {

        if (StringUtils.isBlank(outTradeNo) && StringUtils.isBlank(outTradeNo)) {
            return "transactionId、out_trade_no二选一";
        }
        WxPayApiConfig wxPayApiConfig = WxPayApiConfigKit.getWxPayApiConfig();
        OmsOrderInfo orderInfo=omsOrderInfoService.selectOmsOrderInfoByOutTradeNo(outTradeNo);
        String orderAmount=String.valueOf(orderInfo.getSumAmount()*100);
        Map<String, String> params = RefundModel.builder()
                .appid(wxPayApiConfig.getAppId())
                .mch_id(wxPayApiConfig.getMchId())
                .nonce_str(WxPayUtil.generateStr())
                .transaction_id(outTradeNo)
                .out_trade_no(outTradeNo)
                .out_refund_no(WxPayUtil.generateStr())
                .total_fee(orderAmount)
                .refund_fee(orderAmount)
                .notify_url(refundNotifyUrl)
                .build()
                .createSign(wxPayApiConfig.getPartnerKey(), SignType.MD5);

        return WxPayApi.orderRefund(false, params, wxPayApiConfig.getCertPath(), wxPayApiConfig.getMchId());
    }

    /**
     * 微信退款查询
     */
    @RequestMapping(value = "/refundQuery")
    @ResponseBody
    public String refundQuery(@RequestParam("transactionId") String transactionId,
                              @RequestParam("out_trade_no") String outTradeNo,
                              @RequestParam("out_refund_no") String outRefundNo,
                              @RequestParam("refund_id") String refundId) {

        WxPayApiConfig wxPayApiConfig = WxPayApiConfigKit.getWxPayApiConfig();

        Map<String, String> params = RefundQueryModel.builder()
                .appid(wxPayApiConfig.getAppId())
                .mch_id(wxPayApiConfig.getMchId())
                .nonce_str(WxPayUtil.generateStr())
                .transaction_id(transactionId)
                .out_trade_no(outTradeNo)
                .out_refund_no(outRefundNo)
                .refund_id(refundId)
                .build()
                .createSign(wxPayApiConfig.getPartnerKey(), SignType.MD5);

        return WxPayApi.orderRefundQuery(false, params);
    }

    /**
     * 退款通知
     */
    @RequestMapping(value = "/refundNotify")
    @ResponseBody
    public String refundNotify(HttpServletRequest request) {
        String xmlMsg = HttpKit.readData(request);
        log.info("退款通知=" + xmlMsg);
        Map<String, String> params = WxPayUtil.xmlToMap(xmlMsg);

        String returnCode = params.get("return_code");
        // 注意重复通知的情况，同一订单号可能收到多次通知，请注意一定先判断订单状态
        if (WxPayUtil.codeIsOk(returnCode)) {
            String reqInfo = params.get("req_info");
            String decryptData = WxPayUtil.decryptData(reqInfo, WxPayApiConfigKit.getWxPayApiConfig().getPartnerKey());
            log.info("退款通知解密后的数据=" + decryptData);
            // 更新订单信息
            // 发送通知等
            Map<String, String> xml = new HashMap<String, String>(2);
            xml.put("return_code", "SUCCESS");
            xml.put("return_msg", "OK");
            return WxPayUtil.toXml(xml);
        }
        return null;
    }

    /**
     * 异步通知
     */
    @RequestMapping(value = "/payNotify")
    @ResponseBody
    public String payNotify(HttpServletRequest request) {
        String xmlMsg = HttpKit.readData(request);
        log.info("支付通知=" + xmlMsg);
        Map<String, String> params = WxPayUtil.xmlToMap(xmlMsg);

        String returnCode = params.get("return_code");

        // 注意重复通知的情况，同一订单号可能收到多次通知，请注意一定先判断订单状态
        // 注意此处签名方式需与统一下单的签名类型一致
        if (WxPayUtil.verifyNotify(params, WxPayApiConfigKit.getWxPayApiConfig().getPartnerKey(), HMACSHA256)) {
            if (WxPayUtil.codeIsOk(returnCode)) {
                // 更新订单信息
                // 发送通知等
                Map<String, String> xml = new HashMap<String, String>(2);
                xml.put("return_code", "SUCCESS");
                xml.put("return_msg", "OK");
                return WxPayUtil.toXml(xml);
            }
        }
        return null;
    }
}
