import request from '@/utils/request.ts'
import { LoginParams, RegisterParams } from '@/types'

/**
 * 登录
 */
export const loginAPI = (data: LoginParams) => {
  return request.post<string>('/auth/login', data)
}

/**
 * 注册
 */
export const registerAPI = (data: RegisterParams) => {
  return request.post<string>('/auth/register', data)
}
