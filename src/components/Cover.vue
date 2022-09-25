<script setup lang="ts">
import CoverBody from './CoverBody.vue'
import image from '../assets/img/cover-background.jpg'
import useIsCoverVisible from '../composables/useIsCoverVisible'

const style = {
  backgroundImage: `url(${image})`,
}

const { coverRef } = useIsCoverVisible()
</script>

<template>
  <header
    ref="coverRef"
    class="
      flex min-h-screen flex-col justify-center
      bg-black bg-cover bg-center
    "
    :style="style"
  >
    <slot>
      <CoverBody />
    </slot>
  </header>
</template>
