<route lang="yaml">
name: "project"
</route>

<script setup lang="ts">
import { useProjectFrontmatter } from '../composables/useProjectFrontmatter'
import { VITE_SITE_NAME } from '../modules/constants'
import { getFormattedDate } from '../modules/date'
import { useReadHistory } from '../composables/useReadHistory'
import { useOgImage } from '../composables/useOgImage'

const { frontmatter } = useProjectFrontmatter()

const title = computed(() => `${frontmatter.value?.title} | ${VITE_SITE_NAME}`)
const description = computed(() => frontmatter.value?.briefDescription)

const { ogImageHeadMetaList, shouldShowOgImage } = useOgImage()

useHead(computed(() => ({
  title: title.value,
  meta: [
    { property: 'og:site_name', content: VITE_SITE_NAME },
    { property: 'og:title', content: title.value },
    { property: 'description', content: description.value },
    { property: 'og:description', content: description.value },
    ...ogImageHeadMetaList.value,
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
  <OgImageTemplate
    v-if="shouldShowOgImage"
    :description=" description"
    :img="frontmatter?.cover "
    :tags="frontmatter?.tags"
    :title="frontmatter?.title"
  />

  <PostLayout>
    <template #header>
      <div class="space-y-3">
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

  <div class="container px-4 pb-8">
    <div class="mx-auto max-w-3xl">
      <hr class="mb-8 border-dashed border-black-200 dark:border-black-800">
      <div class="grid gap-2 md:grid-cols-2">
        <LinkReadMore :to="{ name: 'projects' }">
          查看更多作品
        </LinkReadMore>
      </div>
    </div>
  </div>
</template>
