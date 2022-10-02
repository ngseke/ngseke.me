<route lang="yaml">
name: "post"
</route>

<script setup lang="ts">
import { VITE_SITE_NAME } from '../modules/constants'
import useMediumZoom from '../composables/useMediumZoom'
import usePostFrontmatter from '../composables/usePostFrontmatter'
import { getPostFormattedDate } from '../modules/date'

const route = useRoute()

const { frontmatter } = usePostFrontmatter()
const description = computed(() => 'post')

useHead(computed(() => ({
  title: `${frontmatter.value?.title} | ${VITE_SITE_NAME}`,
  meta: [
    { property: 'description', content: description.value },
    { property: 'og:description', content: description.value },
  ],
})))

useMediumZoom()

const dateText = computed(() => {
  const date = frontmatter.value?.date
  return date ? getPostFormattedDate(date) : null
})

const author = 'Sean Huang'
</script>

<template>
  <RouterView v-if="route.name === 'posts'" />

  <PostLayout v-else>
    <template #header>
      <PostTags :list="frontmatter?.tags" />
      <h1 class="mb-6 text-3xl font-semibold md:text-4xl md:leading-tight">
        {{ frontmatter?.title }}
      </h1>
      <ul class="flex space-x-1 text-sm text-stone-700 dark:text-stone-300">
        <li>{{ dateText }}</li>
        <span class="opacity-60 before:content-[&quot;•&quot;]" />
        <li>by {{ author }}</li>
      </ul>
    </template>

    <RouterView />
  </PostLayout>
</template>
