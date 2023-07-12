import request from '@/utils/request'

// 查询返佣记录列表
export function listRecord(query) {
  return request({
    url: '/business/record/list',
    method: 'get',
    params: query
  })
}

// 查询返佣记录详细
export function getRecord(id) {
  return request({
    url: '/business/record/' + id,
    method: 'get'
  })
}

// 新增返佣记录
export function addRecord(data) {
  return request({
    url: '/business/record',
    method: 'post',
    data: data
  })
}

// 修改返佣记录
export function updateRecord(data) {
  return request({
    url: '/business/record',
    method: 'put',
    data: data
  })
}

// 删除返佣记录
export function delRecord(id) {
  return request({
    url: '/business/record/' + id,
    method: 'delete'
  })
}

// 导出返佣记录
export function exportRecord(query) {
  return request({
    url: '/business/record/export',
    method: 'get',
    params: query
  })
}