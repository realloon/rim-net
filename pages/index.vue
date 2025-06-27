<script setup lang="ts">
import type { Post } from '~/types'
const { data: posts } = useFetch<Post[]>('http://localhost:9000/posts')
</script>

<template>
  <h1>首页</h1>
  <section class="post-list" aria-label="post-list">
    <template v-for="post in posts">
      <Post v-bind="{ ...post }" />
    </template>
  </section>
</template>

<style></style>
