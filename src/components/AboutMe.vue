<script setup lang="ts">
import AboutMeSectionSkills from './AboutMeSectionSkills.vue'
import AboutMeSectionContactMe from './AboutMeSectionContactMe.vue'
import AboutMeSectionSelfIntroduction from './AboutMeSectionSelfIntroduction.vue'
import AboutMeSectionExperience from './AboutMeSectionExperience.vue'
import AboutMeSectionProjects from './AboutMeSectionProjects.vue'
</script>

<template>
  <div class="min-h-screen">
    <div class="container flex justify-center px-4 py-16">
      <article class="w-full max-w-3xl space-y-14 text-lg leading-loose">
        <AboutMeSectionSelfIntroduction />
        <AboutMeSectionSkills />
        <AboutMeSectionExperience />
        <AboutMeSectionContactMe />
        <AboutMeSectionProjects />
      </article>
    </div>
  </div>
</template>
