<script setup lang="ts">
import { ref } from 'vue';
const emit = defineEmits<{
  submit: [text: string]
}>();

const text = ref('');

const submitForm = async () => {
  emit('submit', text.value);
  text.value = '';
};
</script>

<template>
  <form @submit.prevent="submitForm">
    <TextInput v-model="text" name="text" placeholder="Add a todo" class="flex-1" />
    <Button type="submit">Save</Button>
  </form>
</template>

<style lang="postcss" scoped>
form {
  @apply w-full flex flex-row gap-2;
}
</style>
