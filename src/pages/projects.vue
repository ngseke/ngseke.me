<route lang="yaml">
name: "projects"
</route>

<script setup lang="ts">
import useProjects from '../composables/useProjects'
import { VITE_SITE_NAME } from '../modules/constants'

useHead({
  title: `Projects | ${VITE_SITE_NAME}`,
})

const { projects } = useProjects()
</script>

<template>
  <div class="container px-4 pt-16">
    <div class="mx-auto max-w-5xl py-16">
      <section
        v-for="({ title, list }, index) in projects"
        :key="index"
        class="mb-24 space-y-8"
      >
        <TitleCategory>{{ title }}</TitleCategory>
        <ProjectList :list="list" />
      </section>

      <AlertReadAllProject />
    </div>
  </div>
</template>
