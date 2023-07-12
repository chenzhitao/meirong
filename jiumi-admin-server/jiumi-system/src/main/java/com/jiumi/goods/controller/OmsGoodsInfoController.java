package com.jiumi.goods.controller;

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
import com.jiumi.goods.domain.OmsGoodsInfo;
import com.jiumi.goods.service.IOmsGoodsInfoService;
import com.jiumi.common.utils.poi.ExcelUtil;
import com.jiumi.common.core.page.TableDataInfo;

/**
 * 商品管理Controller
 *
 * @author jiumi
 * @date 2021-11-19
 */
@RestController
@RequestMapping("/goods/goodsinfo")
public class OmsGoodsInfoController extends BaseController
{
    @Autowired
    private IOmsGoodsInfoService omsGoodsInfoService;

    /**
     * 查询商品管理列表
     */
    @PreAuthorize("@ss.hasPermi('goods:goodsinfo:list')")
    @GetMapping("/list")
    public TableDataInfo list(OmsGoodsInfo omsGoodsInfo)
    {
        startPage();
        List<OmsGoodsInfo> list = omsGoodsInfoService.selectOmsGoodsInfoList(omsGoodsInfo);
        return getDataTable(list);
    }

    /**
     * 导出商品管理列表
     */
    @PreAuthorize("@ss.hasPermi('goods:goodsinfo:export')")
    @Log(title = "商品管理", businessType = BusinessType.EXPORT)
    @GetMapping("/export")
    public AjaxResult export(OmsGoodsInfo omsGoodsInfo)
    {
        List<OmsGoodsInfo> list = omsGoodsInfoService.selectOmsGoodsInfoList(omsGoodsInfo);
        ExcelUtil<OmsGoodsInfo> util = new ExcelUtil<OmsGoodsInfo>(OmsGoodsInfo.class);
        return util.exportExcel(list, "商品管理数据");
    }

    /**
     * 获取商品管理详细信息
     */
    @PreAuthorize("@ss.hasPermi('goods:goodsinfo:query')")
    @GetMapping(value = "/{id}")
    public AjaxResult getInfo(@PathVariable("id") String id)
    {
        return AjaxResult.success(omsGoodsInfoService.selectOmsGoodsInfoById(id));
    }

    /**
     * 新增商品管理
     */
    @PreAuthorize("@ss.hasPermi('goods:goodsinfo:add')")
    @Log(title = "商品管理", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody OmsGoodsInfo omsGoodsInfo)
    {
        if(omsGoodsInfo.getSharePercent()>1 || omsGoodsInfo.getSharePercent()<0){
            return AjaxResult.error("分享佣金比例填写错误，应该介于(0-1之间)");
        }
        if((omsGoodsInfo.getSub2Commissiona()+omsGoodsInfo.getSub2Commissionb())!=omsGoodsInfo.getSub1Commissiona()){
            return AjaxResult.error("方案2分配分佣之合必须满足返佣设置");
        }
        if((omsGoodsInfo.getSub3Commissiona()+omsGoodsInfo.getSub3Commissionb()+omsGoodsInfo.getSub3Commissionc())!=omsGoodsInfo.getSub1Commissiona()){
            return AjaxResult.error("方案3分配分佣之合必须等于返佣设置");
        }
        OmsGoodsInfo param=new OmsGoodsInfo();
        param.setReferrerFlag("Y");
        List<OmsGoodsInfo> refList=omsGoodsInfoService.selectOmsGoodsInfoList(param);
        if("Y".equals(omsGoodsInfo.getReferrerFlag()) && refList.size()>=6){
            return AjaxResult.error("首页推荐的商品已经达到6个，不能再次设置，如果需要设置先将其他商品取消首页推荐");
        }
        return toAjax(omsGoodsInfoService.insertOmsGoodsInfo(omsGoodsInfo));
    }

    /**
     * 修改商品管理
     */
    @PreAuthorize("@ss.hasPermi('goods:goodsinfo:edit')")
    @Log(title = "商品管理", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody OmsGoodsInfo omsGoodsInfo)
    {
        if(omsGoodsInfo.getSharePercent()>1 || omsGoodsInfo.getSharePercent()<0){
            return AjaxResult.error("分享佣金比例填写错误，应该介于(0-1之间)");
        }
        if((omsGoodsInfo.getSub2Commissiona()+omsGoodsInfo.getSub2Commissionb())!=omsGoodsInfo.getSub1Commissiona()){
            return AjaxResult.error("方案2分配分佣之合必须满足返佣设置");
        }
        if((omsGoodsInfo.getSub3Commissiona()+omsGoodsInfo.getSub3Commissionb()+omsGoodsInfo.getSub3Commissionc())!=omsGoodsInfo.getSub1Commissiona()){
            return AjaxResult.error("方案3分配分佣之合必须满足返佣设置");
        }
        OmsGoodsInfo oldGoods=omsGoodsInfoService.selectOmsGoodsInfoById(omsGoodsInfo.getId());
        OmsGoodsInfo param=new OmsGoodsInfo();
        param.setReferrerFlag("Y");
        List<OmsGoodsInfo> refList=omsGoodsInfoService.selectOmsGoodsInfoList(param);
        if(!"Y".equals(oldGoods.getReferrerFlag()) &&"Y".equals(omsGoodsInfo.getReferrerFlag()) && refList.size()>=6){
            return AjaxResult.error("首页推荐的商品已经达到6个，不能再次设置，如果需要设置先将其他商品取消首页推荐");
        }
        return toAjax(omsGoodsInfoService.updateOmsGoodsInfo(omsGoodsInfo));
    }

    /**
     * 删除商品管理
     */
    @PreAuthorize("@ss.hasPermi('goods:goodsinfo:remove')")
    @Log(title = "商品管理", businessType = BusinessType.DELETE)
	@DeleteMapping("/{ids}")
    public AjaxResult remove(@PathVariable String[] ids)
    {
        return toAjax(omsGoodsInfoService.deleteOmsGoodsInfoByIds(ids));
    }
}
