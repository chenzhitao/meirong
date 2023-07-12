import request from '@/utils/request'

// 查询订单信息列表
export function listOrder(query) {
  return request({
    url: '/business/order/list',
    method: 'get',
    params: query
  })
}

// 查询订单信息详细
export function getOrder(id) {
  return request({
    url: '/business/order/' + id,
    method: 'get'
  })
}

// 新增订单信息
export function addOrder(data) {
  return request({
    url: '/business/order',
    method: 'post',
    data: data
  })
}

// 修改订单信息
export function updateOrder(data) {
  return request({
    url: '/business/order',
    method: 'put',
    data: data
  })
}


export function updateSebdOrder(data) {
  return request({
    url: '/business/order/orderSend',
    method: 'put',
    data: data
  })
}

// 删除订单信息
export function delOrder(id) {
  return request({
    url: '/business/order/' + id,
    method: 'delete'
  })
}

// 导出订单信息
export function exportOrder(query) {
  return request({
    url: '/business/order/export',
    method: 'get',
    params: query
  })
}
