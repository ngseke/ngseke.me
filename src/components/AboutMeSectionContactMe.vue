<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { LINKS } from '../modules/links'

const links = [
  LINKS.github,
  LINKS.discord,
  LINKS.email,
  LINKS.hackmd,
  LINKS.linkedin,
]
</script>

<template>
  <AboutMeSectionLayout title="Contact Me">
    <ul class="flex flex-col">
      <li
        v-for="({ title, url, icon }, index) in links"
        :key="index"
      >
        <Link :href="url">
          <span class="mr-1 inline-block min-w-[1.5rem] text-center">
            <FontAwesomeIcon :icon="icon" />
          </span>
          {{ title }}
        </Link>
      </li>
    </ul>
  </AboutMeSectionLayout>
</template>
