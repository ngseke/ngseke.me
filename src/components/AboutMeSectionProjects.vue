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
    <div>
      <ProjectList :list="list" class="pt-4" />

      <div class="pl-2">
        <Link :href="{ name: 'projects' }">
          View More
          <Fa :icon="['fas', 'caret-right']" class="ml-1" />
        </Link>
      </div>
    </div>
  </AboutMeSectionLayout>
</template>
