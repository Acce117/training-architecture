import { createRouter, createWebHistory } from "vue-router";
import Login from '../layouts/auth/Login.vue';
import routes from '/src/modules/security/routes/routes.js';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Login
        },
        ...routes
    ]
})

export default router;