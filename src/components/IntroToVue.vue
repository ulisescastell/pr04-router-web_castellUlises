<script setup>
import { ref, watch, provide, inject } from 'vue';
import InjectedCounter from './InjectedCounter.vue';

// Ejemplo de props y emits
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: "Default Title",
  },
});
const emit = defineEmits(['changeTitle']);

const updateTitle = () => {
  emit('changeTitle', 'Updated Title from Child');
};

// Ejemplo de provide/inject
const counter = ref(0);
provide("counter", counter);

// Ejemplo de watch
watch(counter, (newValue, oldValue) => {
  console.log(`Counter changed from ${oldValue} to ${newValue}`);
});

// Ejemplo de v-model (bidireccional)
const inputValue = ref("");

</script>

<template>
  <div class="intro-to-vue">
    <h2>{{ title }}</h2>

    <!-- Props y Emits -->
    <button @click="updateTitle">Emit Event to Change Title</button>

    <!-- Provide/Inject -->
    <p>Counter (shared via provide): {{ counter }}</p>
    <button @click="counter++">Increment Counter</button>

    <!-- v-model -->
    <input v-model="inputValue" placeholder="Type something..." />
    <p>You typed: {{ inputValue }}</p>
  </div>
  <InjectedCounter/>
</template>
