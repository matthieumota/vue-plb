import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Ajax from './pages/Ajax.vue'
import Products from './pages/Products.vue'
import Counter from './pages/Counter.vue'
import Hello from './pages/Hello.vue'
import User from './pages/User.vue'
import DefaultLayout from './layouts/Default.vue'
import BlueLayout from './layouts/Blue.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/ajax', component: Ajax },
    { path: '/produits', component: Products },
    { path: '/compteur', component: Counter, meta: { layout: BlueLayout } },
    { path: '/hello/:name', component: Hello },
    { path: '/utilisateur/:id', component: User },
  ],
})

export default router
