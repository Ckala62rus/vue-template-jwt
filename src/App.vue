<template>
  <login-metronic v-if="!user" />
  <main-template v-if="user"/>

  <notifications />
</template>

<script>
import {mapGetters} from 'vuex'
import LoginMetronic from "@/pages/auth/LoginMetronic";
import MainTemplate from "@/pages/MainTemplate";

export default {
  name: 'App',

  components: {
    MainTemplate,
    LoginMetronic
    // HelloWorld
  },

  methods:{
    logout(){
      localStorage.removeItem('token')
      localStorage.removeItem('refreshToken')
      this.$store.dispatch('user', null)
      window.location.href = '/'
      // this.$router.push('/login')
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
  },
}
</script>

<style>

</style>
