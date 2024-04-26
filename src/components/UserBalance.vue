<template>
  <div class="d-flex flex-column gap-3 p-3 bg-light border border-2 rounded">
    <div class="d-flex flex-column">
      <p>Total balance</p>
      <p class="fw-bold text-center">{{ available }}</p>
    </div>
    <div>
      <p>Real balance</p>
      <p class="fw-bold text-center">{{ available }}</p>
    </div>
    <div>
      <p>Bonus balance</p>
      <p class="fw-bold text-center">{{ bonus }}</p>
    </div>
    <div>
      <p>Currency</p>
      <p class="fw-bold text-center">{{ currency }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  available: {
    type: Number,
    required: true
  },
  bonus: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    required: true
  }
})
</script>
