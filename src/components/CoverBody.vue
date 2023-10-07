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
      bg-black-900/20
      px-4
      md:flex-row
    "
  >
    <div class="flex justify-center md:flex-1">
      <TransitionUniversal enter-from-class="opacity-0">
        <div v-show="isMounted" class="transition-opacity delay-200 duration-700">
          <h1
            class="rotate-[-4deg] whitespace-nowrap font-pacifico text-8xl tracking-tight text-white"
          >
            <span
              class="
                neon blink
                relative z-10 inline-block
                after:absolute after:left-0 after:top-0 after:-z-10 after:text-transparent after:content-['ngseke']
              "
            >
              ngseke
            </span>
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

.blink:after  {
  @keyframes blink {
    from { opacity: 0% }
  }
  text-shadow: 0 0 54px rgba($ngsek, .3);
  animation: blink .08s ease-in-out infinite alternate;
}
</style>
