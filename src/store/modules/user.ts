import { defineStore } from 'pinia'
import { local } from '@/utils/storage.ts'
import type { Userinfo } from '@/types'

export default defineStore('user', {
  state: () => ({
    token: local.get<string>('token') || '',
    userinfo: {} as Userinfo
  }),
  actions: {
    setToken(token: string) {
      this.token = token
      local.set('token', token)
    },
    setUserinfo(data: Userinfo) {
      this.userinfo = data
    }
  }
})
