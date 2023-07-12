import request from '@/utils/request'

// 查询商品规格列表
export function listSku(query) {
  return request({
    url: '/goods/sku/list',
    method: 'get',
    params: query
  })
}

export function getAllGoodsSkuList(query) {
  return request({
    url: '/goods/sku/allGoodsList',
    method: 'get',
    params: query
  })
}

// 查询商品规格详细
export function getSku(id) {
  return request({
    url: '/goods/sku/' + id,
    method: 'get'
  })
}

// 新增商品规格
export function addSku(data) {
  return request({
    url: '/goods/sku',
    method: 'post',
    data: data
  })
}

// 修改商品规格
export function updateSku(data) {
  return request({
    url: '/goods/sku',
    method: 'put',
    data: data
  })
}

// 删除商品规格
export function delSku(id) {
  return request({
    url: '/goods/sku/' + id,
    method: 'delete'
  })
}

// 导出商品规格
export function exportSku(query) {
  return request({
    url: '/goods/sku/export',
    method: 'get',
    params: query
  })
}
