<script setup lang="ts">
import { useToggle } from '@vueuse/core'
import { useDark } from '../composables/useDark'
import { useRootViewTransition } from '../composables/useRootViewTransition'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const { startViewTransition } = useRootViewTransition()
const handleClick = (event: MouseEvent) => {
  startViewTransition(toggleDark, [event.clientX, event.clientY])
}
</script>

<template>
  <ButtonRotateIcon
    :title="isDark ? '關閉深色模式' : '開啟深色模式'"
    @click="handleClick"
  >
    <Fa v-if="isDark" :icon="['fas', 'sun']" />
    <Fa v-else :icon="['fas', 'moon']" />
  </ButtonRotateIcon>
</template>
