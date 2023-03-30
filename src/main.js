import { createApp } from 'vue'
import App from './App.vue'

import router from "@/router";

import axios from 'axios'
import VueAxios from 'vue-axios'

// import Vuex from 'vuex'
import store from "@/vuex";

axios.defaults.baseURL = process.env.VUE_APP_BASE_API_URL;
axios.defaults.withCredentials = true

let token = localStorage.getItem('token')
if(token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
}

axios.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response.status === 401) {
        //place your reentry code
        localStorage.removeItem('token')
        localStorage.removeItem('refreshToken')
        store.dispatch('user', null)
        // axios.defaults.headers.common["Authorization"] = ``;
        delete axios.defaults.headers.common["Authorization"];
        // window.location.href = '/login'
        router.push('/login')
    }
    return error;
});

createApp(App)
    .use(router)
    .use(VueAxios, axios)
    // .use(Vuex)
    .use(store)
    .mount('#app')
