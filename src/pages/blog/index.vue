<route lang="yaml">
name: "posts"
</route>

<script setup lang="ts">
import { usePosts } from '../../composables/usePosts'
import { VITE_SITE_NAME } from '../../modules/constants'

useHead({
  title: `Blog | ${VITE_SITE_NAME}`,
})

const { postGroups } = usePosts()
</script>

<template>
  <div class="container px-4 pt-16">
    <div class="mx-auto max-w-3xl py-8 sm:py-16">
      <h1 class="mb-12 text-4xl font-semibold dark:text-ngsek md:text-5xl">
        ngseke's Blog
      </h1>

      <section
        v-for="({ name, posts }, index) in postGroups"
        :key="index"
        class="relative mb-16 space-y-8"
      >
        <h2 class="flex items-center text-3xl font-medium opacity-70 lg:absolute lg:-left-6 lg:-translate-x-full">
          {{ name }}
        </h2>
        <PostList :list="posts" />
      </section>
    </div>
  </div>
</template>
