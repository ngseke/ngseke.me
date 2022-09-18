<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
import Cover from '../components/Cover.vue'
import AboutMe from '../components/AboutMe.vue'
import { useRoute } from 'vue-router'
import { nextTick, onMounted } from 'vue'
import { scrollToAboutMe } from '../modules/scroll-to'

const aboutId = 'about'

const route = useRoute()
onMounted(async () => {
  if (route.hash === `#${aboutId}`) {
    await nextTick()
    scrollToAboutMe({ duration: 1 })
  }
})
</script>

<template>
  <div>
    <Navbar />
    <Cover />
    <AboutMe :id="aboutId" />
  </div>
</template>
