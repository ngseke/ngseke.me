<script setup lang="ts">
defineProps<{
  enterFromClass?: string,
  leaveToClass?: string,
  enterActiveClass?: string,
  leaveActiveClass?: string,
}>()
</script>

<template>
  <transition
    :enter-from-class="enterFromClass"
    :leave-to-class="enterFromClass ?? leaveToClass"
    :enter-active-class="enterActiveClass"
    :leave-active-class="enterActiveClass ?? leaveActiveClass"
  >
    <slot />
  </transition>
</template>
