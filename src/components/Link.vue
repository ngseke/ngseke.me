<script setup lang="ts">
</script>

<template>
  <a
    class="
      relative
      whitespace-nowrap font-semibold
      after:absolute after:inset-x-[-6px] after:inset-y-[-3px] after:z-[-1] after:scale-75 after:rounded-lg
      after:bg-black/5 after:opacity-0
      after:transition-all after:duration-200
      hover:after:scale-100 hover:after:opacity-100
    "
    target="_blank"
    rel="noreferrer noopener"
  >
    <slot />
  </a>
</template>
