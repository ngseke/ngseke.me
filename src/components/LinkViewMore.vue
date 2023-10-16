<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
  <Link>
    View More
    <FontAwesomeIcon class="ml-1" :icon="faCaretRight" />
  </Link>
</template>
