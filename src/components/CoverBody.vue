<script setup lang="ts">
import { useMounted } from '@vueuse/core'

const isMounted = useMounted()
</script>

<template>
  <div
    class="
      relative
      flex
      h-screen w-full
      flex-col items-center justify-center
      bg-black/20
      px-4
      md:flex-row
    "
  >
    <div class="flex justify-center md:flex-1">
      <TransitionUniversal enter-from-class="opacity-0">
        <div v-show="isMounted" class="transition-opacity duration-500">
          <h1
            class="font-pacifico relative rotate-[-4deg] whitespace-nowrap text-8xl tracking-tight text-white delay-200"
          >
            <span class="neon relative z-10">ngseke</span>
            <span class="blink animate-blink text-transparent after:absolute after:top-0 after:left-0 after:content-['ngseke']" />
          </h1>
        </div>
      </TransitionUniversal>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$ngsek: #ffd019;
$ngsek-light: lighten(#ffd019, 50%);

.neon {
  color: $ngsek-light;
  text-shadow:
    0 0 6px rgba($ngsek-light, 0.92),
    0 0 30px rgba($ngsek-light, 0.34),
    0 0 12px rgba($ngsek, 0.52),
    0 0 21px rgba($ngsek, 0.5),
    0 0 34px rgba($ngsek, 0.7),
    0 0 54px rgba($ngsek, 0.5);
}

.blink {
  text-shadow: 0 0 54px rgba($ngsek, .3);
}
</style>
