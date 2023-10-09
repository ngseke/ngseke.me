<route lang="yaml">
name: "project"
</route>

<script setup lang="ts">
import { useProjectFrontmatter } from '../composables/useProjectFrontmatter'
import { VITE_SITE_NAME, VITE_SITE_ORIGIN } from '../modules/constants'
import { getFormattedDate } from '../modules/date'
import { useReadHistory } from '../composables/useReadHistory'

const { frontmatter } = useProjectFrontmatter()

const title = computed(() => `${frontmatter.value?.title} | ${VITE_SITE_NAME}`)
const description = computed(() => frontmatter.value?.briefDescription)

useHead(computed(() => ({
  title: title.value,
  meta: [
    { property: 'og:site_name', content: VITE_SITE_NAME },
    { property: 'og:title', content: title.value },
    { property: 'description', content: description.value },
    { property: 'og:description', content: description.value },
    {
      property: 'og:image',
      content: String(new URL(frontmatter.value?.cover || '', VITE_SITE_ORIGIN)),
    },
    { property: 'og:image:width', content: 320 },
    { property: 'og:image:height', content: 220 },
    {
      name: 'twitter:image',
      content: String(new URL(frontmatter.value?.cover || '', VITE_SITE_ORIGIN)),
    },
  ],
})))

const periodText = computed(() => {
  const period = frontmatter.value?.period
  if (!period) return null

  if (Array.isArray(period)) {
    const [start, end] = period
    if (start === end) return getFormattedDate(start)
    return `${getFormattedDate(start)} - ${getFormattedDate(end)}`
  } else {
    return `${getFormattedDate(period)} - Present`
  }
})

const github = computed(() => frontmatter.value?.githubLink)
const link = computed(() => frontmatter.value?.demoLink)

const { pushReadHistory } = useReadHistory()
if (frontmatter.value?.name) pushReadHistory(frontmatter.value?.name)
</script>

<template>
  <PostLayout>
    <template #header>
      <div class="space-y-3 ">
        <h1 class="text-4xl font-semibold dark:text-ngsek md:text-5xl">
          {{ frontmatter?.title }}
        </h1>
        <p
          v-if="frontmatter?.briefDescription"
          class="text-xl font-medium tracking-wide text-black-700 dark:text-black-300"
        >
          {{ frontmatter?.briefDescription }}
        </p>
        <ProjectTags :list="frontmatter?.tags" />
        <ul class="space-y-1 text-sm text-black-700 dark:text-black-300">
          <li>{{ periodText }}</li>
          <li v-if="frontmatter?.members ">
            Team Member:
            <TeamMembers :list="frontmatter?.members" />
          </li>
        </ul>
        <div v-if="github || link" class="space-x-3">
          <LinkIconGithub v-if="github" :href="github" />
          <LinkIconDemo v-if="link" :href="link" />
        </div>
      </div>
    </template>

    <RouterView />
  </PostLayout>
</template>
