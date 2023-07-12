import request from '@/utils/request'

// 查询用户入账记录列表
export function listImcomeDetail(query) {
  return request({
    url: '/finance/imcomeDetail/list',
    method: 'get',
    params: query
  })
}

// 查询用户入账记录详细
export function getImcomeDetail(id) {
  return request({
    url: '/finance/imcomeDetail/' + id,
    method: 'get'
  })
}

// 新增用户入账记录
export function addImcomeDetail(data) {
  return request({
    url: '/finance/imcomeDetail',
    method: 'post',
    data: data
  })
}

// 修改用户入账记录
export function updateImcomeDetail(data) {
  return request({
    url: '/finance/imcomeDetail',
    method: 'put',
    data: data
  })
}

// 删除用户入账记录
export function delImcomeDetail(id) {
  return request({
    url: '/finance/imcomeDetail/' + id,
    method: 'delete'
  })
}

// 导出用户入账记录
export function exportImcomeDetail(query) {
  return request({
    url: '/finance/imcomeDetail/export',
    method: 'get',
    params: query
  })
}