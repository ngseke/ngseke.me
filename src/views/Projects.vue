<script setup lang="ts">
import { useHead } from '@vueuse/head'
import Navbar from '../components/Navbar.vue'
import TitleCategory from '../components/TitleCategory.vue'
import CardProject from '../components/CardProject.vue'
import projects from '../modules/projects'

useHead({
  title: `Projects | ${import.meta.env.VITE_SITE_NAME}`,
})
</script>

<template>
  <div class="min-h-screen">
    <Navbar />
    <div class="container max-w-5xl px-4 pt-16">
      <div class="py-16">
        <section
          v-for="({ title, list, cover }, index) in projects"
          :key="index"
          class="mb-16 space-y-8"
        >
          <TitleCategory>{{ title }}</TitleCategory>
          <ul class="-mx-4 flex flex-wrap">
            <li
              v-for="({ name, title, description, github, link }, index) in list"
              :key="index"
              class="mb-8 w-full px-4 md:w-1/2"
            >
              <CardProject
                :title="title"
                :name="name"
                :description="description"
                :github="github"
                :link="link"
                :img="cover"
              />
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>
