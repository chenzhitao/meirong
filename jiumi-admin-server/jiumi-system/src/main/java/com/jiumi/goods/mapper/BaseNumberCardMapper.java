package com.jiumi.goods.mapper;

import java.util.List;

import com.jiumi.goods.domain.BaseNumberCard;

/**
 * 次卡Mapper接口
 *
 * @author jiumi
 * @date 2022-01-26
 */
public interface BaseNumberCardMapper
{
    /**
     * 查询次卡
     *
     * @param id 次卡主键
     * @return 次卡
     */
    BaseNumberCard selectBaseNumberCardById(Long id);

    /**
     * 查询次卡列表
     *
     * @param baseNumberCard 次卡
     * @return 次卡集合
     */
    List<BaseNumberCard> selectBaseNumberCardList(BaseNumberCard baseNumberCard);

    /**
     * 新增次卡
     *
     * @param baseNumberCard 次卡
     * @return 结果
     */
    int insertBaseNumberCard(BaseNumberCard baseNumberCard);

    /**
     * 修改次卡
     *
     * @param baseNumberCard 次卡
     * @return 结果
     */
    int updateBaseNumberCard(BaseNumberCard baseNumberCard);

    /**
     * 删除次卡
     *
     * @param id 次卡主键
     * @return 结果
     */
    int deleteBaseNumberCardById(Long id);

    /**
     * 批量删除次卡
     *
     * @param ids 需要删除的数据主键集合
     * @return 结果
     */
    int deleteBaseNumberCardByIds(Long[] ids);
}
