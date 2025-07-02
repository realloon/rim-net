<script setup lang="ts"></script>

<template>
  <header>
    <h1 class="title"><NuxtLink to="/">边缘世界中文论坛</NuxtLink></h1>

    <Spacer />

    <section class="right-wrapper">
      <Button @click="navigateTo('/new')" round>
        <template #icon>
          <Icon name="mdi:add" />
        </template>
      </Button>

      <Avatar />
    </section>
  </header>
</template>

<style scoped>
header {
  z-index: 1;
  position: sticky;
  top: 0;

  display: flex;
  align-items: center;

  box-sizing: border-box;
  height: var(--height-header);
  padding-inline: 24px;
  border-bottom: 1px solid #e5ebee;

  background-color: #fff;
}

.title {
  font-weight: bold;
}

.right-wrapper {
  display: flex;
  align-items: center;
  gap: 16px;
}
</style>
