package com.jiumi.pay.controller;

import com.alipay.api.AlipayApiException;
import com.alipay.api.domain.AlipayTradePagePayModel;
import com.alipay.api.internal.util.AlipaySignature;
import com.jiumi.pay.alipay.AliPayApi;
import com.jiumi.pay.alipay.AliPayApiConfigKit;
import com.jiumi.pay.alipay.config.AliPayApiConfig;
import com.jiumi.pay.domain.AliPayResultDO;
import com.jiumi.pay.domain.PayNotifyDO;
import com.jiumi.pay.domain.util.AjaxPayResult;
import com.jiumi.pay.domain.util.StringUtils;
import com.jiumi.pay.service.PayService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Map;

/**
 * @author Javen
 */
@Controller
@RequestMapping("/api/pay/aliPay")
public class AliPayApiController extends com.jiumi.pay.alipay.interceptor.AliPayApiController {
    private static Logger log = LoggerFactory.getLogger(AliPayApiController.class);
    @Autowired
    AliPayApiConfig aliPayApiConfig;

    @Autowired
    private PayService payService;

    /**
     * 普通公钥模式
     */
    //private final static String NOTIFY_URL = "/api/aliPay/notify_url";
    //private final static String RETURN_URL = "/api/aliPay/return_url";
    /**
     * 证书模式回调地址
     */
    private final static String NOTIFY_URL = "/api/aliPay/cert_notify_url";
    private final static String RETURN_URL = "/api/aliPay/cert_return_url";
    @Override
    public AliPayApiConfig getApiConfig() {
        return aliPayApiConfig;
    }

    /**
     * 初始化
     */
    @PostConstruct
    public void Contruct() {
        try{
            if (aliPayApiConfig.isCertModel()){
                //公钥证书模式
                //判断操作系统该选择不同的路径
                if (System.getProperty("os.name").toLowerCase().startsWith("windows")){
                    //如果是windows 使用本地证书路径地址
                    aliPayApiConfig.setAppCertPath("D:/CSRMY/appCertPublicKey_2016102200740684.crt");
                    aliPayApiConfig.setAliPayCertPath("D:/CSRMY/alipayCertPublicKey_RSA2.crt");
                    aliPayApiConfig.setAliPayRootCertPath("D:/CSRMY/alipayRootCert.crt");
                }
                AliPayApiConfigKit.putApiConfig(aliPayApiConfig.buildByCert());
            }else {
                //公钥模式
                AliPayApiConfigKit.putApiConfig(aliPayApiConfig.build());
            }

        }catch (Exception e){
            e.printStackTrace();
        }
    }

    /**
     * PC支付
     */
    @RequestMapping(value = "/pcPay")
    @ResponseBody
    public void pcPay(HttpServletResponse response) {
        try {
            String totalAmount = "88.88";
            String outTradeNo = StringUtils.getOutTradeNo();
            log.info("pc outTradeNo>" + outTradeNo);

            String returnUrl = aliPayApiConfig.getDomain() + RETURN_URL;
            String notifyUrl = aliPayApiConfig.getDomain() + NOTIFY_URL;
            AlipayTradePagePayModel model = new AlipayTradePagePayModel();

            model.setOutTradeNo(outTradeNo);
            model.setProductCode("FAST_INSTANT_TRADE_PAY");
            model.setTotalAmount(totalAmount);
            model.setSubject("Javen PC支付测试");
            model.setBody("Javen WQPay PC支付测试");
            model.setPassbackParams("passback_params");
            /**
             * 花呗分期相关的设置,测试环境不支持花呗分期的测试
             * hb_fq_num代表花呗分期数，仅支持传入3、6、12，其他期数暂不支持，传入会报错；
             * hb_fq_seller_percent代表卖家承担收费比例，商家承担手续费传入100，用户承担手续费传入0，仅支持传入100、0两种，其他比例暂不支持，传入会报错。
             */
//            ExtendParams extendParams = new ExtendParams();
//            extendParams.setHbFqNum("3");
//            extendParams.setHbFqSellerPercent("0");
//            model.setExtendParams(extendParams);

            AliPayApi.tradePage(response, model, notifyUrl, returnUrl);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * 交易查询
     */
    @RequestMapping(value = "/tradeQuery1")
    @ResponseBody
    public AjaxPayResult tradeQuery1(String outTradeNo, Integer payWay) {

        //return AjaxPayResult.success(aliPayService.tradeQuery(outTradeNo,tradeNo));
        return AjaxPayResult.success(payService.tradeQuery(outTradeNo,payWay));
    }
    /**
     * 支付回调接口
     * @param request
     * @return
     */
    @RequestMapping(value = "/cert_notify_url")
    @ResponseBody
    public String certNotifyUrl(HttpServletRequest request) {
        try {
            // 获取支付宝POST过来反馈信息
            Map<String, String> params = AliPayApi.toMap(request);

            for (Map.Entry<String, String> entry : params.entrySet()) {
                System.out.println(entry.getKey() + " = " + entry.getValue());
            }

            boolean verifyResult = AlipaySignature.rsaCertCheckV1(params, aliPayApiConfig.getAliPayCertPath(), "UTF-8", "RSA2");

            if (verifyResult) {
                // TODO 请在这里加上商户的业务逻辑程序代码 异步通知可能出现订单重复通知 需要做去重处理
                //支付成功后进行业务处理
                PayNotifyDO payNotifyDO = new PayNotifyDO(new AliPayResultDO(params));
                //payService.handerAliPayNotify(params);
                //业务处理
                payService.handlerNotify(payNotifyDO);
                System.out.println("certNotifyUrl 验证成功succcess");
                return "success";
            } else {
                System.out.println("certNotifyUrl 验证失败");
                // TODO
                return "failure";
            }
        } catch (AlipayApiException e) {
            e.printStackTrace();
            return "failure";
        }
    }
}
