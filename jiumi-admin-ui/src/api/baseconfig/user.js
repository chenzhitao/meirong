import request from '@/utils/request'

// 查询用户信息列表
export function listUser(query) {
  return request({
    url: '/baseconfig/user/list',
    method: 'get',
    params: query
  })
}

// 查询用户信息详细
export function getUser(userId) {
  return request({
    url: '/system/user/getInfo/' + userId,
    method: 'get'
  })
}


// 新增用户信息
export function addUser(data) {
  return request({
    url: '/baseconfig/user',
    method: 'post',
    data: data
  })
}

// 修改用户信息
export function updateUser(data) {
  return request({
    url: '/baseconfig/user',
    method: 'put',
    data: data
  })
}

export function updateUserConsultantRank(data) {
  return request({
    url: '/system/user/updateUserConsultantRank',
    method: 'put',
    data: data
  })
}

// 删除用户信息
export function delUser(userId) {
  return request({
    url: '/baseconfig/user/' + userId,
    method: 'delete'
  })
}

// 导出用户信息
export function exportUser(query) {
  return request({
    url: '/baseconfig/user/export',
    method: 'get',
    params: query
  })
}

export function setInviteUser(userId) {
  return request({
    url: '/system/user/setInviteUser/' + userId,
    method: 'get'
  })
}
