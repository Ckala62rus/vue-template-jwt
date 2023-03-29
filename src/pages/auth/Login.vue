<template>
  <h1>Login page</h1>

  <form @submit.prevent="login">
    <input v-model="form.email" type="text" placeholder="login">
    <input v-model="form.password" type="password" placeholder="password">
    <button>Login</button>
  </form>

</template>

<script>
import axios from "axios";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",

  data(){
    return {
      form: {
        email: 'admin@mail.ru',
        password: "123456",
      },
    }
  },

  methods: {
    login(){
        delete axios.defaults.headers.common['Authentication'];
        axios.post('Auth/Auth', this.form).then(res => {
          if (res.status === 200){
            localStorage.setItem('token', res.data.token)

            axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;

            this.$store.dispatch('user', {
              token: res.data.token,
              refreshToken: res.data.refreshToken
            })
            // window.location.href = '/';
            this.$router.push('/')
          }
      })
    },
  },

}
</script>

<style scoped>

</style>