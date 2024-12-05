import { createApp } from 'vue'
import router from './router.js';
import HomePage from './App.vue'

createApp(HomePage).use(router).mount('#app');
