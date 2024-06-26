<script setup lang="ts">
import { useIsCoverVisible } from '../composables/useIsCoverVisible'
import { aboutMeSectionHash, scrollToAboutMe } from '../modules/about-me-section'
import type { Link } from '../types/Link'
import { useHamburger } from '../composables/useHamburger'
import { useIsScrolledToTop } from '../composables/useIsScrolledToTop'
import { LINKS } from '../modules/links'

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
    href: { name: 'index', hash: aboutMeSectionHash },
    handler: (e) => {
      if (route.name === 'index') {
        e.preventDefault()
        scrollToAboutMe()
      }
    },
  },
  {
    name: 'Blog',
    href: { name: 'posts' },
  },
  {
    name: 'Projects',
    href: { name: 'projects' },
  },
  {
    name: 'Notes',
    href: LINKS.hackmd.url,
  },
  {
    name: 'Gist',
    href: LINKS.githubGist.url,
  },
]
const { isExpanded, toggleIsExpanded } = useHamburger()

const { isScrolledToTop } = useIsScrolledToTop()
const shouldShowBorder = computed(() => shouldShowLogo.value && !isScrolledToTop.value)
</script>

<template>
  <nav
    class="
      fixed left-0 top-0 z-20 flex h-14 w-full flex-col justify-center border-b transition-all duration-300 after:absolute
      after:-bottom-8 after:left-0 after:h-8 after:w-full after:bg-gradient-to-b after:from-white after:to-[transparent_70%]
      after:opacity-0
      dark:after:from-black-900
      print:hidden
      sm:h-16
    "
    :class="{
      'bg-white text-black-900/80 dark:bg-black-900 dark:text-white/80': shouldShowLogo,
      'text-white/80': !shouldShowLogo,
      'border-black-200 dark:border-black-800': shouldShowBorder,
      'border-transparent': !shouldShowBorder,
    }"
  >
    <div class="container flex px-4">
      <div class="relative z-10 flex w-full items-center justify-center py-2 sm:justify-start ">
        <NavbarLogo
          :show="shouldShowLogo"
          @click="isExpanded = false"
        />

        <ul class="mr-6 hidden space-x-6 font-medium transition-colors duration-75 sm:flex">
          <li
            v-for="({ name, href, handler }, index) in links"
            :key="index"
          >
            <NavbarLink
              :href="href"
              @click="handler?.($event) ?? (() => {})"
            >
              {{ name }}
            </NavbarLink>
          </li>
        </ul>

        <div class="absolute left-0 top-1/2 block -translate-y-1/2 sm:static sm:right-auto sm:top-auto sm:hidden sm:transform-none">
          <ButtonHamburger @click="toggleIsExpanded()" />
          <NavbarHamburger
            v-model:show="isExpanded"
            :links="links"
          />
        </div>

        <div class="absolute right-0 top-1/2 ml-auto -translate-y-1/2 sm:static sm:right-auto sm:top-auto sm:transform-none">
          <ButtonDarkMode />
        </div>
      </div>
    </div>
  </nav>
</template>
