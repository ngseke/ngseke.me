<script setup lang="ts">
const skills = [
  'React',
  'Next.js ',
  'Vue 3',
  'Tailwind CSS',
  'Nuxt',
  'TypeScript',
]
</script>

<template>
  <AboutMeSectionLayout title="Skills">
    <ul class="flex max-w-md flex-wrap">
      <li
        v-for="(item, index) in skills"
        :key="index"
        class="
          min-w-[50%] flex-1
          before:mr-1
          before:inline-block
          before:origin-right
          before:opacity-50
          before:content-['▸']
        "
      >
        <span class="ml-2">{{ item }}</span>
      </li>
    </ul>
  </AboutMeSectionLayout>
</template>
