// import request from '../utils/request'
import axios from 'axioe'

const url = 'http://localhost/Renova_List/public/index.php'

// 注册
export const onRegister = params => {
  return axios({
    method: 'GET',
    url: `${url}/backstage/user/register`,
    params
  })
}
