import request from '@/utils/request'

// 查询文本管理列表
export function listContent(query) {
  return request({
    url: '/baseconfig/content/list',
    method: 'get',
    params: query
  })
}

// 查询文本管理详细
export function getContent(id) {
  return request({
    url: '/baseconfig/content/' + id,
    method: 'get'
  })
}

// 新增文本管理
export function addContent(data) {
  return request({
    url: '/baseconfig/content',
    method: 'post',
    data: data
  })
}

// 修改文本管理
export function updateContent(data) {
  return request({
    url: '/baseconfig/content',
    method: 'put',
    data: data
  })
}

// 删除文本管理
export function delContent(id) {
  return request({
    url: '/baseconfig/content/' + id,
    method: 'delete'
  })
}

// 导出文本管理
export function exportContent(query) {
  return request({
    url: '/baseconfig/content/export',
    method: 'get',
    params: query
  })
}