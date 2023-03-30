<template>
  <router-link to="/">Домой</router-link>
  <router-link to="/about">Обо мне</router-link>

  <router-link to="/login" v-if="!user">Войти</router-link>

  <br>
  <br>
  <a href="#" @click="logout" v-if="user">Выход</a>

  <br>
  <br>
  <router-link to="/me" v-if="user">Данные</router-link>

  <router-view></router-view>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

// import axios from "axios";
import {mapGetters} from 'vuex'

export default {
  name: 'App',

  components: {
    // HelloWorld
  },

  methods:{
    logout(){
      localStorage.removeItem('token')
      localStorage.removeItem('refreshToken')
      this.$store.dispatch('user', null)
      window.location.href = '/login'
    }
  },

  computed: {
    ...mapGetters(['user'])
  },

  created() {

    let token = localStorage.getItem('token')
    let refreshToken = localStorage.getItem('refreshToken')

    if (token && refreshToken) {
      this.$store.dispatch('user', {
        token: token,
        refreshToken: refreshToken
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
