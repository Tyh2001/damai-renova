import request from '../utils/request'

// 注册
export const getOnRegister = params => {
  return request({
    method: 'GET',
    url: '/backstage/user/register',
    params
  })
}

// 登录
export const getOnLogin = params => {
  return request({
    method: 'GET',
    url: '/backstage/user/login',
    params
  })
}
