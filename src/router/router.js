import Main from "@/components/pages/Main";
import {createRouter, createWebHistory} from "vue-router";
import UserPage from "@/components/pages/UserPage";
import About from "@/components/pages/About";


const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/users',
        component: UserPage
    },
    {
        path: '/about',
        component: About
    }
];


const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});


export default router;
