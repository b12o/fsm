export interface Student {
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

export interface Instructor {
  id: string
  firstName: string
  lastName: string
  email: string
}

export interface ObjectWithId {
  id: string
}
