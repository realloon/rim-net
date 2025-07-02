<script setup lang="ts">
import type { Post } from '~/types'

const { createdAt, updatedAt } = defineProps<Post>()

const { params } = useRoute()
const isPreviewMode = computed(() => !params.id)
</script>

<template>
  <article
    class="post"
    @click="isPreviewMode && navigateTo(`/posts/${id}`)"
  >
    <UserHeader
      class="header"
      :author="userId"
      :date="createdAt"
      :backable="!isPreviewMode"
    />

    <h1 class="title">{{ title }}</h1>
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
.title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-block: 8px;
}

.content {
  color: var(--color-font-lighter);
}

footer {
  display: flex;
  align-items: center;
  gap: 12px;

  margin-top: 8px;

  .number {
    font-size: 0.875em;
    font-weight: bold;
    font-family: monospace;
  }
}
</style>
