package com.jiumi.finance.service;

import java.util.List;
import com.jiumi.finance.domain.UserNumberCardDetail;

/**
 * 购买次卡记录Service接口
 *
 * @author jiumi
 * @date 2022-02-08
 */
public interface IUserNumberCardDetailService
{
    /**
     * 查询购买次卡记录
     *
     * @param id 购买次卡记录主键
     * @return 购买次卡记录
     */
    public UserNumberCardDetail selectUserNumberCardDetailById(Long id);

    /**
     * 查询购买次卡记录列表
     *
     * @param userNumberCardDetail 购买次卡记录
     * @return 购买次卡记录集合
     */
    public List<UserNumberCardDetail> selectUserNumberCardDetailList(UserNumberCardDetail userNumberCardDetail);

    /**
     * 新增购买次卡记录
     *
     * @param userNumberCardDetail 购买次卡记录
     * @return 结果
     */
    public int insertUserNumberCardDetail(UserNumberCardDetail userNumberCardDetail);

    /**
     * 修改购买次卡记录
     *
     * @param userNumberCardDetail 购买次卡记录
     * @return 结果
     */
    public int updateUserNumberCardDetail(UserNumberCardDetail userNumberCardDetail);

    /**
     * 批量删除购买次卡记录
     *
     * @param ids 需要删除的购买次卡记录主键集合
     * @return 结果
     */
    public int deleteUserNumberCardDetailByIds(Long[] ids);

    /**
     * 删除购买次卡记录信息
     *
     * @param id 购买次卡记录主键
     * @return 结果
     */
    public int deleteUserNumberCardDetailById(Long id);

    List<UserNumberCardDetail> selectUserNumberCardDetailListByItemId(UserNumberCardDetail param);

    void addUserNumberCardDetail(String id);

    List<UserNumberCardDetail> selectUserNumberCardDetailListByUserId(UserNumberCardDetail param);
}
