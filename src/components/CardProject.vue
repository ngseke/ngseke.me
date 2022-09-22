<script setup lang="ts">
import LinkIcon from './LinkIcon.vue'
import CardProjectLinkOverlay from './CardProjectLinkOverlay.vue'

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

    <div class="mr-5 flex-none">
      <img
        class="h-[5.5rem] w-[8rem] overflow-hidden rounded-xl border border-stone-200 bg-stone-200 object-cover transition-colors dark:border-stone-800 dark:bg-stone-800"
        :src="img"
      >
    </div>

    <div class="flex flex-1 flex-col justify-center">
      <div>
        <h3 class="mb-1 text-lg font-medium leading-5">
          {{ title }}
        </h3>
        <p class="text-sm leading-4 text-stone-700 dark:text-stone-300">
          {{ description }}
        </p>
      </div>
      <div v-if="github || link" class="mt-3 space-x-2">
        <LinkIcon
          v-if="github"
          :href="github"
          :icon="['fab', 'github']"
          @click.stop=""
        />
        <LinkIcon
          v-if="link"
          :href="link"
          :icon="['fas', 'up-right-from-square']"
          external
          @click.stop=""
        />
      </div>
    </div>
  </div>
</template>
