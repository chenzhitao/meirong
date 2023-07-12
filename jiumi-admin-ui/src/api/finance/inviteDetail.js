import request from '@/utils/request'

// 查询用户邀请列表
export function listInviteDetail(query) {
  return request({
    url: '/finance/inviteDetail/list',
    method: 'get',
    params: query
  })
}

// 查询用户邀请详细
export function getInviteDetail(id) {
  return request({
    url: '/finance/inviteDetail/' + id,
    method: 'get'
  })
}

// 新增用户邀请
export function addInviteDetail(data) {
  return request({
    url: '/finance/inviteDetail',
    method: 'post',
    data: data
  })
}

// 修改用户邀请
export function updateInviteDetail(data) {
  return request({
    url: '/finance/inviteDetail',
    method: 'put',
    data: data
  })
}

// 删除用户邀请
export function delInviteDetail(id) {
  return request({
    url: '/finance/inviteDetail/' + id,
    method: 'delete'
  })
}

// 导出用户邀请
export function exportInviteDetail(query) {
  return request({
    url: '/finance/inviteDetail/export',
    method: 'get',
    params: query
  })
}