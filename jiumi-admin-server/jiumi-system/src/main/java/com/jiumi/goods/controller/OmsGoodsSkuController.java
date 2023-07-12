package com.jiumi.goods.controller;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.jiumi.business.domain.OmsConsumerVO;
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
import com.jiumi.goods.domain.OmsGoodsSku;
import com.jiumi.goods.service.IOmsGoodsSkuService;
import com.jiumi.common.utils.poi.ExcelUtil;
import com.jiumi.common.core.page.TableDataInfo;

/**
 * 商品规格Controller
 *
 * @author jiumi
 * @date 2021-11-19
 */
@RestController
@RequestMapping("/goods/sku")
public class OmsGoodsSkuController extends BaseController
{
    @Autowired
    private IOmsGoodsSkuService omsGoodsSkuService;

    /**
     * 查询商品规格列表
     */
    @PreAuthorize("@ss.hasPermi('goods:sku:list')")
    @GetMapping("/list")
    public TableDataInfo list(OmsGoodsSku omsGoodsSku)
    {
        startPage();
        List<OmsGoodsSku> list = omsGoodsSkuService.selectOmsGoodsSkuList(omsGoodsSku);
        return getDataTable(list);
    }

    @GetMapping("/allGoodsList")
    public AjaxResult allGoodsList(OmsGoodsSku omsGoodsSku)
    {
        List<OmsGoodsSku> list = omsGoodsSkuService.selectOmsAllGoodsSkuList(omsGoodsSku);

        List<OmsConsumerVO> consumerList = new ArrayList<>();


        list.stream().forEach(sku->{
            OmsConsumerVO vo=new OmsConsumerVO();
            vo.setId(Long.valueOf(sku.getId()));
            vo.setName(sku.getSkuName());
            vo.setPrice(new BigDecimal(sku.getPrice()));

            if(vo.getSub1()==null){
                vo.setSub1(new ArrayList<>());
            }
            if(vo.getSub2()==null){
                vo.setSub2(new ArrayList<>());
            }
            if(vo.getSub3()==null){
                vo.setSub3(new ArrayList<>());
            }
            if(sku.getRebateRatioType()==1){
                List<Map> sub1List=new ArrayList<Map>();
                Map m1=new HashMap<>();
                m1.put("label",String.valueOf(sku.getSub1Commissiona()*100)+"%");
                m1.put("value",sku.getSub1Commissiona());
                sub1List.add(m1);
                vo.setSub1(sub1List);

                List<Map> sub2List=new ArrayList<Map>();
                Map m21=new HashMap<>();
                m21.put("label",String.valueOf(sku.getSub2Commissiona()*100)+"%");
                m21.put("value",sku.getSub2Commissiona());

                Map m22=new HashMap<>();
                m22.put("label",String.valueOf(sku.getSub2Commissionb()*100)+"%");
                m22.put("value",sku.getSub2Commissionb());
                sub2List.add(m21);
                sub2List.add(m22);
                vo.setSub2(sub2List);

                List<Map> sub3List=new ArrayList<Map>();
                Map m31=new HashMap<>();
                m31.put("label",String.valueOf(sku.getSub3Commissiona()*100)+"%");
                m31.put("value",sku.getSub3Commissiona());

                Map m32=new HashMap<>();
                m32.put("label",String.valueOf(sku.getSub3Commissionb()*100)+"%");
                m32.put("value",sku.getSub3Commissionb());

                Map m33=new HashMap<>();
                m33.put("label",String.valueOf(sku.getSub3Commissionc()*100)+"%");
                m33.put("value",sku.getSub3Commissionc());
                sub3List.add(m31);
                sub3List.add(m32);
                sub3List.add(m33);
                vo.setSub3(sub3List);
            }
            else if(sku.getRebateRatioType()==2){
                List<Map> sub1List=new ArrayList<Map>();
                Map m1=new HashMap<>();
                m1.put("label",String.valueOf(sku.getSub1Commissiona())+"元");
                m1.put("value",sku.getSub1Commissiona());
                sub1List.add(m1);
                vo.setSub1(sub1List);

                List<Map> sub2List=new ArrayList<Map>();
                Map m21=new HashMap<>();
                m21.put("label",String.valueOf(sku.getSub2Commissiona())+"元");
                m21.put("value",sku.getSub2Commissiona());

                Map m22=new HashMap<>();
                m22.put("label",String.valueOf(sku.getSub2Commissionb())+"元");
                m22.put("value",sku.getSub2Commissionb());
                sub2List.add(m21);
                sub2List.add(m22);
                vo.setSub2(sub2List);

                List<Map> sub3List=new ArrayList<Map>();
                Map m31=new HashMap<>();
                m31.put("label",String.valueOf(sku.getSub3Commissiona())+"元");
                m31.put("value",sku.getSub3Commissiona());

                Map m32=new HashMap<>();
                m32.put("label",String.valueOf(sku.getSub3Commissionb())+"元");
                m32.put("value",sku.getSub3Commissionb());

                Map m33=new HashMap<>();
                m33.put("label",String.valueOf(sku.getSub3Commissionc())+"元");
                m33.put("value",sku.getSub3Commissionc());
                sub3List.add(m31);
                sub3List.add(m32);
                sub3List.add(m33);
                vo.setSub3(sub3List);
            }
            consumerList.add(vo);
        });
        return AjaxResult.success(consumerList);
    }


    /**
     * 导出商品规格列表
     */
    @PreAuthorize("@ss.hasPermi('goods:sku:export')")
    @Log(title = "商品规格", businessType = BusinessType.EXPORT)
    @GetMapping("/export")
    public AjaxResult export(OmsGoodsSku omsGoodsSku)
    {
        List<OmsGoodsSku> list = omsGoodsSkuService.selectOmsGoodsSkuList(omsGoodsSku);
        ExcelUtil<OmsGoodsSku> util = new ExcelUtil<OmsGoodsSku>(OmsGoodsSku.class);
        return util.exportExcel(list, "商品规格数据");
    }

    /**
     * 获取商品规格详细信息
     */
    @PreAuthorize("@ss.hasPermi('goods:sku:query')")
    @GetMapping(value = "/{id}")
    public AjaxResult getInfo(@PathVariable("id") String id)
    {
        return AjaxResult.success(omsGoodsSkuService.selectOmsGoodsSkuById(id));
    }

    /**
     * 新增商品规格
     */
    @PreAuthorize("@ss.hasPermi('goods:sku:add')")
    @Log(title = "商品规格", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody OmsGoodsSku omsGoodsSku)
    {
        return toAjax(omsGoodsSkuService.insertOmsGoodsSku(omsGoodsSku));
    }

    /**
     * 修改商品规格
     */
    @PreAuthorize("@ss.hasPermi('goods:sku:edit')")
    @Log(title = "商品规格", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody OmsGoodsSku omsGoodsSku)
    {
        return toAjax(omsGoodsSkuService.updateOmsGoodsSku(omsGoodsSku));
    }

    /**
     * 删除商品规格
     */
    @PreAuthorize("@ss.hasPermi('goods:sku:remove')")
    @Log(title = "商品规格", businessType = BusinessType.DELETE)
	@DeleteMapping("/{ids}")
    public AjaxResult remove(@PathVariable String[] ids)
    {
        return toAjax(omsGoodsSkuService.deleteOmsGoodsSkuByIds(ids));
    }
}
