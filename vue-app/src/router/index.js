import { createWebHashHistory, createRouter } from "vue-router";
import Body from './../components/Body.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Body
    }
]

const router = createRouter({history: createWebHashHistory(), routes})
export default router;