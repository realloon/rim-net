<script setup lang="ts">
import type { Post, Comment } from '~/types'
const { params } = useRoute()
const { data: post } = await useFetch<Post>(
  `http://localhost:9000/posts/${params.id}`
)

const { data: comments, refresh } = await useFetch<Comment[]>(
  'http://localhost:9000/comments',
  {
    query: { postId: params.id },
  }
)

const sortedComments = computed(() =>
  comments.value?.toSorted((a, b) => b.createdAt - a.createdAt)
)

const comment = ref('')

async function submitHandle() {
  const createdComment = await $fetch('http://localhost:9000/comments', {
    method: 'POST',
    body: {
      postId: params.id as string,
      author: localStorage.getItem('username') ?? 'unnameed',
      content: comment.value,
      likes: 0,
      createdAt: Date.now(),
    } satisfies Omit<Comment, 'id'>,
  })

  if (!createdComment) {
    return alert('评论未回复成功')
  }

  comment.value = ''
  refresh()
}
</script>

<template>
  <Post v-if="post" v-bind="{ ...post }" />

  <form @submit.prevent="submitHandle" class="comment-editor">
    <textarea v-model="comment" name="comment"></textarea>
    <footer>
      <Spacer />
      <Button label="取消" />
      <Button label="回复" />
    </footer>
  </form>

  <section class="comments">
    <Comment
      v-for="comment in sortedComments"
      v-bind="{ ...comment }"
      :key="comment.id"
    />
  </section>
</template>

<style scoped>
.comment-editor {
  /* tmpl */
  max-width: 600px;

  footer {
    display: flex;
    align-items: baseline;
    gap: 8px;
  }
}
</style>
