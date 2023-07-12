package com.jiumi.finance.service.impl;

import java.util.List;
import com.jiumi.common.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.jiumi.finance.mapper.UserIncomeDetailMapper;
import com.jiumi.finance.domain.UserIncomeDetail;
import com.jiumi.finance.service.IUserIncomeDetailService;

/**
 * 用户入账记录Service业务层处理
 *
 * @author jiumi
 * @date 2021-11-26
 */
@Service
public class UserIncomeDetailServiceImpl implements IUserIncomeDetailService
{
    @Autowired
    private UserIncomeDetailMapper userIncomeDetailMapper;

    /**
     * 查询用户入账记录
     *
     * @param id 用户入账记录主键
     * @return 用户入账记录
     */
    @Override
    public UserIncomeDetail selectUserIncomeDetailById(Long id)
    {
        return userIncomeDetailMapper.selectUserIncomeDetailById(id);
    }

    /**
     * 查询用户入账记录列表
     *
     * @param userIncomeDetail 用户入账记录
     * @return 用户入账记录
     */
    @Override
    public List<UserIncomeDetail> selectUserIncomeDetailList(UserIncomeDetail userIncomeDetail)
    {
        return userIncomeDetailMapper.selectUserIncomeDetailList(userIncomeDetail);
    }

    /**
     * 新增用户入账记录
     *
     * @param userIncomeDetail 用户入账记录
     * @return 结果
     */
    @Override
    public int insertUserIncomeDetail(UserIncomeDetail userIncomeDetail)
    {
        userIncomeDetail.setCreateTime(DateUtils.getNowDate());
        return userIncomeDetailMapper.insertUserIncomeDetail(userIncomeDetail);
    }

    /**
     * 修改用户入账记录
     *
     * @param userIncomeDetail 用户入账记录
     * @return 结果
     */
    @Override
    public int updateUserIncomeDetail(UserIncomeDetail userIncomeDetail)
    {
        userIncomeDetail.setUpdateTime(DateUtils.getNowDate());
        return userIncomeDetailMapper.updateUserIncomeDetail(userIncomeDetail);
    }

    /**
     * 批量删除用户入账记录
     *
     * @param ids 需要删除的用户入账记录主键
     * @return 结果
     */
    @Override
    public int deleteUserIncomeDetailByIds(Long[] ids)
    {
        return userIncomeDetailMapper.deleteUserIncomeDetailByIds(ids);
    }

    /**
     * 删除用户入账记录信息
     *
     * @param id 用户入账记录主键
     * @return 结果
     */
    @Override
    public int deleteUserIncomeDetailById(Long id)
    {
        return userIncomeDetailMapper.deleteUserIncomeDetailById(id);
    }
}
