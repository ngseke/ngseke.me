<script setup lang="ts">
import useMountedBodyClass from './composables/useMountedBodyClass'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
useMountedBodyClass()
</script>

<template>
  <div>
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>
