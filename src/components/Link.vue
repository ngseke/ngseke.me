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
      after:bg-black-400/10
    "
  >
    <slot />
  </IsomorphicLink>
</template>
