import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { defineStore } from 'pinia'
import { GraduationCap, Users, Car } from 'lucide-vue-next'
import type { Student } from '@/interfaces'

export const useStore = defineStore('main', () => {
  const router = useRouter()

  const applicationTitle = 'FSM'
  const applicationVersion = 'v0.0.1'

  const sidebar = {
    isOpen: true,
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
  }

  function sidebarNavigateTo(route: string) {
    router.push({ name: route })
    const found = sidebar.navItems.find((x) => x.route === route)
    sidebar.currentView = found?.title || ''
  }

  const selectedStudent = ref<Student>({
    id: '123abc',
    firstName: 'Herbert',
    lastName: 'Sperbert',
    email: 'herbert@sperbert.de',
    phoneNumber: '0177 123 456 78',
    licenseType: 'manual',
    instructorId: 'David',
    preferredVehicleId: 'Blau',
    numLessons: 17,
    balance: '€ 00,00',
    status: 'active',
    isBf17: false,
    drivingSchoolId: '123',
  })

  function setSelectedStudent(student: Student) {
	// stub
  }

  function navigateTo(route: string) {
    router.push({ name: route })
  }

  return {
    applicationTitle,
    applicationVersion,
    sidebar,
    sidebarNavigateTo,
    navigateTo,
    selectedStudent,
    setSelectedStudent,
  }
})
