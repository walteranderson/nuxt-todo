<script setup lang="ts">
import type { Todo } from '~/db';

const { data, refresh } = await useFetch('/api/todos')

const onSubmit = async (text: string) => {
  await useFetch('/api/todos', {
    method: 'post',
    body: {
      text,
      completed: false
    }
  });
  refresh();
};

const onComplete = async (todo: Todo) => {
  await useFetch(`/api/todos/${todo.id}`, {
    method: 'put',
    body: {
      text: todo.text,
      completed: !todo.completed
    }
  });
  refresh();
};

const onDelete = async (todo: Todo) => {
  await useFetch(`/api/todos/${todo.id}`, { method: 'delete' });
  refresh();
};
</script>

<template>
  <h1>Nuxt Todo</h1>
  <div class="todo-items" v-if="data && data.todos.length > 0">
    <TodoItem @complete="onComplete" @delete="onDelete" v-for="todo in data.todos" :todo="todo" :key="todo.id" />
  </div>
  <div class="todo-items empty" v-else>No todos yet</div>
  <TodoForm @submit="onSubmit" />
</template>

<style lang="postcss" scoped>
h1 {
  @apply text-5xl text-center mb-12 mt-4;
}

.todo-items {
  @apply flex flex-col gap-1;
  @apply mb-4;

  &.empty {
    @apply text-center text-gray-400;
  }
}
</style>
