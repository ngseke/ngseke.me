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
      after:bg-white/10
    "
    :class="{
      'h-8 w-8 text-xl': size === 'md',
      'h-10 w-10 text-3xl': size === 'lg',
    }"
    type="button"
  >
    <Transition
      enter-active-class="transition-all duration-400"
      enter-from-class="opacity-0 -rotate-45"
      leave-active-class="transition-all duration-100"
      leave-to-class="opacity-0 rotate-45"
      mode="out-in"
    >
      <slot />
    </Transition>
  </button>
</template>
