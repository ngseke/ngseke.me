<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { LINKS } from '../modules/links'

const links = [
  LINKS.github,
  LINKS.hackmd,
  LINKS.discord,
  LINKS.email,
  LINKS.linkedin,
]
</script>

<template>
  <AboutMeSectionLayout title="Contact Me">
    <ul class="flex flex-col">
      <li
        v-for="(link, index) in links"
        :key="index"
      >
        <Link :href="link.url">
          <span class="mr-1 inline-block min-w-[1.5rem] text-center">
            <FontAwesomeIcon :icon="link.icon" />
          </span>
          {{ link.title }}
          <span v-if="'subtitle' in link" class="ml-1 font-normal opacity-60">
            {{ link?.subtitle }}
          </span>
        </Link>
      </li>
    </ul>
  </AboutMeSectionLayout>
</template>
