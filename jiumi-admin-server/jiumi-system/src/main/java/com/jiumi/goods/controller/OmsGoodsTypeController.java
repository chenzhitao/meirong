package com.jiumi.goods.controller;

import java.util.List;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.jiumi.common.annotation.Log;
import com.jiumi.common.core.controller.BaseController;
import com.jiumi.common.core.domain.AjaxResult;
import com.jiumi.common.enums.BusinessType;
import com.jiumi.goods.domain.OmsGoodsType;
import com.jiumi.goods.service.IOmsGoodsTypeService;
import com.jiumi.common.utils.poi.ExcelUtil;
import com.jiumi.common.core.page.TableDataInfo;

/**
 * 商品类型Controller
 *
 * @author jiumi
 * @date 2021-11-19
 */
@RestController
@RequestMapping("/goods/type")
public class OmsGoodsTypeController extends BaseController
{
    @Autowired
    private IOmsGoodsTypeService omsGoodsTypeService;

    /**
     * 查询商品类型列表
     */
    @GetMapping("/list")
    public TableDataInfo list(OmsGoodsType omsGoodsType)
    {
        startPage();
        List<OmsGoodsType> list = omsGoodsTypeService.selectOmsGoodsTypeList(omsGoodsType);
        return getDataTable(list);
    }

    /**
     * 导出商品类型列表
     */
    @PreAuthorize("@ss.hasPermi('goods:type:export')")
    @Log(title = "商品类型", businessType = BusinessType.EXPORT)
    @GetMapping("/export")
    public AjaxResult export(OmsGoodsType omsGoodsType)
    {
        List<OmsGoodsType> list = omsGoodsTypeService.selectOmsGoodsTypeList(omsGoodsType);
        ExcelUtil<OmsGoodsType> util = new ExcelUtil<OmsGoodsType>(OmsGoodsType.class);
        return util.exportExcel(list, "商品类型数据");
    }

    /**
     * 获取商品类型详细信息
     */
    @PreAuthorize("@ss.hasPermi('goods:type:query')")
    @GetMapping(value = "/{id}")
    public AjaxResult getInfo(@PathVariable("id") String id)
    {
        return AjaxResult.success(omsGoodsTypeService.selectOmsGoodsTypeById(id));
    }

    /**
     * 新增商品类型
     */
    @PreAuthorize("@ss.hasPermi('goods:type:add')")
    @Log(title = "商品类型", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody OmsGoodsType omsGoodsType)
    {
        return toAjax(omsGoodsTypeService.insertOmsGoodsType(omsGoodsType));
    }

    /**
     * 修改商品类型
     */
    @PreAuthorize("@ss.hasPermi('goods:type:edit')")
    @Log(title = "商品类型", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody OmsGoodsType omsGoodsType)
    {
        return toAjax(omsGoodsTypeService.updateOmsGoodsType(omsGoodsType));
    }

    /**
     * 删除商品类型
     */
    @PreAuthorize("@ss.hasPermi('goods:type:remove')")
    @Log(title = "商品类型", businessType = BusinessType.DELETE)
	@DeleteMapping("/{ids}")
    public AjaxResult remove(@PathVariable String[] ids)
    {
        return toAjax(omsGoodsTypeService.deleteOmsGoodsTypeByIds(ids));
    }
}
