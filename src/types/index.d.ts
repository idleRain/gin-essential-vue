// 响应基础类型
export interface Res<T> {
  [x: string]: any
  code: number
  msg: string
  data: T
}

// 登录请求参数
export interface LoginParams {
  telephone: string
  password: string
}

// 注册请求参数
export interface RegisterParams extends LoginParams{
  name: string
}
