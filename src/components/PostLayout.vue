<script setup lang="ts">
</script>

<template>
  <div class="container px-4 py-8 md:pt-16">
    <div class="mx-auto max-w-3xl pt-10 md:pt-16">
      <header class="mb-12 border-b border-black-300 pb-4 dark:border-black-700">
        <slot name="header" />
      </header>

      <main>
        <Prose>
          <slot />
        </Prose>
      </main>
    </div>
  </div>
</template>
