<script setup lang="ts">
import { Link } from '../types/Link'
import { onClickOutside } from '@vueuse/core'
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const props = defineProps<{
  links: Link[],
  show: boolean,
}>()

const emit = defineEmits<{
  (e: 'update:show', value: boolean): void,
}>()

const linksWithHome = computed<Link[]>(() => [
  {
    name: 'Home',
    href: { name: 'index' },
  },
  ...props.links,
])

const close = () => emit('update:show', false)

const target = ref<HTMLElement | null>(null)

const { activate, deactivate } = useFocusTrap(target, {
  allowOutsideClick: true,
  onDeactivate: close,
})

watch(() => props.show, async (value) => {
  await nextTick()
  if (value) activate()
  else deactivate()
})

onClickOutside(target, close)
</script>

<template>
  <Teleport to="body">
    <div v-if="show" class="fixed inset-0 z-20 backdrop-blur-sm" />
    <TransitionUniversal enter-from-class="opacity-0 -translate-4 scale-75">
      <div
        v-show="show"
        class="fixed inset-4 z-30 origin-top-left transition-all duration-200"
      >
        <div ref="target" class="flex max-h-full flex-col rounded-lg border bg-white/95 backdrop-blur-md dark:border-black-800 dark:bg-black-900/95">
          <div class="p-4">
            <ButtonRotateIcon
              class="dark:text-white/80"
              size="lg"
              @click="close"
            >
              <FontAwesomeIcon :icon="faXmark" />
            </ButtonRotateIcon>
          </div>

          <div class="flex-1 overflow-y-auto">
            <ul class="flex flex-col space-y-6 px-8 pb-8 pt-4 text-2xl font-medium dark:text-white/80">
              <li
                v-for="({ name, href, handler }, index) in linksWithHome"
                :key="index"
              >
                <TransitionUniversal enter-from-class="opacity-0 scale-90">
                  <NavbarLink
                    v-show="show"
                    class="transition-all"
                    :href="href"
                    :style="{ transitionDelay: `${.06 + index * .01}s` }"
                    @click="($event: Event) => {
                      handler?.($event)
                      $emit('update:show', false)
                    }"
                  >
                    {{ name }}
                  </NavbarLink>
                </TransitionUniversal>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </TransitionUniversal>
  </Teleport>
</template>
