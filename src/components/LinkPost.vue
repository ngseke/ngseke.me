<script setup lang="ts">

defineProps<{
  title: string,
  date?: string,
}>()
</script>

<template>
  <IsomorphicLink
    class="
      relative
      inline-block
      w-full
      space-y-1
      rounded-lg
      after:pointer-events-none
      after:absolute
      after:-inset-x-3
      after:-inset-y-2
      after:scale-[97%]
      after:rounded-xl
      after:bg-black-400/10
      after:opacity-0
      after:transition-all
      after:duration-200
      hover:after:scale-100
      hover:after:opacity-100
    "
  >
    <div class="text-lg font-medium">
      {{ title }}
    </div>
    <div class="text-base text-black-700 dark:text-black-300">
      {{ date }}
    </div>
  </IsomorphicLink>
</template>
