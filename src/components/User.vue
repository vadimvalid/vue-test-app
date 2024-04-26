<template>
  <aside class="col-12 col-md-3">
    <user-name
      image="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
      title="test_user_006"
    />
    <user-balance v-bind="userBalance" />
  </aside>
</template>

<script setup>
import UserName from '@/components/UserName.vue'
import UserBalance from '@/components/UserBalance.vue'
import axios from 'axios'
import { onMounted, ref } from 'vue'

const userBalance = ref({
  available: '',
  bonus: '',
  currency: ''
})

onMounted(() => {
  const token = localStorage.getItem('token')

  if (token) {
    axios
      .get(`v2/users/me/balance?clientId=default&auth=${token}`)
      .then((response) => {
        userBalance.value = response.data.data[0].attributes
        return response
      })
      .catch((error) => {
        return error
      })

    updateBalance()
  }
})

const updateBalance = () => {
  const token = localStorage.getItem('token')

  setInterval(() => {
    axios
      .get(`v2/users/me/balance?clientId=default&auth=${token}`)
      .then((response) => {
        userBalance.value = response.data.data[0].attributes
        return response
      })
      .catch((error) => {
        return error
      })
  }, 30000)
}
</script>
