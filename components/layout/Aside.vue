<script setup lang="ts"></script>

<template>
  <aside>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/">
            <Icon name="mdi:home" size="24px" />
            <span>首页</span>
          </NuxtLink>
        </li>
      </ul>

      <ul>
        <li><NuxtLink to="/posts/1">Post/1</NuxtLink></li>
        <li><NuxtLink to="/posts/2">Post/2</NuxtLink></li>
        <li><NuxtLink to="/posts/3">Post/3</NuxtLink></li>
      </ul>

      <ul>
        <li>
          <NuxtLink to="/about">
            <Icon name="mdi:web-box" size="24px" />
            <span>关于</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style scoped>
aside {
  display: flex;
  flex-direction: column;

  width: max-content;
  min-width: 160px;
  padding: 8px 16px;
}

ul {
  list-style: none;
  padding-inline-start: 0;
}

a {
  display: flex;
  align-items: center;
  gap: 8px;

  padding: 10px 14px;
  margin-inline: -8px;
  border-radius: 8px;

  transition: 0.2s;

  &:hover {
    background-color: #f6f8f9;
  }
}

a.router-link-active {
  background-color: #e5ebee;
}
</style>
