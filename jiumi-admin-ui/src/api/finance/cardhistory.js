import request from '@/utils/request'

// 查询用户次卡使用记录列表
export function listCardhistory(query) {
  return request({
    url: '/finance/cardhistory/list',
    method: 'get',
    params: query
  })
}

// 查询用户次卡使用记录详细
export function getCardhistory(id) {
  return request({
    url: '/finance/cardhistory/' + id,
    method: 'get'
  })
}

// 新增用户次卡使用记录
export function addCardhistory(data) {
  return request({
    url: '/finance/cardhistory',
    method: 'post',
    data: data
  })
}

// 修改用户次卡使用记录
export function updateCardhistory(data) {
  return request({
    url: '/finance/cardhistory',
    method: 'put',
    data: data
  })
}

// 删除用户次卡使用记录
export function delCardhistory(id) {
  return request({
    url: '/finance/cardhistory/' + id,
    method: 'delete'
  })
}

// 导出用户次卡使用记录
export function exportCardhistory(query) {
  return request({
    url: '/finance/cardhistory/export',
    method: 'get',
    params: query
  })
}