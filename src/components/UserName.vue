<template>
  <div class="d-flex flex-column align-items-center gap-4">
    <img :src="image" :alt="title" width="80" height="80" />
    <h3>{{ title }}</h3>
  </div>
</template>

<script setup>
const props = defineProps({
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})
</script>
