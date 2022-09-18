<script setup lang="ts">
import { computed } from 'vue'
import useIsCoverVisible from '../composables/useIsCoverVisible'
import ButtonDarkMode from './ButtonDarkMode.vue'

const { isCoverVisible } = useIsCoverVisible()
const isShow = computed(() => isCoverVisible.value === false)
</script>

<template>
  <nav
    class="fixed top-0 left-0 z-20 flex h-16 w-full flex-col justify-center border-b border-black bg-black backdrop-blur-xl"
  >
    <div class="flex px-4">
      <div class="relative z-10 flex items-center py-2 text-white/80 sm:px-5">
        <div
          class="transition-all duration-200"
          :class="{
            'w-0 opacity-0': !isShow,
            'w-20': isShow,
          }"
        >
          <RouterLink class="neon font-pacifico inline-block rotate-[-4deg] text-lg" to="/">
            ngseke
          </RouterLink>
        </div>
        <ul class="mr-6 flex space-x-6 font-medium">
          <li
            v-for="i in ['About', 'Projects', 'Note']"
            :key="i"
            class=""
          >
            <a
              class="
                link-effect uppercase
                after:-inset-x-2
                after:-inset-y-1
                after:rounded-lg
                after:bg-white/25
              "
              href="#"
            >{{ i }}</a>
          </li>
        </ul>
        <ButtonDarkMode />
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@use '../styles/link-effect';

$ngsek: #ffd019;
$ngsek-light: lighten(#ffd019, 50%);

.neon {
  color: $ngsek-light;
  text-shadow:
    0 0 3px rgba($ngsek-light, 0.70),
    0 0 15px rgba($ngsek-light, 0.34),
    0 0 6px rgba($ngsek, 0.52),
    0 0 10px rgba($ngsek, 0.5),
    0 0 17px rgba($ngsek, 0.7),
    0 0 27px rgba($ngsek, 0.5);
}
</style>
