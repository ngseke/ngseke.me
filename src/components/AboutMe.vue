<script setup lang="ts">
import AboutMeSectionSkills from './AboutMeSectionSkills.vue'
import AboutMeSectionContactMe from './AboutMeSectionContactMe.vue'
import AboutMeSectionSelfIntroduction from './AboutMeSectionSelfIntroduction.vue'
</script>

<template>
  <div class="min-h-screen">
    <div class="container flex justify-center px-4 py-16">
      <article id="about" class="w-full max-w-3xl space-y-14 text-lg leading-loose">
        <AboutMeSectionSelfIntroduction />
        <AboutMeSectionSkills />
        <AboutMeSectionContactMe />
      </article>
    </div>
  </div>
</template>
