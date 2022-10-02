<script setup lang="ts">
import { useToggle } from '@vueuse/core'
import useDark from '../composables/useDark'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <ButtonRotateIcon
    :title="isDark ? '關閉深色模式' : '開啟深色模式'"
    @click="toggleDark()"
  >
    <Fa v-if="isDark" :icon="['fas', 'sun']" />
    <Fa v-else :icon="['fas','moon']" />
  </ButtonRotateIcon>
</template>
