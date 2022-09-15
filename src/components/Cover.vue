<script setup lang="ts">
const style = {
  backgroundImage: `url(${'https://images.unsplash.com/photo-1580397581145-cdb6a35b7d3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1930&q=80'})`,
}
</script>

<template>
  <header
    class="h-screen bg-cover bg-center"
    :style="style"
  >
    <slot />
  </header>
</template>
