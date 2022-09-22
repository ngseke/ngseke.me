<script setup lang="ts">
import Project from '../types/Project'
import CardProject from './CardProject.vue'

defineProps<{
  list?: Project[],
}>()

</script>

<template>
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
</template>
