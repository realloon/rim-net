<script setup lang="ts">
import type { Post } from '~/types'

const title = ref('')
const content = ref('')
const board = ref('null')

async function handleSubmit() {
  /** Temporary Implementation */

  const USERNAME_KEY = 'username'
  let username = localStorage.getItem(USERNAME_KEY)

  if (!username) {
    username = prompt('请输入用户名')
    if (!username) return alert('用户取消输入用户名')
    localStorage.setItem(USERNAME_KEY, username)
  }

  const createdPost = await $fetch<Post>('http://localhost:9000/posts', {
    method: 'POST',
    body: {
      author: username,
      title: title.value,
      content: content.value,
      likes: 0,
      chats: 0,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    } satisfies Omit<Post, 'id'>,
  })

  if (!createdPost) {
    return alert('帖子未创建成功')
  }

  navigateTo(`/post/${createdPost.id}`)
}
</script>

<template>
  <section>
    <h1>发布新帖子</h1>
    <form @submit.prevent="handleSubmit">
      <select v-model="board" name="board">
        <option value="null">选择板块</option>
        <option value="found">发现</option>
        <option value="mod">模组</option>
      </select>

      <input v-model="title" type="text" name="title" />

      <textarea v-model="content" name="content"></textarea>

      <footer>
        <Spacer />
        <button type="submit">发布</button>
      </footer>
    </form>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
}

form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  footer {
    width: 100%;
    display: flex;
    align-items: baseline;
  }
}
</style>
