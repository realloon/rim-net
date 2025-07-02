<script setup lang="ts">
const { date, backable = false } = defineProps<{
  author: string
  date: number
  backable?: boolean
}>()

const datetime = computed(() => new Date(date).toISOString())
const relativeTime = computed(() => formatRelativeTime(new Date(date)))
</script>

<template>
  <header>
    <Button
      v-if="backable"
      class="back-button"
      @click="$router.back()"
      text
      round
    >
      <template #icon>
        <Icon name="mdi:arrow-left" />
      </template>
    </Button>

    <Avatar />

    <div>
      <span class="author">{{ author }}</span>
      <span class="dot"></span>
      <time :datetime="datetime">{{ relativeTime }}</time>
    </div>

    <Spacer />

    <div>
      <slot name="expand" />
    </div>

  </header>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  gap: 8px;

  div {
    display: flex;
    align-items: baseline;
    gap: 0.5em;

    .author {
      font-weight: bold;
    }

    .dot,
    time {
      opacity: 0.7;
    }

    .dot {
      display: inline-block;
      background: #000;
      width: 4px;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      transform: translateY(-0.25em);
    }
  }
}
</style>
