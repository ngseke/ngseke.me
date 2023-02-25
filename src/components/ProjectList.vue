<script setup lang="ts">
import Project from '../types/Project'

defineProps<{
  list?: Project[],
}>()

</script>

<template>
  <ul
    class="grid !list-none grid-cols-1 gap-8 !p-0 md:grid-cols-2"
  >
    <li
      v-for="({ path, title, briefDescription, githubLink, demoLink, cover }, index) in list"
      :key="index"
      class="!p-0"
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
