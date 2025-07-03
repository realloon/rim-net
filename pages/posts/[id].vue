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
      userId: localStorage.getItem('username') ?? 'unnameed',
      content: comment.value,
      likes: 0,
      createdAt: Date.now(),
    } satisfies Omit<Comment, 'id'>,
  })

  if (!createdComment) {
    return alert('评论未评论成功')
  }

  comment.value = ''
  refresh()
}
</script>

<template>
  <Post v-if="post" v-bind="{ ...post }" />

  <form class="comment-editor" @submit.prevent="submitHandle">
    <MarkEditor v-model="comment" name="comment">
      <template #footer>
        <Spacer />
        <Button type="button" text round>
          <template #icon>
            <Icon name="mdi:close" />
          </template>
        </Button>
        <Button type="submit" label="评论" />
      </template>
    </MarkEditor>
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
  margin-block: 16px 32px;
}

.comments {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
</style>
