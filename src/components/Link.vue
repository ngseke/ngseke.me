<script setup lang="ts">
</script>

<template>
  <a
    class="
      link-effect
      whitespace-nowrap font-semibold
      after:inset-x-[-6px] after:inset-y-[-3px]
      after:rounded-lg
      after:bg-black/10
    "
    target="_blank"
    rel="noreferrer noopener"
  >
    <slot />
  </a>
</template>

<style lang="sass" scoped>
@use '../styles/link-effect'
</style>
