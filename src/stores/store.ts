import { ref, computed, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { defineStore } from 'pinia'

import { GraduationCap, Users, Car } from 'lucide-vue-next'

export const useStore = defineStore('main', () => {
  const router = useRouter()

  const applicationTitle = 'FSM'
  const applicationVersion = 'v0.0.1'

  const sidebar = reactive({
    overviewLabel: 'Übersicht',
    currentView: '',
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
  })

  function sidebarNavigateTo(route: string) {
    router.push({ name: route })
    const found = sidebar.navItems.find((x) => x.route === route)
    sidebar.currentView = found?.title || ''
  }

  function navigateTo(route: string) {
    router.push({ name: route })
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
    sidebarNavigateTo,
    navigateTo,
    count,
    doubleCount,
    increment,
  }
})
