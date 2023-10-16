<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

defineProps<{
  active?: boolean,
}>()
</script>

<template>
  <ButtonRotateIcon>
    <FontAwesomeIcon v-if="active" :icon="faXmark" />
    <FontAwesomeIcon v-else :icon="faBars" />
  </ButtonRotateIcon>
</template>
