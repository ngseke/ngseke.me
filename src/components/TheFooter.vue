<script setup lang="ts">
import links from '../modules/links'
</script>

<template>
  <footer class="border-t border-stone-300 text-stone-700 dark:border-stone-700 dark:text-stone-300">
    <div class="container flex min-h-[8rem] flex-col justify-center p-4">
      <div class="flex w-full justify-between">
        <div>
          © 2018 - {{ new Date().getFullYear() }}
          <Link href="/" class="ml-1">
            ngseke.me
          </Link>
        </div>
        <div>
          <LinkIcon
            :icon="['fab', 'github']"
            :href="links.githubNgsekeMe.url"
            :title="links.githubNgsekeMe.title"
          />
        </div>
      </div>
    </div>
  </footer>
</template>
