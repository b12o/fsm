import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StudentsView from '@/views/StudentsView.vue'
import Instructorsview from '@/views/InstructorsView.vue'
import VehiclesView from '@/views/VehiclesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/students',
      name: 'students',
      component: StudentsView,
    },
    {
      path: '/instructors',
      name: 'instructors',
      component: Instructorsview,
    },
    {
      path: '/vehicles',
      name: 'vehicles',
      component: VehiclesView,
    },
    {
      path: '/:notFound(.*)',
      redirect: '/',
    },
  ],
})

export default router
