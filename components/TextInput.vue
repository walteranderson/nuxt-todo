<script setup>
defineProps(['modelValue']);
defineEmits(['update:modelValue']);
</script>

<template>
  <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
</template>

<style lang="postcss" scoped>
input {
  @apply border border-gray-300 rounded py-2 px-4;
}
</style>
