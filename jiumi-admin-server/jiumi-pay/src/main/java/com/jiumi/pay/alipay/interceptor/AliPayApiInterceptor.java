package com.jiumi.pay.alipay.interceptor;

import com.alipay.api.AlipayApiException;
import com.jiumi.pay.alipay.AliPayApiConfigKit;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @author Javen
 */
public class AliPayApiInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object handler) throws AlipayApiException {
        if (HandlerMethod.class.equals(handler.getClass())) {
            HandlerMethod method = (HandlerMethod) handler;
            Object controller = method.getBean();
            if (!(controller instanceof AliPayApiController)) {
                throw new RuntimeException("控制器需要继承 AliPayApiController");
            }
            AliPayApiConfigKit.setThreadLocalAliPayApiConfig(((AliPayApiController) controller).getApiConfig());
            return true;
        }
        return false;
    }
}
