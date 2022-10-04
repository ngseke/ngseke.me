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
      w-full
      space-y-1
      rounded-lg
      after:pointer-events-none
      after:absolute
      after:-inset-x-3
      after:-inset-y-2
      after:scale-[97%]
      after:rounded-xl
      after:bg-black/10
      after:opacity-0
      after:transition-all
      after:duration-200
      hover:after:scale-100
      hover:after:opacity-100
      dark:after:bg-white/10
    "
  >
    <div class="text-lg font-medium">
      {{ title }}
    </div>
    <div class="text-stone-700 dark:text-stone-300">
      {{ date }}
    </div>
  </IsomorphicLink>
</template>
