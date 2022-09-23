<script setup lang="ts">
defineProps<{
  enterFromClass?: string,
  leaveToClass?: string,
}>()
</script>

<template>
  <transition
    :enter-from-class="enterFromClass"
    :leave-to-class="enterFromClass ?? leaveToClass"
  >
    <slot />
  </transition>
</template>
