package com.jiumi.baseconfig.controller;

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
import com.jiumi.baseconfig.domain.BaseBanner;
import com.jiumi.baseconfig.service.IBaseBannerService;
import com.jiumi.common.utils.poi.ExcelUtil;
import com.jiumi.common.core.page.TableDataInfo;

/**
 * 轮播图Controller
 *
 * @author jiumi
 * @date 2021-09-08
 */
@RestController
@RequestMapping("/baseconfig/banner")
public class BaseBannerController extends BaseController
{
    @Autowired
    private IBaseBannerService baseBannerService;

    /**
     * 查询轮播图列表
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:banner:list')")
    @GetMapping("/list")
    public TableDataInfo list(BaseBanner baseBanner)
    {
        startPage();
        List<BaseBanner> list = baseBannerService.selectBaseBannerList(baseBanner);
        return getDataTable(list);
    }

    /**
     * 导出轮播图列表
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:banner:export')")
    @Log(title = "轮播图", businessType = BusinessType.EXPORT)
    @GetMapping("/export")
    public AjaxResult export(BaseBanner baseBanner)
    {
        List<BaseBanner> list = baseBannerService.selectBaseBannerList(baseBanner);
        ExcelUtil<BaseBanner> util = new ExcelUtil<BaseBanner>(BaseBanner.class);
        return util.exportExcel(list, "轮播图数据");
    }

    /**
     * 获取轮播图详细信息
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:banner:query')")
    @GetMapping(value = "/{id}")
    public AjaxResult getInfo(@PathVariable("id") String id)
    {
        return AjaxResult.success(baseBannerService.selectBaseBannerById(id));
    }

    /**
     * 新增轮播图
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:banner:add')")
    @Log(title = "轮播图", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody BaseBanner baseBanner)
    {
        return toAjax(baseBannerService.insertBaseBanner(baseBanner));
    }

    /**
     * 修改轮播图
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:banner:edit')")
    @Log(title = "轮播图", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody BaseBanner baseBanner)
    {
        return toAjax(baseBannerService.updateBaseBanner(baseBanner));
    }

    /**
     * 删除轮播图
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:banner:remove')")
    @Log(title = "轮播图", businessType = BusinessType.DELETE)
	@DeleteMapping("/{ids}")
    public AjaxResult remove(@PathVariable String[] ids)
    {
        return toAjax(baseBannerService.deleteBaseBannerByIds(ids));
    }
}
