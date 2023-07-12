package com.jiumi.goods.controller;

import java.util.List;

import com.jiumi.common.utils.poi.ExcelUtil;
import com.jiumi.goods.domain.BaseNumberCard;
import com.jiumi.goods.service.IBaseNumberCardService;
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
import com.jiumi.common.core.page.TableDataInfo;

/**
 * 次卡Controller
 *
 * @author jiumi
 * @date 2022-01-26
 */
@RestController
@RequestMapping("/goods/BaseNumberCard")
public class BaseNumberCardController extends BaseController
{
    @Autowired
    private IBaseNumberCardService baseNumberCardService;

    /**
     * 查询次卡列表
     */
    @PreAuthorize("@ss.hasPermi('goods:BaseNumberCard:list')")
    @GetMapping("/list")
    public TableDataInfo list(BaseNumberCard baseNumberCard)
    {
        startPage();
        List<BaseNumberCard> list = baseNumberCardService.selectBaseNumberCardList(baseNumberCard);
        return getDataTable(list);
    }

    @GetMapping("/getAllCardList")
    public AjaxResult getAllCardList()
    {
        BaseNumberCard baseNumberCard=new BaseNumberCard();
        baseNumberCard.setStatus("01");
        List<BaseNumberCard> list = baseNumberCardService.selectBaseNumberCardList(baseNumberCard);
        return AjaxResult.success(list);
    }

    /**
     * 导出次卡列表
     */
    @PreAuthorize("@ss.hasPermi('goods:BaseNumberCard:export')")
    @Log(title = "次卡", businessType = BusinessType.EXPORT)
    @GetMapping("/export")
    public AjaxResult export(BaseNumberCard baseNumberCard)
    {
        List<BaseNumberCard> list = baseNumberCardService.selectBaseNumberCardList(baseNumberCard);
        ExcelUtil<BaseNumberCard> util = new ExcelUtil<BaseNumberCard>(BaseNumberCard.class);
        return util.exportExcel(list, "次卡数据");
    }

    /**
     * 获取次卡详细信息
     */
    @PreAuthorize("@ss.hasPermi('goods:BaseNumberCard:query')")
    @GetMapping(value = "/{id}")
    public AjaxResult getInfo(@PathVariable("id") Long id)
    {
        return AjaxResult.success(baseNumberCardService.selectBaseNumberCardById(id));
    }

    /**
     * 新增次卡
     */
    @PreAuthorize("@ss.hasPermi('goods:BaseNumberCard:add')")
    @Log(title = "次卡", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody BaseNumberCard baseNumberCard)
    {
        return toAjax(baseNumberCardService.insertBaseNumberCard(baseNumberCard));
    }

    /**
     * 修改次卡
     */
    @PreAuthorize("@ss.hasPermi('goods:BaseNumberCard:edit')")
    @Log(title = "次卡", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody BaseNumberCard baseNumberCard)
    {
        return toAjax(baseNumberCardService.updateBaseNumberCard(baseNumberCard));
    }

    /**
     * 删除次卡
     */
    @PreAuthorize("@ss.hasPermi('goods:BaseNumberCard:remove')")
    @Log(title = "次卡", businessType = BusinessType.DELETE)
	@DeleteMapping("/{ids}")
    public AjaxResult remove(@PathVariable Long[] ids)
    {
        return toAjax(baseNumberCardService.deleteBaseNumberCardByIds(ids));
    }
    /**
     * 下架
     */
    @PreAuthorize("@ss.hasPermi('handleCardDown')")
    @Log(title = "次卡", businessType = BusinessType.UPDATE)
	@PutMapping("/handleCardDown/{id}")
    public AjaxResult handleCardDown(@PathVariable Long id)
    {
        BaseNumberCard card = new BaseNumberCard();
        card.setId(id);
        card.setStatus("02");
        return toAjax(baseNumberCardService.updateBaseNumberCard(card));
    }
}
