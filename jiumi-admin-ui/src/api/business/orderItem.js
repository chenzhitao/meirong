import request from '@/utils/request'

// 查询订单项列表
export function listOrderItem(query) {
  return request({
    url: '/business/orderItem/list',
    method: 'get',
    params: query
  })
}

// 查询订单项详细
export function getOrderItem(id) {
  return request({
    url: '/business/orderItem/' + id,
    method: 'get'
  })
}

// 新增订单项
export function addOrderItem(data) {
  return request({
    url: '/business/orderItem',
    method: 'post',
    data: data
  })
}

// 修改订单项
export function updateOrderItem(data) {
  return request({
    url: '/business/orderItem',
    method: 'put',
    data: data
  })
}

// 删除订单项
export function delOrderItem(id) {
  return request({
    url: '/business/orderItem/' + id,
    method: 'delete'
  })
}

// 导出订单项
export function exportOrderItem(query) {
  return request({
    url: '/business/orderItem/export',
    method: 'get',
    params: query
  })
}