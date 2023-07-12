import request from '@/utils/request'

// 查询门店项目预约列表
export function listApply(query) {
  return request({
    url: '/business/apply/list',
    method: 'get',
    params: query
  })
}

// 查询门店项目预约详细
export function getApply(id) {
  return request({
    url: '/business/apply/' + id,
    method: 'get'
  })
}

// 新增门店项目预约
export function addApply(data) {
  return request({
    url: '/business/apply',
    method: 'post',
    data: data
  })
}

// 修改门店项目预约
export function updateApply(data) {
  return request({
    url: '/business/apply',
    method: 'put',
    data: data
  })
}

// 删除门店项目预约
export function delApply(id) {
  return request({
    url: '/business/apply/' + id,
    method: 'delete'
  })
}

export function resiveApplyUser(id) {
  return request({
    url: '/business/apply/resiveApplyUser/' + id,
    method: 'get'
  })
}

// 导出门店项目预约
export function exportApply(query) {
  return request({
    url: '/business/apply/export',
    method: 'get',
    params: query
  })
}
