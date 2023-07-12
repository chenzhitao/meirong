import request from '@/utils/request'

// 查询项目订单管理列表
export function listItemorder(query) {
  return request({
    url: '/business/itemorder/list',
    method: 'get',
    params: query
  })
}

export function getOrderItemFinanceList(query) {
  return request({
    url: '/business/itemorder//getPayOrderItemList',
    method: 'get',
    params: query
  })
}

// 查询项目订单管理详细
export function getItemorder(id) {
  return request({
    url: '/business/itemorder/' + id,
    method: 'get'
  })
}

export function getUserByPhone(userPhone) {
  return request({
    url: '/business/itemorder/queryUserByPhone/' + userPhone,
    method: 'get'
  })
}

// 新增项目订单管理
export function addItemorder(data) {
  return request({
    url: '/business/itemorder',
    method: 'post',
    data: data
  })
}

// 修改项目订单管理
export function updateItemorder(data) {
  return request({
    url: '/business/itemorder',
    method: 'put',
    data: data
  })
}

// 撤销重置项目订单管理
export function resetItemorder(data) {
  return request({
    url: '/business/itemorder/resetItemorder',
    method: 'put',
    data: data
  })
}

// 删除项目订单管理
export function delItemorder(id) {
  return request({
    url: '/business/itemorder/' + id,
    method: 'delete'
  })
}

export function paymentItemorder(id) {
  return request({
    url: '/business/itemorder/paymentItemorder/' + id,
    method: 'get'
  })
}

// 导出项目订单管理
export function exportItemorder(query) {
  return request({
    url: '/business/itemorder/export',
    method: 'get',
    params: query
  })
}

export function addNumberCardorder(data) {
  return request({
    url: '/business/itemorder/addNumberCardorder',
    method: 'post',
    data: data
  })
}

export function editNumberCardorder(data) {
  return request({
    url: '/business/itemorder/editNumberCardorder',
    method: 'post',
    data: data
  })
}
