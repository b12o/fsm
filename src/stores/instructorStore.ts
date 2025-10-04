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
    numStudents: 12,
    birthday: '29.02.1978',
    phoneNumber: '+4912345678901',
    preferredVehicleId: 'Blau',
    licensesTaught: 'B, BE, B96',
  })

  return {
    selectedInstructor,
  }
})
