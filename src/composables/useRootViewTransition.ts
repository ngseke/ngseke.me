import { useStyleTag } from '@vueuse/core'
import { nanoid } from 'nanoid'

export function useRootViewTransition () {
  const position = ref<[number, number]>([0, 0])

  const id = nanoid()
  const keyframesName = `clip-${id}`
  const xVariableName = `--x-${id}`
  const yVariableName = `--y-${id}`

  useStyleTag(computed(() => `
    :root {
      ${xVariableName}: ${position.value[0]}px;
      ${yVariableName}: ${position.value[1]}px;
    }

    @keyframes ${keyframesName} {
      from {
        clip-path: circle(0% at var(${xVariableName}) var(${yVariableName}));
      }
      to {
        clip-path: circle(150% at var(${xVariableName}) var(${yVariableName}));
      }
    }

    ::view-transition-old(root) {
      animation: none;
    }

    ::view-transition-new(root) {
      mix-blend-mode: normal;
      animation: ${keyframesName} .8s;
    }
  `))

  const startViewTransition = (
    fn: () => void,
    newPosition: [number, number]
  ) => {
    if (document.startViewTransition) {
      position.value = newPosition
      document.startViewTransition(fn)
    } else {
      fn()
    }
  }

  return {
    startViewTransition,
  }
}
