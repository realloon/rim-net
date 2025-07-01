<script setup lang="ts">
import type { Post } from '~/types'

const { createdAt, updatedAt } = defineProps<Post>()

const relativeTime = computed(() =>
  formatRelativeTime(new Date(createdAt))
)

const { params } = useRoute()
const isPreviewMode = computed(() => !params.id)
</script>

<template>
  <article @click="isPreviewMode && navigateTo(`/posts/${id}`)">
    <UserHeader
      :author="author"
      :date="createdAt"
      :backable="!isPreviewMode"
    />

    <h1>{{ title }}</h1>
    <Markdown class="content" :markdown="content" />

    <footer>
      <Button>
        <template #icon>
          <Icon name="mdi:heart-outline" size="16px" />
          <span class="number">{{ likes }}</span>
        </template>
      </Button>
      <Button>
        <template #icon>
          <Icon name="mdi:chat-outline" size="16px" />
          <span class="number">{{ chats }}</span>
        </template>
      </Button>
    </footer>
  </article>
</template>

<style scoped>
article
/* temp */ {
  max-width: 600px;
}

footer {
  display: flex;
  align-items: center;
  gap: 12px;

  .number {
    font-size: 0.875em;
    font-weight: bold;
    font-family: monospace;
  }
}
</style>
