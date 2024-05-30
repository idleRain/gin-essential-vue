<script setup lang="ts" name="Home">
import { userinfoAPI } from '@/api'
import { useUserStore } from '@/store'

const userStore = useUserStore()

const getUserinfo = async () => {
  const {data} = await userinfoAPI()
  userStore.setUserinfo(data.user)
}
getUserinfo()
</script>

<template>
  <h1 class="text-red-300">主页</h1>
</template>

<style scoped>

</style>
