package com.jiumi.webapi.domain;

import com.jiumi.common.annotation.Excel;
import io.swagger.annotations.ApiModelProperty;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

/**
 * 用户对象 sys_user
 *
 * @author jiumi
 */
public class SysUserDo
{
    private static final long serialVersionUID = 1L;



    /** 用户账号 */
    @Excel(name = "登录名称")
    private String userName;

    /** 密码 */
    private String password;


    /** 验证码 */
    private String code;

    @NotBlank(message = "用户账号不能为空")
    @Size(min = 0, max = 30, message = "用户账号长度不能超过30个字符")
    @ApiModelProperty("用户名")
    public String getUserName()
    {
        return userName;
    }

    public void setUserName(String userName)
    {
        this.userName = userName;
    }


    @NotBlank(message = "密码不能为空")
    @ApiModelProperty("密码")
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @NotBlank(message = "验证码不能为空")
    @Size(min = 0, max = 6, message = "验证码长度不能超过6个字符")
    @ApiModelProperty("验证码")
    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }


}
