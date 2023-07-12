package com.jiumi.pay.domain.util;

import com.jiumi.common.constant.HttpStatus;
import com.jiumi.common.utils.StringUtils;

import java.util.HashMap;

/**
 * 操作消息提醒
 *
 * @author jiumi
 */
public class AjaxPayResult extends HashMap<String, Object>
{
    private static final long serialVersionUID = 1L;

    /** 状态码 */
    public static final String CODE_TAG = "code";

    /** 返回内容 */
    public static final String MSG_TAG = "msg";

    /** 数据对象 */
    public static final String DATA_TAG = "data";

    /**
     * 初始化一个新创建的 AjaxPayResult 对象，使其表示一个空消息。
     */
    public AjaxPayResult()
    {
    }

    /**
     * 初始化一个新创建的 AjaxPayResult 对象
     *
     * @param code 状态码
     * @param msg 返回内容
     */
    public AjaxPayResult(int code, String msg)
    {
        super.put(CODE_TAG, code);
        super.put(MSG_TAG, msg);
    }

    /**
     * 初始化一个新创建的 AjaxPayResult 对象
     *
     * @param code 状态码
     * @param msg 返回内容
     * @param data 数据对象
     */
    public AjaxPayResult(int code, String msg, Object data)
    {
        super.put(CODE_TAG, code);
        super.put(MSG_TAG, msg);
        if (StringUtils.isNotNull(data))
        {
            super.put(DATA_TAG, data);
        }
    }

    /**
     * 返回成功消息
     *
     * @return 成功消息
     */
    public static AjaxPayResult success()
    {
        return AjaxPayResult.success("操作成功");
    }

    /**
     * 返回成功数据
     *
     * @return 成功消息
     */
    public static AjaxPayResult success(Object data)
    {
        return AjaxPayResult.success("操作成功", data);
    }

    /**
     * 返回成功消息
     *
     * @param msg 返回内容
     * @return 成功消息
     */
    public static AjaxPayResult success(String msg)
    {
        return AjaxPayResult.success(msg, null);
    }

    /**
     * 返回成功消息
     *
     * @param msg 返回内容
     * @param data 数据对象
     * @return 成功消息
     */
    public static AjaxPayResult success(String msg, Object data)
    {
        return new AjaxPayResult(HttpStatus.SUCCESS, msg, data);
    }

    /**
     * 返回错误消息
     *
     * @return
     */
    public static AjaxPayResult error()
    {
        return AjaxPayResult.error("操作失败");
    }

    /**
     * 返回错误消息
     *
     * @param msg 返回内容
     * @return 警告消息
     */
    public static AjaxPayResult error(String msg)
    {
        return AjaxPayResult.error(msg, null);
    }
    /**
     * 返回错误消息
     *
     * @return 警告消息
     */
    public static AjaxPayResult error(CodeMsg codeMsg)
    {
        return AjaxPayResult.error(codeMsg.getCode(), codeMsg.getMsg());
    }

    /**
     * 返回错误消息
     *
     * @return 警告消息
     */
    public static AjaxPayResult error(CodeMsg codeMsg, String msg)
    {
        return AjaxPayResult.error(codeMsg.getCode(), msg);
    }

    /**
     * 返回错误消息
     *
     * @param msg 返回内容
     * @param data 数据对象
     * @return 警告消息
     */
    public static AjaxPayResult error(String msg, Object data)
    {
        return new AjaxPayResult(HttpStatus.ERROR, msg, data);
    }

    /**
     * 返回错误消息
     *
     * @param code 状态码
     * @param msg 返回内容
     * @return 警告消息
     */
    public static AjaxPayResult error(int code, String msg)
    {
        return new AjaxPayResult(code, msg, null);
    }
}
