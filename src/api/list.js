import request from '../utils/request'

// 获取颜色分类的销量数据
export const getColorList = () => {
  return request({
    method: 'GET',
    url: '/color/index/index'
  })
}

// 获取品类销量数据
export const getTypeList = () => {
  return request({
    method: 'GET',
    url: '/type/index/index'
  })
}

// 获取系列销量数据
export const getSeriesList = () => {
  return request({
    method: 'GET',
    url: '/series/index/index'
  })
}

// 获取渠道销量数据
export const getChannelList = () => {
  return request({
    method: 'GET',
    url: '/channel/index/index'
  })
}

// 获取折扣数据
export const getDiscountList = () => {
  return request({
    method: 'GET',
    url: '/discount/index/index'
  })
}
