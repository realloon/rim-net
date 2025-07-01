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

    {{ content }}

    <footer></footer>
  </article>
</template>

<style></style>
