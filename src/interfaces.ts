import mockStudents from '@/stores/mockStudents'
import mockInstructors from '@/stores/mockInstructors'

interface Student {
  id: string
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  drivingSchoolId: string
  status: string
  licenseType: string
  isBf17: boolean
  instructorId: string
  numLessons: number
  balance: number
  preferredVehicleId: string
}

interface Instructor {
  id: string
  firstName: string
  lastName: string
  email: string
}

export const students: Student[] = mockStudents
export const instructors: Instructor[] = mockInstructors
