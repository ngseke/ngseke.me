<script setup lang="ts">
defineProps<{
  title?: string,
}>()
</script>

<template>
  <section class="space-y-6">
    <h2 v-if="title" class="text-4xl font-semibold">
      {{ title }}
    </h2>
    <slot />
  </section>
</template>
