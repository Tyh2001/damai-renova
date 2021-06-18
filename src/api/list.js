import request from '../utils/request'

// 获取颜色分类的销量数据
export const getColorList = () => {
  return request({
    method: 'GET',
    url: '/color/index/index'
  })
}

// 获取类型销量数据
export const getTypeList = () => {
  return request({
    method: 'GET',
    url: '/type/index/index'
  })
}
