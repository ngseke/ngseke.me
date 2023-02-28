<script setup lang="ts">
import scrollToElement from 'scroll-to-element'

defineProps<{
  show: boolean,
}>()

const route = useRoute()

const handleClick = (e: Event) => {
  if (route.name === 'index') {
    e.preventDefault()
    scrollToElement('body', {
      offset: 0,
      duration: 300,
    })
  }
}
</script>

<template>
  <TransitionUniversal
    enter-from-class="scale-95 sm:scale-100 sm:!w-0 opacity-0"
  >
    <div
      v-show="show"
      class="transition-all duration-200 sm:w-24"
    >
      <RouterLink
        class="font-pacifico inline-block rotate-[-4deg] text-lg text-stone-900/80 transition-colors duration-200 dark:text-white/80"
        :to="{ name: 'index' }"
        @click="handleClick"
      >
        ngseke
      </RouterLink>
    </div>
  </TransitionUniversal>
</template>
