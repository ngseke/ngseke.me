<script setup lang="ts">
defineProps<{
  enterFromClass?: string,
  leaveToClass?: string,
  enterActiveClass?: string,
  leaveActiveClass?: string,
}>()
</script>

<template>
  <Transition
    :enterActiveClass="enterActiveClass"
    :enterFromClass="enterFromClass"
    :leaveActiveClass="enterActiveClass ?? leaveActiveClass"
    :leaveToClass="enterFromClass ?? leaveToClass"
  >
    <slot />
  </Transition>
</template>
