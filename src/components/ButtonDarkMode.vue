<script setup lang="ts">
import { useMounted, useToggle } from '@vueuse/core'
import { useDark } from '../composables/useDark'
import { useRootViewTransition } from '../composables/useRootViewTransition'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const { startViewTransition } = useRootViewTransition()
const handleClick = (event: MouseEvent) => {
  startViewTransition(toggleDark, [event.clientX, event.clientY])
}

const isMounted = useMounted()
</script>

<template>
  <ButtonRotateIcon
    :class="{ 'opacity-0': !isMounted }"
    :title="isDark ? '關閉深色模式' : '開啟深色模式'"
    @click="handleClick"
  >
    <FontAwesomeIcon v-if="isDark" :icon="faSun" />
    <FontAwesomeIcon v-else :icon="faMoon" />
  </ButtonRotateIcon>
</template>
