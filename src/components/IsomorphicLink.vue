<script setup lang="ts">
import { RouterLink, RouterLinkProps } from 'vue-router'

const props = withDefaults(defineProps<{
  href?: RouterLinkProps['to'],
  target?: string,
  external?: boolean,
}>(), {
  href: undefined,
  target: '_blank',
})

const isExternal = computed(() => (
  (typeof props.href === 'string' && /(^(mailto|http)|^\.$)/.test(props.href)) ||
  props.external
))

const is = computed(() => isExternal.value ? 'a' : RouterLink)

const vBind = computed(() => (
  isExternal.value
    ? {
        href: props.href,
        target: props.target,
        rel: 'noreferrer noopener',
      }
    : {
        to: props.href,
      }
))
</script>

<template>
  <Component :is="is" v-bind="vBind">
    <slot :is-external="isExternal" />
  </Component>
</template>
