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
import com.jiumi.baseconfig.domain.BaseQuestion;
import com.jiumi.baseconfig.service.IBaseQuestionService;
import com.jiumi.common.utils.poi.ExcelUtil;
import com.jiumi.common.core.page.TableDataInfo;

/**
 * 问题管理Controller
 *
 * @author jiumi
 * @date 2021-09-05
 */
@RestController
@RequestMapping("/baseconfig/question")
public class BaseQuestionController extends BaseController
{
    @Autowired
    private IBaseQuestionService baseQuestionService;

    /**
     * 查询问题管理列表
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:question:list')")
    @GetMapping("/list")
    public TableDataInfo list(BaseQuestion baseQuestion)
    {
        startPage();
        List<BaseQuestion> list = baseQuestionService.selectBaseQuestionList(baseQuestion);
        return getDataTable(list);
    }

    /**
     * 导出问题管理列表
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:question:export')")
    @Log(title = "问题管理", businessType = BusinessType.EXPORT)
    @GetMapping("/export")
    public AjaxResult export(BaseQuestion baseQuestion)
    {
        List<BaseQuestion> list = baseQuestionService.selectBaseQuestionList(baseQuestion);
        ExcelUtil<BaseQuestion> util = new ExcelUtil<BaseQuestion>(BaseQuestion.class);
        return util.exportExcel(list, "问题管理数据");
    }

    /**
     * 获取问题管理详细信息
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:question:query')")
    @GetMapping(value = "/{id}")
    public AjaxResult getInfo(@PathVariable("id") String id)
    {
        return AjaxResult.success(baseQuestionService.selectBaseQuestionById(id));
    }

    /**
     * 新增问题管理
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:question:add')")
    @Log(title = "问题管理", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody BaseQuestion baseQuestion)
    {
        return toAjax(baseQuestionService.insertBaseQuestion(baseQuestion));
    }

    /**
     * 修改问题管理
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:question:edit')")
    @Log(title = "问题管理", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody BaseQuestion baseQuestion)
    {
        return toAjax(baseQuestionService.updateBaseQuestion(baseQuestion));
    }

    /**
     * 删除问题管理
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:question:remove')")
    @Log(title = "问题管理", businessType = BusinessType.DELETE)
	@DeleteMapping("/{ids}")
    public AjaxResult remove(@PathVariable String[] ids)
    {
        return toAjax(baseQuestionService.deleteBaseQuestionByIds(ids));
    }
}
