import request from '@/utils/request'

// 查询订单项列表
export function listItem(query) {
  return request({
    url: '/exam/item/list',
    method: 'get',
    params: query
  })
}

// 查询订单项详细
export function getItem(id) {
  return request({
    url: '/exam/item/' + id,
    method: 'get'
  })
}

// 新增订单项
export function addItem(data) {
  return request({
    url: '/exam/item',
    method: 'post',
    data: data
  })
}

// 修改订单项
export function updateItem(data) {
  return request({
    url: '/exam/item',
    method: 'put',
    data: data
  })
}

// 删除订单项
export function delItem(id) {
  return request({
    url: '/exam/item/' + id,
    method: 'delete'
  })
}

// 导出订单项
export function exportItem(query) {
  return request({
    url: '/exam/item/export',
    method: 'get',
    params: query
  })
}