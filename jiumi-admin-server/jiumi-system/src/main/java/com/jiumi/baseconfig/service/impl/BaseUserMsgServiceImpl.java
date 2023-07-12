package com.jiumi.baseconfig.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.jiumi.baseconfig.mapper.BaseUserMsgMapper;
import com.jiumi.baseconfig.domain.BaseUserMsg;
import com.jiumi.baseconfig.service.IBaseUserMsgService;

/**
 * 用户业务消息Service业务层处理
 *
 * @author jiumi
 * @date 2021-09-19
 */
@Service
public class BaseUserMsgServiceImpl implements IBaseUserMsgService
{
    @Autowired
    private BaseUserMsgMapper baseUserMsgMapper;

    /**
     * 查询用户业务消息
     *
     * @param id 用户业务消息主键
     * @return 用户业务消息
     */
    @Override
    public BaseUserMsg selectBaseUserMsgById(String id)
    {
        return baseUserMsgMapper.selectBaseUserMsgById(id);
    }

    /**
     * 查询用户业务消息列表
     *
     * @param baseUserMsg 用户业务消息
     * @return 用户业务消息
     */
    @Override
    public List<BaseUserMsg> selectBaseUserMsgList(BaseUserMsg baseUserMsg)
    {
        return baseUserMsgMapper.selectBaseUserMsgList(baseUserMsg);
    }

    /**
     * 新增用户业务消息
     *
     * @param baseUserMsg 用户业务消息
     * @return 结果
     */
    @Override
    public int insertBaseUserMsg(BaseUserMsg baseUserMsg)
    {
        return baseUserMsgMapper.insertBaseUserMsg(baseUserMsg);
    }

    /**
     * 修改用户业务消息
     *
     * @param baseUserMsg 用户业务消息
     * @return 结果
     */
    @Override
    public int updateBaseUserMsg(BaseUserMsg baseUserMsg)
    {
        return baseUserMsgMapper.updateBaseUserMsg(baseUserMsg);
    }

    /**
     * 批量删除用户业务消息
     *
     * @param ids 需要删除的用户业务消息主键
     * @return 结果
     */
    @Override
    public int deleteBaseUserMsgByIds(String[] ids)
    {
        return baseUserMsgMapper.deleteBaseUserMsgByIds(ids);
    }

    /**
     * 删除用户业务消息信息
     *
     * @param id 用户业务消息主键
     * @return 结果
     */
    @Override
    public int deleteBaseUserMsgById(String id)
    {
        return baseUserMsgMapper.deleteBaseUserMsgById(id);
    }
}
