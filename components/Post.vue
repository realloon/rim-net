<script setup lang="ts">
const { createdAt, updatedAt } = defineProps<{
  author: string
  title: string
  content: string
  views: number
  likes: number
  createdAt: number
  updatedAt: number
}>()

const formater = Intl.DateTimeFormat('zh', { dateStyle: 'short' })
const date = computed(() => formater.format(createdAt))
</script>

<template>
  <article>
    <header>
      <Avatar />
      <span>{{ author }}</span>
      <span>dot</span>
      <time datetime="">{{ date }}</time>
      <Spacer />
      <button>...</button>
    </header>

    <h1>{{ title }}</h1>
    <Markdown class="content" :markdown="content" />
    <button>Like {{ likes }}</button>
    <button>chats {{ views }}</button>
  </article>
</template>

<style scoped>
article
/* temp */ {
  max-width: 600px;
  outline: 1px dashed gray;
}

header {
  display: flex;
  align-items: center;
  gap: 1em;
}
</style>
