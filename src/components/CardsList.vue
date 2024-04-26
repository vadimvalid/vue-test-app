<template>
  <section class="row">
    <card-item
      v-for="game in games"
      :key="game.id"
      :image="game.attributes.image"
      :title="game.attributes.title"
      :id="game.id"
      @onPlay="playDemo"
    />
  </section>
</template>

<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import CardItem from './CardItem.vue'

const games = ref([])
const gameUrl = ref('')

onMounted(() => {
  if (localStorage.getItem('token')) {
    axios
      .get('v2/casino/games?clientId=default')
      .then((response) => {
        games.value = response.data.data.slice(0, 10)
        return response
      })
      .catch((error) => {
        return error
      })
  }
})

const playDemo = async (id) => {
  await axios
    .post(`v2/casino/games/${id}/session-demo?clientId=default`, {
      clientId: 'default',
      gameId: id
    })
    .then((response) => {
      gameUrl.value = response.data.data[0].attributes['launch-options']['game-url']

      window.open(gameUrl.value, '_blank')
    })
    .catch((error) => {
      return error
    })
}
</script>
