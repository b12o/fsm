export type Student = {
  id: string
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  birthday: string
  drivingSchoolId: string
  status: string
  licenseType: string
  isBf17: boolean
  instructorId: string
  numLessons: number
  balance: string
  preferredVehicleId: string
}

export type Instructor = {
  id: string
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  birthday: string
  numStudents: number
  preferredVehicleId: string
  licensesTaught: string
}
