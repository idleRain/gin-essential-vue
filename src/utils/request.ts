import axios from 'axios'
import { local } from '@/utils/storage.ts'
import { Res } from '@/types'
import { ElMessage } from 'element-plus'
import { REQUEST_WHITE_PATH } from '@/constant'
import router from '@/router'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000,
  method: 'post'
})

// 添加请求拦截器
axiosInstance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  if (local.get('token')) {
    config.headers.Authorization = 'Bearer ' + <string>local.get('token')
  } else {
    if (!REQUEST_WHITE_PATH.includes(config.url as any)) {
      router.replace('/login')
      ElMessage.error('登录失效！')
    }
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error.response.data)
})

// 添加响应拦截器
axiosInstance.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  if (error.response?.data?.msg) {
    ElMessage.error(error.response.data.msg)
  }
  if (error.response.status === 401) {
    router.replace('/login')
  }
  return Promise.reject(error.response.data)
})

const request = {
  get<T>(url: string, params?: any, opt?: any) {
    return axiosInstance
      .get<Res<T>>(url, {params, ...opt})
      .then(response => response.data)
  },
  post<T>(url: string, data?: any, opt?: any) {
    return axiosInstance
      .post<Res<T>>(url, data, {...opt})
      .then(response => response.data)
  },
  stream<T>(url: string, data?: any, type?: any) {
    return axiosInstance
      .post<Res<T>>(url, data, type)
      .then(response => response)
  }
}

export { axiosInstance }
export default request
