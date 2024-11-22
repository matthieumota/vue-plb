import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Ajax from './pages/Ajax.vue'
import Products from './pages/Products.vue'
import Counter from './pages/Counter.vue'
import Hello from './pages/Hello.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/ajax', component: Ajax },
    { path: '/produits', component: Products },
    { path: '/compteur', component: Counter },
    { path: '/hello/:name', component: Hello },
  ],
})

export default router
