import request from '@/utils/request'

// 查询购买次卡记录列表
export function listNumbercard(query) {
  return request({
    url: '/finance/numbercard/list',
    method: 'get',
    params: query
  })
}

// 查询购买次卡记录详细
export function getNumbercard(id) {
  return request({
    url: '/finance/numbercard/' + id,
    method: 'get'
  })
}

// 新增购买次卡记录
export function addNumbercard(data) {
  return request({
    url: '/finance/numbercard',
    method: 'post',
    data: data
  })
}

// 修改购买次卡记录
export function updateNumbercard(data) {
  return request({
    url: '/finance/numbercard',
    method: 'put',
    data: data
  })
}

// 删除购买次卡记录
export function delNumbercard(id) {
  return request({
    url: '/finance/numbercard/' + id,
    method: 'delete'
  })
}

// 导出购买次卡记录
export function exportNumbercard(query) {
  return request({
    url: '/finance/numbercard/export',
    method: 'get',
    params: query
  })
}