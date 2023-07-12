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
import com.jiumi.baseconfig.domain.BaseBrandDetail;
import com.jiumi.baseconfig.service.IBaseBrandDetailService;
import com.jiumi.common.utils.poi.ExcelUtil;
import com.jiumi.common.core.page.TableDataInfo;

/**
 * 品牌介绍Controller
 *
 * @author jiumi
 * @date 2021-12-21
 */
@RestController
@RequestMapping("/baseconfig/branddetail")
public class BaseBrandDetailController extends BaseController
{
    @Autowired
    private IBaseBrandDetailService baseBrandDetailService;

    /**
     * 查询品牌介绍列表
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:branddetail:list')")
    @GetMapping("/list")
    public TableDataInfo list(BaseBrandDetail baseBrandDetail)
    {
        startPage();
        List<BaseBrandDetail> list = baseBrandDetailService.selectBaseBrandDetailList(baseBrandDetail);
        return getDataTable(list);
    }

    /**
     * 导出品牌介绍列表
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:branddetail:export')")
    @Log(title = "品牌介绍", businessType = BusinessType.EXPORT)
    @GetMapping("/export")
    public AjaxResult export(BaseBrandDetail baseBrandDetail)
    {
        List<BaseBrandDetail> list = baseBrandDetailService.selectBaseBrandDetailList(baseBrandDetail);
        ExcelUtil<BaseBrandDetail> util = new ExcelUtil<BaseBrandDetail>(BaseBrandDetail.class);
        return util.exportExcel(list, "品牌介绍数据");
    }

    /**
     * 获取品牌介绍详细信息
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:branddetail:query')")
    @GetMapping(value = "/{id}")
    public AjaxResult getInfo(@PathVariable("id") Long id)
    {
        return AjaxResult.success(baseBrandDetailService.selectBaseBrandDetailById(id));
    }

    /**
     * 新增品牌介绍
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:branddetail:add')")
    @Log(title = "品牌介绍", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody BaseBrandDetail baseBrandDetail)
    {
        return toAjax(baseBrandDetailService.insertBaseBrandDetail(baseBrandDetail));
    }

    /**
     * 修改品牌介绍
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:branddetail:edit')")
    @Log(title = "品牌介绍", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody BaseBrandDetail baseBrandDetail)
    {
        return toAjax(baseBrandDetailService.updateBaseBrandDetail(baseBrandDetail));
    }

    /**
     * 删除品牌介绍
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:branddetail:remove')")
    @Log(title = "品牌介绍", businessType = BusinessType.DELETE)
	@DeleteMapping("/{ids}")
    public AjaxResult remove(@PathVariable Long[] ids)
    {
        return toAjax(baseBrandDetailService.deleteBaseBrandDetailByIds(ids));
    }
}
