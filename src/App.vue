<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavCmp from './components/NavCmp.vue';
</script>

<template>
  <NavCmp/>
  <div class="container">
    <RouterView/>
  </div>
</template>

<style scoped>

</style>
