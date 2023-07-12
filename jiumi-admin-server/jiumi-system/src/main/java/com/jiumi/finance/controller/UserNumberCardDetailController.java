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
import com.jiumi.finance.domain.UserNumberCardDetail;
import com.jiumi.finance.service.IUserNumberCardDetailService;
import com.jiumi.common.utils.poi.ExcelUtil;
import com.jiumi.common.core.page.TableDataInfo;

/**
 * 购买次卡记录Controller
 *
 * @author jiumi
 * @date 2022-02-08
 */
@RestController
@RequestMapping("/finance/numbercard")
public class UserNumberCardDetailController extends BaseController
{
    @Autowired
    private IUserNumberCardDetailService userNumberCardDetailService;

    /**
     * 查询购买次卡记录列表
     */
    @PreAuthorize("@ss.hasPermi('finance:numbercard:list')")
    @GetMapping("/list")
    public TableDataInfo list(UserNumberCardDetail userNumberCardDetail)
    {
        startPage();
        List<UserNumberCardDetail> list = userNumberCardDetailService.selectUserNumberCardDetailList(userNumberCardDetail);
        return getDataTable(list);
    }

    /**
     * 导出购买次卡记录列表
     */
    @PreAuthorize("@ss.hasPermi('finance:numbercard:export')")
    @Log(title = "购买次卡记录", businessType = BusinessType.EXPORT)
    @GetMapping("/export")
    public AjaxResult export(UserNumberCardDetail userNumberCardDetail)
    {
        List<UserNumberCardDetail> list = userNumberCardDetailService.selectUserNumberCardDetailList(userNumberCardDetail);
        ExcelUtil<UserNumberCardDetail> util = new ExcelUtil<UserNumberCardDetail>(UserNumberCardDetail.class);
        return util.exportExcel(list, "购买次卡记录数据");
    }

    /**
     * 获取购买次卡记录详细信息
     */
    @PreAuthorize("@ss.hasPermi('finance:numbercard:query')")
    @GetMapping(value = "/{id}")
    public AjaxResult getInfo(@PathVariable("id") Long id)
    {
        return AjaxResult.success(userNumberCardDetailService.selectUserNumberCardDetailById(id));
    }

    /**
     * 新增购买次卡记录
     */
    @PreAuthorize("@ss.hasPermi('finance:numbercard:add')")
    @Log(title = "购买次卡记录", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody UserNumberCardDetail userNumberCardDetail)
    {
        return toAjax(userNumberCardDetailService.insertUserNumberCardDetail(userNumberCardDetail));
    }

    /**
     * 修改购买次卡记录
     */
    @PreAuthorize("@ss.hasPermi('finance:numbercard:edit')")
    @Log(title = "购买次卡记录", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody UserNumberCardDetail userNumberCardDetail)
    {
        return toAjax(userNumberCardDetailService.updateUserNumberCardDetail(userNumberCardDetail));
    }

    /**
     * 删除购买次卡记录
     */
    @PreAuthorize("@ss.hasPermi('finance:numbercard:remove')")
    @Log(title = "购买次卡记录", businessType = BusinessType.DELETE)
	@DeleteMapping("/{ids}")
    public AjaxResult remove(@PathVariable Long[] ids)
    {
        return toAjax(userNumberCardDetailService.deleteUserNumberCardDetailByIds(ids));
    }
}
