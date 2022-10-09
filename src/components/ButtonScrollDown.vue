<script setup lang="ts">
</script>

<template>
  <button
    class="inline-flex min-w-[5rem] flex-col items-center space-y-5 text-sm uppercase tracking-wide text-white opacity-80 transition-all hover:opacity-60"
    type="button"
  >
    <span>Scroll Down</span>
    <span
      class="
        relative
        h-2
        w-full
        before:absolute
        before:left-[1px]
        before:w-1/2
        before:rotate-[15deg]
        before:border-t-[1.5px]
        before:border-white
        after:absolute
        after:right-[1px]
        after:w-1/2
        after:rotate-[-15deg]
        after:border-t-[1.5px]
        after:border-white
      "
    />
  </button>
</template>
