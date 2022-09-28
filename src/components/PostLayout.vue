<script setup lang="ts">
</script>

<template>
  <div class="container px-4 pt-8 md:pt-16">
    <div class="mx-auto max-w-3xl py-16">
      <header class="mb-12 border-b border-stone-300 pb-4 dark:border-stone-700">
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
