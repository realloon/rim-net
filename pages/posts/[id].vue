<script setup lang="ts">
import type { Post, Comment } from '~/types'
const { params } = useRoute()
const { data: post } = await useFetch<Post>(
  `http://localhost:9000/posts/${params.id}`
)

const { data: comments } = await useFetch<Comment[]>(
  'http://localhost:9000/comments',
  {
    query: { postId: params.id },
  }
)
</script>

<template>
  <Post v-if="post" v-bind="{ ...post }" />
  <section class="comments">
    <Comment v-for="comment in comments" v-bind="{ ...comment }" />
  </section>
</template>

<style></style>
