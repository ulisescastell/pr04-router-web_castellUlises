<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const goBack = () => {
  if (route.params.slug) {
    router.push(`/destination/${route.params.id}`);
  } else {
    router.push("/");
  }
};
</script>

<template>
  <button @click="goBack" class="btn">
    Go Back
  </button>
</template>
