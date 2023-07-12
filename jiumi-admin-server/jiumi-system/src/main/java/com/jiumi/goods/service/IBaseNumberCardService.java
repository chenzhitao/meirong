package com.jiumi.goods.service;

import java.util.List;

import com.jiumi.goods.domain.BaseNumberCard;

/**
 * 次卡Service接口
 *
 * @author jiumi
 * @date 2022-01-26
 */
public interface IBaseNumberCardService
{
    /**
     * 查询次卡
     *
     * @param id 次卡主键
     * @return 次卡
     */
    public BaseNumberCard selectBaseNumberCardById(Long id);

    /**
     * 查询次卡列表
     *
     * @param baseNumberCard 次卡
     * @return 次卡集合
     */
    public List<BaseNumberCard> selectBaseNumberCardList(BaseNumberCard baseNumberCard);

    /**
     * 新增次卡
     *
     * @param baseNumberCard 次卡
     * @return 结果
     */
    public int insertBaseNumberCard(BaseNumberCard baseNumberCard);

    /**
     * 修改次卡
     *
     * @param baseNumberCard 次卡
     * @return 结果
     */
    public int updateBaseNumberCard(BaseNumberCard baseNumberCard);

    /**
     * 批量删除次卡
     *
     * @param ids 需要删除的次卡主键集合
     * @return 结果
     */
    public int deleteBaseNumberCardByIds(Long[] ids);

    /**
     * 删除次卡信息
     *
     * @param id 次卡主键
     * @return 结果
     */
    public int deleteBaseNumberCardById(Long id);
}
