import { createRouter, createWebHistory } from "vue-router"

import HelloWorld from "@/components/HelloWorld.vue";

const Login = () => import("@/pages/auth/LoginMetronic.vue")
const GetMe = () => import("@/pages/auth/GetMe")
const About = () => import("@/pages/About")
const MemberIndex = () => import("@/pages/members/MemberIndex")

const routeInfos = [
    {
        path : "/",
        component : HelloWorld
    },
    {
        path : "/about",
        component : About
    },
    {
        path : "/login",
        component : Login
    },
    {
        path : "/me",
        component : GetMe
    },
    {
        path : "/member",
        component : MemberIndex
    },
]

const router = createRouter({
    history : createWebHistory(),
    routes : routeInfos,
})

// eslint-disable-next-line no-unused-vars
router.beforeEach((to, from) => {

    let token = localStorage.getItem('token')

    if (to.path === "/" || to.path === "/about") {
        return true;
    }

    if (!token && to.path === "/login") {
        return true;
    }

    if (token && to.path === "/login") {
        localStorage.removeItem('token')
        localStorage.removeItem('refreshToken')
        return false;
    }

    // Делаем запрос при переходи на защещенный маршрут
    // что бы поймать 401 ошибку или пройти дальше
    //todo сделать метод для получения модели зарегистрированного пользователя
    //axios.get('/Members/paginate/' + 1)
})

export default router;