import request from '@/utils/request'

// 查询会员登记配置列表
export function listVip(query) {
  return request({
    url: '/business/vip/list',
    method: 'get',
    params: query
  })
}

export function getAllViplist() {
  return request({
    url: '/business/vip/getAllViplist',
    method: 'get'
  })
}

// 查询会员登记配置详细
export function getVip(vipLevel) {
  return request({
    url: '/business/vip/' + vipLevel,
    method: 'get'
  })
}

// 新增会员登记配置
export function addVip(data) {
  return request({
    url: '/business/vip',
    method: 'post',
    data: data
  })
}

// 修改会员登记配置
export function updateVip(data) {
  return request({
    url: '/business/vip',
    method: 'put',
    data: data
  })
}

// 删除会员登记配置
export function delVip(vipLevel) {
  return request({
    url: '/business/vip/' + vipLevel,
    method: 'delete'
  })
}

// 导出会员登记配置
export function exportVip(query) {
  return request({
    url: '/business/vip/export',
    method: 'get',
    params: query
  })
}
