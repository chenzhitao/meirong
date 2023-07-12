package com.jiumi.finance.service;

import java.util.List;
import com.jiumi.finance.domain.UserNumberCardHistory;

/**
 * 用户次卡使用记录Service接口
 *
 * @author jiumi
 * @date 2022-02-08
 */
public interface IUserNumberCardHistoryService
{
    /**
     * 查询用户次卡使用记录
     *
     * @param id 用户次卡使用记录主键
     * @return 用户次卡使用记录
     */
    public UserNumberCardHistory selectUserNumberCardHistoryById(Long id);

    /**
     * 查询用户次卡使用记录列表
     *
     * @param userNumberCardHistory 用户次卡使用记录
     * @return 用户次卡使用记录集合
     */
    public List<UserNumberCardHistory> selectUserNumberCardHistoryList(UserNumberCardHistory userNumberCardHistory);

    /**
     * 新增用户次卡使用记录
     *
     * @param userNumberCardHistory 用户次卡使用记录
     * @return 结果
     */
    public int insertUserNumberCardHistory(UserNumberCardHistory userNumberCardHistory);

    /**
     * 修改用户次卡使用记录
     *
     * @param userNumberCardHistory 用户次卡使用记录
     * @return 结果
     */
    public int updateUserNumberCardHistory(UserNumberCardHistory userNumberCardHistory);

    /**
     * 批量删除用户次卡使用记录
     *
     * @param ids 需要删除的用户次卡使用记录主键集合
     * @return 结果
     */
    public int deleteUserNumberCardHistoryByIds(Long[] ids);

    /**
     * 删除用户次卡使用记录信息
     *
     * @param id 用户次卡使用记录主键
     * @return 结果
     */
    public int deleteUserNumberCardHistoryById(Long id);
}
