import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import DescriptionPage from './pages/DescriptionPage.vue';
import PotcastPage from './pages/PotcastPage.vue';

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
    },
    {
        path: '/potcast',
        name: 'PotcastPage',
        component: PotcastPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
  });

export default router;