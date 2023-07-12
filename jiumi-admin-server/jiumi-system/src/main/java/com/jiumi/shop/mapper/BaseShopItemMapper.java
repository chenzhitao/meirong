package com.jiumi.shop.mapper;

import java.util.List;
import com.jiumi.shop.domain.BaseShopItem;

/**
 * 项目管理Mapper接口
 *
 * @author jiumi
 * @date 2021-11-19
 */
public interface BaseShopItemMapper
{
    /**
     * 查询项目管理
     *
     * @param id 项目管理主键
     * @return 项目管理
     */
    public BaseShopItem selectBaseShopItemById(String id);

    /**
     * 查询项目管理列表
     *
     * @param baseShopItem 项目管理
     * @return 项目管理集合
     */
    public List<BaseShopItem> selectBaseShopItemList(BaseShopItem baseShopItem);

    /**
     * 新增项目管理
     *
     * @param baseShopItem 项目管理
     * @return 结果
     */
    public int insertBaseShopItem(BaseShopItem baseShopItem);

    /**
     * 修改项目管理
     *
     * @param baseShopItem 项目管理
     * @return 结果
     */
    public int updateBaseShopItem(BaseShopItem baseShopItem);

    /**
     * 删除项目管理
     *
     * @param id 项目管理主键
     * @return 结果
     */
    public int deleteBaseShopItemById(String id);

    /**
     * 批量删除项目管理
     *
     * @param ids 需要删除的数据主键集合
     * @return 结果
     */
    public int deleteBaseShopItemByIds(String[] ids);

    List<BaseShopItem> selectApplyShopItemList();

}
