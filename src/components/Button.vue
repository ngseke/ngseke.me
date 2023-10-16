<script setup lang="ts">
</script>

<template>
  <button
    class="
      link-effect
      inline-block
      whitespace-nowrap
      text-lg font-semibold leading-none
      after:inset-x-[-8px] after:inset-y-[-6px]
      after:rounded-lg
      after:bg-black-400/10
    "
    type="button"
  >
    <slot />
  </button>
</template>
