<route lang="yaml">
name: "post"
</route>

<script setup lang="ts">
import { VITE_AUTHOR, VITE_SITE_NAME } from '../modules/constants'
import { usePostFrontmatter } from '../composables/usePostFrontmatter'
import { getPostFormattedDate } from '../modules/date'
import { useOgImage } from '../composables/useOgImage'

const route = useRoute()

const { frontmatter } = usePostFrontmatter()
const title = computed(() =>
  `${frontmatter.value?.title ?? 'Blog'} | ${VITE_SITE_NAME}`
)

const { ogImage } = useOgImage()

useHead(computed(() => ({
  title: title.value,
  meta: [
    { property: 'og:title', content: title.value },
    ...(
      ogImage.value
        ? [{ property: 'og:image', content: ogImage.value }]
        : [{}]
    ),
  ],
})))

const dateText = computed(() => {
  const date = frontmatter.value?.date
  return date ? getPostFormattedDate(date) : null
})

const author = VITE_AUTHOR

const shouldShowDebugOgImage = computed(() => 'og-image' in route.query)
</script>

<template>
  <OgImageTemplate
    v-if="shouldShowDebugOgImage"
    :author="author"
    :date="frontmatter?.date"
    :title="frontmatter?.title"
  />

  <RouterView v-if="route.name === 'posts'" />

  <PostLayout v-else>
    <template #header>
      <PostTags :list="frontmatter?.tags" />
      <h1 class="mb-6 text-3xl font-semibold md:text-4xl md:leading-tight">
        {{ frontmatter?.title }}
      </h1>
      <ul class="flex space-x-1 text-sm text-black-700 dark:text-black-300">
        <li>{{ dateText }}</li>
        <span class="opacity-60 before:content-[&quot;•&quot;]" />
        <li>by {{ author }}</li>
      </ul>
    </template>

    <RouterView />
  </PostLayout>
</template>
