<script setup lang="ts">
import useMountedBodyClass from './composables/useMountedBodyClass'
import Navbar from './components/Navbar.vue'
useMountedBodyClass()
</script>

<template>
  <div>
    <Navbar />
    <RouterView />
  </div>
</template>
