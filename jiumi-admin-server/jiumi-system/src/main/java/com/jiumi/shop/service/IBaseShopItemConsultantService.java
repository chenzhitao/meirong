package com.jiumi.shop.service;

import java.util.List;
import com.jiumi.shop.domain.BaseShopItemConsultant;

/**
 * 项目顾问Service接口
 *
 * @author jiumi
 * @date 2021-11-25
 */
public interface IBaseShopItemConsultantService
{
    /**
     * 查询项目顾问
     *
     * @param id 项目顾问主键
     * @return 项目顾问
     */
    public BaseShopItemConsultant selectBaseShopItemConsultantById(String id);

    /**
     * 查询项目顾问列表
     *
     * @param baseShopItemConsultant 项目顾问
     * @return 项目顾问集合
     */
    public List<BaseShopItemConsultant> selectBaseShopItemConsultantList(BaseShopItemConsultant baseShopItemConsultant);

    /**
     * 新增项目顾问
     *
     * @param baseShopItemConsultant 项目顾问
     * @return 结果
     */
    public int insertBaseShopItemConsultant(BaseShopItemConsultant baseShopItemConsultant);

    /**
     * 修改项目顾问
     *
     * @param baseShopItemConsultant 项目顾问
     * @return 结果
     */
    public int updateBaseShopItemConsultant(BaseShopItemConsultant baseShopItemConsultant);

    /**
     * 批量删除项目顾问
     *
     * @param ids 需要删除的项目顾问主键集合
     * @return 结果
     */
    public int deleteBaseShopItemConsultantByIds(String[] ids);

    /**
     * 删除项目顾问信息
     *
     * @param id 项目顾问主键
     * @return 结果
     */
    public int deleteBaseShopItemConsultantById(String id);

    List<BaseShopItemConsultant> selectBaseShopItemConsultantByItemId(String id);

    BaseShopItemConsultant selectConsultantListStr();
}
