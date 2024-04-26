<template>
  <layout-div>
    <div class="row justify-content-md-center mt-5">
      <div class="col-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title mb-4">Sign In</h5>
            <form>
              <p v-if="Object.keys(validationErrors).length != 0" class="text-center">
                <small class="text-danger">Incorrect Login or Password</small>
              </p>
              <div class="flex flex-column gap-2 mb-3">
                <label htmlFor="login" class="form-label"> Login </label>
                <input v-model="login" type="text" class="form-control" id="login" name="login" />
              </div>
              <div class="d-flex flex-column gap-2 mb-3">
                <label htmlFor="password" class="form-label">Password </label>
                <input
                  v-model="password"
                  type="password"
                  class="form-control"
                  id="password"
                  name="password"
                />
              </div>
              <div class="d-grid gap-2">
                <button
                  :disabled="isSubmitting"
                  @click="loginAction()"
                  type="button"
                  class="btn btn-primary btn-block"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </layout-div>
</template>

<script>
import axios from 'axios'
import LayoutDiv from '@/components/LayoutDiv.vue'

export default {
  name: 'LoginPage',
  components: {
    LayoutDiv
  },
  data() {
    return {
      login: '',
      password: '',
      validationErrors: {},
      isSubmitting: false
    }
  },
  created() {
    if (localStorage.getItem('token') != '' && localStorage.getItem('token') != null) {
      this.$router.push('/')
    }
  },
  methods: {
    loginAction() {
      this.isSubmitting = true
      let payload = {
        clientId: 'default',
        login: this.login,
        password: this.password
      }
      axios
        .post('v2/login?clientId=default', payload)
        .then((response) => {
          localStorage.setItem('token', response.data.data[0].attributes.token)
          localStorage.setItem('refresh_token', response.data.data[0].attributes['refresh-token'])
          this.$router.push('/')
          return response
        })
        .catch((error) => {
          this.isSubmitting = false
          if (error.response.data.errors != undefined) {
            this.validationErrors = error.response.data.errors
          }
          if (error.response.data.error != undefined) {
            this.validationErrors = error.response.data.error
          }
          return error
        })
    }
  }
}
</script>
