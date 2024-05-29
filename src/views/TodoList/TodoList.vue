<template>
  <div class="p-4">
    <input
        v-model="newTodo"
        @keyup.enter="addTodo"
        placeholder="Add a new todo..."
        class="p-2 border rounded-md w-full"
    >
    <ul class="mt-4">
      <li
          v-for="(todo, index) in todos"
          :key="index"
          class="flex items-center justify-between p-2 mt-2 shadow-md rounded-md duration-300 hover:scale-105"
          @click="changeState(todo)"
      >
        <span :class="[todo.done ? 'text-gray-400 line-through' : 'text-gray-700', 'duration-300']">
          {{ todo.content }}
        </span>
        <button @click.stop="removeTodo(index)" class="text-green-700">❌123123213</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

interface Todo {
  id: number
  content: string
  done: boolean
}

const todos = ref<Todo[]>(JSON.parse(localStorage.getItem('todos') || '[]'))
const newTodo = ref<string>('')

const addTodo = () => {
  if (newTodo.value.trim() !== '') {
    todos.value.push({
      id: Date.now(),
      content: newTodo.value,
      done: false
    })
    newTodo.value = ''
  }
}

const changeState = (todo: Todo) => {
  todo.done = !todo.done
}

const removeTodo = (index: number) => {
  todos.value.splice(index, 1)
}

watch(
    () => todos.value,
    () => localStorage.setItem('todos', JSON.stringify(todos.value)),
    { deep: true }
)

onMounted(() => {
  if (!localStorage.getItem('todos')) {
    localStorage.setItem('todos', '[]')
  }
})
</script>

<style scoped></style>
