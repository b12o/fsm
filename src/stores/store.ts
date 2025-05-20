import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { defineStore } from 'pinia'

import { GraduationCap, Users, Car } from 'lucide-vue-next'

export const useStore = defineStore('main', () => {
  const router = useRouter()

  const applicationTitle = 'FSM'
  const applicationVersion = 'v0.0.1'

  const sidebar = {
    overviewLabel: 'Übersicht',
    navItems: [
      {
        title: 'Fahrschüler',
        route: 'students',
        icon: GraduationCap,
      },
      {
        title: 'Fahrlehrer',
        route: 'instructors',
        icon: Users,
      },
      {
        title: 'Fahrzeuge',
        route: 'vehicles',
        icon: Car,
      },
    ],
    footerInfo: {
      username: 'max',
      email: 'max@mustermann.de',
      initials: 'MM',
      actions: {
        signOut: {
          label: 'abmelden',
        },
      },
    },
  }
  function navigateTo(route: string) {
    router.push(route)
  }

  const count = ref(0)

  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return {
    applicationTitle,
    applicationVersion,
    sidebar,
    navigateTo,
    count,
    doubleCount,
    increment,
  }
})
