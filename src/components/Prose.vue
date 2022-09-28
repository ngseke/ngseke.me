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
    & > img
      @apply mx-auto w-auto mb-4
      +media

  blockquote
    @apply border-l-4 px-4 border-stone-500/50
    p img
      @apply mx-0 max-w-full

  ul, ol
    @apply list-outside pl-5 mb-6 space-y-1
    li
      @apply pl-2
  ul
    @apply list-disc
  ol
    @apply list-decimal

  a
    @apply underline inline-block
  s
    &, > a
      @apply line-through
  hr
    @apply my-6 border-current opacity-30
  code
    @apply break-words
  .embed-responsive
    @apply mb-12 mx-auto w-full relative overflow-hidden after:pt-[56.25%] after:block
    +media
    .embed-responsive-item
      @apply absolute inset-0 h-full w-full
  pre.shiki
    @apply p-4 rounded-lg overflow-x-auto mb-4
</style>
