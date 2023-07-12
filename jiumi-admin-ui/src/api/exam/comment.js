import request from '@/utils/request'

// 查询品牌介绍列表
export function listComment(query) {
  return request({
    url: '/exam/comment/list',
    method: 'get',
    params: query
  })
}

// 查询品牌介绍详细
export function getComment(id) {
  return request({
    url: '/exam/comment/' + id,
    method: 'get'
  })
}

// 新增品牌介绍
export function addComment(data) {
  return request({
    url: '/exam/comment',
    method: 'post',
    data: data
  })
}

// 修改品牌介绍
export function updateComment(data) {
  return request({
    url: '/exam/comment',
    method: 'put',
    data: data
  })
}

// 删除品牌介绍
export function delComment(id) {
  return request({
    url: '/exam/comment/' + id,
    method: 'delete'
  })
}

// 导出品牌介绍
export function exportComment(query) {
  return request({
    url: '/exam/comment/export',
    method: 'get',
    params: query
  })
}
