package com.jiumi.goods.service.impl;

import java.util.List;
import com.jiumi.common.utils.DateUtils;
import com.jiumi.goods.service.IBaseNumberCardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.jiumi.goods.mapper.BaseNumberCardMapper;
import com.jiumi.goods.domain.BaseNumberCard;

/**
 * 次卡Service业务层处理
 *
 * @author jiumi
 * @date 2022-01-26
 */
@Service
public class BaseNumberCardServiceImpl implements IBaseNumberCardService
{
    @Autowired
    private BaseNumberCardMapper baseNumberCardMapper;

    /**
     * 查询次卡
     *
     * @param id 次卡主键
     * @return 次卡
     */
    @Override
    public BaseNumberCard selectBaseNumberCardById(Long id)
    {
        return baseNumberCardMapper.selectBaseNumberCardById(id);
    }

    /**
     * 查询次卡列表
     *
     * @param baseNumberCard 次卡
     * @return 次卡
     */
    @Override
    public List<BaseNumberCard> selectBaseNumberCardList(BaseNumberCard baseNumberCard)
    {
        return baseNumberCardMapper.selectBaseNumberCardList(baseNumberCard);
    }

    /**
     * 新增次卡
     *
     * @param baseNumberCard 次卡
     * @return 结果
     */
    @Override
    public int insertBaseNumberCard(BaseNumberCard baseNumberCard)
    {
        baseNumberCard.setCreateTime(DateUtils.getNowDate());
        return baseNumberCardMapper.insertBaseNumberCard(baseNumberCard);
    }

    /**
     * 修改次卡
     *
     * @param baseNumberCard 次卡
     * @return 结果
     */
    @Override
    public int updateBaseNumberCard(BaseNumberCard baseNumberCard)
    {
        baseNumberCard.setUpdateTime(DateUtils.getNowDate());
        return baseNumberCardMapper.updateBaseNumberCard(baseNumberCard);
    }

    /**
     * 批量删除次卡
     *
     * @param ids 需要删除的次卡主键
     * @return 结果
     */
    @Override
    public int deleteBaseNumberCardByIds(Long[] ids)
    {
        return baseNumberCardMapper.deleteBaseNumberCardByIds(ids);
    }

    /**
     * 删除次卡信息
     *
     * @param id 次卡主键
     * @return 结果
     */
    @Override
    public int deleteBaseNumberCardById(Long id)
    {
        return baseNumberCardMapper.deleteBaseNumberCardById(id);
    }
}
