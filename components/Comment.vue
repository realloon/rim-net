<script setup lang="ts">
import type { Comment } from '~/types'

const { createdAt } = defineProps<Comment>()
</script>

<template>
  <article class="comment">
    <UserHeader :author="userId" :date="createdAt" />

    <Markdown class="content" :markdown="content" />

    <footer></footer>
  </article>
</template>

<style scoped>
.content {
  padding-left: 40px;
}
</style>
