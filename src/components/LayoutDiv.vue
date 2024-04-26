<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script setup>
import axios from 'axios'
import { onMounted, nextTick } from 'vue'

onMounted(() => {
  if (localStorage.getItem('token')) {
    nextTick(() => {
      window.setInterval(() => {
        let payload = {
          clientId: 'default',
          refreshToken: localStorage.getItem('refresh_token')
        }

        axios
          .post('auth/token?clientId=default', payload)
          .then((response) => {
            localStorage.setItem('token', response.data.data[0].attributes.token)
            localStorage.setItem('refresh_token', response.data.data[0].attributes['refresh-token'])
            return response
          })
          .catch((error) => {
            return error
          })
      }, 800000)
    })
  }
})
</script>
