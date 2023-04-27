import { useDark as baseUseDark } from '@vueuse/core'

const isDark = baseUseDark()

export function useDark () {
  return isDark
}
