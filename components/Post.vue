<script setup lang="ts">
import type { Post, User } from '~/types'

const { id, createdAt, updatedAt } = defineProps<Post>()

const { params } = useRoute()
const isPreviewMode = computed(() => !params.id)

const { data: user } = useFetch<User>(`http://localhost:9000/users/${id}`)
</script>

<template>
  <article class="post">
    <UserHeader
      class="header"
      :author="user?.nickname ?? 'Unnamed'"
      :date="createdAt"
      :backable="!isPreviewMode"
    >
      <template #expand>
        <Button @click.stop text round>
          <template #icon>
            <Icon name="mdi:dots-horizontal" />
          </template>
        </Button>
      </template>
    </UserHeader>

    <h1 class="title">{{ title }}</h1>
    <Markdown class="content" :markdown="content" />

    <footer>
      <Button :label="likes" class="counter">
        <template #icon>
          <Icon name="mdi:heart-outline" size="16px" />
        </template>
      </Button>
      <Button :label="chats" class="counter">
        <template #icon>
          <Icon name="mdi:chat-outline" size="16px" />
        </template>
      </Button>
    </footer>
  </article>
</template>

<style scoped>
article .title {
  font-size: 1rem;
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
}

.counter {
  font-family: var(--font-mono);
  font-weight: bold;
}
</style>
