<template>
  <div class="w-1/3 m-auto text-center pt-20">
    <h1 class="text-2xl font-bold mt-4">Todo List</h1>
    <!-- TailwindCss 组件 -->
    <todo-list />
    <!-- 传统 Css 组件 -->
    <!--<todo-list-css />-->
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import TodoList from './TodoList.vue'
// @ts-ignore
import TodoListCss from './TodoList-css.vue'
</script>

<style></style>
