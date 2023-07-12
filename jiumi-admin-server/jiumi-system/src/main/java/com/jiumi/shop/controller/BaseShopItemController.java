package com.jiumi.shop.controller;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.ArrayList;
import java.util.List;

import com.jiumi.business.domain.OmsConsumerVO;
import com.jiumi.business.domain.OmsVipInfo;
import com.jiumi.business.service.IOmsVipInfoService;
import com.jiumi.common.core.domain.entity.SysUser;
import com.jiumi.finance.domain.UserNumberCardDetail;
import com.jiumi.finance.service.IUserNumberCardDetailService;
import com.jiumi.system.service.ISysUserService;
import org.apache.commons.math3.dfp.DfpField;

import com.jiumi.business.domain.OmsConsumerVO;
import com.jiumi.finance.domain.UserNumberCardDetail;
import com.jiumi.finance.service.IUserNumberCardDetailService;
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
import com.jiumi.shop.domain.BaseShopItem;
import com.jiumi.shop.service.IBaseShopItemService;
import com.jiumi.common.utils.poi.ExcelUtil;
import com.jiumi.common.core.page.TableDataInfo;

/**
 * 项目管理Controller
 *
 * @author jiumi
 * @date 2021-11-19
 */
@RestController
@RequestMapping("/shop/item")
public class BaseShopItemController extends BaseController
{
    @Autowired
    private IBaseShopItemService baseShopItemService;

    @Autowired
    private IUserNumberCardDetailService userNumberCardDetailService;

    @Autowired
    private ISysUserService userService;

    @Autowired
    private IOmsVipInfoService omsVipInfoService;
    /**
     * 查询项目管理列表
     */
    @GetMapping("/list")
    public TableDataInfo list(BaseShopItem baseShopItem)
    {
        startPage();
        List<BaseShopItem> list = baseShopItemService.selectBaseShopItemList(baseShopItem);
        return getDataTable(list);
    }

    @GetMapping("/getAllItemList")
    public AjaxResult getAllItemList(BaseShopItem baseShopItem)
    {
        baseShopItem.setStatus("01");
        List<BaseShopItem> list = baseShopItemService.selectBaseShopItemList(baseShopItem);
        List<OmsConsumerVO> consumerList = new ArrayList<>();
        list.stream().forEach(item->{
            OmsConsumerVO vo=new OmsConsumerVO();
            vo.setId(Long.valueOf(item.getId()));
            vo.setName(item.getItemName());

            UserNumberCardDetail param=new UserNumberCardDetail();
            param.setUserId(baseShopItem.getUserId());

            SysUser sysUser=userService.selectUserById(baseShopItem.getUserId());
            OmsVipInfo vipInfo=omsVipInfoService.selectOmsVipInfoByVipLevel(Long.valueOf(sysUser.getVipLevel()));
            if(vipInfo!=null){
                BigDecimal discount=new BigDecimal(vipInfo.getDiscount()).setScale(2,BigDecimal.ROUND_HALF_UP);
                if(discount.doubleValue()<=0){
                    vo.setDiscountPrice(item.getPrice());
                }else{
                    vo.setDiscountPrice(item.getPrice().multiply(discount).setScale(2,BigDecimal.ROUND_HALF_UP));
                }
                vo.setPrice(item.getPrice());
            }else{
                vo.setDiscountPrice(item.getPrice());
                vo.setPrice(item.getPrice());
            }
            param.setId(Long.valueOf(item.getId()));
           List<UserNumberCardDetail> cardList= userNumberCardDetailService.selectUserNumberCardDetailListByItemId(param);
           if(cardList!=null && cardList.size()>0){
               UserNumberCardDetail detail=cardList.get(0);
               vo.setLastTimes(detail.getLastTimes());
               vo.setCardId(detail.getId());
           }
            consumerList.add(vo);
        });
        return AjaxResult.success(consumerList);
    }

    /**
     * 导出项目管理列表
     */
    @PreAuthorize("@ss.hasPermi('shop:item:export')")
    @Log(title = "项目管理", businessType = BusinessType.EXPORT)
    @GetMapping("/export")
    public AjaxResult export(BaseShopItem baseShopItem)
    {
        List<BaseShopItem> list = baseShopItemService.selectBaseShopItemList(baseShopItem);
        ExcelUtil<BaseShopItem> util = new ExcelUtil<BaseShopItem>(BaseShopItem.class);
        return util.exportExcel(list, "项目管理数据");
    }



    /**
     * 获取项目管理详细信息
     */
    @PreAuthorize("@ss.hasPermi('shop:item:query')")
    @GetMapping(value = "/{id}")
    public AjaxResult getInfo(@PathVariable("id") String id)
    {
        return AjaxResult.success(baseShopItemService.selectBaseShopItemById(id));
    }

    /**
     * 新增项目管理
     */
    @PreAuthorize("@ss.hasPermi('shop:item:add')")
    @Log(title = "项目管理", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody BaseShopItem baseShopItem)
    {
        if(baseShopItem.getShareRateType()==1) {
            if (baseShopItem.getSharePercent1() > 1 || baseShopItem.getSharePercent1() < 0) {
                return AjaxResult.error("等级1分享佣金比例填写错误，应该介于(0-1之间)");
            }
            if (baseShopItem.getSharePercent2() > 1 || baseShopItem.getSharePercent2() < 0) {
                return AjaxResult.error("等级2分享佣金比例填写错误，应该介于(0-1之间)");
            }
            if (baseShopItem.getSharePercent3() > 1 || baseShopItem.getSharePercent3() < 0) {
                return AjaxResult.error("等级3分享佣金比例填写错误，应该介于(0-1之间)");
            }
            if (baseShopItem.getSharePercent4() > 1 || baseShopItem.getSharePercent4() < 0) {
                return AjaxResult.error("等级4分享佣金比例填写错误，应该介于(0-1之间)");
            }
        }else{
            if (baseShopItem.getSharePercent1() <= 0) {
                return AjaxResult.error("等级1分享佣金金额填写错误，金额大于0");
            }
            if (baseShopItem.getSharePercent2() <= 0) {
                return AjaxResult.error("等级2分享佣金金额填写错误，金额大于0");
            }
            if (baseShopItem.getSharePercent3() <= 0) {
                return AjaxResult.error("等级3分享佣金金额填写错误，金额大于0");
            }
            if (baseShopItem.getSharePercent4() <= 0) {
                return AjaxResult.error("等级4分享佣金金额填写错误，金额大于0");
            }
        }
        return toAjax(baseShopItemService.insertBaseShopItem(baseShopItem));
    }

    /**
     * 修改项目管理
     */
    @PreAuthorize("@ss.hasPermi('shop:item:edit')")
    @Log(title = "项目管理", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody BaseShopItem baseShopItem)
    {
        if(baseShopItem.getShareRateType()==1) {
            if (baseShopItem.getSharePercent1() > 1 || baseShopItem.getSharePercent1() < 0) {
                return AjaxResult.error("等级1分享佣金比例填写错误，应该介于(0-1之间)");
            }
            if (baseShopItem.getSharePercent2() > 1 || baseShopItem.getSharePercent2() < 0) {
                return AjaxResult.error("等级2分享佣金比例填写错误，应该介于(0-1之间)");
            }
            if (baseShopItem.getSharePercent3() > 1 || baseShopItem.getSharePercent3() < 0) {
                return AjaxResult.error("等级3分享佣金比例填写错误，应该介于(0-1之间)");
            }
            if (baseShopItem.getSharePercent4() > 1 || baseShopItem.getSharePercent4() < 0) {
                return AjaxResult.error("等级4分享佣金比例填写错误，应该介于(0-1之间)");
            }
        }else{
            if (baseShopItem.getSharePercent1() <= 0) {
                return AjaxResult.error("等级1分享佣金金额填写错误，金额大于0");
            }
            if (baseShopItem.getSharePercent2() <= 0) {
                return AjaxResult.error("等级2分享佣金金额填写错误，金额大于0");
            }
            if (baseShopItem.getSharePercent3() <= 0) {
                return AjaxResult.error("等级3分享佣金金额填写错误，金额大于0");
            }
            if (baseShopItem.getSharePercent4() <= 0) {
                return AjaxResult.error("等级4分享佣金金额填写错误，金额大于0");
            }
        }
        return toAjax(baseShopItemService.updateBaseShopItem(baseShopItem));
    }
    /**
     * 下架项目
     */
    @PreAuthorize("@ss.hasPermi('shop:item:off')")
    @Log(title = "下架项目", businessType = BusinessType.UPDATE)
    @GetMapping("/off/{id}")
    public AjaxResult off(@PathVariable("id") Long id)
    {
        BaseShopItem baseShopItem = new BaseShopItem();
        baseShopItem.setId(String.valueOf(id));
        BaseShopItem item=baseShopItemService.selectBaseShopItemById(String.valueOf(id));
        if("01".equals(item.getStatus())){
            baseShopItem.setStatus("02");
        }else{
            baseShopItem.setStatus("01");
        }
        return toAjax(baseShopItemService.updateBaseShopItem(baseShopItem));
    }

    /**
     * 删除项目管理
     */
    @PreAuthorize("@ss.hasPermi('shop:item:remove')")
    @Log(title = "项目管理", businessType = BusinessType.DELETE)
	@DeleteMapping("/{ids}")
    public AjaxResult remove(@PathVariable String[] ids)
    {
        return toAjax(baseShopItemService.deleteBaseShopItemByIds(ids));
    }
}
