<script setup lang="ts">
import type { Todo } from '../db';
const { todo } = defineProps<{ todo: Todo }>();
</script>

<template>
  <div class="todo">
    <IconButton name="octicon:check" />
    <span class="{ line-through: todo.completed }">{{ todo.text }}</span>
    <IconButton danger name="octicon:trash-16" />
  </div>
</template>

<style lang="postcss" scoped>
.todo {
  @apply flex flex-row items-center gap-2 py-1;

  span {
    @apply flex-1;
  }
}
</style>
