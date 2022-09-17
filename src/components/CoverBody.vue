<script setup lang="ts">
import useMounted from '../composables/useMounted'
const { isMounted } = useMounted()

const transitionBind = {
  enterActiveClass: 'transition-all origin-top-left duration-500',
  enterFromClass: 'opacity-0',
} as const
</script>

<template>
  <div
    class="
      flex
      h-screen w-full
      flex-col items-center justify-center
      bg-black/20
      px-4
      md:flex-row
    "
  >
    <div class="flex justify-center md:flex-1">
      <transition v-bind="transitionBind">
        <div v-show="isMounted">
          <h1
            class="font-pacifico relative rotate-[-4deg] whitespace-nowrap text-8xl tracking-tight text-white delay-200"
          >
            <span class="neon">ngseke</span>
            <span class="blink after:absolute after:top-0 after:left-0 after:content-['ngseke']" />
          </h1>
        </div>
      </transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$ngsek: #ffd019;
$ngsek-light: lighten(#ffd019, 50%);

@keyframes blink {
  from { opacity: 0; }
}

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
  animation: blink .08s ease-in-out infinite alternate;
}
</style>
