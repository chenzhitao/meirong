import request from '@/utils/request'

// 查询商品管理列表
export function listGoodsinfo(query) {
  return request({
    url: '/goods/goodsinfo/list',
    method: 'get',
    params: query
  })
}

// 查询商品管理详细
export function getGoodsinfo(id) {
  return request({
    url: '/goods/goodsinfo/' + id,
    method: 'get'
  })
}

// 新增商品管理
export function addGoodsinfo(data) {
  return request({
    url: '/goods/goodsinfo',
    method: 'post',
    data: data
  })
}

// 修改商品管理
export function updateGoodsinfo(data) {
  return request({
    url: '/goods/goodsinfo',
    method: 'put',
    data: data
  })
}

// 删除商品管理
export function delGoodsinfo(id) {
  return request({
    url: '/goods/goodsinfo/' + id,
    method: 'delete'
  })
}

// 导出商品管理
export function exportGoodsinfo(query) {
  return request({
    url: '/goods/goodsinfo/export',
    method: 'get',
    params: query
  })
}