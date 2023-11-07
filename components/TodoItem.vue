<script setup lang="ts">
import type { Todo } from '../db';
const { todo } = defineProps<{ todo: Todo }>();
const emit = defineEmits<{
  complete: [todo: Todo],
  delete: [todo: Todo]
}>();
</script>

<template>
  <div class="todo">
    <IconButton v-if="todo.completed" @click="emit('complete', todo)" name="ic:baseline-check-box" />
    <IconButton v-else @click="emit('complete', todo)" name="ic:baseline-check-box-outline-blank" />

    <span :class="{ completed: todo.completed }">{{ todo.text }}</span>

    <IconButton danger @click="emit('delete', todo)" name="ic:baseline-delete" />
  </div>
</template>

<style lang="postcss" scoped>
.todo {
  @apply flex flex-row items-center gap-2 py-1;

  span {
    @apply flex-1;
    &.completed {
      @apply text-gray-500 line-through;
    }
  }
}
</style>
