<template>
  <LayoutHeader />
  <LayoutAside />
  <div class="wrapper">
    <main><slot /></main>
    <aside>
      <span>ASIDE</span>
    </aside>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  align-items: flex-start;
}

.wrapper {
  width: min(100%, 1080px);
  padding-left: calc(50vw - var(--width-aside) - (min(100%, 1080px) / 2));
  margin-left: var(--width-aside);

  /* @media screen and (max-width: 1080px) {
    padding-left: 0;
    margin-inline: auto;
  } */

  display: flex;
  align-items: flex-start;
  gap: 24px;

  main {
    flex-grow: 1;
  }

  aside {
    flex-basis: 300px;
    flex-shrink: 0;

    position: sticky;
    top: var(--height-header);

    box-sizing: border-box;
    padding: 16px;
    background-color: #fafafb;
    border-radius: 6px;
  }
}
</style>
