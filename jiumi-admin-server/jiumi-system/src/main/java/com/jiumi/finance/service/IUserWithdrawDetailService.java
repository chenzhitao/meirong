package com.jiumi.finance.service;

import java.util.List;

import com.jiumi.common.core.domain.AjaxResult;
import com.jiumi.common.core.domain.entity.SysUser;
import com.jiumi.finance.domain.UserWithdrawDetail;

/**
 * 用户提现记录Service接口
 *
 * @author jiumi
 * @date 2021-11-26
 */
public interface IUserWithdrawDetailService
{
    /**
     * 查询用户提现记录
     *
     * @param id 用户提现记录主键
     * @return 用户提现记录
     */
    public UserWithdrawDetail selectUserWithdrawDetailById(Long id);

    /**
     * 查询用户提现记录列表
     *
     * @param userWithdrawDetail 用户提现记录
     * @return 用户提现记录集合
     */
    public List<UserWithdrawDetail> selectUserWithdrawDetailList(UserWithdrawDetail userWithdrawDetail);

    /**
     * 新增用户提现记录
     *
     * @param userWithdrawDetail 用户提现记录
     * @return 结果
     */
    public int insertUserWithdrawDetail(UserWithdrawDetail userWithdrawDetail);

    /**
     * 修改用户提现记录
     *
     * @param userWithdrawDetail 用户提现记录
     * @return 结果
     */
    public AjaxResult updateUserWithdrawDetail(UserWithdrawDetail userWithdrawDetail);

    /**
     * 批量删除用户提现记录
     *
     * @param ids 需要删除的用户提现记录主键集合
     * @return 结果
     */
    public int deleteUserWithdrawDetailByIds(Long[] ids);

    /**
     * 删除用户提现记录信息
     *
     * @param id 用户提现记录主键
     * @return 结果
     */
    public int deleteUserWithdrawDetailById(Long id);

    void paymentWithdrawAmount(SysUser currentUser, UserWithdrawDetail detail);
}
