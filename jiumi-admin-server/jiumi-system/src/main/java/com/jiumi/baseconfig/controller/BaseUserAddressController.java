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
import com.jiumi.baseconfig.domain.BaseUserAddress;
import com.jiumi.baseconfig.service.IBaseUserAddressService;
import com.jiumi.common.utils.poi.ExcelUtil;
import com.jiumi.common.core.page.TableDataInfo;

/**
 * 用户地址Controller
 *
 * @author jiumi
 * @date 2021-09-19
 */
@RestController
@RequestMapping("/baseconfig/address")
public class BaseUserAddressController extends BaseController
{
    @Autowired
    private IBaseUserAddressService baseUserAddressService;

    /**
     * 查询用户地址列表
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:address:list')")
    @GetMapping("/list")
    public TableDataInfo list(BaseUserAddress baseUserAddress)
    {
        startPage();
        List<BaseUserAddress> list = baseUserAddressService.selectBaseUserAddressList(baseUserAddress);
        return getDataTable(list);
    }

    /**
     * 导出用户地址列表
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:address:export')")
    @Log(title = "用户地址", businessType = BusinessType.EXPORT)
    @GetMapping("/export")
    public AjaxResult export(BaseUserAddress baseUserAddress)
    {
        List<BaseUserAddress> list = baseUserAddressService.selectBaseUserAddressList(baseUserAddress);
        ExcelUtil<BaseUserAddress> util = new ExcelUtil<BaseUserAddress>(BaseUserAddress.class);
        return util.exportExcel(list, "用户地址数据");
    }

    /**
     * 获取用户地址详细信息
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:address:query')")
    @GetMapping(value = "/{id}")
    public AjaxResult getInfo(@PathVariable("id") String id)
    {
        return AjaxResult.success(baseUserAddressService.selectBaseUserAddressById(id));
    }

    /**
     * 新增用户地址
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:address:add')")
    @Log(title = "用户地址", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody BaseUserAddress baseUserAddress)
    {
        return toAjax(baseUserAddressService.insertBaseUserAddress(baseUserAddress));
    }

    /**
     * 修改用户地址
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:address:edit')")
    @Log(title = "用户地址", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody BaseUserAddress baseUserAddress)
    {
        return toAjax(baseUserAddressService.updateBaseUserAddress(baseUserAddress));
    }

    /**
     * 删除用户地址
     */
    @PreAuthorize("@ss.hasPermi('baseconfig:address:remove')")
    @Log(title = "用户地址", businessType = BusinessType.DELETE)
	@DeleteMapping("/{ids}")
    public AjaxResult remove(@PathVariable String[] ids)
    {
        return toAjax(baseUserAddressService.deleteBaseUserAddressByIds(ids));
    }
}
