<script setup lang="ts">
import Link from '../types/Link'

defineProps<{
  links: Link[],
  show: boolean,
}>()

defineEmits<{
  (e: 'clickLink'): void,
}>()
</script>

<template>
  <Teleport to="body">
    <TransitionUniversal enter-from-class="opacity-0 -translate-x-16">
      <div
        v-if="show"
        class="fixed inset-x-0 top-16 bottom-0 z-20 bg-black p-4 transition-all sm:hidden"
      >
        <ul class="flex h-full flex-col items-center space-y-8 overflow-y-auto pt-12 text-2xl font-medium text-white/80">
          <li
            v-for="({ name, href, handler }, index) in links"
            :key="index"
          >
            <NavbarLink
              :href="href"
              @click="($event: Event) => {
                handler?.($event)
                $emit('clickLink')
              }"
            >
              {{ name }}
            </NavbarLink>
          </li>
        </ul>
      </div>
    </TransitionUniversal>
  </Teleport>
</template>
