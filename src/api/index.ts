import request from '@/utils/request.ts'
import { LoginParams, RegisterParams, Userinfo } from '@/types'

/**
 * 登录
 */
export const loginAPI = (data: LoginParams) => {
  return request.post<{ token: string }>('/auth/login', data)
}

/**
 * 注册
 */
export const registerAPI = (data: RegisterParams) => {
  return request.post<string>('/auth/register', data)
}

/**
 * 获取用户信息
 */
export const userinfoAPI = () => {
  return request.post<{user: Userinfo}>('/auth/info')
}
