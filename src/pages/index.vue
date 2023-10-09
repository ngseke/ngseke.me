<route lang="yaml">
name: "index"
</route>

<script setup lang="ts">
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
  meta: [
    { property: 'og:site_name', content: VITE_SITE_NAME },
  ],
})
</script>

<template>
  <Cover />
  <AboutMe :id="aboutMeSectionId" />
</template>
