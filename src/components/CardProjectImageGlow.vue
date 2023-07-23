<script setup lang="ts">
defineProps<{
  img?: string,
}>()
</script>

<template>
  <div
    class="relative after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:overflow-hidden after:rounded-xl after:bg-cover after:bg-center after:opacity-40 after:blur-lg after:[background-image:var(--img)] after:[will-change:filter]"
    :style="{ '--img': `url(${img})` }"
  >
    <img
      class="h-[5.5rem] w-[8rem] overflow-hidden rounded-xl bg-stone-200 object-cover transition-colors dark:bg-stone-800"
      :src="img"
    >
  </div>
</template>
