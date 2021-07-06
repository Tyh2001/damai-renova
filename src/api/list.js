import request from '../utils/request'

// 获取颜色分类的销量数据
export const getColorList = () => {
  return request({
    method: 'GET',
    url: '/backstage/color/color'
  })
}

// 获取品类销量数据
export const getTypeList = () => {
  return request({
    method: 'GET',
    url: '/backstage/type/type'
  })
}

// 获取系列销量数据
export const getSeriesList = () => {
  return request({
    method: 'GET',
    url: '/backstage/series/series'
  })
}

// 获取渠道销量数据
export const getChannelList = () => {
  return request({
    method: 'GET',
    url: '/backstage/channel/channel'
  })
}
