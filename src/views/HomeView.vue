<template>
  <layout-div>
    <div class="row justify-content-md-center">
      <div class="col-12">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Game center</a>
            <div class="d-flex">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a @click="logoutAction()" class="nav-link" aria-current="page" href="#"
                    >Logout</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <div class="row pt-5 pb-4">
      <user />
      <main class="col-12 col-md-9"><cards-list /></main>
    </div>
  </layout-div>
</template>

<script setup>
import axios from 'axios'
import LayoutDiv from '@/components/LayoutDiv.vue'
import CardsList from '@/components/CardsList.vue'
import User from '@/components/User.vue'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  if (localStorage.getItem('token') === '' || localStorage.getItem('token') === null) {
    router.push('/login')
  }
})
const logoutAction = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('refresh_token')
  router.push('/login')
}
</script>
