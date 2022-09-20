<script setup lang="ts">
defineProps<{
  active?: boolean,
}>()
</script>

<template>
  <button
    class="
      link-effect
      h-8 w-8
      select-none
      rounded-full
      text-lg
      after:inset-[-.3rem]
      after:rounded-full
      after:bg-white/10
    "
  >
    <transition
      mode="out-in"
      enter-active-class="transition-all duration-400"
      leave-active-class="transition-all duration-100"
      enter-from-class="opacity-0 -rotate-45"
      leave-to-class="opacity-0 rotate-45"
    >
      <Fa v-if="active" :icon="['fas', 'xmark']" />
      <Fa v-else :icon="['fas','bars']" />
    </transition>
  </button>
</template>

<style lang="sass" scoped>
@use '../styles/link-effect'
</style>
