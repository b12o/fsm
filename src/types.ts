export type Student = {
  id: string
  firstName: string
  lastName: string
  birthday: string
  email: string
  phoneNumber: string
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
  birthday: string
  email: string
  phoneNumber: string
  numStudents: number
  preferredVehicleId: string
  licensesTaught: string
}

/*
{
  "Grundstufe": {
    "Besonderheiten beim Einsteigen": true
    "Einstellen": false,
    ...,
    "Schalt-/Wählhebel": true
  },
  "Aufbaustufe": {...},
  ...
  "Situative Bausteine": {...}
}
*/
export type PhaseItem = {
  completionPercentage: number
  [item: string]: boolean | number // union type to account for explicit 'progress' key that isn't a string
}
export type LearningProgress = {
  [phase: string]: PhaseItem
}
