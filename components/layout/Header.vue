<script setup lang="ts"></script>

<template>
  <header>
    <h1>header</h1>
    <nav>
      <!-- temp -->
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/post/1">Post/1</NuxtLink></li>
        <li><NuxtLink to="/post/2">Post/2</NuxtLink></li>
        <li><NuxtLink to="/post/3">Post/3</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
      </ul>
    </nav>

    <section>
      <NuxtLink to="/new">Create</NuxtLink>
    </section>
  </header>
</template>
