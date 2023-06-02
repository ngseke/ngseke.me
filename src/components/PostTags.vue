<script setup lang="ts">
defineProps<{
  list?: string[],
}>()
</script>

<template>
  <ul
    v-if="list"
    class="mb-2 flex space-x-2 text-lg font-semibold text-ngsek"
  >
    <li
      v-for="(item, index) in list"
      :key="index"
      class="before:content-['#']"
    >
      {{ item }}
    </li>
  </ul>
</template>
