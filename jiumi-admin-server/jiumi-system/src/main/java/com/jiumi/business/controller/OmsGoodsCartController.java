package com.jiumi.business.controller;

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
import com.jiumi.business.domain.OmsGoodsCart;
import com.jiumi.business.service.IOmsGoodsCartService;
import com.jiumi.common.utils.poi.ExcelUtil;
import com.jiumi.common.core.page.TableDataInfo;

/**
 * 购物车Controller
 *
 * @author jiumi
 * @date 2021-11-19
 */
@RestController
@RequestMapping("/business/cart")
public class OmsGoodsCartController extends BaseController
{
    @Autowired
    private IOmsGoodsCartService omsGoodsCartService;

    /**
     * 查询购物车列表
     */
    @PreAuthorize("@ss.hasPermi('business:cart:list')")
    @GetMapping("/list")
    public TableDataInfo list(OmsGoodsCart omsGoodsCart)
    {
        startPage();
        List<OmsGoodsCart> list = omsGoodsCartService.selectOmsGoodsCartList(omsGoodsCart);
        return getDataTable(list);
    }

    /**
     * 导出购物车列表
     */
    @PreAuthorize("@ss.hasPermi('business:cart:export')")
    @Log(title = "购物车", businessType = BusinessType.EXPORT)
    @GetMapping("/export")
    public AjaxResult export(OmsGoodsCart omsGoodsCart)
    {
        List<OmsGoodsCart> list = omsGoodsCartService.selectOmsGoodsCartList(omsGoodsCart);
        ExcelUtil<OmsGoodsCart> util = new ExcelUtil<OmsGoodsCart>(OmsGoodsCart.class);
        return util.exportExcel(list, "购物车数据");
    }

    /**
     * 获取购物车详细信息
     */
    @PreAuthorize("@ss.hasPermi('business:cart:query')")
    @GetMapping(value = "/{id}")
    public AjaxResult getInfo(@PathVariable("id") String id)
    {
        return AjaxResult.success(omsGoodsCartService.selectOmsGoodsCartById(id));
    }

    /**
     * 新增购物车
     */
    @PreAuthorize("@ss.hasPermi('business:cart:add')")
    @Log(title = "购物车", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody OmsGoodsCart omsGoodsCart)
    {
        return toAjax(omsGoodsCartService.insertOmsGoodsCart(omsGoodsCart));
    }

    /**
     * 修改购物车
     */
    @PreAuthorize("@ss.hasPermi('business:cart:edit')")
    @Log(title = "购物车", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody OmsGoodsCart omsGoodsCart)
    {
        return toAjax(omsGoodsCartService.updateOmsGoodsCart(omsGoodsCart));
    }

    /**
     * 删除购物车
     */
    @PreAuthorize("@ss.hasPermi('business:cart:remove')")
    @Log(title = "购物车", businessType = BusinessType.DELETE)
	@DeleteMapping("/{ids}")
    public AjaxResult remove(@PathVariable String[] ids)
    {
        return toAjax(omsGoodsCartService.deleteOmsGoodsCartByIds(ids));
    }
}
