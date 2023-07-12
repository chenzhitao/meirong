package com.jiumi.finance.service.impl;

import java.util.List;
import com.jiumi.common.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.jiumi.finance.mapper.UserNumberCardHistoryMapper;
import com.jiumi.finance.domain.UserNumberCardHistory;
import com.jiumi.finance.service.IUserNumberCardHistoryService;

/**
 * 用户次卡使用记录Service业务层处理
 *
 * @author jiumi
 * @date 2022-02-08
 */
@Service
public class UserNumberCardHistoryServiceImpl implements IUserNumberCardHistoryService
{
    @Autowired
    private UserNumberCardHistoryMapper userNumberCardHistoryMapper;

    /**
     * 查询用户次卡使用记录
     *
     * @param id 用户次卡使用记录主键
     * @return 用户次卡使用记录
     */
    @Override
    public UserNumberCardHistory selectUserNumberCardHistoryById(Long id)
    {
        return userNumberCardHistoryMapper.selectUserNumberCardHistoryById(id);
    }

    /**
     * 查询用户次卡使用记录列表
     *
     * @param userNumberCardHistory 用户次卡使用记录
     * @return 用户次卡使用记录
     */
    @Override
    public List<UserNumberCardHistory> selectUserNumberCardHistoryList(UserNumberCardHistory userNumberCardHistory)
    {
        return userNumberCardHistoryMapper.selectUserNumberCardHistoryList(userNumberCardHistory);
    }

    /**
     * 新增用户次卡使用记录
     *
     * @param userNumberCardHistory 用户次卡使用记录
     * @return 结果
     */
    @Override
    public int insertUserNumberCardHistory(UserNumberCardHistory userNumberCardHistory)
    {
        userNumberCardHistory.setCreateTime(DateUtils.getNowDate());
        return userNumberCardHistoryMapper.insertUserNumberCardHistory(userNumberCardHistory);
    }

    /**
     * 修改用户次卡使用记录
     *
     * @param userNumberCardHistory 用户次卡使用记录
     * @return 结果
     */
    @Override
    public int updateUserNumberCardHistory(UserNumberCardHistory userNumberCardHistory)
    {
        userNumberCardHistory.setUpdateTime(DateUtils.getNowDate());
        return userNumberCardHistoryMapper.updateUserNumberCardHistory(userNumberCardHistory);
    }

    /**
     * 批量删除用户次卡使用记录
     *
     * @param ids 需要删除的用户次卡使用记录主键
     * @return 结果
     */
    @Override
    public int deleteUserNumberCardHistoryByIds(Long[] ids)
    {
        return userNumberCardHistoryMapper.deleteUserNumberCardHistoryByIds(ids);
    }

    /**
     * 删除用户次卡使用记录信息
     *
     * @param id 用户次卡使用记录主键
     * @return 结果
     */
    @Override
    public int deleteUserNumberCardHistoryById(Long id)
    {
        return userNumberCardHistoryMapper.deleteUserNumberCardHistoryById(id);
    }
}
