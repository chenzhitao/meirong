package com.jiumi.finance.controller;

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
import com.jiumi.finance.domain.UserNumberCardHistory;
import com.jiumi.finance.service.IUserNumberCardHistoryService;
import com.jiumi.common.utils.poi.ExcelUtil;
import com.jiumi.common.core.page.TableDataInfo;

/**
 * 用户次卡使用记录Controller
 *
 * @author jiumi
 * @date 2022-02-08
 */
@RestController
@RequestMapping("/finance/cardhistory")
public class UserNumberCardHistoryController extends BaseController
{
    @Autowired
    private IUserNumberCardHistoryService userNumberCardHistoryService;

    /**
     * 查询用户次卡使用记录列表
     */
    @PreAuthorize("@ss.hasPermi('finance:cardhistory:list')")
    @GetMapping("/list")
    public TableDataInfo list(UserNumberCardHistory userNumberCardHistory)
    {
        startPage();
        List<UserNumberCardHistory> list = userNumberCardHistoryService.selectUserNumberCardHistoryList(userNumberCardHistory);
        return getDataTable(list);
    }

    /**
     * 导出用户次卡使用记录列表
     */
    @PreAuthorize("@ss.hasPermi('finance:cardhistory:export')")
    @Log(title = "用户次卡使用记录", businessType = BusinessType.EXPORT)
    @GetMapping("/export")
    public AjaxResult export(UserNumberCardHistory userNumberCardHistory)
    {
        List<UserNumberCardHistory> list = userNumberCardHistoryService.selectUserNumberCardHistoryList(userNumberCardHistory);
        ExcelUtil<UserNumberCardHistory> util = new ExcelUtil<UserNumberCardHistory>(UserNumberCardHistory.class);
        return util.exportExcel(list, "用户次卡使用记录数据");
    }

    /**
     * 获取用户次卡使用记录详细信息
     */
    @PreAuthorize("@ss.hasPermi('finance:cardhistory:query')")
    @GetMapping(value = "/{id}")
    public AjaxResult getInfo(@PathVariable("id") Long id)
    {
        return AjaxResult.success(userNumberCardHistoryService.selectUserNumberCardHistoryById(id));
    }

    /**
     * 新增用户次卡使用记录
     */
    @PreAuthorize("@ss.hasPermi('finance:cardhistory:add')")
    @Log(title = "用户次卡使用记录", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody UserNumberCardHistory userNumberCardHistory)
    {
        return toAjax(userNumberCardHistoryService.insertUserNumberCardHistory(userNumberCardHistory));
    }

    /**
     * 修改用户次卡使用记录
     */
    @PreAuthorize("@ss.hasPermi('finance:cardhistory:edit')")
    @Log(title = "用户次卡使用记录", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody UserNumberCardHistory userNumberCardHistory)
    {
        return toAjax(userNumberCardHistoryService.updateUserNumberCardHistory(userNumberCardHistory));
    }

    /**
     * 删除用户次卡使用记录
     */
    @PreAuthorize("@ss.hasPermi('finance:cardhistory:remove')")
    @Log(title = "用户次卡使用记录", businessType = BusinessType.DELETE)
	@DeleteMapping("/{ids}")
    public AjaxResult remove(@PathVariable Long[] ids)
    {
        return toAjax(userNumberCardHistoryService.deleteUserNumberCardHistoryByIds(ids));
    }
}
