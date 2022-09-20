<route lang="yaml">
name: "index"
</route>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { nextTick, onMounted } from 'vue'
import { useHead } from '@vueuse/head'
import Cover from '../components/Cover.vue'
import AboutMe from '../components/AboutMe.vue'
import { scrollToAboutMe } from '../modules/scroll-to'
import { VITE_SITE_NAME } from '../modules/constants'

const aboutId = 'about'

const route = useRoute()
onMounted(async () => {
  if (route.hash === `#${aboutId}`) {
    await nextTick()
    scrollToAboutMe({ duration: 1 })
  }
})

useHead({
  title: `${VITE_SITE_NAME}`,
})
</script>

<template>
  <Cover />
  <AboutMe :id="aboutId" />
</template>
