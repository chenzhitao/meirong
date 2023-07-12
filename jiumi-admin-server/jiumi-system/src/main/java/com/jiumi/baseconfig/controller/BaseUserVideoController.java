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
import com.jiumi.baseconfig.domain.BaseUserVideo;
import com.jiumi.baseconfig.service.IBaseUserVideoService;
import com.jiumi.common.utils.poi.ExcelUtil;
import com.jiumi.common.core.page.TableDataInfo;

/**
 * 用户购买的视频Controller
 *
 * @author jiumi
 * @date 2021-09-28
 */
@RestController
@RequestMapping("/baseconfig/uservideo")
public class BaseUserVideoController extends BaseController
{
    @Autowired
    private IBaseUserVideoService baseUserVideoService;

    /**
     * 查询用户购买的视频列表
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:uservideo:list')")
    @GetMapping("/list")
    public TableDataInfo list(BaseUserVideo baseUserVideo)
    {
        startPage();
        List<BaseUserVideo> list = baseUserVideoService.selectBaseUserVideoList(baseUserVideo);
        return getDataTable(list);
    }

    /**
     * 导出用户购买的视频列表
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:uservideo:export')")
    @Log(title = "用户购买的视频", businessType = BusinessType.EXPORT)
    @GetMapping("/export")
    public AjaxResult export(BaseUserVideo baseUserVideo)
    {
        List<BaseUserVideo> list = baseUserVideoService.selectBaseUserVideoList(baseUserVideo);
        ExcelUtil<BaseUserVideo> util = new ExcelUtil<BaseUserVideo>(BaseUserVideo.class);
        return util.exportExcel(list, "用户购买的视频数据");
    }

    /**
     * 获取用户购买的视频详细信息
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:uservideo:query')")
    @GetMapping(value = "/{id}")
    public AjaxResult getInfo(@PathVariable("id") String id)
    {
        return AjaxResult.success(baseUserVideoService.selectBaseUserVideoById(id));
    }

    /**
     * 新增用户购买的视频
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:uservideo:add')")
    @Log(title = "用户购买的视频", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody BaseUserVideo baseUserVideo)
    {
        return toAjax(baseUserVideoService.insertBaseUserVideo(baseUserVideo));
    }

    /**
     * 修改用户购买的视频
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:uservideo:edit')")
    @Log(title = "用户购买的视频", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody BaseUserVideo baseUserVideo)
    {
        return toAjax(baseUserVideoService.updateBaseUserVideo(baseUserVideo));
    }

    /**
     * 删除用户购买的视频
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:uservideo:remove')")
    @Log(title = "用户购买的视频", businessType = BusinessType.DELETE)
	@DeleteMapping("/{ids}")
    public AjaxResult remove(@PathVariable String[] ids)
    {
        return toAjax(baseUserVideoService.deleteBaseUserVideoByIds(ids));
    }
}
