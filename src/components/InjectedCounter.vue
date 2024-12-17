<script setup>
import { inject } from 'vue';

// Usar inject para obtener el valor del contador
const counter = inject("counter");

if (!counter) {
  console.error("No se encontró el valor proporcionado 'counter'.");
}
</script>


<template>
  <div class="injected-counter">
    <h3>Injected Counter: {{ counter }}</h3>
    <button @click="counter++">Increment Injected Counter</button>
  </div>
</template>
