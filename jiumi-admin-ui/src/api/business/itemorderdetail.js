import request from '@/utils/request'

// 查询项目订单详情列表
export function listItemorderdetail(query) {
  return request({
    url: '/business/itemorderdetail/list',
    method: 'get',
    params: query
  })
}

// 查询项目订单详情详细
export function getItemorderdetail(id) {
  return request({
    url: '/business/itemorderdetail/' + id,
    method: 'get'
  })
}

// 新增项目订单详情
export function addItemorderdetail(data) {
  return request({
    url: '/business/itemorderdetail',
    method: 'post',
    data: data
  })
}

// 修改项目订单详情
export function updateItemorderdetail(data) {
  return request({
    url: '/business/itemorderdetail',
    method: 'put',
    data: data
  })
}

// 删除项目订单详情
export function delItemorderdetail(id) {
  return request({
    url: '/business/itemorderdetail/' + id,
    method: 'delete'
  })
}

// 导出项目订单详情
export function exportItemorderdetail(query) {
  return request({
    url: '/business/itemorderdetail/export',
    method: 'get',
    params: query
  })
}