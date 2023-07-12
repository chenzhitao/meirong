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
import com.jiumi.baseconfig.domain.BaseUserMsg;
import com.jiumi.baseconfig.service.IBaseUserMsgService;
import com.jiumi.common.utils.poi.ExcelUtil;
import com.jiumi.common.core.page.TableDataInfo;

/**
 * 用户业务消息Controller
 *
 * @author jiumi
 * @date 2021-09-19
 */
@RestController
@RequestMapping("/baseconfig/msg")
public class BaseUserMsgController extends BaseController
{
    @Autowired
    private IBaseUserMsgService baseUserMsgService;

    /**
     * 查询用户业务消息列表
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:msg:list')")
    @GetMapping("/list")
    public TableDataInfo list(BaseUserMsg baseUserMsg)
    {
        startPage();
        List<BaseUserMsg> list = baseUserMsgService.selectBaseUserMsgList(baseUserMsg);
        return getDataTable(list);
    }

    /**
     * 导出用户业务消息列表
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:msg:export')")
    @Log(title = "用户业务消息", businessType = BusinessType.EXPORT)
    @GetMapping("/export")
    public AjaxResult export(BaseUserMsg baseUserMsg)
    {
        List<BaseUserMsg> list = baseUserMsgService.selectBaseUserMsgList(baseUserMsg);
        ExcelUtil<BaseUserMsg> util = new ExcelUtil<BaseUserMsg>(BaseUserMsg.class);
        return util.exportExcel(list, "用户业务消息数据");
    }

    /**
     * 获取用户业务消息详细信息
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:msg:query')")
    @GetMapping(value = "/{id}")
    public AjaxResult getInfo(@PathVariable("id") String id)
    {
        return AjaxResult.success(baseUserMsgService.selectBaseUserMsgById(id));
    }

    /**
     * 新增用户业务消息
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:msg:add')")
    @Log(title = "用户业务消息", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody BaseUserMsg baseUserMsg)
    {
        return toAjax(baseUserMsgService.insertBaseUserMsg(baseUserMsg));
    }

    /**
     * 修改用户业务消息
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:msg:edit')")
    @Log(title = "用户业务消息", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody BaseUserMsg baseUserMsg)
    {
        return toAjax(baseUserMsgService.updateBaseUserMsg(baseUserMsg));
    }

    /**
     * 删除用户业务消息
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:msg:remove')")
    @Log(title = "用户业务消息", businessType = BusinessType.DELETE)
	@DeleteMapping("/{ids}")
    public AjaxResult remove(@PathVariable String[] ids)
    {
        return toAjax(baseUserMsgService.deleteBaseUserMsgByIds(ids));
    }
}
