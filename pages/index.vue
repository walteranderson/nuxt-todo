<script setup lang="ts">
  const { data } = await useFetch('/api/todos')
</script>

<template>
  <h1>Nuxt Todo</h1>
  <div class="todo-items" v-if="data && data.todos">
    <TodoItem v-for="todo in data.todos" :todo="todo" :key="todo.id" />
  </div>
  <div class="todo-items" v-else>No todos yet</div>
  <TodoForm />
</template>

<style lang="postcss" scoped>
h1 {
  @apply text-5xl text-center mb-12 mt-4;
}
.todo-items {
  @apply flex flex-col gap-4;
  @apply mb-4;
}
</style>
