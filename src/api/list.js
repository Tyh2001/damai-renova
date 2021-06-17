import request from '../utils/request'

export const getList = () => {
  return request({
    method: 'GET',
    url: '/index/index/index'
  })
}
