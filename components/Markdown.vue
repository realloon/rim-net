<script lang="ts" setup>
import { marked } from 'marked'
const { markdown } = defineProps<{ markdown: string }>()
const html = await marked.parse(markdown)
</script>

<template>
  <div class="parsed-content" v-html="html"></div>
</template>

<style scoped>
.parsed-content {
  line-height: 1.5;
}

.parsed-content:deep(p) {
  margin-block: 0;
}
</style>
