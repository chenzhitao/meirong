import request from '@/utils/request'

// 查询问题管理列表
export function listArticle(query) {
  return request({
    url: '/baseconfig/article/list',
    method: 'get',
    params: query
  })
}

// 查询问题管理详细
export function getArticle(id) {
  return request({
    url: '/baseconfig/article/' + id,
    method: 'get'
  })
}

// 新增问题管理
export function addArticle(data) {
  return request({
    url: '/baseconfig/article',
    method: 'post',
    data: data
  })
}

// 修改问题管理
export function updateArticle(data) {
  return request({
    url: '/baseconfig/article',
    method: 'put',
    data: data
  })
}

// 删除问题管理
export function delArticle(id) {
  return request({
    url: '/baseconfig/article/' + id,
    method: 'delete'
  })
}

// 导出问题管理
export function exportArticle(query) {
  return request({
    url: '/baseconfig/article/export',
    method: 'get',
    params: query
  })
}