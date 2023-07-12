package com.jiumi.business.service;

import java.util.List;
import com.jiumi.business.domain.OmsVipInfo;

/**
 * 会员登记配置Service接口
 *
 * @author jiumi
 * @date 2021-12-23
 */
public interface IOmsVipInfoService
{
    /**
     * 查询会员登记配置
     *
     * @param vipLevel 会员登记配置主键
     * @return 会员登记配置
     */
    public OmsVipInfo selectOmsVipInfoByVipLevel(Long vipLevel);

    /**
     * 查询会员登记配置列表
     *
     * @param omsVipInfo 会员登记配置
     * @return 会员登记配置集合
     */
    public List<OmsVipInfo> selectOmsVipInfoList(OmsVipInfo omsVipInfo);

    /**
     * 新增会员登记配置
     *
     * @param omsVipInfo 会员登记配置
     * @return 结果
     */
    public int insertOmsVipInfo(OmsVipInfo omsVipInfo);

    /**
     * 修改会员登记配置
     *
     * @param omsVipInfo 会员登记配置
     * @return 结果
     */
    public int updateOmsVipInfo(OmsVipInfo omsVipInfo);

    /**
     * 批量删除会员登记配置
     *
     * @param vipLevels 需要删除的会员登记配置主键集合
     * @return 结果
     */
    public int deleteOmsVipInfoByVipLevels(Long[] vipLevels);

    /**
     * 删除会员登记配置信息
     *
     * @param vipLevel 会员登记配置主键
     * @return 结果
     */
    public int deleteOmsVipInfoByVipLevel(Long vipLevel);
}
