import request from '@/utils/request'

// 查询技师业绩核算列表
export function listUsercalculate(query) {
  return request({
    url: '/finance/usercalculate/list',
    method: 'get',
    params: query
  })
}

// 查询技师业绩核算详细
export function getUsercalculate(id) {
  return request({
    url: '/finance/usercalculate/' + id,
    method: 'get'
  })
}

// 新增技师业绩核算
export function addUsercalculate(data) {
  return request({
    url: '/finance/usercalculate',
    method: 'post',
    data: data
  })
}

// 修改技师业绩核算
export function updateUsercalculate(data) {
  return request({
    url: '/finance/usercalculate',
    method: 'put',
    data: data
  })
}

// 删除技师业绩核算
export function delUsercalculate(id) {
  return request({
    url: '/finance/usercalculate/' + id,
    method: 'delete'
  })
}

// 导出技师业绩核算
export function exportUsercalculate(query) {
  return request({
    url: '/finance/usercalculate/export',
    method: 'get',
    params: query
  })
}