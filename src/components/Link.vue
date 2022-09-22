<script setup lang="ts">
import IsomorphicLink from './IsomorphicLink.vue'
</script>

<template>
  <IsomorphicLink
    class="
      link-effect
      whitespace-nowrap font-semibold
      after:inset-x-[-6px] after:inset-y-[-3px]
      after:rounded-lg
      after:bg-black/10
      dark:after:bg-white/10
    "
  >
    <slot />
  </IsomorphicLink>
</template>

<style lang="sass" scoped>
@use '../styles/link-effect'
</style>
