<script setup lang="ts">
import { LINKS } from '../modules/links'

const thisYear = new Date().getFullYear()

const linkIcons = [
  LINKS.email,
  LINKS.linkedin,
  LINKS.githubNgsekeMe,
]
</script>

<template>
  <footer class="border-t border-black-300 text-black-700 dark:border-black-700 dark:text-black-300">
    <div class="container flex min-h-[8rem] flex-col justify-center p-4">
      <div class="flex w-full justify-between">
        <div>
          © 2018 - {{ thisYear }}
          <Link class="ml-1" href="/">
            ngseke.me
          </Link>
        </div>
        <div class="space-x-3">
          <LinkIcon
            v-for="linkIcon in linkIcons"
            :key="linkIcon.url"
            :href="linkIcon.url"
            :icon="linkIcon.icon"
            :title="linkIcon.title"
          />
        </div>
      </div>
    </div>
  </footer>
</template>
