import { ref, shallowRef } from 'vue'
import { defineStore } from 'pinia'
import type { CalendarEventExternal } from '@schedule-x/calendar'
import type { Student } from '@/interfaces'

export const useStudentStore = defineStore('student', () => {
  //mock
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

  const selectedStudentFullName: string =
    selectedStudent.value.firstName + ' ' + selectedStudent.value.lastName

  const studentLessons = shallowRef<CalendarEventExternal[] | undefined>([])

  // make an API call and populate selectedStudent object
  function setSelectedStudent(student: Student) {
    console.log(student.id)
    // stub
  }

  return {
    selectedStudent,
    selectedStudentFullName,
    setSelectedStudent,
    studentLessons,
  }
})
