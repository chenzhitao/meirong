import request from '@/utils/request'

// 查询次卡列表
export function listBaseNumberCard(query) {
  return request({
    url: '/goods/BaseNumberCard/list',
    method: 'get',
    params: query
  })
}

export function queryAllCardList() {
  return request({
    url: '/goods/BaseNumberCard/getAllCardList',
    method: 'get'
  })
}

// 查询次卡详细
export function getBaseNumberCard(id) {
  return request({
    url: '/goods/BaseNumberCard/' + id,
    method: 'get'
  })
}

// 新增次卡
export function addBaseNumberCard(data) {
  return request({
    url: '/goods/BaseNumberCard',
    method: 'post',
    data: data
  })
}

// 修改次卡
export function updateBaseNumberCard(data) {
  return request({
    url: '/goods/BaseNumberCard',
    method: 'put',
    data: data
  })
}
// 修改次卡
export function handleCardDown(id) {
  return request({
    url: '/goods/BaseNumberCard/handleCardDown/'+id,
    method: 'put'
  })
}

// 删除次卡
export function delBaseNumberCard(id) {
  return request({
    url: '/goods/BaseNumberCard/' + id,
    method: 'delete'
  })
}

// 导出次卡
export function exportBaseNumberCard(query) {
  return request({
    url: '/goods/BaseNumberCard/export',
    method: 'get',
    params: query
  })
}
