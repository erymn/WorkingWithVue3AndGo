import { createWebHashHistory, createRouter } from "vue-router";
import Body from './../components/Body.vue';
import Login from './../components/Login.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Body
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
]

const router = createRouter({history: createWebHashHistory(), routes})
export default router;