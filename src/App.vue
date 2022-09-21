<script setup lang="ts">
import useMountedBodyClass from './composables/useMountedBodyClass'
import TheNavbar from './components/TheNavbar.vue'
import TheFooter from './components/TheFooter.vue'
useMountedBodyClass()
</script>

<template>
  <div>
    <TheNavbar />
    <RouterView />
    <TheFooter />
  </div>
</template>
