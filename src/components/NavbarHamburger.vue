<script setup lang="ts">
import NavbarLink from './NavbarLink.vue'
import Link from '../types/Link'

defineProps<{
  links?: Link[],
  show: boolean,
}>()

defineEmits<{
  (e: 'clickLink'): void,
}>()

const transitionFromClassName = 'opacity-0 -translate-x-4'
</script>

<template>
  <Teleport to="body">
    <transition
      :enter-from-class="transitionFromClassName"
      :leave-to-class="transitionFromClassName"
    >
      <div
        v-if="show"
        class="fixed inset-x-0 top-16 bottom-0 z-20 origin-top bg-black p-4 transition-all sm:hidden"
      >
        <ul class="flex h-full flex-col items-center space-y-8 pt-12 text-2xl font-medium text-white/80">
          <li
            v-for="({ name, to, href, handler }, index) in links"
            :key="index"
          >
            <NavbarLink
              :href="href"
              :to="to"
              @click="($event) => {
                handler?.($event)
                $emit('clickLink')
              }"
            >
              {{ name }}
            </NavbarLink>
          </li>
        </ul>
      </div>
    </transition>
  </Teleport>
</template>
