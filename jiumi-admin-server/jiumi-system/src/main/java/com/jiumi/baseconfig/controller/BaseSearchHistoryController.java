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
import com.jiumi.baseconfig.domain.BaseSearchHistory;
import com.jiumi.baseconfig.service.IBaseSearchHistoryService;
import com.jiumi.common.utils.poi.ExcelUtil;
import com.jiumi.common.core.page.TableDataInfo;

/**
 * 搜索历史Controller
 *
 * @author jiumi
 * @date 2021-09-14
 */
@RestController
@RequestMapping("/baseconfig/history")
public class BaseSearchHistoryController extends BaseController
{
    @Autowired
    private IBaseSearchHistoryService baseSearchHistoryService;

    /**
     * 查询搜索历史列表
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:history:list')")
    @GetMapping("/list")
    public TableDataInfo list(BaseSearchHistory baseSearchHistory)
    {
        startPage();
        List<BaseSearchHistory> list = baseSearchHistoryService.selectBaseSearchHistoryList(baseSearchHistory);
        return getDataTable(list);
    }

    /**
     * 导出搜索历史列表
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:history:export')")
    @Log(title = "搜索历史", businessType = BusinessType.EXPORT)
    @GetMapping("/export")
    public AjaxResult export(BaseSearchHistory baseSearchHistory)
    {
        List<BaseSearchHistory> list = baseSearchHistoryService.selectBaseSearchHistoryList(baseSearchHistory);
        ExcelUtil<BaseSearchHistory> util = new ExcelUtil<BaseSearchHistory>(BaseSearchHistory.class);
        return util.exportExcel(list, "搜索历史数据");
    }

    /**
     * 获取搜索历史详细信息
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:history:query')")
    @GetMapping(value = "/{id}")
    public AjaxResult getInfo(@PathVariable("id") String id)
    {
        return AjaxResult.success(baseSearchHistoryService.selectBaseSearchHistoryById(id));
    }

    /**
     * 新增搜索历史
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:history:add')")
    @Log(title = "搜索历史", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody BaseSearchHistory baseSearchHistory)
    {
        return toAjax(baseSearchHistoryService.insertBaseSearchHistory(baseSearchHistory));
    }

    /**
     * 修改搜索历史
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:history:edit')")
    @Log(title = "搜索历史", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody BaseSearchHistory baseSearchHistory)
    {
        return toAjax(baseSearchHistoryService.updateBaseSearchHistory(baseSearchHistory));
    }

    /**
     * 删除搜索历史
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:history:remove')")
    @Log(title = "搜索历史", businessType = BusinessType.DELETE)
	@DeleteMapping("/{ids}")
    public AjaxResult remove(@PathVariable String[] ids)
    {
        return toAjax(baseSearchHistoryService.deleteBaseSearchHistoryByIds(ids));
    }
}
