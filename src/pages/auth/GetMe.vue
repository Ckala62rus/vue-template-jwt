<template>
  <div>
    <h1>Данные</h1>
    <p>{{user}}</p>

    <h1>Данные с сервера</h1>
    <p v-for="item in data" :key="item.name">{{item.name}} ===> {{item.youTubeUserId}}</p>
  </div>
</template>

<script>
import axios from "axios";
import {mapGetters} from 'vuex'

export default {
  name: "GetMe",

  data(){
    return{
      data: {},
      page: 1,
    }
  },

  methods: {
    getData(){
      axios.get('Members/paginate/' + this.page, {
      }).then(res => {
        // console.log(res)
        if (res.status === 200){
          // console.log(res.data.data)
          this.data = res.data.data
        }
      })
    },
  },

  computed: {
    ...mapGetters(['user'])
  },

  mounted() {
    this.getData();
  }
}
</script>

<style scoped>

</style>