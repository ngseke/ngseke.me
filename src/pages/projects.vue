<route lang="yaml">
name: "projects"
</route>

<script setup lang="ts">
import { useDownplayProjects } from '../composables/useDownplayProjects'
import { useProjects } from '../composables/useProjects'
import { VITE_SITE_NAME } from '../modules/constants'

useHead({
  title: `Projects | ${VITE_SITE_NAME}`,
  meta: [
    { property: 'og:site_name', content: VITE_SITE_NAME },
  ],
})

const { downplayedProjects } = useProjects()

const { isDownplayed } = useDownplayProjects()
function handleShowAllProjects () {
  isDownplayed.value = false
}
</script>

<template>
  <div class="container px-4 pt-16">
    <div class="mx-auto max-w-5xl py-16">
      <section
        v-for="({ title, list }, index) in downplayedProjects"
        :key="index"
        class="mb-12 space-y-8"
      >
        <TitleCategory>{{ title }}</TitleCategory>
        <ProjectList :list="list" />
      </section>

      <div v-if="isDownplayed">
        <hr class="mb-6 border-dashed border-black-200 dark:border-black-800">
        <Button @click="handleShowAllProjects">
          Show All Projects
        </Button>
      </div>

      <AlertReadAllProject />
    </div>
  </div>
</template>
