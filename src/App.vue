<script setup lang="ts">
import useMountedBodyClass from './composables/useMountedBodyClass'
useMountedBodyClass()
</script>

<template>
  <div>
    <TheNavbar />
    <RouterView />
    <TheFooter />
  </div>
</template>
