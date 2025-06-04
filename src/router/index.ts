import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import StudentsOverview from '@/views/StudentsOverview.vue'
import StudentView from '@/views/StudentView.vue'
import InstructorsOverview from '@/views/InstructorsOverview.vue'
import VehiclesOverview from '@/views/VehiclesOverview.vue'

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
      component: StudentsOverview,
    },
    {
      path: '/student/:studentId',
      name: 'student',
      component: StudentView,
      props: true,
    },
    {
      path: '/instructors',
      name: 'instructors',
      component: InstructorsOverview,
    },
    {
      path: '/vehicles',
      name: 'vehicles',
      component: VehiclesOverview,
    },
    {
      path: '/:notFound(.*)',
      redirect: '/',
    },
  ],
})

export default router
