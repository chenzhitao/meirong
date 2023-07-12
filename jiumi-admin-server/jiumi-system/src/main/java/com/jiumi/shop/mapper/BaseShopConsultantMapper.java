package com.jiumi.shop.mapper;

import java.util.List;
import com.jiumi.shop.domain.BaseShopConsultant;

/**
 * 顾问Mapper接口
 *
 * @author jiumi
 * @date 2021-11-19
 */
public interface BaseShopConsultantMapper
{
    /**
     * 查询顾问
     *
     * @param id 顾问主键
     * @return 顾问
     */
    public BaseShopConsultant selectBaseShopConsultantById(String id);

    /**
     * 查询顾问列表
     *
     * @param baseShopConsultant 顾问
     * @return 顾问集合
     */
    public List<BaseShopConsultant> selectBaseShopConsultantList(BaseShopConsultant baseShopConsultant);

    /**
     * 新增顾问
     *
     * @param baseShopConsultant 顾问
     * @return 结果
     */
    public int insertBaseShopConsultant(BaseShopConsultant baseShopConsultant);

    /**
     * 修改顾问
     *
     * @param baseShopConsultant 顾问
     * @return 结果
     */
    public int updateBaseShopConsultant(BaseShopConsultant baseShopConsultant);

    /**
     * 删除顾问
     *
     * @param id 顾问主键
     * @return 结果
     */
    public int deleteBaseShopConsultantById(String id);

    /**
     * 批量删除顾问
     *
     * @param ids 需要删除的数据主键集合
     * @return 结果
     */
    public int deleteBaseShopConsultantByIds(String[] ids);
}
