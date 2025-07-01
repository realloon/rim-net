<script setup lang="ts">
import type { Comment } from '~/types'

const { createdAt } = defineProps<Comment>()

const relativeTime = computed(() =>
  formatRelativeTime(new Date(createdAt))
)
</script>

<template>
  <article class="comment">
    <UserHeader :author="author" :date="createdAt" />

    <Markdown class="content" :markdown="content" />

    <footer></footer>
  </article>
</template>

<style scoped>
.comment
/* temp */ {
  max-width: 600px;
}

.content {
  padding-left: 40px;
}
</style>
