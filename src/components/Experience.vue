<script setup>
import { destinations } from '@/data.json'
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import DestinationDetail from './DestinationDetail.vue';

const props = defineProps({
  id: Number
})

const route = useRoute();

const destination = computed(() => {
  return destinations.find(destination => {
    return destination.id == props.id
  })
})


</script>

<template>
    <div class="cards">
      <RouterLink v-for="experience in destination.experiences" :key="experience.slug" :to="'/destination/' + id + '/experience/' + experience.slug" class="card">
        <img :src="'/public/images/' + experience.image">
        <span class="card__text">{{ experience.name }}</span>
      </RouterLink>
    </div>

    <RouterView />
</template>

