<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <button
    class="
      link-effect
      h-6 w-6
      rounded-full
      after:inset-[-.3rem]
      after:rounded-full
      after:bg-white/25
    "
    @click="toggleDark()"
  >
    <Fa :icon="['fas', isDark ? 'sun' :'moon']" />
  </button>
</template>

<style lang="sass" scoped>
@use '../styles/link-effect'
</style>
