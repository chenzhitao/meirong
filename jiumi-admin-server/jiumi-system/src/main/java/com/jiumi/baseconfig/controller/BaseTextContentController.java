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
import com.jiumi.baseconfig.domain.BaseTextContent;
import com.jiumi.baseconfig.service.IBaseTextContentService;
import com.jiumi.common.utils.poi.ExcelUtil;
import com.jiumi.common.core.page.TableDataInfo;

/**
 * 文本管理Controller
 *
 * @author jiumi
 * @date 2021-09-05
 */
@RestController
@RequestMapping("/baseconfig/content")
public class BaseTextContentController extends BaseController
{
    @Autowired
    private IBaseTextContentService baseTextContentService;

    /**
     * 查询文本管理列表
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:content:list')")
    @GetMapping("/list")
    public TableDataInfo list(BaseTextContent baseTextContent)
    {
        startPage();
        List<BaseTextContent> list = baseTextContentService.selectBaseTextContentList(baseTextContent);
        return getDataTable(list);
    }

    /**
     * 导出文本管理列表
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:content:export')")
    @Log(title = "文本管理", businessType = BusinessType.EXPORT)
    @GetMapping("/export")
    public AjaxResult export(BaseTextContent baseTextContent)
    {
        List<BaseTextContent> list = baseTextContentService.selectBaseTextContentList(baseTextContent);
        ExcelUtil<BaseTextContent> util = new ExcelUtil<BaseTextContent>(BaseTextContent.class);
        return util.exportExcel(list, "文本管理数据");
    }

    /**
     * 获取文本管理详细信息
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:content:query')")
    @GetMapping(value = "/{id}")
    public AjaxResult getInfo(@PathVariable("id") String id)
    {
        return AjaxResult.success(baseTextContentService.selectBaseTextContentById(id));
    }

    /**
     * 新增文本管理
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:content:add')")
    @Log(title = "文本管理", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody BaseTextContent baseTextContent)
    {
        return toAjax(baseTextContentService.insertBaseTextContent(baseTextContent));
    }

    /**
     * 修改文本管理
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:content:edit')")
    @Log(title = "文本管理", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody BaseTextContent baseTextContent)
    {
        return toAjax(baseTextContentService.updateBaseTextContent(baseTextContent));
    }

    /**
     * 删除文本管理
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:content:remove')")
    @Log(title = "文本管理", businessType = BusinessType.DELETE)
	@DeleteMapping("/{ids}")
    public AjaxResult remove(@PathVariable String[] ids)
    {
        return toAjax(baseTextContentService.deleteBaseTextContentByIds(ids));
    }
}
