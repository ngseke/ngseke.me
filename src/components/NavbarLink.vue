<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
  <IsomorphicLink
    v-slot="{ isExternal }"
    class="
      link-effect
      inline-block
      uppercase
      after:-inset-x-2
      after:-inset-y-1
      after:rounded-lg
      after:bg-black-400/10
    "
  >
    <slot />
    <FontAwesomeIcon
      v-if="isExternal"
      class="ml-2"
      :icon="faUpRightFromSquare"
    />
  </IsomorphicLink>
</template>
