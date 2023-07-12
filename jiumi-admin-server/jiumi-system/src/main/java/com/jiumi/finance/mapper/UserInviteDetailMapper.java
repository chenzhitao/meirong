package com.jiumi.finance.mapper;

import java.util.List;
import com.jiumi.finance.domain.UserInviteDetail;

/**
 * 用户邀请Mapper接口
 *
 * @author jiumi
 * @date 2021-11-26
 */
public interface UserInviteDetailMapper
{
    /**
     * 查询用户邀请
     *
     * @param id 用户邀请主键
     * @return 用户邀请
     */
    public UserInviteDetail selectUserInviteDetailById(Long id);

    /**
     * 查询用户邀请列表
     *
     * @param userInviteDetail 用户邀请
     * @return 用户邀请集合
     */
    public List<UserInviteDetail> selectUserInviteDetailList(UserInviteDetail userInviteDetail);

    /**
     * 新增用户邀请
     *
     * @param userInviteDetail 用户邀请
     * @return 结果
     */
    public int insertUserInviteDetail(UserInviteDetail userInviteDetail);

    /**
     * 修改用户邀请
     *
     * @param userInviteDetail 用户邀请
     * @return 结果
     */
    public int updateUserInviteDetail(UserInviteDetail userInviteDetail);

    /**
     * 删除用户邀请
     *
     * @param id 用户邀请主键
     * @return 结果
     */
    public int deleteUserInviteDetailById(Long id);

    /**
     * 批量删除用户邀请
     *
     * @param ids 需要删除的数据主键集合
     * @return 结果
     */
    public int deleteUserInviteDetailByIds(Long[] ids);

    List<UserInviteDetail> selectUserInviteRankList(UserInviteDetail param);
}
