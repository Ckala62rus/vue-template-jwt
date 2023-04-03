import { createApp } from 'vue'
import App from './App.vue'

import router from "@/router";

import axios from 'axios'
import VueAxios from 'vue-axios'

import store from "@/vuex";

import Notifications from '@kyvg/vue3-notification'

import {ServerTable, ClientTable} from 'v-tables-3';

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
        delete axios.defaults.headers.common["Authorization"];
        router.push('/login')
    }
    return error;
});

createApp(App)
    .use(router)
    .use(VueAxios, axios)
    .use(Notifications)
    .use(ServerTable)
    .use(ClientTable)
    .use(store)
    .mount('#app')
