<route lang="yaml">
name: "post"
</route>

<script setup lang="ts">
import { VITE_AUTHOR, VITE_SITE_NAME } from '../modules/constants'
import { usePostFrontmatter } from '../composables/usePostFrontmatter'
import { getPostFormattedDate } from '../modules/date'
import { useOgImage } from '../composables/useOgImage'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

const route = useRoute()

const { frontmatter } = usePostFrontmatter()
const title = computed(() =>
  `${frontmatter.value?.title ?? 'Blog'} | ${VITE_SITE_NAME}`
)

const { ogImageHeadMetaList, shouldShowOgImage } = useOgImage()

useHead(computed(() => ({
  title: title.value,
  description: title.value,
  meta: [
    { property: 'og:site_name', content: VITE_SITE_NAME },
    { property: 'og:title', content: title.value },
    { property: 'description', content: title.value },
    { property: 'og:description', content: title.value },
    ...ogImageHeadMetaList.value,
  ],
})))

const dateText = computed(() => {
  const date = frontmatter.value?.date
  return date ? getPostFormattedDate(date) : null
})

const author = VITE_AUTHOR

const isList = computed(() => route.name === 'posts')
</script>

<template>
  <OgImageTemplate
    v-if="shouldShowOgImage"
    :date="frontmatter?.date"
    :title="frontmatter?.title"
  />

  <RouterView v-if="isList" />

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

  <div v-if="!isList" class="container px-4 pb-8">
    <div class="mx-auto max-w-3xl">
      <hr class="mb-8 border-dashed border-black-200 dark:border-black-800">
      <div class="flex flex-wrap">
        <RouterLink
          class="inline-flex w-full justify-between rounded-lg bg-black-400/10 p-6 font-semibold leading-none tracking-wider hover:bg-black-400/20 md:w-1/2"
          :to="{ name: 'posts' }"
        >
          閱讀更多文章
          <Fa :icon="faCaretRight" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>
