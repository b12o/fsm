import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Instructor } from '@/types'

export const useInstructorStore = defineStore('instructor', () => {
  //mock
  const selectedInstructor = ref<Instructor>({
    id: '890xyz',
    firstName: 'Thomas',
    lastName: 'Müller',
    email: 'thomas@mueller.de',
    numStudents: 17,
    birthday: '29.02.1978',
    phoneNumber: '',
    preferredVehicleId: '',
    licensesTaught: '',
  })

  return {
    selectedInstructor,
  }
})
