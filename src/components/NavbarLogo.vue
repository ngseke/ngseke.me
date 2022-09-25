<script setup lang="ts">
import scrollToElement from 'scroll-to-element'
import TransitionUniversal from './TransitionUniversal.vue'

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
      v-if="show"
      class="transition-all duration-200 sm:w-24"
    >
      <RouterLink
        class="neon font-pacifico inline-block rotate-[-4deg] text-lg"
        :to="{ name: 'index' }"
        @click="handleClick"
      >
        ngseke
      </RouterLink>
    </div>
  </TransitionUniversal>
</template>

<style lang="scss" scoped>
$ngsek: #ffd019;
$ngsek-light: lighten(#ffd019, 50%);

.neon {
  color: $ngsek-light;
  text-shadow:
    0 0 3px rgba($ngsek-light, 0.70),
    0 0 15px rgba($ngsek-light, 0.34),
    0 0 6px rgba($ngsek, 0.52),
    0 0 10px rgba($ngsek, 0.5),
    0 0 17px rgba($ngsek, 0.7),
    0 0 27px rgba($ngsek, 0.5);
}
</style>
