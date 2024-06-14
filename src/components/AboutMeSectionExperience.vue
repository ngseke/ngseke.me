<script setup lang="ts">
import { getFormattedYear } from '../modules/date'

const getListClassName = (index: number) => ({
  'flex flex-1 before:mr-1 before:min-w-[.5rem] before:text-center': true,
  'opacity-60 before:content-["•"]': index,
  'before:content-["▸"]': !index,
})

type Period = [string] | [string, string] | string

const list: {
  title: string,
  company: string,
  link: string,
  period: Period,
}[] = [
  {
    title: 'Software Engineer',
    company: 'TSMC',
    link: 'https://www.tsmc.com/',
    period: ['2024/02'],
  },
  {
    title: 'Software Engineer',
    company: 'ASUS AICS',
    link: 'https://aics.asus.com/',
    period: ['2022/07', '2023/05'],
  },
  {
    title: 'Software Engineer',
    company: '3drens',
    link: 'https://www.3drens.com/',
    period: ['2021/08', '2022/03'],
  },
  {
    title: 'Software Engineer',
    company: 'gogoout',
    link: 'https://gogoout.com/',
    period: ['2019/12', '2021/07'],
  },
  {
    title: 'Summer Engineering Intern',
    company: 'Hiero7',
    link: 'https://www.hiero7.com/',
    period: 'Summer 2018',
  },
]

const getFormattedPeriod = (period: Period) => {
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
        v-for="({ title, company, link, period }, index) in list"
        :key="index"
        :class="getListClassName(index)"
      >
        <div class="ml-2">
          <span>{{ title }}</span>
          <span> @</span>
          <a
            class="ml-1 mr-3 font-medium decoration-dashed hover:underline"
            :href="link"
          >
            {{ company }}
          </a>
          <br class="inline-block sm:hidden">
          <span class="whitespace-nowrap text-base text-black-700 dark:text-black-300">
            {{ getFormattedPeriod(period) }}
          </span>
        </div>
      </li>
    </ul>
  </AboutMeSectionLayout>
</template>
