package com.jiumi.shop.service.impl;

import java.util.List;
import com.jiumi.common.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.jiumi.shop.mapper.BaseShopItemConsultantMapper;
import com.jiumi.shop.domain.BaseShopItemConsultant;
import com.jiumi.shop.service.IBaseShopItemConsultantService;

/**
 * 项目顾问Service业务层处理
 *
 * @author jiumi
 * @date 2021-11-25
 */
@Service
public class BaseShopItemConsultantServiceImpl implements IBaseShopItemConsultantService
{
    @Autowired
    private BaseShopItemConsultantMapper baseShopItemConsultantMapper;

    /**
     * 查询项目顾问
     *
     * @param id 项目顾问主键
     * @return 项目顾问
     */
    @Override
    public BaseShopItemConsultant selectBaseShopItemConsultantById(String id)
    {
        return baseShopItemConsultantMapper.selectBaseShopItemConsultantById(id);
    }

    /**
     * 查询项目顾问列表
     *
     * @param baseShopItemConsultant 项目顾问
     * @return 项目顾问
     */
    @Override
    public List<BaseShopItemConsultant> selectBaseShopItemConsultantList(BaseShopItemConsultant baseShopItemConsultant)
    {
        return baseShopItemConsultantMapper.selectBaseShopItemConsultantList(baseShopItemConsultant);
    }

    /**
     * 新增项目顾问
     *
     * @param baseShopItemConsultant 项目顾问
     * @return 结果
     */
    @Override
    public int insertBaseShopItemConsultant(BaseShopItemConsultant baseShopItemConsultant)
    {
        baseShopItemConsultant.setCreateTime(DateUtils.getNowDate());
        return baseShopItemConsultantMapper.insertBaseShopItemConsultant(baseShopItemConsultant);
    }

    /**
     * 修改项目顾问
     *
     * @param baseShopItemConsultant 项目顾问
     * @return 结果
     */
    @Override
    public int updateBaseShopItemConsultant(BaseShopItemConsultant baseShopItemConsultant)
    {
        return baseShopItemConsultantMapper.updateBaseShopItemConsultant(baseShopItemConsultant);
    }

    /**
     * 批量删除项目顾问
     *
     * @param ids 需要删除的项目顾问主键
     * @return 结果
     */
    @Override
    public int deleteBaseShopItemConsultantByIds(String[] ids)
    {
        return baseShopItemConsultantMapper.deleteBaseShopItemConsultantByIds(ids);
    }

    /**
     * 删除项目顾问信息
     *
     * @param id 项目顾问主键
     * @return 结果
     */
    @Override
    public int deleteBaseShopItemConsultantById(String id)
    {
        return baseShopItemConsultantMapper.deleteBaseShopItemConsultantById(id);
    }

    @Override
    public List<BaseShopItemConsultant> selectBaseShopItemConsultantByItemId(String id) {
        return baseShopItemConsultantMapper.selectBaseShopItemConsultantByItemId(id);
    }

    @Override
    public BaseShopItemConsultant selectConsultantListStr() {
        return baseShopItemConsultantMapper.selectConsultantListStr();
    }
}
