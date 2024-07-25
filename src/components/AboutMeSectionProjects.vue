<script setup lang="ts">
import { useProjects } from '../composables/useProjects'

const { projectMap } = useProjects()

const list = [
  projectMap.value['gomoku-next'],
  projectMap.value['versatile-npm'],
  projectMap.value['leetcode-night'],
  projectMap.value['iphone-price'],
]
</script>

<template>
  <AboutMeSectionLayout title="Projects">
    <div class="space-y-8 pt-4">
      <ProjectList :list="list" />

      <div class="pl-1">
        <LinkViewMore :href="{ name: 'projects' }" />
      </div>
    </div>
  </AboutMeSectionLayout>
</template>
