<script setup lang="ts">
defineProps<{
  path?: string,
  img?: string,
  title?: string,
  description?: string,
  github?: string,
  link?: string,
}>()
</script>

<template>
  <div class="relative flex">
    <CardProjectLinkOverlay v-if="path" :href="path" />

    <div class="pointer-events-none z-10 mr-5 flex-none">
      <CardProjectImageGlow :img="img" />
    </div>

    <div class="flex flex-1 flex-col justify-center">
      <div class="pointer-events-none z-10">
        <h3 class="!mb-2 !mt-0 !text-lg !font-medium !leading-5">
          {{ title }}
        </h3>
        <p class="!m-0 !text-sm !leading-4 text-stone-700 dark:text-stone-300">
          {{ description }}
        </p>
      </div>
      <div v-if="github || link" class="mt-3 space-x-2 leading-none">
        <LinkIconGithub v-if="github" :href="github" />
        <LinkIconDemo v-if="link" :href="link" />
      </div>
    </div>
  </div>
</template>
