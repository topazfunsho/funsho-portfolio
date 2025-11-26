import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import Contact from '../views/Contact.vue'
import SearchModal from '../components/SearchModal.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/searchmodal',
    name: 'searchmodal',
    component: SearchModal
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
