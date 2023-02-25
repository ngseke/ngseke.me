<script setup lang="ts">
import useProjects from '../composables/useProjects'

const { projectMap } = useProjects()

const list = [
  projectMap.value['leetcode-night'],
  projectMap.value.mcip,
]
</script>

<template>
  <AboutMeSectionLayout title="My Projects">
    <div class="space-y-8">
      <ProjectList class="pt-4" :list="list" />

      <div class="pl-2">
        <Link :href="{ name: 'projects' }">
          View More
          <Fa class="ml-1" :icon="['fas', 'caret-right']" />
        </Link>
      </div>
    </div>
  </AboutMeSectionLayout>
</template>
