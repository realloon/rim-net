<template>
  <LayoutHeader />
  <div class="wrapper">
    <LayoutAside />
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  align-items: flex-start;
}

main {
  max-width: 600px;
  padding: 8px 16px;
}
</style>
