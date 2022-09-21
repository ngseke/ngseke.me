<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import useIsCoverVisible from '../composables/useIsCoverVisible'
import ButtonDarkMode from './ButtonDarkMode.vue'
import NavbarLink from './NavbarLink.vue'
import NavbarLogo from './NavbarLogo.vue'

import { aboutMeSectionHash, scrollToAboutMe } from '../modules/about-me-section'
import { useWindowScroll } from '@vueuse/core'
import ButtonHamburger from './ButtonHamburger.vue'
import type Link from '../types/Link'
import NavbarHamburger from './NavbarHamburger.vue'
import useHamburger from '../composables/useHamburger'

const route = useRoute()

const { isCoverVisible } = useIsCoverVisible()
const shouldShowLogo = computed(() => {
  if (isCoverVisible.value == null) {
    return (route.name !== 'index') ||
      (route.name === 'index' && route.hash === aboutMeSectionHash)
  }
  return !isCoverVisible.value
})

const links: Link[] = [
  {
    name: 'About',
    to: { name: 'index', hash: aboutMeSectionHash },
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

const { isExpanded, toggleIsExpanded } = useHamburger()
</script>

<template>
  <nav
    class="fixed top-0 left-0 z-20 flex h-16 w-full flex-col justify-center bg-black shadow-lg transition-all duration-300"
    :class="{
      'shadow-stone-900/0': !isScrolled,
      'shadow-stone-900/40': isScrolled,
    }"
  >
    <div class="container flex px-4">
      <div class="relative z-10 flex w-full items-center justify-center py-2 text-white/80 sm:justify-start">
        <NavbarLogo
          :show="shouldShowLogo || isExpanded"
          @click="isExpanded = false"
        />

        <ul class="mr-6 hidden space-x-6 font-medium sm:flex">
          <li
            v-for="({ name, to, href, handler }, index) in links"
            :key="index"
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

        <div class="absolute left-0 top-1/2 block -translate-y-1/2 sm:static sm:right-auto sm:top-auto sm:hidden sm:transform-none">
          <ButtonHamburger :active="isExpanded" @click="toggleIsExpanded()" />
          <NavbarHamburger
            :show="isExpanded"
            :links="links"
            @click-link="isExpanded = false"
          />
        </div>

        <div class="absolute right-0 top-1/2 ml-auto -translate-y-1/2 sm:static sm:right-auto sm:top-auto sm:transform-none">
          <ButtonDarkMode />
        </div>
      </div>
    </div>
  </nav>
</template>
