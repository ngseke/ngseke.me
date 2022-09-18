<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import scrollToElement from 'scroll-to-element'

import useIsCoverVisible from '../composables/useIsCoverVisible'
import ButtonDarkMode from './ButtonDarkMode.vue'
import NavbarLink from './NavbarLink.vue'

import type { AnchorHTMLAttributes } from 'vue'
import type { RouterLinkProps } from 'vue-router'
import NavbarLogo from './NavbarLogo.vue'

const route = useRoute()

const { isCoverVisible } = useIsCoverVisible()
const isShow = computed(() => isCoverVisible.value !== true)

interface Link {
  name: string,
  href?: AnchorHTMLAttributes['href'],
  to?: RouterLinkProps['to'],
  handler? (e: Event): void,
}

const links: Link[] = [
  {
    name: 'About',
    to: { name: 'index' },
    handler: (e) => {
      if (route.name === 'index') {
        e.preventDefault()
        scrollToElement('#about', {
          offset: -100,
          duration: 300,
        })
      }
    },
  },
  {
    name: 'Projects',
    to: { name: 'projects' },
  },
  {
    name: 'Notes',
    href: 'https://hackmd.io/@xq',
  },
]
</script>

<template>
  <nav
    class="fixed top-0 left-0 z-20 flex h-16 w-full flex-col justify-center border-b border-black bg-black backdrop-blur-xl"
  >
    <div class="flex px-4">
      <div class="relative z-10 flex items-center py-2 text-white/80 sm:px-5">
        <NavbarLogo :show="isShow" />

        <ul class="mr-6 flex space-x-6 font-medium">
          <li
            v-for="({ name, to, href, handler }, index) in links"
            :key="index"
            class=""
          >
            <NavbarLink
              :href="href"
              :to="to"
              @click="handler?.($event) ?? (() => {})"
            >
              {{ name }}
            </NavbarLink>
          </li>
        </ul>
        <ButtonDarkMode />
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@use '../styles/link-effect';
</style>
