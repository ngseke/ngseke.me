<script setup lang="ts">
import { getFormattedDate } from '../modules/date'
import AboutMeSection from './AboutMeSection.vue'

const list = [
  {
    title: 'Software Engineer',
    company: 'ASUS AICS',
    period: ['2022/07'],
  },
  {
    title: 'Software Engineer',
    company: '3drens',
    period: ['2021/08', '2022/03'],
  },
  {
    title: 'Software Engineer',
    company: 'gogoout',
    period: ['2019/12', '2021/07'],
  },
  {
    title: 'Summer Engineering Intern',
    company: 'Hiero7',
    period: ['2018/07', '2018/08'],
  },
]
</script>

<template>
  <AboutMeSection title="Experience">
    <ul class="flex max-w-md flex-col space-y-3 pt-2 leading-tight">
      <li
        v-for="({ title, company, period }, index) in list"
        :key="index"
        class="
          flex
          flex-1
          before:mr-1
          before:opacity-50
          before:content-['•']
        "
        :class="{ 'opacity-75': index }"
      >
        <div class="ml-2">
          <span>{{ title }}</span>
          <span class="ml-1 mr-3 font-medium before:content-['@_']">
            {{ company }}
          </span>
          <br class="inline-block sm:hidden">
          <span class="whitespace-nowrap text-base text-stone-700 dark:text-stone-300">
            {{ getFormattedDate(period[0]) }}
            -
            {{ period[1] ? getFormattedDate(period[1]) : 'Present' }}
          </span>
        </div>
      </li>
    </ul>
  </AboutMeSection>
</template>
