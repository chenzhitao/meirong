import request from '@/utils/request'

// 查询订单信息列表
export function listOrder(query) {
  return request({
    url: '/business/onlinepayment/list',
    method: 'get',
    params: query
  })
}

// 查询订单信息详细
export function getOrder(id) {
  return request({
    url: '/business/onlinepayment/' + id,
    method: 'get'
  })
}
