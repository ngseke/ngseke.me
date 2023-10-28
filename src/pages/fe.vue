<route lang="yaml">
name: "fe"
</route>

<script setup lang="ts">
import { useDownplayProjects } from '../composables/useDownplayProjects'

const { isDownplayed } = useDownplayProjects()
isDownplayed.value = true
const router = useRouter()

onMounted(() => {
  router.replace({ name: 'index' })
})
</script>

<template>
  <div />
</template>
