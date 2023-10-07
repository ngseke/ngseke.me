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

<style lang="scss" scoped>
@mixin media {
  max-width: min(30rem, 100%);
}

@mixin block-margin {
  @apply mt-6 mb-4;
}

:deep(.prose) {
  h2, h3, h4 {
    @apply mt-12 mb-4 font-medium;
    // fix anchor position
    @apply before:content-[''] before:block before:h-20 before:-mt-20 before:pointer-events-none;

    a.header-anchor {
      @apply text-sm inline-block align-middle ml-1 -mt-2 opacity-0 scale-90 transition-all;
    }
    &:hover .header-anchor {
      @apply opacity-80 scale-100;
    }
  }
  h2 { @apply text-3xl; }
  h3 { @apply text-2xl; }
  h4 { @apply text-xl; }

  p {
    @include block-margin;
    @apply leading-7 tracking-[.2px];
    & > img {
      @include block-margin;
      @include media;
      @apply mx-auto w-auto;
    }
  }

  blockquote{
    @apply border-l-4 px-4 border-black-500/50 text-black-600;
    p img { @apply mx-0 max-w-full; }
  }

  ul, ol {
    @apply list-outside pl-5 mt-6 mb-4 space-y-1;
    li { @apply pl-2; }
  }
  ul { @apply list-disc; }
  ol { @apply list-decimal; }

  a { @apply underline; }
  s {
    &, > a {
      @apply line-through;
    }
  }
  hr {
    @apply my-6 border-current opacity-30;
  }
  a, code {
    @apply break-words;
  }
  :not(pre) > code {
    @apply bg-black-400/20 px-[.4rem] rounded-md;
  }

  .embed-responsive {
    @include block-margin;
    @include media;
    @apply mx-auto w-full relative overflow-hidden after:pt-[56.25%] after:block;
    .embed-responsive-item {
      @apply absolute inset-0 h-full w-full
    }
  }

  .shiki {
    @include block-margin;
    @apply p-4 rounded-lg overflow-x-auto;
  }
  .shiki-light { @apply bg-black-100 #{!important}; }
  .shiki-dark { @apply hidden; }

  &.dark {
    blockquote { @apply text-black-400; }
    .shiki-light { @apply hidden }
    .shiki-dark { @apply block; }
  }
}
</style>
