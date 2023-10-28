<script setup lang="ts">
withDefaults(defineProps<{
  size?: 'md' | 'lg',
}>(), {
  size: 'md',
})
</script>

<template>
  <button
    class="
      link-effect
      select-none
      rounded-full
      after:inset-[-.3rem]
      after:rounded-full
      after:bg-black-400/10
    "
    :class="{
      'h-8 w-8 text-xl': size === 'md',
      'h-10 w-10 text-3xl': size === 'lg',
    }"
    type="button"
  >
    <Transition
      enterActiveClass="transition-all duration-400"
      enterFromClass="opacity-0 -rotate-45"
      leaveActiveClass="transition-all duration-100"
      leaveToClass="opacity-0 rotate-45"
      mode="out-in"
    >
      <slot />
    </Transition>
  </button>
</template>
