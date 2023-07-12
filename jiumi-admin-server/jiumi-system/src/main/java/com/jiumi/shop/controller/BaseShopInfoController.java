package com.jiumi.shop.controller;

import java.util.ArrayList;
import java.util.List;

import com.jiumi.common.utils.DateUtils;
import com.jiumi.common.utils.SecurityUtils;
import com.jiumi.shop.domain.BaseAnalyiseVo;
import com.jiumi.system.mapper.SysRoleMapper;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
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
import com.jiumi.shop.domain.BaseShopInfo;
import com.jiumi.shop.service.IBaseShopInfoService;
import com.jiumi.common.utils.poi.ExcelUtil;
import com.jiumi.common.core.page.TableDataInfo;

/**
 * 门店Controller
 *
 * @author jiumi
 * @date 2021-11-19
 */
@RestController
@RequestMapping("/shop/shopinfo")
public class BaseShopInfoController extends BaseController
{
    @Autowired
    private IBaseShopInfoService baseShopInfoService;

    @Autowired
    private SysRoleMapper roleMapper;

    /**
     * 查询门店列表
     */
    @GetMapping("/list")
    public TableDataInfo list(BaseShopInfo baseShopInfo)
    {
        startPage();
        List<BaseShopInfo> list = baseShopInfoService.selectBaseShopInfoList(baseShopInfo);
        return getDataTable(list);
    }

    @GetMapping("/getShopAnalysisData")
    public AjaxResult getShopAnalysisData(BaseAnalyiseVo vo)
    {
        List<BaseShopInfo> showList=baseShopInfoService.selectBaseShopInfoList(new BaseShopInfo());
        List<Integer> roleList=roleMapper.selectRoleListByUserId(SecurityUtils.getUserId());
         boolean rightFlag=false;
        if(roleList.contains(1) || roleList.contains(2)){
            rightFlag=true;
        }
        String shopId=SecurityUtils.getLoginUser().getUser().getSourceShop();
        List<BaseAnalyiseVo> dataList=new ArrayList<>();
        for(BaseShopInfo shop :showList){
            if(rightFlag==false){
                if(shop.getId().equals(shopId)){
                    BaseAnalyiseVo v=new BaseAnalyiseVo();
                    v.setId(shop.getId()+"");
                    v.setShopName(shop.getShopName());
                    dataList.add(v);
                }
            }else{
                BaseAnalyiseVo v=new BaseAnalyiseVo();
                v.setId(shop.getId()+"");
                v.setShopName(shop.getShopName());
                dataList.add(v);
            }
        }
        String dateStr=DateUtils.getDate();
        vo.setBeginTime(dateStr+" 00:00:00");
        vo.setEndTime(dateStr+" 23:59:59");
        //查询当日消费笔数，消费金额
        List<BaseAnalyiseVo> list =baseShopInfoService.getShopAnalysisData(vo);
        dataList.stream().forEach(data->{
            BaseAnalyiseVo itemOne= list.stream().filter(item->item.getShopName().equals(data.getShopName())).findFirst().orElse(null);
                if(itemOne!=null){
                    data.setBuyNumD(itemOne.getBuyNumD());
                    data.setBuyAmountD(itemOne.getBuyAmountD());
                }
        });
        BaseAnalyiseVo param=new BaseAnalyiseVo();
        String start=dateStr.substring(0,7)+"-01 00:00:00";
        System.out.println(start);
        param.setBeginTime(start);
        param.setEndTime(dateStr+" 23:59:59");
        //查询本月
        // 消费笔数，消费金额
        List<BaseAnalyiseVo> newlist =baseShopInfoService.getShopAnalysisData(param);
        dataList.stream().forEach(data->{
            BaseAnalyiseVo itemOne= newlist.stream().filter(item->item.getShopName().equals(data.getShopName())).findFirst().orElse(null);
            if(itemOne!=null){
                data.setBuyNumM(itemOne.getBuyNumD());
                data.setBuyAmountM(itemOne.getBuyAmountD());
            }
        });

        //查询当日新增会员
        List<BaseAnalyiseVo> addlist =baseShopInfoService.getShopAnalysisAddData(vo);
        dataList.stream().forEach(data->{
            BaseAnalyiseVo itemOne= addlist.stream().filter(item->data.getShopName().equals(item.getShopName())).findFirst().orElse(null);
            if(itemOne!=null){
                data.setAddNumD(itemOne.getAddNumD());
            }
        });

        //查询当月新增会员
        List<BaseAnalyiseVo> addlistM =baseShopInfoService.getShopAnalysisAddData(param);
        dataList.stream().forEach(data->{
            BaseAnalyiseVo itemOne= addlistM.stream().filter(item->data.getShopName().equals(item.getShopName())).findFirst().orElse(null);
            if(itemOne!=null){
                data.setAddNumM(itemOne.getAddNumD());
            }
        });

        //查询当日充值金额
        List<BaseAnalyiseVo> chargelist =baseShopInfoService.getShopAnalysisChargeData(vo);
        dataList.stream().forEach(data->{
            BaseAnalyiseVo itemOne= chargelist.stream().filter(item->data.getShopName().equals(item.getShopName())).findFirst().orElse(null);
            if(itemOne!=null){
                data.setChargeAmountD(itemOne.getChargeAmountD());
            }
        });

        //查询当月充值金额
        List<BaseAnalyiseVo> chargelistM =baseShopInfoService.getShopAnalysisChargeData(param);
        dataList.stream().forEach(data->{
            BaseAnalyiseVo itemOne= chargelistM.stream().filter(item->data.getShopName().equals(item.getShopName())).findFirst().orElse(null);
            if(itemOne!=null){
                data.setChargeAmountM(itemOne.getChargeAmountD());
            }
        });
        return AjaxResult.success(dataList);
    }

    @GetMapping("/queryAllShopList")
    public AjaxResult queryAllShopList(BaseShopInfo baseShopInfo)
    {
        baseShopInfo.setStatus("Y");
        List<BaseShopInfo> list = baseShopInfoService.selectBaseShopInfoList(baseShopInfo);
        return AjaxResult.success(list);
    }

    /**
     * 导出门店列表
     */
    @PreAuthorize("@ss.hasPermi('shop:shopinfo:export')")
    @Log(title = "门店", businessType = BusinessType.EXPORT)
    @GetMapping("/export")
    public AjaxResult export(BaseShopInfo baseShopInfo)
    {
        List<BaseShopInfo> list = baseShopInfoService.selectBaseShopInfoList(baseShopInfo);
        ExcelUtil<BaseShopInfo> util = new ExcelUtil<BaseShopInfo>(BaseShopInfo.class);
        return util.exportExcel(list, "门店数据");
    }

    /**
     * 获取门店详细信息
     */
    @PreAuthorize("@ss.hasPermi('shop:shopinfo:query')")
    @GetMapping(value = "/{id}")
    public AjaxResult getInfo(@PathVariable("id") String id)
    {
        return AjaxResult.success(baseShopInfoService.selectBaseShopInfoById(id));
    }

    /**
     * 新增门店
     */
    @PreAuthorize("@ss.hasPermi('shop:shopinfo:add')")
    @Log(title = "门店", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody BaseShopInfo baseShopInfo)
    {
        return toAjax(baseShopInfoService.insertBaseShopInfo(baseShopInfo));
    }

    /**
     * 修改门店
     */
    @PreAuthorize("@ss.hasPermi('shop:shopinfo:edit')")
    @Log(title = "门店", businessType = BusinessType.UPDATE)
    @Transactional
    @PutMapping
    public AjaxResult edit(@RequestBody BaseShopInfo baseShopInfo)
    {
        return toAjax(baseShopInfoService.updateBaseShopInfo(baseShopInfo));
    }

    /**
     * 删除门店
     */
    @PreAuthorize("@ss.hasPermi('shop:shopinfo:remove')")
    @Log(title = "门店", businessType = BusinessType.DELETE)
	@DeleteMapping("/{ids}")
    public AjaxResult remove(@PathVariable String[] ids)
    {
        return toAjax(baseShopInfoService.deleteBaseShopInfoByIds(ids));
    }
}
