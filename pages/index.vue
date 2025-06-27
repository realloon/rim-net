<script setup lang="ts">
import type { Post } from '~/types'
const { data: posts } = useFetch<Post[]>('http://localhost:9000/posts')

const sortedPosts = computed(
  () => posts.value?.toSorted((a, b) => b.updatedAt - a.updatedAt) ?? []
)
</script>

<template>
  <h1>首页</h1>
  <section class="post-list" aria-label="post-list">
    <template v-for="post in sortedPosts">
      <Post class="post" v-bind="{ ...post }" />
    </template>
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
