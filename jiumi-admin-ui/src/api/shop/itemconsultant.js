import request from '@/utils/request'

// 查询项目顾问列表
export function listItemconsultant(query) {
  return request({
    url: '/shop/itemconsultant/list',
    method: 'get',
    params: query
  })
}

export function listAllconsultant(query) {
  return request({
    url: '/shop/itemconsultant/getAllConsultantlist',
    method: 'get',
    params: query
  })
}

// 查询项目顾问详细
export function getItemconsultant(id) {
  return request({
    url: '/shop/itemconsultant/' + id,
    method: 'get'
  })
}

// 新增项目顾问
export function addItemconsultant(data) {
  return request({
    url: '/shop/itemconsultant',
    method: 'post',
    data: data
  })
}

// 修改项目顾问
export function updateItemconsultant(data) {
  return request({
    url: '/shop/itemconsultant',
    method: 'put',
    data: data
  })
}

// 删除项目顾问
export function delItemconsultant(id) {
  return request({
    url: '/shop/itemconsultant/' + id,
    method: 'delete'
  })
}

// 导出项目顾问
export function exportItemconsultant(query) {
  return request({
    url: '/shop/itemconsultant/export',
    method: 'get',
    params: query
  })
}
