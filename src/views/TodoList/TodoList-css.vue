<template>
  <div class="todo-list">
    <input
        v-model="newTodo"
        @keyup.enter="addTodo"
        placeholder="Add a new todo..."
    >
    <ul>
      <li v-for="(todo, index) in todos" :key="index" @click="changeState(todo)">
        <span :class="{ done: todo.done }">
          {{ todo.content }}
        </span>
        <button @click.stop="removeTodo(index)">❌</button>
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
    {deep: true}
)

onMounted(() => {
  if (!localStorage.getItem('todos')) {
    localStorage.setItem('todos', '[]')
  }
})
</script>

<style scoped lang="scss">
.todo-list {
  padding: 1rem;

  input {
    padding: .5rem;
    width: 100%;
    border: 1px solid #e5e7eb;
    border-radius: 0.375rem
  }

  ul {
    margin-top: 1rem;

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.5rem;
      margin-top: 0.5rem;
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
      border-radius: 0.375rem;
      transition-duration: 300ms;

      &:hover {
        scale: 1.05;
      }

      span {
        transition-duration: 300ms;
        color: rgb(55 65 81);

        &.done {
          color: rgb(156 163 175);
          text-decoration-line: line-through;
        }
      }

      button {
        color: rgb(239 68 68);
      }
    }
  }
}
</style>
