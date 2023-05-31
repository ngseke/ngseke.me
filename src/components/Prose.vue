<script setup lang="ts">
import { useDark } from '../composables/useDark'
import { useMediumZoom } from '../composables/useMediumZoom'
import { useScrollToAnchor } from '../composables/useScrollToAnchor'

useMediumZoom()
useScrollToAnchor()

const isDark = useDark()
</script>

<template>
  <div>
    <article class="prose" :class="{ dark: isDark }">
      <slot />
    </article>
  </div>
</template>

<style lang="sass" scoped>
=media
  max-width: min(30rem, 100%)

=block-margin
  @apply mt-6 mb-4

:deep(.prose)
  h2, h3, h4
    @apply mt-12 mb-4 font-medium
    // fix anchor position
    @apply before:content-[''] before:block before:h-20 before:-mt-20
    a.header-anchor
      @apply text-sm inline-block mt-[10px] align-top ml-1 opacity-0 scale-90 transition-all
    &:hover .header-anchor
      @apply opacity-80 scale-100
  h2
    @apply text-3xl
  h3
    @apply text-2xl
  h4
    @apply text-xl

  p
    +block-margin
    @apply leading-7 tracking-[.2px]
    & > img
      +block-margin
      +media
      @apply mx-auto w-auto

  blockquote
    @apply border-l-4 px-4 border-stone-500/50 text-stone-600
    p img
      @apply mx-0 max-w-full

  &.dark
    blockquote
      @apply text-neutral-400

  ul, ol
    @apply list-outside pl-5 mt-6 mb-4 space-y-1
    li
      @apply pl-2
  ul
    @apply list-disc
  ol
    @apply list-decimal

  a
    @apply underline
  s
    &, > a
      @apply line-through
  hr
    @apply my-6 border-current opacity-30
  a, code
    @apply break-words
  :not(pre) > code
    @apply bg-stone-400/20 px-[.4rem] rounded-md

  .embed-responsive
    +block-margin
    @apply mx-auto w-full relative overflow-hidden after:pt-[56.25%] after:block
    +media
    .embed-responsive-item
      @apply absolute inset-0 h-full w-full
  pre.shiki
    +block-margin
    @apply p-4 rounded-lg overflow-x-auto
</style>
