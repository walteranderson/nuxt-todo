<script setup lang="ts">
useHead({
  title: 'Nuxt Todo'
});
</script>

<template>
  <main>
    <NuxtPage />
  </main>
</template>

<style lang="postcss">
main {
  @apply w-full mx-auto;
  max-width: 500px;
}
</style>
