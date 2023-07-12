package com.jiumi.business.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.jiumi.business.mapper.OmsVipInfoMapper;
import com.jiumi.business.domain.OmsVipInfo;
import com.jiumi.business.service.IOmsVipInfoService;

/**
 * 会员登记配置Service业务层处理
 *
 * @author jiumi
 * @date 2021-12-23
 */
@Service
public class OmsVipInfoServiceImpl implements IOmsVipInfoService
{
    @Autowired
    private OmsVipInfoMapper omsVipInfoMapper;

    /**
     * 查询会员登记配置
     *
     * @param vipLevel 会员登记配置主键
     * @return 会员登记配置
     */
    @Override
    public OmsVipInfo selectOmsVipInfoByVipLevel(Long vipLevel)
    {
        return omsVipInfoMapper.selectOmsVipInfoByVipLevel(vipLevel);
    }

    /**
     * 查询会员登记配置列表
     *
     * @param omsVipInfo 会员登记配置
     * @return 会员登记配置
     */
    @Override
    public List<OmsVipInfo> selectOmsVipInfoList(OmsVipInfo omsVipInfo)
    {
        return omsVipInfoMapper.selectOmsVipInfoList(omsVipInfo);
    }

    /**
     * 新增会员登记配置
     *
     * @param omsVipInfo 会员登记配置
     * @return 结果
     */
    @Override
    public int insertOmsVipInfo(OmsVipInfo omsVipInfo)
    {
        return omsVipInfoMapper.insertOmsVipInfo(omsVipInfo);
    }

    /**
     * 修改会员登记配置
     *
     * @param omsVipInfo 会员登记配置
     * @return 结果
     */
    @Override
    public int updateOmsVipInfo(OmsVipInfo omsVipInfo)
    {
        return omsVipInfoMapper.updateOmsVipInfo(omsVipInfo);
    }

    /**
     * 批量删除会员登记配置
     *
     * @param vipLevels 需要删除的会员登记配置主键
     * @return 结果
     */
    @Override
    public int deleteOmsVipInfoByVipLevels(Long[] vipLevels)
    {
        return omsVipInfoMapper.deleteOmsVipInfoByVipLevels(vipLevels);
    }

    /**
     * 删除会员登记配置信息
     *
     * @param vipLevel 会员登记配置主键
     * @return 结果
     */
    @Override
    public int deleteOmsVipInfoByVipLevel(Long vipLevel)
    {
        return omsVipInfoMapper.deleteOmsVipInfoByVipLevel(vipLevel);
    }
}
