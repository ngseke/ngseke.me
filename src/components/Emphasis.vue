<script setup lang="ts">
</script>

<template>
  <em
    class="
      relative
      not-italic
      after:absolute
      after:inset-x-[-1px]
      after:bottom-[10%]
      after:h-[20%]
      after:bg-ngsek/60
      dark:after:bg-ngsek/30
    "
  >
    <span class="relative z-10">
      <slot />
    </span>
  </em>
</template>
