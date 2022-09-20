import dayjs from 'dayjs'

export const getFormattedDate = (value: string) => dayjs(value).format('MMM, YYYY')
