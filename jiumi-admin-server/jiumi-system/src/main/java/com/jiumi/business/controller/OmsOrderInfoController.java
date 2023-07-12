package com.jiumi.business.controller;

import java.util.List;

import com.jiumi.baseconfig.domain.BaseUserMsg;
import com.jiumi.baseconfig.service.IBaseUserMsgService;
import com.jiumi.common.utils.SecurityUtils;
import com.jiumi.pay.domain.util.DateUtils;
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
import com.jiumi.business.domain.OmsOrderInfo;
import com.jiumi.business.service.IOmsOrderInfoService;
import com.jiumi.common.utils.poi.ExcelUtil;
import com.jiumi.common.core.page.TableDataInfo;

/**
 * 订单Controller
 *
 * @author jiumi
 * @date 2021-11-25
 */
@RestController
@RequestMapping("/business/order")
public class OmsOrderInfoController extends BaseController
{
    @Autowired
    private IOmsOrderInfoService omsOrderInfoService;

    @Autowired
    private IBaseUserMsgService baseUserMsgService;

    /**
     * 查询订单列表
     */
    @PreAuthorize("@ss.hasPermi('business:order:list')")
    @GetMapping("/list")
    public TableDataInfo list(OmsOrderInfo omsOrderInfo)
    {
        startPage();
        List<OmsOrderInfo> list = omsOrderInfoService.selectOmsOrderInfoList(omsOrderInfo);
        return getDataTable(list);
    }

    /**
     * 导出订单列表
     */
    @PreAuthorize("@ss.hasPermi('business:order:export')")
    @Log(title = "订单", businessType = BusinessType.EXPORT)
    @GetMapping("/export")
    public AjaxResult export(OmsOrderInfo omsOrderInfo)
    {
        List<OmsOrderInfo> list = omsOrderInfoService.selectOmsOrderInfoList(omsOrderInfo);
        ExcelUtil<OmsOrderInfo> util = new ExcelUtil<OmsOrderInfo>(OmsOrderInfo.class);
        return util.exportExcel(list, "订单数据");
    }

    /**
     * 获取订单详细信息
     */
    @PreAuthorize("@ss.hasPermi('business:order:query')")
    @GetMapping(value = "/{id}")
    public AjaxResult getInfo(@PathVariable("id") String id)
    {
        return AjaxResult.success(omsOrderInfoService.selectOmsOrderInfoById(id));
    }

    /**
     * 新增订单
     */
    @PreAuthorize("@ss.hasPermi('business:order:add')")
    @Log(title = "订单", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody OmsOrderInfo omsOrderInfo)
    {
        return toAjax(omsOrderInfoService.insertOmsOrderInfo(omsOrderInfo));
    }

    /**
     * 修改订单
     */
    @PreAuthorize("@ss.hasPermi('business:order:edit')")
    @Log(title = "订单", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody OmsOrderInfo omsOrderInfo)
    {
        return toAjax(omsOrderInfoService.updateOmsOrderInfo(omsOrderInfo));
    }

    @Log(title = "订单发货", businessType = BusinessType.UPDATE)
    @PutMapping("/orderSend")
    public AjaxResult orderSend(@RequestBody OmsOrderInfo omsOrderInfo)
    {
        OmsOrderInfo order=omsOrderInfoService.selectOmsOrderInfoById(omsOrderInfo.getId());
        if(!"02".equals(order.getOrderStatus())){
            return AjaxResult.error("只有已支付的订单才能进行发货操作");
        }
        BaseUserMsg msg=new BaseUserMsg();
        msg.setUserId(order.getUserId());
        msg.setMsgType("03");
        msg.setMsgTitle("订单提醒");
        msg.setMsgContent("恭喜您于"+ DateUtils.datePath()+"订单已经发货，请关注快递信息，及时签收");
        msg.setCreateTime(DateUtils.getNowDate());
        msg.setMsgCreateTime(DateUtils.getNowDate());
        msg.setMsgState("Y");
        baseUserMsgService.insertBaseUserMsg(msg);

        omsOrderInfo.setOrderStatus("03");
        omsOrderInfo.setUpdateBy(SecurityUtils.getUsername());
        return toAjax(omsOrderInfoService.updateOmsOrderInfo(omsOrderInfo));
    }

    /**
     * 删除订单
     */
    @PreAuthorize("@ss.hasPermi('business:order:remove')")
    @Log(title = "订单", businessType = BusinessType.DELETE)
	@DeleteMapping("/{ids}")
    public AjaxResult remove(@PathVariable String[] ids)
    {
        return toAjax(omsOrderInfoService.deleteOmsOrderInfoByIds(ids));
    }
}
