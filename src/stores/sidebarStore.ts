import { useRouter } from 'vue-router'
import { defineStore } from 'pinia'
import {
  LayoutGrid,
  GraduationCap,
  Users,
  Car,
  IdCard,
  File,
  ChartLine,
  Building,
  Settings,
} from 'lucide-vue-next'
import type { FunctionalComponent } from 'vue'

type SidebarFooter = {
  initials: string
  username: string
  email: string
}

type RouteObject = {
  title: string
  route: string
  icon: FunctionalComponent
}

type SidebarNavItem = {
  name: string
  items: RouteObject[]
}

type Sidebar = {
  isOpen: boolean
  currentView: string
  navGroups: SidebarNavItem[]
  footer: SidebarFooter
}

export const useSidebarStore = defineStore('sidebar', () => {
  const router = useRouter()

  const applicationTitle = 'Zaffy'
  const applicationVersion = 'alpha - v0.01'

  const sidebar: Sidebar = {
    isOpen: false,
    currentView: '',
    navGroups: [
      {
        name: 'group1',
        items: [
          {
            title: 'Übersicht',
            route: 'students',
            icon: LayoutGrid,
          },
        ],
      },
      {
        name: 'group2',
        items: [
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
          {
            title: 'Prüfungen',
            route: 'exams',
            icon: IdCard,
          },
        ],
      },
      {
        name: 'group3',
        items: [
          {
            title: 'Dokumente',
            route: 'documents',
            icon: File,
          },
          {
            title: 'Statistiken',
            route: 'statistics',
            icon: ChartLine,
          },
          {
            title: 'Betrieb',
            route: 'company',
            icon: Building,
          },
        ],
      },
      {
        name: 'group4',
        items: [
          {
            title: 'Einstellungen',
            route: 'settings',
            icon: Settings,
          },
        ],
      },
    ],
    footer: {
      username: 'max',
      email: 'max@mustermann.de',
      initials: 'MM',
    },
  }

  function sidebarNavigateTo(item: RouteObject) {
    router.push({ name: item.route })
  }

  return {
    applicationTitle,
    applicationVersion,
    sidebar,
    sidebarNavigateTo,
  }
})
