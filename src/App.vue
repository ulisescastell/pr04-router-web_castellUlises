<script setup>
import NavCmp from './components/NavCmp.vue';
import { RouterView } from 'vue-router';
import IntroToVue from './components/IntroToVue.vue';
import { ref } from 'vue';

const title = ref('Welcome to Vue Concepts Demo');

const handleTitleChange = (newTitle) => {
  title.value = newTitle;
  console.log("Title changed to:", newTitle);
};
</script>

<template>
  <NavCmp />
  <div class="container">
    <h1>Welcome to Vue Concepts Demo</h1>
    <IntroToVue :title="title" @changeTitle="handleTitleChange" />
    <RouterView />
  </div>
</template>
