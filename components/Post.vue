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

const relativeTime = computed(() => formatRelativeTime(new Date(createdAt)))
</script>

<template>
  <article>
    <header>
      <Avatar />
      <span class="author">{{ author }}</span>
      <span class="dot"></span>
      <time :datetime="createdAt.toString()">{{ relativeTime }}</time>
      <Spacer />
      <Button text round>
        <template #icon>
          <Icon name="mdi:dots-horizontal" />
        </template>
      </Button>
    </header>

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
          <span class="number">{{ views }}</span>
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

article:not(:last-child)::after 
/* temp */ {
  content: '';
  display: block;
  height: 1px;
  background-color: #e1e1e2;
  margin-block: 8px;
}

header {
  display: flex;
  align-items: center;
  gap: 0.5em;

  .author {
    font-weight: bold;
  }

  .dot {
    display: inline-block;
    background: #000;
    width: 4px;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    transform: translateY(0.05em);
  }
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
