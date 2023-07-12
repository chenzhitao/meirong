import request from '@/utils/request'

// 查询项目管理列表
export function listItem(query) {
  return request({
    url: '/shop/item/list',
    method: 'get',
    params: query
  })
}

export function allListItem(query) {
  return request({
    url: '/shop/item/getAllItemList',
    method: 'get',
    params: query
  })
}

// 查询项目管理详细
export function getItem(id) {
  return request({
    url: '/shop/item/' + id,
    method: 'get'
  })
}

// 新增项目管理
export function addItem(data) {
  return request({
    url: '/shop/item',
    method: 'post',
    data: data
  })
}

// 修改项目管理
export function updateItem(data) {
  return request({
    url: '/shop/item',
    method: 'put',
    data: data
  })
}

// 下架项目
export function handleOff(id) {
  return request({
    url: '/shop/item/off/'+id,
    method: 'get'
  })
}

// 删除项目管理
export function delItem(id) {
  return request({
    url: '/shop/item/' + id,
    method: 'delete'
  })
}

// 导出项目管理
export function exportItem(query) {
  return request({
    url: '/shop/item/export',
    method: 'get',
    params: query
  })
}
