<script setup lang="ts">
import type { Post } from '~/types'
const { data: posts } = useFetch<Post[]>('http://localhost:9000/posts')

const sortedPosts = computed(
  () => posts.value?.toSorted((a, b) => b.updatedAt - a.updatedAt) ?? []
)
</script>

<template>
  <section class="post-list" aria-label="post-list">
    <Post
      v-for="post in sortedPosts"
      @click="navigateTo(`/posts/${post.id}`)"
      class="post"
      v-bind="{ ...post }"
    />
  </section>
</template>

<style scoped>
.post {
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #edeff1;
  }
}
</style>
