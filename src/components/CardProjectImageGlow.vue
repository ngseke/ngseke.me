<script setup lang="ts">
defineProps<{
  img?: string,
}>()

const isShown = ref(false)
async function handleLoad () {
  isShown.value = true
}
</script>

<template>
  <div
    class="
      relative h-[5.5rem] w-[8rem]
      before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:rounded-xl before:bg-black-100
      after:absolute after:left-0 after:top-0 after:-z-20 after:h-full after:w-full after:overflow-hidden after:rounded-xl after:bg-cover after:bg-center after:blur-lg after:transition-opacity after:duration-500 after:[background-image:var(--img)] after:[will-change:filter]
      dark:before:bg-black-800
    "
    :class="{
      'after:opacity-0': !isShown,
      'after:opacity-40': isShown
    }"
    :style="{ '--img': `url(${img})` }"
  >
    <img
      class="h-full w-full overflow-hidden rounded-xl bg-black-200 object-cover transition-opacity duration-300 dark:bg-black-800"
      :class="{ 'opacity-0': !isShown }"
      :src="img"
      @load="handleLoad"
    >
  </div>
</template>
