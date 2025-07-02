<script setup lang="ts">
import type { Comment } from '~/types'

const { createdAt } = defineProps<Comment>()
</script>

<template>
  <article class="comment">
    <UserHeader :author="userId" :date="createdAt" />

    <Markdown class="content" :markdown="content" is-folded />

    <footer>
      <Button label="喜欢" text>
        <template #icon>
          <Icon name="mdi:cards-heart-outline" size="16px" />
        </template>
      </Button>

      <Button label="回复" text>
        <template #icon>
          <Icon name="mdi:chat-outline" size="16px" />
        </template>
      </Button>
    </footer>
  </article>
</template>

<style scoped>
.content,
footer {
  padding-left: 40px;
}

.content {
  margin-block: 8px;
}

footer {
  margin-left: -14px;
}
</style>
