<script setup lang="ts">
</script>

<template>
  <div>
    <article class="prose">
      <slot />
    </article>
  </div>
</template>

<style lang="sass" scoped>
=media
  max-width: min(30rem, 100%)

:deep(.prose)
  h2
    @apply mb-4 text-2xl font-medium md:text-3xl
    &:not(:first-child)
      @apply mt-12
  h3
    @apply mb-4 text-xl font-medium

  p
    @apply leading-7 mb-6

  ul, ol
    @apply list-outside pl-5 mb-6 space-y-1
    li
      @apply pl-2
  ul
    @apply list-disc
  ol
    @apply list-decimal

  p > img
    @apply mx-auto w-auto mb-4
    +media
  a
    @apply underline inline-block
  hr
    @apply my-6 border-current opacity-30
  .embed-responsive
    @apply mb-12 mx-auto w-full relative overflow-hidden after:pt-[56.25%] after:block
    +media
    .embed-responsive-item
      @apply absolute inset-0 h-full w-full
  </style>
