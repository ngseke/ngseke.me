<script setup lang="ts">
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { RouterLinkProps } from 'vue-router'

defineProps<{
  to: RouterLinkProps['to'],
}>()
</script>

<template>
  <RouterLink
    class="inline-flex w-full justify-between rounded-lg bg-black-400/10 p-6 font-semibold leading-none tracking-wider !no-underline hover:bg-black-400/20"
    :to="to"
  >
    <slot />
    <FontAwesomeIcon :icon="faCaretRight" />
  </RouterLink>
</template>
