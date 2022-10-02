<route lang="yaml">
name: "posts"
</route>

<script setup lang="ts">
import { useHead } from '@vueuse/head'
import usePosts from '../composables/usePosts'
import { VITE_SITE_NAME } from '../modules/constants'

useHead({
  title: `Blog | ${VITE_SITE_NAME}`,
})

const { postGroups } = usePosts()
</script>

<template>
  <div class="container px-4 pt-16">
    <div class="mx-auto max-w-3xl py-16">
      <h1 class="dark:text-ngsek mb-12 text-4xl font-semibold md:text-5xl">
        ngseke's Blog
      </h1>

      <section
        v-for="({ name, posts }, index) in postGroups"
        :key="index"
        class="mb-16 space-y-8"
      >
        <h2 class="flex items-center text-3xl font-medium italic">
          {{ name }}
        </h2>
        <div class="transition-all sm:pl-4">
          <PostList :list="posts" />
        </div>
      </section>
    </div>
  </div>
</template>
