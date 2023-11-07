<template>
  <button>
    <slot></slot>
  </button>
</template>

<style lang="postcss" scoped>
button {
  @apply bg-green-700 text-white py-2 px-4 rounded;
  @apply transition-colors;
  @apply hover:bg-green-600;
}
</style>
