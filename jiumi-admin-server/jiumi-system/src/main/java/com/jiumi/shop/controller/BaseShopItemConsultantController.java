package com.jiumi.shop.controller;

import java.util.List;

import com.jiumi.common.core.domain.entity.SysUser;
import com.jiumi.system.service.ISysUserService;
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
import com.jiumi.shop.domain.BaseShopItemConsultant;
import com.jiumi.shop.service.IBaseShopItemConsultantService;
import com.jiumi.common.utils.poi.ExcelUtil;
import com.jiumi.common.core.page.TableDataInfo;

/**
 * 项目顾问Controller
 *
 * @author jiumi
 * @date 2021-11-25
 */
@RestController
@RequestMapping("/shop/itemconsultant")
public class BaseShopItemConsultantController extends BaseController
{
    @Autowired
    private IBaseShopItemConsultantService baseShopItemConsultantService;

    @Autowired
    private ISysUserService userService;

    /**
     * 查询项目顾问列表
     */
    @PreAuthorize("@ss.hasPermi('shop:itemconsultant:list')")
    @GetMapping("/list")
    public TableDataInfo list(BaseShopItemConsultant baseShopItemConsultant)
    {
        startPage();
        List<BaseShopItemConsultant> list = baseShopItemConsultantService.selectBaseShopItemConsultantList(baseShopItemConsultant);
        return getDataTable(list);
    }

    @GetMapping("/getAllConsultantlist")
    public TableDataInfo getAllConsultantlist(BaseShopItemConsultant baseShopItemConsultant)
    {
        startPage();
        List<SysUser> list = userService.selectConsultantUserList(baseShopItemConsultant.getShopId());
        return getDataTable(list);
    }

    /**
     * 导出项目顾问列表
     */
    @PreAuthorize("@ss.hasPermi('shop:itemconsultant:export')")
    @Log(title = "项目顾问", businessType = BusinessType.EXPORT)
    @GetMapping("/export")
    public AjaxResult export(BaseShopItemConsultant baseShopItemConsultant)
    {
        List<BaseShopItemConsultant> list = baseShopItemConsultantService.selectBaseShopItemConsultantList(baseShopItemConsultant);
        ExcelUtil<BaseShopItemConsultant> util = new ExcelUtil<BaseShopItemConsultant>(BaseShopItemConsultant.class);
        return util.exportExcel(list, "项目顾问数据");
    }

    /**
     * 获取项目顾问详细信息
     */
    @PreAuthorize("@ss.hasPermi('shop:itemconsultant:query')")
    @GetMapping(value = "/{id}")
    public AjaxResult getInfo(@PathVariable("id") String id)
    {
        return AjaxResult.success(baseShopItemConsultantService.selectBaseShopItemConsultantById(id));
    }

    /**
     * 新增项目顾问
     */
    @PreAuthorize("@ss.hasPermi('shop:itemconsultant:add')")
    @Log(title = "项目顾问", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody BaseShopItemConsultant baseShopItemConsultant)
    {
        return toAjax(baseShopItemConsultantService.insertBaseShopItemConsultant(baseShopItemConsultant));
    }

    /**
     * 修改项目顾问
     */
    @PreAuthorize("@ss.hasPermi('shop:itemconsultant:edit')")
    @Log(title = "项目顾问", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody BaseShopItemConsultant baseShopItemConsultant)
    {
        return toAjax(baseShopItemConsultantService.updateBaseShopItemConsultant(baseShopItemConsultant));
    }

    /**
     * 删除项目顾问
     */
    @PreAuthorize("@ss.hasPermi('shop:itemconsultant:remove')")
    @Log(title = "项目顾问", businessType = BusinessType.DELETE)
	@DeleteMapping("/{ids}")
    public AjaxResult remove(@PathVariable String[] ids)
    {
        return toAjax(baseShopItemConsultantService.deleteBaseShopItemConsultantByIds(ids));
    }
}
