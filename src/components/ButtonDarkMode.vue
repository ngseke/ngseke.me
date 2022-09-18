<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <button
    class="
      link-effect
      h-8 w-8
      rounded-full
      text-lg
      after:inset-[-.3rem]
      after:rounded-full
      after:bg-white/10
    "
    @click="toggleDark()"
  >
    <transition
      mode="out-in"
      enter-active-class="transition-all duration-400"
      leave-active-class="transition-all duration-100"
      enter-from-class="opacity-0 -rotate-45"
      leave-to-class="opacity-0 rotate-45"
    >
      <Fa v-if="isDark" :icon="['fas', 'sun']" />
      <Fa v-else :icon="['fas','moon']" />
    </transition>
  </button>
</template>

<style lang="sass" scoped>
@use '../styles/link-effect'
</style>
