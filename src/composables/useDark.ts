import { useDark as baseUseDark } from '@vueuse/core'

const isDark = baseUseDark()

export default function useDark () {
  return isDark
}
