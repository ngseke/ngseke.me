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
    :enter-active-class="enterActiveClass"
    :enter-from-class="enterFromClass"
    :leave-active-class="enterActiveClass ?? leaveActiveClass"
    :leave-to-class="enterFromClass ?? leaveToClass"
  >
    <slot />
  </Transition>
</template>
