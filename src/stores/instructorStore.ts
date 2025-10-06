import { ref, shallowRef } from 'vue'
import { defineStore } from 'pinia'
import type { Instructor } from '@/types'
import type { CalendarEventExternal } from '@schedule-x/calendar'

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

  const events = shallowRef<CalendarEventExternal[] | undefined>([])

  return {
    selectedInstructor,
    events,
  }
})
