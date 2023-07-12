package com.jiumi.baseconfig.mapper;

import java.util.List;
import com.jiumi.baseconfig.domain.BaseUserAddress;

/**
 * 用户地址Mapper接口
 *
 * @author jiumi
 * @date 2021-09-19
 */
public interface BaseUserAddressMapper
{
    /**
     * 查询用户地址
     *
     * @param id 用户地址主键
     * @return 用户地址
     */
    public BaseUserAddress selectBaseUserAddressById(String id);

    /**
     * 查询用户地址列表
     *
     * @param baseUserAddress 用户地址
     * @return 用户地址集合
     */
    public List<BaseUserAddress> selectBaseUserAddressList(BaseUserAddress baseUserAddress);

    /**
     * 新增用户地址
     *
     * @param baseUserAddress 用户地址
     * @return 结果
     */
    public int insertBaseUserAddress(BaseUserAddress baseUserAddress);

    /**
     * 修改用户地址
     *
     * @param baseUserAddress 用户地址
     * @return 结果
     */
    public int updateBaseUserAddress(BaseUserAddress baseUserAddress);

    /**
     * 删除用户地址
     *
     * @param id 用户地址主键
     * @return 结果
     */
    public int deleteBaseUserAddressById(String id);

    /**
     * 批量删除用户地址
     *
     * @param ids 需要删除的数据主键集合
     * @return 结果
     */
    public int deleteBaseUserAddressByIds(String[] ids);

    void updateAddressCancelDefault(BaseUserAddress user);
}
