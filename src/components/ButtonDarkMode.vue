<script setup lang="ts">
import { useToggle } from '@vueuse/core'
import useDark from '../composables/useDark'
import ButtonRotateIcon from './ButtonRotateIcon.vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <ButtonRotateIcon @click="toggleDark()">
    <Fa v-if="isDark" :icon="['fas', 'sun']" />
    <Fa v-else :icon="['fas','moon']" />
  </ButtonRotateIcon>
</template>
