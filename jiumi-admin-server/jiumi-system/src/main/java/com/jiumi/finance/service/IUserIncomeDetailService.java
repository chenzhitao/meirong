package com.jiumi.finance.service;

import java.util.List;
import com.jiumi.finance.domain.UserIncomeDetail;

/**
 * 用户入账记录Service接口
 *
 * @author jiumi
 * @date 2021-11-26
 */
public interface IUserIncomeDetailService
{
    /**
     * 查询用户入账记录
     *
     * @param id 用户入账记录主键
     * @return 用户入账记录
     */
    public UserIncomeDetail selectUserIncomeDetailById(Long id);

    /**
     * 查询用户入账记录列表
     *
     * @param userIncomeDetail 用户入账记录
     * @return 用户入账记录集合
     */
    public List<UserIncomeDetail> selectUserIncomeDetailList(UserIncomeDetail userIncomeDetail);

    /**
     * 新增用户入账记录
     *
     * @param userIncomeDetail 用户入账记录
     * @return 结果
     */
    public int insertUserIncomeDetail(UserIncomeDetail userIncomeDetail);

    /**
     * 修改用户入账记录
     *
     * @param userIncomeDetail 用户入账记录
     * @return 结果
     */
    public int updateUserIncomeDetail(UserIncomeDetail userIncomeDetail);

    /**
     * 批量删除用户入账记录
     *
     * @param ids 需要删除的用户入账记录主键集合
     * @return 结果
     */
    public int deleteUserIncomeDetailByIds(Long[] ids);

    /**
     * 删除用户入账记录信息
     *
     * @param id 用户入账记录主键
     * @return 结果
     */
    public int deleteUserIncomeDetailById(Long id);
}
