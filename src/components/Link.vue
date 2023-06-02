<script setup lang="ts">
</script>

<template>
  <IsomorphicLink
    class="
      link-effect
      inline-block
      whitespace-nowrap
      font-semibold leading-none
      after:inset-x-[-8px] after:inset-y-[-6px]
      after:rounded-lg
      after:bg-black/10
      dark:after:bg-white/10
    "
  >
    <slot />
  </IsomorphicLink>
</template>
