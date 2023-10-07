<script setup lang="ts">
import { getFormattedYear } from '../modules/date'

const getListClassName = (index: number) => ({
  'flex flex-1 before:mr-1 before:min-w-[.5rem] before:text-center': true,
  'opacity-60 before:content-["•"]': index,
  'before:content-["▸"]': !index,
})

const list: {
  title: string,
  company: string,
  period: [string, string] | string,
}[] = [
  {
    title: 'Software Engineer',
    company: 'ASUS AICS',
    period: ['2022/07', '2023/05'],
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
    period: 'Summer 2018',
  },
]

const getFormattedPeriod = (period: [string, string] | string) => {
  if (typeof period === 'string') return period

  const start = getFormattedYear(period[0])
  const end = period[1] ? getFormattedYear(period[1]) : 'Present'

  return `${start} — ${end}`
}
</script>

<template>
  <AboutMeSectionLayout title="Experience">
    <ul class="flex max-w-md flex-col space-y-3 pt-2 leading-tight">
      <li
        v-for="({ title, company, period }, index) in list"
        :key="index"
        :class="getListClassName(index)"
      >
        <div class="ml-2">
          <span>{{ title }}</span>
          <span class="ml-1 mr-3 font-medium">
            @ {{ company }}
          </span>
          <br class="inline-block sm:hidden">
          <span class="whitespace-nowrap text-base text-black-700 dark:text-black-300">
            {{ getFormattedPeriod(period) }}
          </span>
        </div>
      </li>
    </ul>
  </AboutMeSectionLayout>
</template>
