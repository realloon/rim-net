<template>
  <LayoutHeader />
  <div class="wrapper">
    <LayoutAside />
    <Spacer />
    <main><slot /></main>
    <aside class="right-aside"></aside>
    <Spacer />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  align-items: flex-start;
}

main {
  flex-basis: min(100%, 720px);
  margin-inline: 16px;
}

.right-aside {
  flex-basis: 300px;
  flex-shrink: 0;

  position: sticky;
  top: var(--height-header);

  box-sizing: border-box;
  padding: 16px;
  background-color: #f6f6f6;
  border-radius: 6px;

  &::after {
    content: 'ASIDE';
  }
}
</style>
