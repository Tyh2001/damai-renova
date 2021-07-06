import axios from 'axios'

const request = axios.create({
  // baseURL: 'http://localhost/Renova_List/public/index.php'
  baseURL: 'https://infinitymcn.com/web/0705_renova_list/back_end/Renova_List/public/index.php'
})

export default request
