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
  flex-shrink: 0;
  display: flex;
  flex-direction: column;

  position: sticky;
  top: var(--height-header);

  box-sizing: border-box;
  width: var(--width-aside);
  height: calc(100vh - var(--height-header));
  padding: 8px 16px;
  border-right: 1px solid #e5ebee;
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
