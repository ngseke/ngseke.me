<script setup lang="ts">
import type { AnchorHTMLAttributes } from 'vue'
import type { RouterLinkProps } from 'vue-router'

defineProps<{
  href?: AnchorHTMLAttributes['href'],
  to?: RouterLinkProps['to'],
}>()

const className = `
  link-effect
  uppercase
  after:-inset-x-2
  after:-inset-y-1
  after:rounded-lg
  after:bg-white/10
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
