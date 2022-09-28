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

const { posts } = usePosts()
</script>

<template>
  <div class="container px-4 pt-16">
    <div class="mx-auto max-w-5xl py-16">
      <section class="mb-16 space-y-8">
        <h1 class="text-4xl font-semibold md:text-5xl">
          Blog
        </h1>
        <PostList :list="posts" />
      </section>
    </div>
  </div>
</template>
