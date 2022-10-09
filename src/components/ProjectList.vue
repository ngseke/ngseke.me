<script setup lang="ts">
import Project from '../types/Project'

defineProps<{
  list?: Project[],
}>()

</script>

<template>
  <ul class="!-mx-4 flex !list-none !flex-wrap !p-0">
    <li
      v-for="({ path, title, briefDescription, githubLink, demoLink, cover }, index) in list"
      :key="index"
      class="!mb-8 !w-full !px-4 md:!w-1/2"
    >
      <CardProject
        :description="briefDescription"
        :github="githubLink"
        :img="cover"
        :link="demoLink"
        :path="path"
        :title="title"
      />
    </li>
  </ul>
</template>
