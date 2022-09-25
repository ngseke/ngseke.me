<script setup lang="ts">
</script>

<template>
  <IsomorphicLink
    v-slot="{ isExternal }"
    class="
    link-effect
    uppercase
    after:-inset-x-2
    after:-inset-y-1
    after:rounded-lg
    after:bg-white/10
    "
  >
    <slot />
    <Fa v-if="isExternal" :icon="['fas', 'up-right-from-square']" class="ml-2" />
  </IsomorphicLink>
</template>

<style lang="scss" scoped>
@use '../styles/link-effect';
</style>
