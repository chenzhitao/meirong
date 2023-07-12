package com.jiumi.finance.controller;

import java.util.List;

import com.jiumi.common.core.domain.entity.SysUser;
import com.jiumi.common.utils.SecurityUtils;
import com.jiumi.common.utils.StringUtils;
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
import com.jiumi.finance.domain.OmsOrderItemPayment;
import com.jiumi.finance.service.IOmsOrderItemPaymentService;
import com.jiumi.common.utils.poi.ExcelUtil;
import com.jiumi.common.core.page.TableDataInfo;

/**
 * 跨店结算Controller
 *
 * @author jiumi
 * @date 2022-04-12
 */
@RestController
@RequestMapping("/finance/payment")
public class OmsOrderItemPaymentController extends BaseController
{
    @Autowired
    private IOmsOrderItemPaymentService omsOrderItemPaymentService;

    /**
     * 查询跨店结算列表
     */
    @PreAuthorize("@ss.hasPermi('finance:payment:list')")
    @GetMapping("/list")
    public TableDataInfo list(OmsOrderItemPayment omsOrderItemPayment)
    {
        SysUser sysUser= SecurityUtils.getLoginUser().getUser();
        if(!sysUser.isAdmin()){
            String shopId= sysUser.getSourceShop();
            if(StringUtils.isEmpty(shopId)){
                shopId="''";
            }
            omsOrderItemPayment.setOperateSourceShop(shopId);
        }
        startPage();
        List<OmsOrderItemPayment> list = omsOrderItemPaymentService.selectOmsOrderItemPaymentList(omsOrderItemPayment);
        return getDataTable(list);
    }

    /**
     * 导出跨店结算列表
     */
    @PreAuthorize("@ss.hasPermi('finance:payment:export')")
    @Log(title = "跨店结算", businessType = BusinessType.EXPORT)
    @GetMapping("/export")
    public AjaxResult export(OmsOrderItemPayment omsOrderItemPayment)
    {
        SysUser sysUser= SecurityUtils.getLoginUser().getUser();
        if(!sysUser.isAdmin()){
            String shopId= sysUser.getSourceShop();
            if(StringUtils.isEmpty(shopId)){
                shopId="''";
            }
            omsOrderItemPayment.setOperateSourceShop(shopId);
        }
        List<OmsOrderItemPayment> list = omsOrderItemPaymentService.selectOmsOrderItemPaymentList(omsOrderItemPayment);
        ExcelUtil<OmsOrderItemPayment> util = new ExcelUtil<OmsOrderItemPayment>(OmsOrderItemPayment.class);
        return util.exportExcel(list, "跨店结算数据");
    }

    /**
     * 获取跨店结算详细信息
     */
    @PreAuthorize("@ss.hasPermi('finance:payment:query')")
    @GetMapping(value = "/{id}")
    public AjaxResult getInfo(@PathVariable("id") Long id)
    {
        return AjaxResult.success(omsOrderItemPaymentService.selectOmsOrderItemPaymentById(id));
    }

    /**
     * 新增跨店结算
     */
    @PreAuthorize("@ss.hasPermi('finance:payment:add')")
    @Log(title = "跨店结算", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody OmsOrderItemPayment omsOrderItemPayment)
    {
        return toAjax(omsOrderItemPaymentService.insertOmsOrderItemPayment(omsOrderItemPayment));
    }

    /**
     * 修改跨店结算
     */
    @PreAuthorize("@ss.hasPermi('finance:payment:edit')")
    @Log(title = "跨店结算", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody OmsOrderItemPayment omsOrderItemPayment)
    {
        return toAjax(omsOrderItemPaymentService.updateOmsOrderItemPayment(omsOrderItemPayment));
    }

    /**
     * 删除跨店结算
     */
    @PreAuthorize("@ss.hasPermi('finance:payment:remove')")
    @Log(title = "跨店结算", businessType = BusinessType.DELETE)
	@DeleteMapping("/{ids}")
    public AjaxResult remove(@PathVariable Long[] ids)
    {
        return toAjax(omsOrderItemPaymentService.deleteOmsOrderItemPaymentByIds(ids));
    }
}
