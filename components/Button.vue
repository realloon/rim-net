<script setup lang="ts">
defineProps<{
  label?: string | number
  text?: boolean
  round?: boolean
}>()
</script>

<template>
  <button :class="[text && 'text', round && 'round']">
    <slot name="icon"></slot>
    <span v-if="label">{{ label }}</span>
  </button>
</template>

<style scoped>
button {
  display: inline-flex;
  align-items: center;
  gap: 0.5em;

  font-size: 0.875em;
  line-height: 1;

  background-color: #e5ebee;

  height: 32px;
  border: 0;
  padding-inline: 14px;
  border-radius: 16px;

  transition: 0.2s;

  cursor: pointer;
}

button.text {
  background-color: transparent;
  &:hover {
    background-color: #dbe4e9;
  }
}

button.round {
  height: unset;
  padding: 8px;
  border-radius: 50%;
}
</style>
