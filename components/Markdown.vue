<script lang="ts" setup>
import { marked } from 'marked'
const { markdown } = defineProps<{ markdown: string }>()
const html = await marked.parse(markdown)
</script>

<template>
  <div v-html="html"></div>
</template>
