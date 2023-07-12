import request from '@/utils/request'


export function listStatistics(query) {
  return request({
    url: '/business/statistics/getOrderStatistics',
    method: 'get',
    params: query
  })
}

