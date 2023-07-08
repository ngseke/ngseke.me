import dayjs from 'dayjs'

export const getFormattedDate = (value?: string) => dayjs(value).format('MMM, YYYY')

export const getFormattedYear = (value?: string) => dayjs(value).format('YYYY')

export const getPostFormattedDate = (value?: string) => dayjs(value).format('MMM DD, YYYY')
