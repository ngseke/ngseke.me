<script setup lang="ts">
import type { AnchorHTMLAttributes } from 'vue'

defineProps<{
  href?: AnchorHTMLAttributes['href'],
  icon: string | string[],
}>()
</script>

<template>
  <a
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
    target="_blank"
    rel="noreferrer noopener"
    :href="href"
  >
    <Fa :icon="icon" />
  </a>
</template>

<style lang="sass" scoped>
@use '../styles/link-effect'
</style>
