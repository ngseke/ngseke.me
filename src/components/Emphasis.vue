<script setup lang="ts">
</script>

<template>
  <em
    class="
      after:bg-ngsek/50 relative
      not-italic
      after:absolute
      after:left-0
      after:bottom-[.1rem]
      after:h-[.3rem]
      after:w-full
    "
  >
    <span class="relative z-10">
      <slot />
    </span>
  </em>
</template>
