<script setup lang="ts">
import LinkIcon from './LinkIcon.vue'
import CardProjectLinkOverlay from './CardProjectLinkOverlay.vue'

defineProps<{
  name?: string,
  img?: string,
  title?: string,
  description?: string,
  github?: string,
  link?: string,
}>()
</script>

<template>
  <div class="relative flex">
    <CardProjectLinkOverlay v-if="false" to="/" />

    <div class="mr-5 flex-none">
      <img
        class="h-[5.5rem] w-[8rem] overflow-hidden rounded-xl bg-stone-300 object-cover dark:bg-stone-700"
        :src="img"
      >
    </div>

    <div class="flex flex-1 flex-col pt-2 overflow-hidden">
      <h3 class="mb-1 truncate text-lg font-medium leading-5">
        {{ title }}
      </h3>
      <p class="mb-3 truncate text-sm leading-4 text-stone-700 dark:text-stone-300">
        {{ description }}
      </p>
      <div v-if="github || link" class="space-x-2">
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
          @click.stop=""
        />
      </div>
    </div>
  </div>
</template>
