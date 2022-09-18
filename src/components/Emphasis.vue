<script setup lang="ts">
</script>

<template>
  <em
    class="
      after:bg-ngsek/50 relative
      not-italic
      after:absolute
      after:inset-x-[-1px]
      after:bottom-[2px]
      after:h-[5px]
    "
  >
    <span class="relative z-10">
      <slot />
    </span>
  </em>
</template>
