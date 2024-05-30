<script setup lang="ts" name="Login">
// test
</script>

<template>
  <div class="h-screen w-screen flex items-center justify-center">
    <div class="h-[450px] w-1/3 rounded-lg bg-[#ffffff53] backdrop-blur px-32 hover:shadow hover:shadow-amber-50">
      <div class="text-3xl text-center mt-8 mb-4">GinEssential-Vue</div>
      <router-view />
    </div>
    <div class="fixed top-0 left-0 right-0 bottom-0 blur -z-10 bg-[url('@/assets/images/login-bg.jpg')] bg-cover bg-center"/>
  </div>
</template>

<style scoped lang="scss"></style>
