package com.jiumi.finance.service.impl;

import java.util.List;
import com.jiumi.common.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.jiumi.finance.mapper.UserPerformanceCalculateMapper;
import com.jiumi.finance.domain.UserPerformanceCalculate;
import com.jiumi.finance.service.IUserPerformanceCalculateService;

/**
 * 技师业绩核算Service业务层处理
 *
 * @author jiumi
 * @date 2022-02-11
 */
@Service
public class UserPerformanceCalculateServiceImpl implements IUserPerformanceCalculateService
{
    @Autowired
    private UserPerformanceCalculateMapper userPerformanceCalculateMapper;

    /**
     * 查询技师业绩核算
     *
     * @param id 技师业绩核算主键
     * @return 技师业绩核算
     */
    @Override
    public UserPerformanceCalculate selectUserPerformanceCalculateById(Long id)
    {
        return userPerformanceCalculateMapper.selectUserPerformanceCalculateById(id);
    }

    /**
     * 查询技师业绩核算列表
     *
     * @param userPerformanceCalculate 技师业绩核算
     * @return 技师业绩核算
     */
    @Override
    public List<UserPerformanceCalculate> selectUserPerformanceCalculateList(UserPerformanceCalculate userPerformanceCalculate)
    {
        return userPerformanceCalculateMapper.selectUserPerformanceCalculateList(userPerformanceCalculate);
    }

    /**
     * 新增技师业绩核算
     *
     * @param userPerformanceCalculate 技师业绩核算
     * @return 结果
     */
    @Override
    public int insertUserPerformanceCalculate(UserPerformanceCalculate userPerformanceCalculate)
    {
        userPerformanceCalculate.setCreateTime(DateUtils.getNowDate());
        return userPerformanceCalculateMapper.insertUserPerformanceCalculate(userPerformanceCalculate);
    }

    /**
     * 修改技师业绩核算
     *
     * @param userPerformanceCalculate 技师业绩核算
     * @return 结果
     */
    @Override
    public int updateUserPerformanceCalculate(UserPerformanceCalculate userPerformanceCalculate)
    {
        userPerformanceCalculate.setUpdateTime(DateUtils.getNowDate());
        return userPerformanceCalculateMapper.updateUserPerformanceCalculate(userPerformanceCalculate);
    }

    /**
     * 批量删除技师业绩核算
     *
     * @param ids 需要删除的技师业绩核算主键
     * @return 结果
     */
    @Override
    public int deleteUserPerformanceCalculateByIds(Long[] ids)
    {
        return userPerformanceCalculateMapper.deleteUserPerformanceCalculateByIds(ids);
    }

    /**
     * 删除技师业绩核算信息
     *
     * @param id 技师业绩核算主键
     * @return 结果
     */
    @Override
    public int deleteUserPerformanceCalculateById(Long id)
    {
        return userPerformanceCalculateMapper.deleteUserPerformanceCalculateById(id);
    }

    @Override
    public void deleteUserPerformanceCalculateByOrderId(Long id) {
        userPerformanceCalculateMapper.deleteUserPerformanceCalculateByOrderId(id);
    }
}
