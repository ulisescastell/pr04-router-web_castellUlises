// eslint-disable-next-line vue/block-lang, vue/block-lang
<script setup>
import { destinations } from '@/data.json'
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Experience from './Experience.vue';

const route = useRoute();
const router = useRouter();

const getBack = () => {
  router.push("/")
}

const destination = computed(() => {
  return destinations.find(destination => {
    return destination.id == route.params.id
  })
})

</script>

<template>
  <div>
    <h2>{{ destination.name }}</h2>
    <button @click="getBack" class="btn">
      go back
    </button>
    <div class="destination-details">
      <img :src="'/public/images/' + destination.image">
      <p>{{ destination.description }}</p>
    </div>

    <div class="experiences">
      <h2>Top experiences in {{ destination.name }}</h2>
      <Experience :id="destination.id"/>
    </div>
  </div>
</template>


