<script setup lang="ts">
import { useMountedBodyClass } from './composables/useMountedBodyClass'
import { useNProgress } from './composables/useNProgress'
useMountedBodyClass()
useNProgress()
</script>

<template>
  <div>
    <TheNavbar />
    <RouterView />
    <TheFooter />
  </div>
</template>
