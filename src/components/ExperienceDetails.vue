<script setup>
import { destinations } from '@/data.json';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const experience = computed(() => {
  const destination = destinations.find(destination => destination.id == route.params.id);
  return destination.experiences.find(experience => experience.slug === route.params.slug);
});
</script>

<template>
  <div v-if="experience">
    <h1>{{ experience.name }}</h1>
    <img :src="'/public/images/' + experience.image" alt="Experience Image">
    <p>{{ experience.description }}</p>
  </div>
</template>


