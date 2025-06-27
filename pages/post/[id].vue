<script setup lang="ts">
import type { Post } from '~/types'
const { params } = useRoute()
const { data: post } = await useFetch<Post>(
  `http://localhost:9000/posts/${params.id}`
)
</script>

<template>
  <Post v-if="post" v-bind="{ ...post }" />
</template>

<style></style>
