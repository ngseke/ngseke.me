<script setup lang="ts">
import type { AnchorHTMLAttributes } from 'vue'
import type { RouterLinkProps } from 'vue-router'

defineProps<{
  href?: AnchorHTMLAttributes['href'],
  to?: RouterLinkProps['to'],
}>()

const className = `
  link-effect
  whitespace-nowrap font-semibold
  after:inset-x-[-6px] after:inset-y-[-3px]
  after:rounded-lg
  after:bg-black/10
  dark:after:bg-white/10
`
</script>

<template>
  <a
    v-if="href"
    :href="href"
    :class="className"
    target="_blank"
    rel="noreferrer noopener"
  >
    <slot />
  </a>
  <RouterLink
    v-else-if="to"
    :to="to"
    :class="className"
  >
    <slot />
  </RouterLink>
</template>

<style lang="sass" scoped>
@use '../styles/link-effect'
</style>
