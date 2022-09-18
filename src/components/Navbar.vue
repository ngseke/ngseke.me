<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import useIsCoverVisible from '../composables/useIsCoverVisible'
import ButtonDarkMode from './ButtonDarkMode.vue'
import NavbarLink from './NavbarLink.vue'

import type { AnchorHTMLAttributes } from 'vue'
import type { RouterLinkProps } from 'vue-router'
import NavbarLogo from './NavbarLogo.vue'
import { scrollToAboutMe } from '../modules/scroll-to'
import { useWindowScroll } from '@vueuse/core'

const route = useRoute()

const { isCoverVisible } = useIsCoverVisible()
const shouldShowLogo = computed(() => {
  if (isCoverVisible.value == null) {
    return (route.name !== 'index') ||
      (route.name === 'index' && route.hash === '#about')
  }
  return !isCoverVisible.value
})

interface Link {
  name: string,
  href?: AnchorHTMLAttributes['href'],
  to?: RouterLinkProps['to'],
  handler? (e: Event): void,
}

const links: Link[] = [
  {
    name: 'About',
    to: { name: 'index', hash: '#about' },
    handler: (e) => {
      if (route.name === 'index') {
        e.preventDefault()
        scrollToAboutMe()
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

const { y } = useWindowScroll()
const isScrolled = computed(() => y.value > 1)
</script>

<template>
  <nav
    class="fixed top-0 left-0 z-20 flex h-16 w-full flex-col justify-center bg-black shadow-lg transition-all duration-300"
    :class="{
      'shadow-stone-900/0': !isScrolled,
      'shadow-stone-900/30': isScrolled,
    }"
  >
    <div class="container flex px-4">
      <div class="relative z-10 flex items-center py-2 text-white/80">
        <NavbarLogo :show="shouldShowLogo" />

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
