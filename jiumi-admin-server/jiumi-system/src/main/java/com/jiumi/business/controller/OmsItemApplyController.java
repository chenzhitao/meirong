package com.jiumi.business.controller;

import java.math.BigDecimal;
import java.util.List;

import com.jiumi.business.domain.OmsOrderItemDetail;
import com.jiumi.business.domain.OmsOrderItemInfo;
import com.jiumi.business.domain.OmsVipInfo;
import com.jiumi.business.service.IOmsOrderItemDetailService;
import com.jiumi.business.service.IOmsOrderItemInfoService;
import com.jiumi.business.service.IOmsVipInfoService;
import com.jiumi.common.core.domain.entity.SysUser;
import com.jiumi.common.utils.DateUtils;
import com.jiumi.common.utils.SecurityUtils;
import com.jiumi.shop.domain.BaseShopItem;
import com.jiumi.shop.service.IBaseShopItemService;
import com.jiumi.system.service.ISysUserService;
import org.apache.commons.lang3.RandomStringUtils;
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
import com.jiumi.business.domain.OmsItemApply;
import com.jiumi.business.service.IOmsItemApplyService;
import com.jiumi.common.utils.poi.ExcelUtil;
import com.jiumi.common.core.page.TableDataInfo;

/**
 * 门店项目预约Controller
 *
 * @author jiumi
 * @date 2021-11-19
 */
@RestController
@RequestMapping("/business/apply")
public class OmsItemApplyController extends BaseController
{
    @Autowired
    private IOmsItemApplyService omsItemApplyService;

    @Autowired
    private IOmsOrderItemInfoService omsOrderItemInfoService;

    @Autowired
    private ISysUserService userService;

    @Autowired
    private IOmsVipInfoService omsVipInfoService;
    @Autowired
    private IBaseShopItemService baseShopItemService;

    @Autowired
    private IOmsOrderItemDetailService omsOrderItemDetailService;
    /**
     * 查询门店项目预约列表
     */
    @PreAuthorize("@ss.hasPermi('business:apply:list')")
    @GetMapping("/list")
    public TableDataInfo list(OmsItemApply omsItemApply)
    {
        startPage();
        List<OmsItemApply> list = omsItemApplyService.selectOmsItemApplyList(omsItemApply);
        return getDataTable(list);
    }

    /**
     * 导出门店项目预约列表
     */
    @PreAuthorize("@ss.hasPermi('business:apply:export')")
    @Log(title = "门店项目预约", businessType = BusinessType.EXPORT)
    @GetMapping("/export")
    public AjaxResult export(OmsItemApply omsItemApply)
    {
        List<OmsItemApply> list = omsItemApplyService.selectOmsItemApplyList(omsItemApply);
        ExcelUtil<OmsItemApply> util = new ExcelUtil<OmsItemApply>(OmsItemApply.class);
        return util.exportExcel(list, "门店项目预约数据");
    }

    /**
     * 获取门店项目预约详细信息
     */
    @PreAuthorize("@ss.hasPermi('business:apply:query')")
    @GetMapping(value = "/{id}")
    public AjaxResult getInfo(@PathVariable("id") String id)
    {
        return AjaxResult.success(omsItemApplyService.selectOmsItemApplyById(id));
    }

    /**
     * 新增门店项目预约
     */
    @PreAuthorize("@ss.hasPermi('business:apply:add')")
    @Log(title = "门店项目预约", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody OmsItemApply omsItemApply)
    {
        return toAjax(omsItemApplyService.insertOmsItemApply(omsItemApply));
    }

    /**
     * 修改门店项目预约
     */
    @PreAuthorize("@ss.hasPermi('business:apply:edit')")
    @Log(title = "门店项目预约", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody OmsItemApply omsItemApply)
    {
        return toAjax(omsItemApplyService.updateOmsItemApply(omsItemApply));
    }

    /**
     * 删除门店项目预约
     */
    @PreAuthorize("@ss.hasPermi('business:apply:remove')")
    @Log(title = "门店项目预约", businessType = BusinessType.DELETE)
	@DeleteMapping("/{ids}")
    public AjaxResult remove(@PathVariable String[] ids)
    {
        return toAjax(omsItemApplyService.deleteOmsItemApplyByIds(ids));
    }

    @Log(title = "门店预约用户接待", businessType = BusinessType.UPDATE)
	@GetMapping("/resiveApplyUser/{id}")
    public AjaxResult resiveApplyUser(@PathVariable String id)throws Exception
    {
        OmsItemApply apply=omsItemApplyService.selectOmsItemApplyById(id);
        String status=apply.getStatus();
        if("01".equals(status) || "04".equals(status)){
            apply.setStatus("02");
            apply.setUpdateTime(DateUtils.getNowDate());
            apply.setUpdateBy(SecurityUtils.getUsername());
            int result= omsItemApplyService.updateOmsItemApply(apply);
            if(result>0){
                OmsOrderItemInfo itemOrder=new OmsOrderItemInfo();
                SysUser applyUser=userService.selectUserById(apply.getApplyUserId());
                String orderCode= "DD"+DateUtils.dateTimeNow()+ RandomStringUtils.randomNumeric(6);
                itemOrder.setApplyId(Long.valueOf(apply.getId()));
                itemOrder.setShopId(apply.getShopId());
                itemOrder.setUserId(apply.getApplyUserId());
                itemOrder.setUserName(applyUser.getUserName());
                itemOrder.setUserPhone(applyUser.getPhonenumber());
                itemOrder.setOrderCode(orderCode);
                itemOrder.setOrderTime(DateUtils.getNowDate());
                itemOrder.setOrderType("02");
                OmsVipInfo vipInfo=omsVipInfoService.selectOmsVipInfoByVipLevel(Long.valueOf(applyUser.getVipLevel()));
                BaseShopItem shopItem=baseShopItemService.selectBaseShopItemById(apply.getItemId()+"");
                if(vipInfo!=null){
                    BigDecimal discount=new BigDecimal(Double.valueOf(vipInfo.getDiscount()));
                    itemOrder.setSumAmount(shopItem.getPrice().multiply(discount).setScale(2,BigDecimal.ROUND_HALF_UP));
                }else{
                    itemOrder.setSumAmount(shopItem.getPrice());
                }
                itemOrder.setOrderStatus("01");
                itemOrder.setRemark("小程序预约项目订单");
                itemOrder.setCreateBy(SecurityUtils.getUsername());
                itemOrder.setCreateTime(DateUtils.getNowDate());
                int r=omsOrderItemInfoService.insertOmsOrderItemInfo(itemOrder);
                if(r>0){
                    OmsOrderItemDetail orderDetail=new OmsOrderItemDetail();
                    orderDetail.setOrderId(itemOrder.getId());
                    orderDetail.setConsumerId(Long.valueOf(shopItem.getId()));
                    orderDetail.setConsumerType(1);
                    orderDetail.setPrice(itemOrder.getSumAmount());
                    orderDetail.setNum(1);
                    orderDetail.setFinalAmount(itemOrder.getSumAmount());
                    omsOrderItemDetailService.insertOmsOrderItemDetail(orderDetail);
                }
            }
            return AjaxResult.success("操作成功！");
        }
        else{
            return AjaxResult.error("状态错误！");
        }
    }
}
