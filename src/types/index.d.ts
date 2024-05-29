export interface LoginParams {
  telephone: string
  password: string
}

export interface RegisterParams extends LoginParams{
  name: string
}
