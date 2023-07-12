package com.jiumi.finance.mapper;

import java.util.List;
import com.jiumi.finance.domain.UserRechargeDetail;

/**
 * 用户充值记录Mapper接口
 *
 * @author jiumi
 * @date 2021-12-23
 */
public interface UserRechargeDetailMapper
{
    /**
     * 查询用户充值记录
     *
     * @param id 用户充值记录主键
     * @return 用户充值记录
     */
    public UserRechargeDetail selectUserRechargeDetailById(String id);

    /**
     * 查询用户充值记录列表
     *
     * @param userRechargeDetail 用户充值记录
     * @return 用户充值记录集合
     */
    public List<UserRechargeDetail> selectUserRechargeDetailList(UserRechargeDetail userRechargeDetail);

    /**
     * 新增用户充值记录
     *
     * @param userRechargeDetail 用户充值记录
     * @return 结果
     */
    public int insertUserRechargeDetail(UserRechargeDetail userRechargeDetail);

    /**
     * 修改用户充值记录
     *
     * @param userRechargeDetail 用户充值记录
     * @return 结果
     */
    public int updateUserRechargeDetail(UserRechargeDetail userRechargeDetail);

    /**
     * 删除用户充值记录
     *
     * @param id 用户充值记录主键
     * @return 结果
     */
    public int deleteUserRechargeDetailById(String id);

    /**
     * 批量删除用户充值记录
     *
     * @param ids 需要删除的数据主键集合
     * @return 结果
     */
    public int deleteUserRechargeDetailByIds(String[] ids);
}
