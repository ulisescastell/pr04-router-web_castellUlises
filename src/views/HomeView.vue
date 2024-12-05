<script setup>
import destinations from '@/data.json'
import { RouterLink } from 'vue-router';


</script>

<template>
  <div class="home">
    <h1>All destinations</h1>
    <div class="destinations">

      <RouterLink v-for="destination in destinations.destinations" :key="destination.id"
        :to="'/destination/' + destination.id">
        <h2>{{ destination.name }}</h2>
        <img :src="'/public/images/' + destination.image">
      </RouterLink>


    </div>
  </div>
</template>
