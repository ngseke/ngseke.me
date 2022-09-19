<route lang="yaml">
name: "project"
</route>

<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { computed } from 'vue'
import useProjectFrontmatter from '../composables/useProjectFrontmatter'
import dayjs from 'dayjs'
const { frontmatter } = useProjectFrontmatter()

useHead({
  title: `${frontmatter.value?.title} | ${import.meta.env.VITE_SITE_NAME}`,
  meta: [
    { property: 'description', content: frontmatter.value?.briefDescription },
  ],
})

const periodText = computed(() => {
  const period = frontmatter.value?.period
  if (!period) return null

  const getFormatted = (value: string) => dayjs(value).format(format)
  const format = 'MMM, YYYY'
  if (Array.isArray(period)) {
    const [start, end] = period
    if (start === end) return getFormatted(start)
    return `${getFormatted(start)} - ${getFormatted(end)}`
  } else {
    return `${getFormatted(period)} - Present`
  }
})
</script>

<template>
  <div class="container px-4 pt-8 md:pt-16">
    <div class="mx-auto max-w-3xl py-16">
      <div class="mb-16 space-y-3 border-b border-stone-300 pb-6 dark:border-stone-700">
        <h1 class="dark:text-ngsek text-4xl font-semibold md:text-5xl">
          {{ frontmatter?.title }}
        </h1>
        <p
          v-if="frontmatter?.briefDescription"
          class="text-xl font-medium tracking-wide text-stone-700 dark:text-stone-300"
        >
          {{ frontmatter?.briefDescription }}
        </p>
        <ul class="text-sm text-stone-700 dark:text-stone-300">
          <li>{{ periodText }}</li>
          <li v-if="frontmatter?.members ">
            Team Member:
            {{ frontmatter?.members.join('、') }}
          </li>
        </ul>
      </div>

      <article class="prose">
        <RouterView />
      </article>
    </div>
  </div>
</template>

<style lang="sass" scoped>
=media
  max-width: min(30rem, 100%)

:deep(.prose)
  @apply mx-auto
  h2
    @apply mb-4 text-2xl font-medium md:text-3xl
    &:not(:first-child)
      @apply mt-12
  h3
    @apply mb-4 text-xl font-medium

  p
    @apply leading-7 mb-6

  ul, ol
    @apply list-outside pl-5 mb-6 space-y-1
    li
      @apply pl-2
  ul
    @apply list-disc
  ol
    @apply list-decimal

  > img
    @apply mx-auto w-auto mb-4
    +media
  a
    @apply underline
  .embed-responsive
    @apply mb-12 mx-auto w-full relative overflow-hidden after:pt-[56.25%] after:block
    +media
    .embed-responsive-item
      @apply absolute inset-0 h-full w-full
</style>
