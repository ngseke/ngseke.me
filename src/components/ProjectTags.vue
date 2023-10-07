<script setup lang="ts">
defineProps<{
  list?: string[],
}>()
</script>

<template>
  <ul
    v-if="list"
    class=" mb-2 flex space-x-1 text-sm font-medium"
  >
    <li
      v-for="(item, index) in list"
      :key="index"
      class="rounded-md bg-black-400/20 px-1"
    >
      {{ item }}
    </li>
  </ul>
</template>
