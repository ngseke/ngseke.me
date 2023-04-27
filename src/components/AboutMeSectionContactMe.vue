<script setup lang="ts">
import { links } from '../modules/links'

const list = [
  links.github,
  links.discord,
  links.email,
  links.hackmd,
  links.linkedin,
]
</script>

<template>
  <AboutMeSectionLayout title="Contact Me">
    <ul class="flex flex-col">
      <li
        v-for="({ title, url, icon }, index) in list"
        :key="index"
      >
        <Link :href="url">
          <span class="mr-1 inline-block min-w-[1.5rem] text-center">
            <Fa :icon="icon" />
          </span>
          {{ title }}
        </Link>
      </li>
    </ul>
  </AboutMeSectionLayout>
</template>
