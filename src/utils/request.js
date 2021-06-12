import axios from 'axios'

const service = axios.create({
  timeout: 5000
})// 创建一个axios实例

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error) // Promise.reject()方法返回一个带有拒绝原因的Promise对象。
  }
)

service.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return response.data
    } else {
      Promise.reject(new Error('数据请求失败'))
    }
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

// 将axios实例抛出

export default service // 没有命名 只是导出service默认导出
