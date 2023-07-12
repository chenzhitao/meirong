import request from '@/utils/request'

// 查询用户提现记录列表
export function listWithdraw(query) {
  return request({
    url: '/finance/withdraw/list',
    method: 'get',
    params: query
  })
}

// 查询用户提现记录详细
export function getWithdraw(id) {
  return request({
    url: '/finance/withdraw/' + id,
    method: 'get'
  })
}

// 新增用户提现记录
export function addWithdraw(data) {
  return request({
    url: '/finance/withdraw',
    method: 'post',
    data: data
  })
}

// 修改用户提现记录
export function updateWithdraw(data) {
  return request({
    url: '/finance/withdraw',
    method: 'put',
    data: data
  })
}

// 删除用户提现记录
export function delWithdraw(id) {
  return request({
    url: '/finance/withdraw/' + id,
    method: 'delete'
  })
}

export function paymentWithdrawAmount(id) {
  return request({
    url: '/finance/withdraw/paymentWithdrawAmount/' + id,
    method: 'get'
  })
}

// 导出用户提现记录
export function exportWithdraw(query) {
  return request({
    url: '/finance/withdraw/export',
    method: 'get',
    params: query
  })
}
