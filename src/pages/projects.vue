<route lang="yaml">
name: "projects"
</route>

<script setup lang="ts">
import { useHead } from '@vueuse/head'
import TitleCategory from '../components/TitleCategory.vue'
import CardProject from '../components/CardProject.vue'
import useProjects from '../composables/useProjects'

useHead({
  title: `Projects | ${import.meta.env.VITE_SITE_NAME}`,
})

const { projects } = useProjects()
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
        <ul class="-mx-4 flex flex-wrap">
          <li
            v-for="({ path, title, briefDescription, githubLink, demoLink, cover }, index) in list"
            :key="index"
            class="mb-8 w-full px-4 md:w-1/2"
          >
            <CardProject
              :title="title"
              :path="path"
              :description="briefDescription"
              :github="githubLink"
              :link="demoLink"
              :img="cover"
            />
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>
