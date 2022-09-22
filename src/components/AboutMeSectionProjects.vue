<script setup lang="ts">
import useProjects from '../composables/useProjects'
import AboutMeSectionLayout from './AboutMeSectionLayout.vue'
import CardProject from './CardProject.vue'
import Link from './Link.vue'

const { projectMap } = useProjects()

const list = [
  projectMap.value['leetcode-night'],
  projectMap.value.mcip,
]
</script>

<template>
  <AboutMeSectionLayout title="My Projects">
    <div>
      <ul class="-mx-4 flex flex-wrap pt-4">
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
      <div class="pl-2">
        <Link :to="{ name: 'projects' }">
          View More
          <Fa :icon="['fas', 'caret-right']" class="ml-1" />
        </Link>
      </div>
    </div>
  </AboutMeSectionLayout>
</template>
