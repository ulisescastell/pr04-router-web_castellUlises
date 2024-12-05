<script setup>
import { destinations } from '@/data.json'
import { RouterLink, useRoute } from 'vue-router';
</script>

<template>
  <nav id="nav">
    <RouterLink to="/">
      <h2>Home</h2>
    </RouterLink>
    <RouterLink v-for="destination in destinations" :key="destination.id" :to="'/destination/' + destination.id">
      {{ destination.name }}
    </RouterLink>
    <RouterLink to="/dashboard">Dashboard</RouterLink>
    <RouterLink to="/itb">ITB</RouterLink>
  </nav>
</template>
