import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Importar o Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

createApp(App).use(store).use(router).mount('#app')
