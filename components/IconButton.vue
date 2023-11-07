<script setup lang="ts">
const { name, danger } = withDefaults(defineProps<{
  name: string;
  danger?: boolean;
}>(), {
  danger: false,
});
</script>

<template>
  <button :class="{ danger: danger }">
    <Icon :name="name" size="1.25em" />
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
