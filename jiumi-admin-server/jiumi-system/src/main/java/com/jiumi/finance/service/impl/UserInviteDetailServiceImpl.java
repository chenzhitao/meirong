package com.jiumi.finance.service.impl;

import java.util.List;
import com.jiumi.common.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.jiumi.finance.mapper.UserInviteDetailMapper;
import com.jiumi.finance.domain.UserInviteDetail;
import com.jiumi.finance.service.IUserInviteDetailService;

/**
 * 用户邀请Service业务层处理
 *
 * @author jiumi
 * @date 2021-11-26
 */
@Service
public class UserInviteDetailServiceImpl implements IUserInviteDetailService
{
    @Autowired
    private UserInviteDetailMapper userInviteDetailMapper;

    /**
     * 查询用户邀请
     *
     * @param id 用户邀请主键
     * @return 用户邀请
     */
    @Override
    public UserInviteDetail selectUserInviteDetailById(Long id)
    {
        return userInviteDetailMapper.selectUserInviteDetailById(id);
    }

    /**
     * 查询用户邀请列表
     *
     * @param userInviteDetail 用户邀请
     * @return 用户邀请
     */
    @Override
    public List<UserInviteDetail> selectUserInviteDetailList(UserInviteDetail userInviteDetail)
    {
        return userInviteDetailMapper.selectUserInviteDetailList(userInviteDetail);
    }

    /**
     * 新增用户邀请
     *
     * @param userInviteDetail 用户邀请
     * @return 结果
     */
    @Override
    public int insertUserInviteDetail(UserInviteDetail userInviteDetail)
    {
        userInviteDetail.setCreateTime(DateUtils.getNowDate());
        return userInviteDetailMapper.insertUserInviteDetail(userInviteDetail);
    }

    /**
     * 修改用户邀请
     *
     * @param userInviteDetail 用户邀请
     * @return 结果
     */
    @Override
    public int updateUserInviteDetail(UserInviteDetail userInviteDetail)
    {
        return userInviteDetailMapper.updateUserInviteDetail(userInviteDetail);
    }

    /**
     * 批量删除用户邀请
     *
     * @param ids 需要删除的用户邀请主键
     * @return 结果
     */
    @Override
    public int deleteUserInviteDetailByIds(Long[] ids)
    {
        return userInviteDetailMapper.deleteUserInviteDetailByIds(ids);
    }

    /**
     * 删除用户邀请信息
     *
     * @param id 用户邀请主键
     * @return 结果
     */
    @Override
    public int deleteUserInviteDetailById(Long id)
    {
        return userInviteDetailMapper.deleteUserInviteDetailById(id);
    }

    @Override
    public List<UserInviteDetail> selectUserInviteRankList(UserInviteDetail param) {
        return userInviteDetailMapper.selectUserInviteRankList(param);
    }
}
