<script setup lang="ts">
import CoverBody from './CoverBody.vue'
import image from '../assets/img/cover-background.jpg'

const style = {
  backgroundImage: `url(${image})`,
}
</script>

<template>
  <header
    id="cover"
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
