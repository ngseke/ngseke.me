<script setup lang="ts">
import { useDownplayProjects } from './composables/useDownplayProjects'
import { useMountedBodyClass } from './composables/useMountedBodyClass'
import { useNProgress } from './composables/useNProgress'
useMountedBodyClass()
useNProgress()
useDownplayProjects()
</script>

<template>
  <div>
    <TheNavbar />
    <RouterView />
    <TheFooter />
  </div>
</template>
