<script setup lang="ts">
import { useReadHistory } from '../composables/useReadHistory'
const { isReadAll, clearReadHistory } = useReadHistory()
</script>

<template>
  <Transition
    leaveActiveClass="transition-all"
    leaveToClass="scale-0"
  >
    <div
      v-if="isReadAll"
      class="mt-2 origin-left font-mono text-xs"
      @click="clearReadHistory"
    >
      Wow, you've read all of my projects 😳
    </div>
  </Transition>
</template>
