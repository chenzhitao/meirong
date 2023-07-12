package com.jiumi.business.controller;

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
import com.jiumi.business.domain.OmsVipInfo;
import com.jiumi.business.service.IOmsVipInfoService;
import com.jiumi.common.utils.poi.ExcelUtil;
import com.jiumi.common.core.page.TableDataInfo;

/**
 * 会员登记配置Controller
 *
 * @author jiumi
 * @date 2021-12-23
 */
@RestController
@RequestMapping("/business/vip")
public class OmsVipInfoController extends BaseController
{
    @Autowired
    private IOmsVipInfoService omsVipInfoService;

    /**
     * 查询会员登记配置列表
     */
    @PreAuthorize("@ss.hasPermi('business:vip:list')")
    @GetMapping("/list")
    public TableDataInfo list(OmsVipInfo omsVipInfo)
    {
        startPage();
        List<OmsVipInfo> list = omsVipInfoService.selectOmsVipInfoList(omsVipInfo);
        return getDataTable(list);
    }

    @GetMapping("/getAllViplist")
    public AjaxResult getAllViplist(OmsVipInfo omsVipInfo)
    {
        omsVipInfo.setStatus("Y");
        List<OmsVipInfo> list = omsVipInfoService.selectOmsVipInfoList(omsVipInfo);
        return AjaxResult.success(list);
    }

    /**
     * 导出会员登记配置列表
     */
    @PreAuthorize("@ss.hasPermi('business:vip:export')")
    @Log(title = "会员登记配置", businessType = BusinessType.EXPORT)
    @GetMapping("/export")
    public AjaxResult export(OmsVipInfo omsVipInfo)
    {
        List<OmsVipInfo> list = omsVipInfoService.selectOmsVipInfoList(omsVipInfo);
        ExcelUtil<OmsVipInfo> util = new ExcelUtil<OmsVipInfo>(OmsVipInfo.class);
        return util.exportExcel(list, "会员登记配置数据");
    }

    /**
     * 获取会员登记配置详细信息
     */
    @PreAuthorize("@ss.hasPermi('business:vip:query')")
    @GetMapping(value = "/{vipLevel}")
    public AjaxResult getInfo(@PathVariable("vipLevel") Long vipLevel)
    {
        return AjaxResult.success(omsVipInfoService.selectOmsVipInfoByVipLevel(vipLevel));
    }

    /**
     * 新增会员登记配置
     */
    @PreAuthorize("@ss.hasPermi('business:vip:add')")
    @Log(title = "会员登记配置", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody OmsVipInfo omsVipInfo)
    {
        return toAjax(omsVipInfoService.insertOmsVipInfo(omsVipInfo));
    }

    /**
     * 修改会员登记配置
     */
    @PreAuthorize("@ss.hasPermi('business:vip:edit')")
    @Log(title = "会员登记配置", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody OmsVipInfo omsVipInfo)
    {
        return toAjax(omsVipInfoService.updateOmsVipInfo(omsVipInfo));
    }

    /**
     * 删除会员登记配置
     */
    @PreAuthorize("@ss.hasPermi('business:vip:remove')")
    @Log(title = "会员登记配置", businessType = BusinessType.DELETE)
	@DeleteMapping("/{vipLevels}")
    public AjaxResult remove(@PathVariable Long[] vipLevels)
    {
        return toAjax(omsVipInfoService.deleteOmsVipInfoByVipLevels(vipLevels));
    }
}
