package com.jiumi.pay.controller;

import com.jfinal.kit.HttpKit;
import com.jiumi.pay.domain.PayNotifyDO;
import com.jiumi.pay.domain.WxPayResultDO;
import com.jiumi.pay.service.PayService;
import com.jiumi.pay.wxpay.WxPayApiConfigKit;
import com.jiumi.pay.wxpay.WxPayUtil;
import com.jiumi.pay.wxpay.config.WxPayApiConfig;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

import static com.jiumi.pay.domain.util.SignType.HMACSHA256;

/**
 * @author Javen
 */
@Controller
@RequestMapping("/api/pay/wxPay")
public class WxPayApiController extends com.jiumi.pay.wxpay.interceptor.WxPayApiController{
    private static Logger log = LoggerFactory.getLogger(WxPayApiController.class);

    private static final String USER_PAYING = "USERPAYING";
    private String notifyUrl;
    private String refundNotifyUrl;

    @Autowired
    WxPayApiConfig wxPayApiConfig;

    @Autowired
    private PayService payService;


    @Override
    @PostConstruct
    public WxPayApiConfig getApiConfig() {
        notifyUrl = wxPayApiConfig.getDomain().concat("/api/pay/wxPay/payNotify");
        refundNotifyUrl = wxPayApiConfig.getDomain().concat("/api/pay/wxPay/refundNotify");
        return wxPayApiConfig;
    }

    @PostConstruct
    public void Contruct(){
        try{
            //如果是证书模式，放开if,
            /*if (System.getProperty("os.name").toLowerCase().startsWith("windows")){
                wxPayApiConfig.setCertPath("D:/software/WXCertUtil/cert/1607156408_20210312_cert/apiclient_cert.p12");
            }*/
            notifyUrl = wxPayApiConfig.getDomain().concat("/api/pay/wxPay/payNotify");
            WxPayApiConfigKit.putApiConfig(wxPayApiConfig);
        }catch (Exception e){
            e.printStackTrace();
        }
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
                PayNotifyDO payNotifyDO = new PayNotifyDO(new WxPayResultDO(params));
                payService.handlerNotify(payNotifyDO);
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
