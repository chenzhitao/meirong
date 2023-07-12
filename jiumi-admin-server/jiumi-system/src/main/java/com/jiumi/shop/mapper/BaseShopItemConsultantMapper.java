package com.jiumi.shop.mapper;

import java.util.List;
import com.jiumi.shop.domain.BaseShopItemConsultant;

/**
 * 项目顾问Mapper接口
 *
 * @author jiumi
 * @date 2021-11-25
 */
public interface BaseShopItemConsultantMapper
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
     * 删除项目顾问
     *
     * @param id 项目顾问主键
     * @return 结果
     */
    public int deleteBaseShopItemConsultantById(String id);

    /**
     * 批量删除项目顾问
     *
     * @param ids 需要删除的数据主键集合
     * @return 结果
     */
    public int deleteBaseShopItemConsultantByIds(String[] ids);

    List<BaseShopItemConsultant> selectBaseShopItemConsultantByItemId(String id);

    int deleteBaseShopItemConsultantByShopId(String shopId);

    int insertBatchBaseShopItemConsultant(List<BaseShopItemConsultant> baseShopItemConsultantList);

    BaseShopItemConsultant selectConsultantListStr();
}
