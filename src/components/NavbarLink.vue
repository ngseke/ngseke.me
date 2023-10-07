<script setup lang="ts">
</script>

<template>
  <IsomorphicLink
    v-slot="{ isExternal }"
    class="
      link-effect
      inline-block
      uppercase
      after:-inset-x-2
      after:-inset-y-1
      after:rounded-lg
      after:bg-black-400/10
    "
  >
    <slot />
    <Fa v-if="isExternal" class="ml-2" :icon="['fas', 'up-right-from-square']" />
  </IsomorphicLink>
</template>
