package com.jiumi.shop.controller;

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
import com.jiumi.shop.domain.BaseConsultantRank;
import com.jiumi.shop.service.IBaseConsultantRankService;
import com.jiumi.common.utils.poi.ExcelUtil;
import com.jiumi.common.core.page.TableDataInfo;

/**
 * 顾问等级Controller
 *
 * @author jiumi
 * @date 2022-03-22
 */
@RestController
@RequestMapping("/shop/rank")
public class BaseConsultantRankController extends BaseController
{
    @Autowired
    private IBaseConsultantRankService baseConsultantRankService;

    /**
     * 查询顾问等级列表
     */
    @PreAuthorize("@ss.hasPermi('shop:rank:list')")
    @GetMapping("/list")
    public TableDataInfo list(BaseConsultantRank baseConsultantRank)
    {
        startPage();
        List<BaseConsultantRank> list = baseConsultantRankService.selectBaseConsultantRankList(baseConsultantRank);
        return getDataTable(list);
    }

    @GetMapping("/getAllConsultantList")
    public AjaxResult getAllConsultantList(BaseConsultantRank baseConsultantRank)
    {
        baseConsultantRank.setUseFlag("Y");
        List<BaseConsultantRank> list = baseConsultantRankService.selectBaseConsultantRankList(baseConsultantRank);
        return AjaxResult.success(list);
    }

    /**
     * 导出顾问等级列表
     */
    @PreAuthorize("@ss.hasPermi('shop:rank:export')")
    @Log(title = "顾问等级", businessType = BusinessType.EXPORT)
    @GetMapping("/export")
    public AjaxResult export(BaseConsultantRank baseConsultantRank)
    {
        List<BaseConsultantRank> list = baseConsultantRankService.selectBaseConsultantRankList(baseConsultantRank);
        ExcelUtil<BaseConsultantRank> util = new ExcelUtil<BaseConsultantRank>(BaseConsultantRank.class);
        return util.exportExcel(list, "顾问等级数据");
    }

    /**
     * 获取顾问等级详细信息
     */
    @PreAuthorize("@ss.hasPermi('shop:rank:query')")
    @GetMapping(value = "/{levelId}")
    public AjaxResult getInfo(@PathVariable("levelId") Long levelId)
    {
        return AjaxResult.success(baseConsultantRankService.selectBaseConsultantRankByLevelId(levelId));
    }

    /**
     * 新增顾问等级
     */
    @PreAuthorize("@ss.hasPermi('shop:rank:add')")
    @Log(title = "顾问等级", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody BaseConsultantRank baseConsultantRank)
    {
        if(baseConsultantRank.getCommissionRatio().doubleValue()<=0){
            return AjaxResult.error("分佣比例不能小于0");
        }
        return toAjax(baseConsultantRankService.insertBaseConsultantRank(baseConsultantRank));
    }

    /**
     * 修改顾问等级
     */
    @PreAuthorize("@ss.hasPermi('shop:rank:edit')")
    @Log(title = "顾问等级", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody BaseConsultantRank baseConsultantRank)
    {
        return toAjax(baseConsultantRankService.updateBaseConsultantRank(baseConsultantRank));
    }

    /**
     * 删除顾问等级
     */
    @PreAuthorize("@ss.hasPermi('shop:rank:remove')")
    @Log(title = "顾问等级", businessType = BusinessType.DELETE)
	@DeleteMapping("/{levelIds}")
    public AjaxResult remove(@PathVariable Long[] levelIds)
    {
        return toAjax(baseConsultantRankService.deleteBaseConsultantRankByLevelIds(levelIds));
    }
}
