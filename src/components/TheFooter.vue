<script setup lang="ts">
import links from '../modules/links'
</script>

<template>
  <footer class="border-t border-stone-300 text-stone-700 dark:border-stone-700 dark:text-stone-300">
    <div class="container flex min-h-[8rem] flex-col justify-center p-4">
      <div class="flex w-full justify-between">
        <div>
          © 2018 - {{ new Date().getFullYear() }}
          <Link class="ml-1" href="/">
            ngseke.me
          </Link>
        </div>
        <div>
          <LinkIcon
            :href="links.githubNgsekeMe.url"
            :icon="['fab', 'github']"
            :title="links.githubNgsekeMe.title"
          />
        </div>
      </div>
    </div>
  </footer>
</template>
