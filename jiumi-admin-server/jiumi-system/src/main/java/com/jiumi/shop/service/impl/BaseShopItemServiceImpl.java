package com.jiumi.shop.service.impl;

import java.util.List;
import com.jiumi.common.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.jiumi.shop.mapper.BaseShopItemMapper;
import com.jiumi.shop.domain.BaseShopItem;
import com.jiumi.shop.service.IBaseShopItemService;

/**
 * 项目管理Service业务层处理
 *
 * @author jiumi
 * @date 2021-11-19
 */
@Service
public class BaseShopItemServiceImpl implements IBaseShopItemService
{
    @Autowired
    private BaseShopItemMapper baseShopItemMapper;

    /**
     * 查询项目管理
     *
     * @param id 项目管理主键
     * @return 项目管理
     */
    @Override
    public BaseShopItem selectBaseShopItemById(String id)
    {
        return baseShopItemMapper.selectBaseShopItemById(id);
    }

    /**
     * 查询项目管理列表
     *
     * @param baseShopItem 项目管理
     * @return 项目管理
     */
    @Override
    public List<BaseShopItem> selectBaseShopItemList(BaseShopItem baseShopItem)
    {
        return baseShopItemMapper.selectBaseShopItemList(baseShopItem);
    }

    /**
     * 新增项目管理
     *
     * @param baseShopItem 项目管理
     * @return 结果
     */
    @Override
    public int insertBaseShopItem(BaseShopItem baseShopItem)
    {
        baseShopItem.setCreateTime(DateUtils.getNowDate());
        return baseShopItemMapper.insertBaseShopItem(baseShopItem);
    }

    /**
     * 修改项目管理
     *
     * @param baseShopItem 项目管理
     * @return 结果
     */
    @Override
    public int updateBaseShopItem(BaseShopItem baseShopItem)
    {
        baseShopItem.setUpdateTime(DateUtils.getNowDate());
        return baseShopItemMapper.updateBaseShopItem(baseShopItem);
    }

    /**
     * 批量删除项目管理
     *
     * @param ids 需要删除的项目管理主键
     * @return 结果
     */
    @Override
    public int deleteBaseShopItemByIds(String[] ids)
    {
        return baseShopItemMapper.deleteBaseShopItemByIds(ids);
    }

    /**
     * 删除项目管理信息
     *
     * @param id 项目管理主键
     * @return 结果
     */
    @Override
    public int deleteBaseShopItemById(String id)
    {
        return baseShopItemMapper.deleteBaseShopItemById(id);
    }

    @Override
    public List<BaseShopItem> selectApplyShopItemList() {
        return baseShopItemMapper.selectApplyShopItemList();
    }

}
