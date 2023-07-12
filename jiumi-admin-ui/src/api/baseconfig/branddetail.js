import request from '@/utils/request'

// 查询品牌介绍列表
export function listBranddetail(query) {
  return request({
    url: '/baseconfig/branddetail/list',
    method: 'get',
    params: query
  })
}

// 查询品牌介绍详细
export function getBranddetail(id) {
  return request({
    url: '/baseconfig/branddetail/' + id,
    method: 'get'
  })
}

// 新增品牌介绍
export function addBranddetail(data) {
  return request({
    url: '/baseconfig/branddetail',
    method: 'post',
    data: data
  })
}

// 修改品牌介绍
export function updateBranddetail(data) {
  return request({
    url: '/baseconfig/branddetail',
    method: 'put',
    data: data
  })
}

// 删除品牌介绍
export function delBranddetail(id) {
  return request({
    url: '/baseconfig/branddetail/' + id,
    method: 'delete'
  })
}

// 导出品牌介绍
export function exportBranddetail(query) {
  return request({
    url: '/baseconfig/branddetail/export',
    method: 'get',
    params: query
  })
}