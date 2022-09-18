<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <button
    class="
      relative
      h-6
      w-6
      rounded-full after:absolute after:-inset-2 after:z-10 after:scale-75
      after:rounded-full
      after:bg-white/20 after:opacity-0 after:transition-all
      after:duration-200 hover:after:scale-100 hover:after:opacity-100
    "
    @click="toggleDark()"
  >
    <Fa :icon="['fas', isDark ? 'sun' :'moon']" />
  </button>
</template>
