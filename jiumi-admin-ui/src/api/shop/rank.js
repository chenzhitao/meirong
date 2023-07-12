import request from '@/utils/request'

// 查询顾问等级列表
export function listRank(query) {
  return request({
    url: '/shop/rank/list',
    method: 'get',
    params: query
  })
}

export function queryAllRankList() {
  return request({
    url: '/shop/rank/getAllConsultantList',
    method: 'get'
  })
}

// 查询顾问等级详细
export function getRank(levelId) {
  return request({
    url: '/shop/rank/' + levelId,
    method: 'get'
  })
}

// 新增顾问等级
export function addRank(data) {
  return request({
    url: '/shop/rank',
    method: 'post',
    data: data
  })
}

// 修改顾问等级
export function updateRank(data) {
  return request({
    url: '/shop/rank',
    method: 'put',
    data: data
  })
}

// 删除顾问等级
export function delRank(levelId) {
  return request({
    url: '/shop/rank/' + levelId,
    method: 'delete'
  })
}

// 导出顾问等级
export function exportRank(query) {
  return request({
    url: '/shop/rank/export',
    method: 'get',
    params: query
  })
}
