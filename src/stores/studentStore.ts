import { ref, shallowRef, computed } from 'vue'
import { defineStore } from 'pinia'
import type { CalendarEventExternal } from '@schedule-x/calendar'
import type { Student } from '@/interfaces'

export const useStudentStore = defineStore('student', () => {
  const LESSON_HOUR = 40

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

  const eventTitle = ref('')
  const eventDate = ref('')
  const eventStartTime = ref('')
  const eventNumHours = ref(2)
  const eventDuration = computed(() => LESSON_HOUR * eventNumHours.value)
  const eventEndTime = computed(() => addDuration(eventStartTime.value, eventDuration.value))
  const eventType = ref('übung')
  const eventTypeShort = computed(() => {
    if (eventType.value === 'überland') return '[ÜL]'
    if (eventType.value === 'beleuchtung') return '[BEL]'
    if (eventType.value === 'autobahn') return '[AB]'
    if (eventType.value === 'prüfung') return '[PRÜFUNG]'
    return ''
  })

  // LessonDialog watches this value and opens the dialog if set to true
  const notifyOpenDialog = ref(false)
  const notifyCloseDialog = ref(false)

  // DrivingSchedule watches this value and saves a lesson if set to true
  const notifySaveLesson = ref(false)

  const selectedStudentFullName: string =
    selectedStudent.value.firstName + ' ' + selectedStudent.value.lastName

  const studentLessons = shallowRef<CalendarEventExternal[] | undefined>([])

  // make an API call and populate selectedStudent object
  function setSelectedStudent(student: Student) {
    console.log(student.id)
    // stub
  }
  // TODO: move to utils
  function generateId(length: number = 10): string {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let result = ''
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return result
  }

  function addDuration(timeStr: string, durationMinutes: string | number): string {
    const [hours, minutes] = timeStr.split(':').map(Number)
    let totalMinutes = hours * 60 + minutes + Number(durationMinutes)
    totalMinutes %= 24 * 60

    const newHours = Math.floor(totalMinutes / 60)
    const newMinutes = totalMinutes % 60

    return `${String(newHours).padStart(2, '0')}:${String(newMinutes).padStart(2, '0')}`
  }

  return {
    selectedStudent,
    selectedStudentFullName,
    setSelectedStudent,
    studentLessons,
    eventTitle,
    eventDate,
    eventStartTime,
    eventNumHours,
    eventDuration,
    eventEndTime,
    eventType,
    eventTypeShort,
    generateId,
    notifyOpenDialog,
    notifyCloseDialog,
    notifySaveLesson,
  }
})
