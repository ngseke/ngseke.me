<route lang="yaml">
name: "project"
</route>

<script setup lang="ts">
import useProjectFrontmatter from '../composables/useProjectFrontmatter'
import { VITE_SITE_NAME, VITE_SITE_ORIGIN } from '../modules/constants'
import { getFormattedDate } from '../modules/date'
import useMediumZoom from '../composables/useMediumZoom'
import useReadHistory from '../composables/useReadHistory'

const { frontmatter } = useProjectFrontmatter()

const description = computed(() => frontmatter.value?.briefDescription)

useHead({
  title: `${frontmatter.value?.title} | ${VITE_SITE_NAME}`,
  meta: [
    { property: 'description', content: description.value },
    { property: 'og:description', content: description.value },
    {
      property: 'og:image',
      content: String(new URL(frontmatter.value?.cover || '', VITE_SITE_ORIGIN)),
    },
  ],
})

useMediumZoom()

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
  <div class="container px-4 pt-8 md:pt-16">
    <div class="mx-auto max-w-3xl py-16">
      <div class="mb-12 space-y-3 border-b border-stone-300 pb-4 dark:border-stone-700">
        <h1 class="dark:text-ngsek text-4xl font-semibold md:text-5xl">
          {{ frontmatter?.title }}
        </h1>
        <p
          v-if="frontmatter?.briefDescription"
          class="text-xl font-medium tracking-wide text-stone-700 dark:text-stone-300"
        >
          {{ frontmatter?.briefDescription }}
        </p>
        <ul class="space-y-1 text-sm text-stone-700 dark:text-stone-300">
          <li>{{ periodText }}</li>
          <li v-if="frontmatter?.members ">
            Team Member:
            <TeamMembers :list="frontmatter?.members" />
          </li>
        </ul>
        <div v-if="github || link" class="space-x-3">
          <LinkIcon
            v-if="github"
            :href="github"
            :icon="['fab', 'github']"
            @click.stop=""
          />
          <LinkIcon
            v-if="link"
            :href="link"
            :icon="['fas', 'up-right-from-square']"
            @click.stop=""
          />
        </div>
      </div>

      <Prose>
        <RouterView />
      </Prose>
    </div>
  </div>
</template>
