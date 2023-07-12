package com.jiumi.finance.service.impl;

import java.util.List;

import com.jiumi.common.core.domain.entity.SysUser;
import com.jiumi.common.utils.DateUtils;
import com.jiumi.shop.domain.BaseShopInfo;
import com.jiumi.shop.service.IBaseShopInfoService;
import com.jiumi.system.service.ISysUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.jiumi.finance.mapper.UserRechargeDetailMapper;
import com.jiumi.finance.domain.UserRechargeDetail;
import com.jiumi.finance.service.IUserRechargeDetailService;

/**
 * 用户充值记录Service业务层处理
 *
 * @author jiumi
 * @date 2021-12-23
 */
@Service
public class UserRechargeDetailServiceImpl implements IUserRechargeDetailService
{
    @Autowired
    private UserRechargeDetailMapper userRechargeDetailMapper;

    @Autowired
    private ISysUserService userService;

    @Autowired
    private IBaseShopInfoService baseShopInfoService;

    /**
     * 查询用户充值记录
     *
     * @param id 用户充值记录主键
     * @return 用户充值记录
     */
    @Override
    public UserRechargeDetail selectUserRechargeDetailById(String id)
    {
        UserRechargeDetail detail= userRechargeDetailMapper.selectUserRechargeDetailById(id);

        SysUser sysuser= userService.selectUserById(detail.getUserId()) ;
        BaseShopInfo shop= baseShopInfoService.selectBaseShopInfoById(sysuser.getSourceShop());
        if(shop!=null){
            detail.setAddress(shop.getAddress());
            detail.setPhone(shop.getPhone());
        }
        return detail;
    }

    /**
     * 查询用户充值记录列表
     *
     * @param userRechargeDetail 用户充值记录
     * @return 用户充值记录
     */
    @Override
    public List<UserRechargeDetail> selectUserRechargeDetailList(UserRechargeDetail userRechargeDetail)
    {
        return userRechargeDetailMapper.selectUserRechargeDetailList(userRechargeDetail);
    }

    /**
     * 新增用户充值记录
     *
     * @param userRechargeDetail 用户充值记录
     * @return 结果
     */
    @Override
    public int insertUserRechargeDetail(UserRechargeDetail userRechargeDetail)
    {
        userRechargeDetail.setCreateTime(DateUtils.getNowDate());
        return userRechargeDetailMapper.insertUserRechargeDetail(userRechargeDetail);
    }

    /**
     * 修改用户充值记录
     *
     * @param userRechargeDetail 用户充值记录
     * @return 结果
     */
    @Override
    public int updateUserRechargeDetail(UserRechargeDetail userRechargeDetail)
    {
        userRechargeDetail.setUpdateTime(DateUtils.getNowDate());
        return userRechargeDetailMapper.updateUserRechargeDetail(userRechargeDetail);
    }

    /**
     * 批量删除用户充值记录
     *
     * @param ids 需要删除的用户充值记录主键
     * @return 结果
     */
    @Override
    public int deleteUserRechargeDetailByIds(String[] ids)
    {
        return userRechargeDetailMapper.deleteUserRechargeDetailByIds(ids);
    }

    /**
     * 删除用户充值记录信息
     *
     * @param id 用户充值记录主键
     * @return 结果
     */
    @Override
    public int deleteUserRechargeDetailById(String id)
    {
        return userRechargeDetailMapper.deleteUserRechargeDetailById(id);
    }
}
