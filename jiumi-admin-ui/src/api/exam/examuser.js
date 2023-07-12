import request from '@/utils/request'

// 查询考试信息列表
export function listExamuser(query) {
  return request({
    url: '/exam/examuser/list',
    method: 'get',
    params: query
  })
}
export function getExamUserList(query) {
  return request({
    url: '/exam/examuser/getCentreUserList',
    method: 'get',
    params: query
  })
}

// 查询考试信息详细
export function getExamuser(id) {
  return request({
    url: '/exam/examuser/' + id,
    method: 'get'
  })
}

// 新增考试信息
export function addExamuser(data) {
  return request({
    url: '/exam/examuser',
    method: 'post',
    data: data
  })
}

// 修改考试信息
export function updateExamuser(data) {
  return request({
    url: '/exam/examuser',
    method: 'put',
    data: data
  })
}

// 删除考试信息
export function delExamuser(id) {
  return request({
    url: '/exam/examuser/' + id,
    method: 'delete'
  })
}

// 导出考试信息
export function exportExamuser(query) {
  return request({
    url: '/exam/examuser/export',
    method: 'get',
    params: query
  })
}


export function setExamuser(data) {
  return request({
    url: '/exam/examuser/setExamUserRandom',
    method: 'post',
    data: data
  })
}

export function setExamuserScore(data) {
  return request({
    url: '/exam/examuser/setExamUserScore',
    method: 'post',
    data: data
  })
}

export function setExamuserSd(data) {
  return request({
    url: '/exam/examuser/setExamUserRandomSd',
    method: 'post',
    data: data
  })
}

export function getExamNum(id) {
  return request({
    url: '/exam/examuser/getCentreNum/' + id,
    method: 'get'
  })
}
// 根据订单号查询考试信息
export function getExamInfoByOrderCode(orderCode) {
  return request({
    url: '/exam/examuser/getExamInfoByOrderCode/' + orderCode,
    method: 'get'
  })
}
