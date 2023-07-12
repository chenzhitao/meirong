package com.jiumi.pay.wxpay.interceptor;

import com.jiumi.pay.wxpay.WxPayApiConfigKit;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @author Javen
 */
public class WxPayApiInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object handler) {
        if (HandlerMethod.class.equals(handler.getClass())) {
            HandlerMethod method = (HandlerMethod) handler;
            Object controller = method.getBean();
            if (!(controller instanceof WxPayApiController)) {
                throw new RuntimeException("控制器需要继承 AliPayApiController");
            }
            WxPayApiConfigKit.setThreadLocalWxPayApiConfig(((WxPayApiController) controller).getApiConfig());
            return true;
        }
        return false;
    }

}
