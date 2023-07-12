import request from '@/utils/request'

// 查询用户充值记录列表
export function listRecharge(query) {
  return request({
    url: '/finance/recharge/list',
    method: 'get',
    params: query
  })
}

// 查询用户充值记录详细
export function getRecharge(id) {
  return request({
    url: '/finance/recharge/' + id,
    method: 'get'
  })
}

// 新增用户充值记录
export function addRecharge(data) {
  return request({
    url: '/finance/recharge',
    method: 'post',
    data: data
  })
}

// 修改用户充值记录
export function updateRecharge(data) {
  return request({
    url: '/finance/recharge',
    method: 'put',
    data: data
  })
}

// 删除用户充值记录
export function delRecharge(id) {
  return request({
    url: '/finance/recharge/' + id,
    method: 'delete'
  })
}

// 导出用户充值记录
export function exportRecharge(query) {
  return request({
    url: '/finance/recharge/export',
    method: 'get',
    params: query
  })
}