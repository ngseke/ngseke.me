<route lang="yaml">
name: "index"
</route>

<script setup lang="ts">
import Cover from '../components/Cover.vue'
import AboutMe from '../components/AboutMe.vue'
import { aboutMeSectionHash, aboutMeSectionId, scrollToAboutMe } from '../modules/about-me-section'
import { VITE_SITE_NAME } from '../modules/constants'

const route = useRoute()
onMounted(async () => {
  if (route.hash === aboutMeSectionHash) {
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
  <AboutMe :id="aboutMeSectionId" />
</template>
