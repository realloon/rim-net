<script setup lang="ts">
import type { Post } from '~/types'
const { data: posts } = useFetch<Post[]>('http://localhost:9000/posts')

const sortedPosts = computed(
  () => posts.value?.toSorted((a, b) => b.updatedAt - a.updatedAt) ?? []
)
</script>

<template>
  <section class="post-list" aria-label="post-list">
    <Post v-for="post in sortedPosts" class="post" v-bind="{ ...post }" />
  </section>
</template>

<style scoped>
.post:not(:last-of-type)::after 
/* temp */ {
  content: '';
  display: block;
  height: 1px;
  background-color: #e1e1e2;
  margin-block: 8px;
}
</style>
