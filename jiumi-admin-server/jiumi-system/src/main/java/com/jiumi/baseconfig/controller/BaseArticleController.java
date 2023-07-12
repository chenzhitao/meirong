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
import com.jiumi.baseconfig.domain.BaseArticle;
import com.jiumi.baseconfig.service.IBaseArticleService;
import com.jiumi.common.utils.poi.ExcelUtil;
import com.jiumi.common.core.page.TableDataInfo;

/**
 * 问题管理Controller
 *
 * @author jiumi
 * @date 2021-09-05
 */
@RestController
@RequestMapping("/baseconfig/article")
public class BaseArticleController extends BaseController
{
    @Autowired
    private IBaseArticleService baseArticleService;

    /**
     * 查询问题管理列表
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:article:list')")
    @GetMapping("/list")
    public TableDataInfo list(BaseArticle baseArticle)
    {
        startPage();
        List<BaseArticle> list = baseArticleService.selectBaseArticleList(baseArticle);
        return getDataTable(list);
    }

    /**
     * 导出问题管理列表
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:article:export')")
    @Log(title = "问题管理", businessType = BusinessType.EXPORT)
    @GetMapping("/export")
    public AjaxResult export(BaseArticle baseArticle)
    {
        List<BaseArticle> list = baseArticleService.selectBaseArticleList(baseArticle);
        ExcelUtil<BaseArticle> util = new ExcelUtil<BaseArticle>(BaseArticle.class);
        return util.exportExcel(list, "问题管理数据");
    }

    /**
     * 获取问题管理详细信息
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:article:query')")
    @GetMapping(value = "/{id}")
    public AjaxResult getInfo(@PathVariable("id") String id)
    {
        return AjaxResult.success(baseArticleService.selectBaseArticleById(id));
    }

    /**
     * 新增问题管理
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:article:add')")
    @Log(title = "问题管理", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody BaseArticle baseArticle)
    {
        return toAjax(baseArticleService.insertBaseArticle(baseArticle));
    }

    /**
     * 修改问题管理
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:article:edit')")
    @Log(title = "问题管理", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody BaseArticle baseArticle)
    {
        return toAjax(baseArticleService.updateBaseArticle(baseArticle));
    }

    /**
     * 删除问题管理
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:article:remove')")
    @Log(title = "问题管理", businessType = BusinessType.DELETE)
	@DeleteMapping("/{ids}")
    public AjaxResult remove(@PathVariable String[] ids)
    {
        return toAjax(baseArticleService.deleteBaseArticleByIds(ids));
    }
}
