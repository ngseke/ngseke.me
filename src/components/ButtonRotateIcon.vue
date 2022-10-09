<script setup lang="ts">
</script>

<template>
  <button
    class="
      link-effect
      h-8 w-8
      select-none
      rounded-full
      text-lg
      after:inset-[-.3rem]
      after:rounded-full
      after:bg-white/10
    "
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
