<script setup lang="ts">
defineProps<{
  list?: string[],
}>()

const isMe = (value: string) => value === '黃省喬'
</script>

<template>
  <template v-for="(item, index) in list" :key="index">
    <IsomorphicLink
      v-if="isMe(item)"
      class="underline"
      :href="{ name: 'index', hash: '#about' }"
    >
      {{ item }}
    </IsomorphicLink>
    <template v-else>
      {{ item }}
    </template>
    <span v-if="index !== (list?.length ?? 0) - 1">、</span>
  </template>
</template>
