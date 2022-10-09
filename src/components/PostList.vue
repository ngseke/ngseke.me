<script setup lang="ts">
import { getPostFormattedDate } from '../modules/date'
import Post from '../types/Post'

defineProps<{
  list?: Post[],
}>()
</script>

<template>
  <ul class="space-y-8">
    <li
      v-for="(post, index) in list"
      :key="index"
    >
      <LinkPost
        :date="getPostFormattedDate(post.date)"
        :href="post.path"
        :title="post.title"
      />
    </li>
  </ul>
</template>
