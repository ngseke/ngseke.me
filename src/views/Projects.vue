<script setup lang="ts">
import { useHead } from '@vueuse/head'
import Navbar from '../components/Navbar.vue'

useHead({
  title: `Projects | ${import.meta.env.VITE_SITE_NAME}`,
})
</script>

<template>
  <div>
    <Navbar />
    <div class="container px-4 pt-16">
      🚧
    </div>
  </div>
</template>
