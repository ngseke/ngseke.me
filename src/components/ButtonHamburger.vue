<script setup lang="ts">
defineProps<{
  active?: boolean,
}>()
</script>

<template>
  <ButtonRotateIcon>
    <Fa v-if="active" :icon="['fas', 'xmark']" />
    <Fa v-else :icon="['fas','bars']" />
  </ButtonRotateIcon>
</template>
