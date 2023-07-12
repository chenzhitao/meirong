import request from '@/utils/request'

// 查询问题管理列表
export function listQuestion(query) {
  return request({
    url: '/baseconfig/question/list',
    method: 'get',
    params: query
  })
}

// 查询问题管理详细
export function getQuestion(id) {
  return request({
    url: '/baseconfig/question/' + id,
    method: 'get'
  })
}

// 新增问题管理
export function addQuestion(data) {
  return request({
    url: '/baseconfig/question',
    method: 'post',
    data: data
  })
}

// 修改问题管理
export function updateQuestion(data) {
  return request({
    url: '/baseconfig/question',
    method: 'put',
    data: data
  })
}

// 删除问题管理
export function delQuestion(id) {
  return request({
    url: '/baseconfig/question/' + id,
    method: 'delete'
  })
}

// 导出问题管理
export function exportQuestion(query) {
  return request({
    url: '/baseconfig/question/export',
    method: 'get',
    params: query
  })
}