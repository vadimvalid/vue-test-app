<template>
  <article class="col-2 col-md-4 col-lg-3 d-flex flex-column mb-3">
    <img :src="image" class="card-img-top" :alt="title" />
    <div class="card-body d-flex flex-column gap-2 p-2">
      <h5 class="card-title">{{ title }}</h5>
      <button @click="emits('onPlay', id)" class="btn btn-primary mt-auto">Play demo</button>
    </div>
  </article>
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
  },
  id: {
    type: String,
    required: true
  }
})

const emits = defineEmits(['onPlay'])
</script>
