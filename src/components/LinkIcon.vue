<script setup lang="ts">
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

defineProps<{
  icon: IconDefinition,
}>()
</script>

<template>
  <IsomorphicLink
    class="
      link-effect
      inline-flex
      h-5
      w-5
      items-center justify-center
      rounded-full
      text-lg
      after:inset-[-.3rem]
      after:rounded-full
      after:bg-black-400/10
    "
  >
    <FontAwesomeIcon :icon="icon" />
  </IsomorphicLink>
</template>
