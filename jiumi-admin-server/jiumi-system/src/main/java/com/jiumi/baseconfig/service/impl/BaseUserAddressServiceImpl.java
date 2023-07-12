package com.jiumi.baseconfig.service.impl;

import java.util.List;
import com.jiumi.common.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.jiumi.baseconfig.mapper.BaseUserAddressMapper;
import com.jiumi.baseconfig.domain.BaseUserAddress;
import com.jiumi.baseconfig.service.IBaseUserAddressService;

/**
 * 用户地址Service业务层处理
 *
 * @author jiumi
 * @date 2021-09-19
 */
@Service
public class BaseUserAddressServiceImpl implements IBaseUserAddressService
{
    @Autowired
    private BaseUserAddressMapper baseUserAddressMapper;

    /**
     * 查询用户地址
     *
     * @param id 用户地址主键
     * @return 用户地址
     */
    @Override
    public BaseUserAddress selectBaseUserAddressById(String id)
    {
        return baseUserAddressMapper.selectBaseUserAddressById(id);
    }

    /**
     * 查询用户地址列表
     *
     * @param baseUserAddress 用户地址
     * @return 用户地址
     */
    @Override
    public List<BaseUserAddress> selectBaseUserAddressList(BaseUserAddress baseUserAddress)
    {
        return baseUserAddressMapper.selectBaseUserAddressList(baseUserAddress);
    }

    /**
     * 新增用户地址
     *
     * @param baseUserAddress 用户地址
     * @return 结果
     */
    @Override
    public int insertBaseUserAddress(BaseUserAddress baseUserAddress)
    {
        baseUserAddress.setCreateTime(DateUtils.getNowDate());
        return baseUserAddressMapper.insertBaseUserAddress(baseUserAddress);
    }

    /**
     * 修改用户地址
     *
     * @param baseUserAddress 用户地址
     * @return 结果
     */
    @Override
    public int updateBaseUserAddress(BaseUserAddress baseUserAddress)
    {
        baseUserAddress.setUpdateTime(DateUtils.getNowDate());
        return baseUserAddressMapper.updateBaseUserAddress(baseUserAddress);
    }

    /**
     * 批量删除用户地址
     *
     * @param ids 需要删除的用户地址主键
     * @return 结果
     */
    @Override
    public int deleteBaseUserAddressByIds(String[] ids)
    {
        return baseUserAddressMapper.deleteBaseUserAddressByIds(ids);
    }

    /**
     * 删除用户地址信息
     *
     * @param id 用户地址主键
     * @return 结果
     */
    @Override
    public int deleteBaseUserAddressById(String id)
    {
        return baseUserAddressMapper.deleteBaseUserAddressById(id);
    }

    @Override
    public void updateAddressCancelDefault(BaseUserAddress user) {
        baseUserAddressMapper.updateAddressCancelDefault(user);
    }
}
