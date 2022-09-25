<route lang="yaml">
name: "projects"
</route>

<script setup lang="ts">
import useProjects from '../composables/useProjects'
import { VITE_SITE_NAME } from '../modules/constants'
import useReadHistory from '../composables/useReadHistory'

useHead({
  title: `Projects | ${VITE_SITE_NAME}`,
})

const { projects } = useProjects()
const { isReadAll } = useReadHistory()
</script>

<template>
  <div class="container px-4 pt-16">
    <div class="mx-auto max-w-5xl py-16">
      <section
        v-for="({ title, list }, index) in projects"
        :key="index"
        class="mb-16 space-y-8"
      >
        <TitleCategory>{{ title }}</TitleCategory>
        <ProjectList :list="list" />
      </section>

      <div v-if="isReadAll" class="mt-2 font-mono text-xs">
        Wow, you've read all of my projects 😳
      </div>
    </div>
  </div>
</template>
