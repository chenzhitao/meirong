package com.jiumi.finance.mapper;

import java.util.List;
import com.jiumi.finance.domain.UserPerformanceCalculate;

/**
 * 技师业绩核算Mapper接口
 *
 * @author jiumi
 * @date 2022-02-11
 */
public interface UserPerformanceCalculateMapper
{
    /**
     * 查询技师业绩核算
     *
     * @param id 技师业绩核算主键
     * @return 技师业绩核算
     */
    public UserPerformanceCalculate selectUserPerformanceCalculateById(Long id);

    /**
     * 查询技师业绩核算列表
     *
     * @param userPerformanceCalculate 技师业绩核算
     * @return 技师业绩核算集合
     */
    public List<UserPerformanceCalculate> selectUserPerformanceCalculateList(UserPerformanceCalculate userPerformanceCalculate);

    /**
     * 新增技师业绩核算
     *
     * @param userPerformanceCalculate 技师业绩核算
     * @return 结果
     */
    public int insertUserPerformanceCalculate(UserPerformanceCalculate userPerformanceCalculate);

    /**
     * 修改技师业绩核算
     *
     * @param userPerformanceCalculate 技师业绩核算
     * @return 结果
     */
    public int updateUserPerformanceCalculate(UserPerformanceCalculate userPerformanceCalculate);

    /**
     * 删除技师业绩核算
     *
     * @param id 技师业绩核算主键
     * @return 结果
     */
    public int deleteUserPerformanceCalculateById(Long id);

    /**
     * 批量删除技师业绩核算
     *
     * @param ids 需要删除的数据主键集合
     * @return 结果
     */
    public int deleteUserPerformanceCalculateByIds(Long[] ids);

    void deleteUserPerformanceCalculateByOrderId(Long id);
}
