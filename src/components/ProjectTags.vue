<script setup lang="ts">
withDefaults(defineProps<{
  list?: string[],
  size?: 'md' | 'lg',
}>(), {
  list: undefined,
  size: 'md',
})
</script>

<template>
  <ul
    v-if="list"
    class="mb-2 flex font-medium"
    :class="{
      'space-x-1 text-sm': size === 'md',
      'space-x-2 text-xl': size === 'lg'
    }"
  >
    <li
      v-for="(item, index) in list"
      :key="index"
      class="rounded-md bg-black-400/20"
      :class="{
        'px-1': size === 'md',
        'px-2 py-1': size === 'lg'
      }"
    >
      {{ item }}
    </li>
  </ul>
</template>
