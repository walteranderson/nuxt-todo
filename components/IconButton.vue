<script setup lang="ts">
const { name, danger } = defineProps<{
  name: string;
  danger: boolean;
}>();
</script>

<template>
  <button :class="{ danger: danger }">
    <Icon :name="name" />
  </button>
</template>

<style lang="postcss" scoped>
button {
  @apply flex items-center;
  @apply p-2 rounded;
  @apply transition-colors hover:bg-gray-200;
  &.danger {
    @apply text-red-700 hover:bg-red-100;
  }
}
</style>
