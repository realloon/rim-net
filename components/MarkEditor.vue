<script setup lang="ts">
const model = defineModel<string>({ required: true })
</script>

<template>
  <div class="mark-editor">
    <header>
      <span>Markdown Editor</span>
    </header>

    <textarea v-model="model" v-bind="$attrs" />

    <footer>
      <slot name="footer" />
    </footer>
  </div>
</template>

<style scoped>
.mark-editor {
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  width: 100%;
  padding: 8px;
  border: 1px solid #e5ebee;
  border-radius: 14px;
}

header {
  font-size: 0.875rem;
  font-weight: bold;
  color: var(--color-font-lighter);

  padding: 8px;
}

textarea {
  font-size: 1rem;
  line-height: 1.5;

  box-sizing: border-box;
  padding: 0 8px 8px;
  border: none;
  outline: none;
  resize: none;
}

footer {
  display: flex;
  align-items: center;
  gap: 16px;
}
</style>
