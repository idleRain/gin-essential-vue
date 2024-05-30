<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import { isMobile } from '@/utils/validate.ts'
import { registerAPI } from '@/api'
import { ElMessage } from 'element-plus'

const formRef = ref<FormInstance>()
const pwdRef = ref()
const telephoneRef = ref()

// 校验账号
const validateUsername = (_: any, value: string, callback: any) => {
  if (value.trim() === '') {
    callback(new Error('请输入手机号'))
  } else {
    if (isMobile(value)) callback()
    else callback(new Error('手机号格式错误'))
  }
}

const form = reactive({
  name: '',
  telephone: '',
  password: ''
})
const rules = reactive<FormRules>({
  name: [{required: true, message: '请输入用户名', trigger: 'blur'}],
  telephone: [{validator: validateUsername, trigger: 'blur'}],
  password: [
    {required: true, message: '请输入密码', trigger: 'blur'},
    {min: 6, message: '密码不能少于6位', trigger: 'blur'}
  ]
})


const register = async () => {
  // @ts-ignore
  const valid = await formRef.value?.validate(v => v).catch(e => e)
  if (!valid) return
  try {
    const {msg} = await registerAPI(form)
    ElMessage.success(msg)
  } catch (e: any) {
    console.dir(e)
  }
}
</script>

<template>
  <div class="text-2xl text-center mb-12">Login</div>
  <el-form id="form" ref="formRef" class="h-[160px]" :model="form" :rules="rules">
    <el-form-item prop="name">
      <el-input
        v-model="form.name"
        placeholder="请输入用户名"
        @keydown.enter="telephoneRef?.focus()"
      >
        <template #prepend>
          <div class="w-8">用户名</div>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="telephone">
      <el-input
        v-model="form.telephone"
        ref="telephoneRef"
        placeholder="请输入手机号"
        @keydown.enter="pwdRef?.focus()"
      >
        <template #prepend>
          <div class="w-8">账号</div>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        ref="pwdRef"
        v-model="form.password"
        placeholder="请输入您的密码"
        show-password
        @keydown.enter="register"
      >
        <template #prepend>
          <div class="w-8">密码</div>
        </template>
      </el-input>
    </el-form-item>
  </el-form>
  <el-button type="primary" class="w-full" @click="register">注册</el-button>
  <div class="mt-4 text-white text-sm">
    <span>已经拥有账号？</span>
    <router-link type="primary" to="/login" class="text-blue-400 hover:underline">去登录</router-link>
  </div>
</template>

<style scoped>

</style>
