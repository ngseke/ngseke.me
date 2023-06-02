<script setup lang="ts">
import { usePosts } from '../composables/usePosts'

const { posts } = usePosts()
const recent2Posts = computed(() => posts.value.slice(0, 2))
</script>

<template>
  <AboutMeSectionLayout title="Recent Posts">
    <div class="space-y-8 pt-4">
      <PostList dense :list="recent2Posts" />

      <div>
        <LinkViewMore :href="{ name: 'posts' }" />
      </div>
    </div>
  </AboutMeSectionLayout>
</template>
