package com.jiumi.finance.service.impl;

import java.util.List;

import com.jiumi.common.core.domain.AjaxResult;
import com.jiumi.common.core.domain.entity.SysUser;
import com.jiumi.common.core.domain.model.LoginUser;
import com.jiumi.common.exception.CustomException;
import com.jiumi.common.utils.DateUtils;
import com.jiumi.common.utils.SecurityUtils;
import com.jiumi.system.service.ISysUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.jiumi.finance.mapper.UserWithdrawDetailMapper;
import com.jiumi.finance.domain.UserWithdrawDetail;
import com.jiumi.finance.service.IUserWithdrawDetailService;
import org.springframework.transaction.annotation.Transactional;

/**
 * 用户提现记录Service业务层处理
 *
 * @author jiumi
 * @date 2021-11-26
 */
@Service
public class UserWithdrawDetailServiceImpl implements IUserWithdrawDetailService
{
    @Autowired
    private UserWithdrawDetailMapper userWithdrawDetailMapper;

    @Autowired
    private ISysUserService sysUserService;

    /**
     * 查询用户提现记录
     *
     * @param id 用户提现记录主键
     * @return 用户提现记录
     */
    @Override
    public UserWithdrawDetail selectUserWithdrawDetailById(Long id)
    {
        return userWithdrawDetailMapper.selectUserWithdrawDetailById(id);
    }

    /**
     * 查询用户提现记录列表
     *
     * @param userWithdrawDetail 用户提现记录
     * @return 用户提现记录
     */
    @Override
    public List<UserWithdrawDetail> selectUserWithdrawDetailList(UserWithdrawDetail userWithdrawDetail)
    {
        return userWithdrawDetailMapper.selectUserWithdrawDetailList(userWithdrawDetail);
    }

    /**
     * 新增用户提现记录
     *
     * @param userWithdrawDetail 用户提现记录
     * @return 结果
     */
    @Override
    public int insertUserWithdrawDetail(UserWithdrawDetail userWithdrawDetail)
    {
        userWithdrawDetail.setCreateTime(DateUtils.getNowDate());
        return userWithdrawDetailMapper.insertUserWithdrawDetail(userWithdrawDetail);
    }

    /**
     * 修改用户提现记录
     *
     * @param userWithdrawDetail 用户提现记录
     * @return 结果
     */
    @Override
    public AjaxResult updateUserWithdrawDetail(UserWithdrawDetail userWithdrawDetail)
    {
        AjaxResult ajaxResult=AjaxResult.success();
        UserWithdrawDetail detail= selectUserWithdrawDetailById(userWithdrawDetail.getId());
        if("02".equals(detail.getApplyStatus())){
            return AjaxResult.error("该提现记录已经审核通过");
        }
        if("03".equals(detail.getApplyStatus())){
            return AjaxResult.error("该提现记录已经审核拒绝");
        }
        userWithdrawDetail.setWithdrawAmount(detail.getWithdrawAmount());
        userWithdrawDetail.setApproveUser(SecurityUtils.getUsername());
        userWithdrawDetail.setApproveTime(DateUtils.getNowDate());
        userWithdrawDetail.setUpdateBy(SecurityUtils.getUsername());
        userWithdrawDetail.setUpdateTime(DateUtils.getNowDate());
        if("02".equals(userWithdrawDetail.getApplyStatus())){

            SysUser sysUser=sysUserService.selectUserById(detail.getUserId());
            System.out.println("getFreezeAmount"+sysUser.getFreezeAmount());
            System.out.println("getWithdrawAmount"+userWithdrawDetail.getWithdrawAmount());
            if(sysUser.getFreezeAmount()<userWithdrawDetail.getWithdrawAmount()){
                throw new CustomException("提现金额异常");
            }
            //sysUser.setFreezeAmount(sysUser.getFreezeAmount()-userWithdrawDetail.getWithdrawAmount());
            //sysUser.setUpdateTime(DateUtils.getNowDate());
            //sysUser.setUpdateBy(SecurityUtils.getUsername());
            //sysUserService.updateUserFreezeAccount(sysUser);
        }
        else  if("03".equals(userWithdrawDetail.getApplyStatus())){
            SysUser sysUser=sysUserService.selectUserById(detail.getUserId());
            System.out.println("getFreezeAmount"+sysUser.getFreezeAmount());
            System.out.println("getWithdrawAmount"+userWithdrawDetail.getWithdrawAmount());
            if(sysUser.getFreezeAmount()<userWithdrawDetail.getWithdrawAmount()){
                throw new CustomException("提现金额异常");
            }
            sysUser.setIncomeAmount(sysUser.getIncomeAmount()+userWithdrawDetail.getWithdrawAmount());
            sysUser.setFreezeAmount(sysUser.getFreezeAmount()-userWithdrawDetail.getWithdrawAmount());
            sysUser.setAccountAmount(sysUser.getAccountAmount()+userWithdrawDetail.getWithdrawAmount());
            sysUser.setUpdateTime(DateUtils.getNowDate());
            sysUser.setUpdateBy(SecurityUtils.getUsername());
            sysUserService.updateUserBackAccount(sysUser);
        }
        userWithdrawDetail.setUpdateTime(DateUtils.getNowDate());
        int result= userWithdrawDetailMapper.updateUserWithdrawDetail(userWithdrawDetail);
        if(result>0){
            return ajaxResult;
        }else{
            return AjaxResult.error("操作失败");
        }
    }

    /**
     * 批量删除用户提现记录
     *
     * @param ids 需要删除的用户提现记录主键
     * @return 结果
     */
    @Override
    public int deleteUserWithdrawDetailByIds(Long[] ids)
    {
        return userWithdrawDetailMapper.deleteUserWithdrawDetailByIds(ids);
    }

    /**
     * 删除用户提现记录信息
     *
     * @param id 用户提现记录主键
     * @return 结果
     */
    @Override
    public int deleteUserWithdrawDetailById(Long id)
    {
        return userWithdrawDetailMapper.deleteUserWithdrawDetailById(id);
    }

    @Transactional
    @Override
    public void paymentWithdrawAmount(SysUser currentUser, UserWithdrawDetail detail) {
        currentUser.setUpdateBy(SecurityUtils.getUsername());
        currentUser.setUpdateTime(DateUtils.getNowDate());
        currentUser.setFreezeAmount(currentUser.getFreezeAmount()-detail.getWithdrawAmount());
        sysUserService.updateUserFreezeAccount(currentUser);
        detail.setApplyStatus("04");
        detail.setPaymentUser(SecurityUtils.getUsername());
        detail.setPaymentTime(DateUtils.getNowDate());
        detail.setUpdateBy(SecurityUtils.getUsername());
        detail.setUpdateTime(DateUtils.getNowDate());
        userWithdrawDetailMapper.updateUserWithdrawDetail(detail);
    }
}
