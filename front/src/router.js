import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import DescriptionPage from './pages/DescriptionPage.vue';

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/about',
        name: 'DescriptionPage',
        component: DescriptionPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
  });

export default router;