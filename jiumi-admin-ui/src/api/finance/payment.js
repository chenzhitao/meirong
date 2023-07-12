import request from '@/utils/request'

// 查询跨店结算列表
export function listPayment(query) {
  return request({
    url: '/finance/payment/list',
    method: 'get',
    params: query
  })
}

// 查询跨店结算详细
export function getPayment(id) {
  return request({
    url: '/finance/payment/' + id,
    method: 'get'
  })
}

// 新增跨店结算
export function addPayment(data) {
  return request({
    url: '/finance/payment',
    method: 'post',
    data: data
  })
}

// 修改跨店结算
export function updatePayment(data) {
  return request({
    url: '/finance/payment',
    method: 'put',
    data: data
  })
}

// 删除跨店结算
export function delPayment(id) {
  return request({
    url: '/finance/payment/' + id,
    method: 'delete'
  })
}

// 导出跨店结算
export function exportPayment(query) {
  return request({
    url: '/finance/payment/export',
    method: 'get',
    params: query
  })
}