<script lang="ts" setup>
import { marked } from 'marked'
const { markdown, isFolded = false } = defineProps<{
  markdown: string
  isFolded?: boolean
}>()
const html = await marked.parse(markdown)
</script>

<template>
  <div
    class="parsed-content"
    :class="isFolded && 'is-folded'"
    v-html="html"
  ></div>
</template>

<style scoped>
.parsed-content {
  line-height: 1.5;
}

.parsed-content.is-folded:deep(*) {
  margin-block: 0;
}

.parsed-content:deep(ol, ul) {
  padding-inline-start: 2em;
}

.parsed-content:deep(pre) {
  font-size: 0.875rem;
  background-color: #f6f6f6;
  padding: 1em;
  border-radius: 6px;
}

.parsed-content:deep(blockquote) {
  margin-inline: 0;
  border-inline-start: 4px solid gainsboro;
  padding-inline-start: calc(2em - 4px);

  & > p {
    margin-block: 0;
  }
}
</style>
