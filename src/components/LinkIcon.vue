<script setup lang="ts">
import IsomorphicLink from './IsomorphicLink.vue'

defineProps<{
  icon: string | string[],
}>()
</script>

<template>
  <IsomorphicLink
    class="
      link-effect
      inline-flex
      h-5
      w-5
      items-center justify-center
      rounded-full
      text-lg
      after:inset-[-.3rem]
      after:rounded-full
      after:bg-black/10
      dark:after:bg-white/10
    "
  >
    <Fa :icon="icon" />
  </IsomorphicLink>
</template>

<style lang="sass" scoped>
@use '../styles/link-effect'
</style>
