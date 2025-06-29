<script setup lang="ts">
import { watch } from 'vue'
import { toast } from 'vue-sonner'
import { ScheduleXCalendar } from '@schedule-x/vue'
import { createEventsServicePlugin } from '@schedule-x/events-service'
import { createDragAndDropPlugin } from '@schedule-x/drag-and-drop'
import { createCurrentTimePlugin } from '@schedule-x/current-time'
import {
  createCalendar,
  createViewDay,
  createViewMonthGrid,
  createViewWeek,
  type CalendarEvent,
} from '@schedule-x/calendar'
import '@schedule-x/theme-default/dist/index.css'

import LessonDialog from '@/components/LessonDialog.vue'

import { useStudentStore } from '@/stores/studentStore'
import { generateId } from '@/lib/utils'

const studentStore = useStudentStore()

// Do not use a ref here, as the calendar instance is not reactive, and doing so might cause issues
// For updating events, use the events service plugin
// taken from https://schedule-x.dev/docs/frameworks/vue
const eventsServicePlugin = createEventsServicePlugin()
const calendarApp = createCalendar({
  isDark: true,
  locale: 'de-DE',
  showWeekNumbers: true,
  dayBoundaries: {
    start: '06:00',
    end: '23:00',
  },
  views: [createViewDay(), createViewWeek(), createViewMonthGrid()],
  plugins: [createDragAndDropPlugin(), createCurrentTimePlugin(), eventsServicePlugin],
  weekOptions: {
    nDays: 6,
    gridHeight: 1000,
    eventWidth: 95,
  },
  events: studentStore.studentLessons,
  callbacks: {
    onDoubleClickDateTime(dateTime) {
      createNewLesson(dateTime)
    },
    onDoubleClickEvent(lessonEvent) {
      editLesson(lessonEvent)
    },
  },
})

function findClosestHalfHour(timeStr: string): string {
  const [hours, minutes] = timeStr.split(':').map(Number)
  let delta = Infinity
  let current = Infinity

  const tens = [0, 30, 60]
  tens.forEach((item) => {
    const newDelta = Math.abs(item - minutes)
    if (newDelta < delta) {
      current = item
      delta = newDelta
    }
  })
  let hour = hours
  if (current == 60) {
    // jump to next hour
    hour = hours + 1
    current = 0
  }
  return `${hour.toString().padStart(2, '0')}:${current.toString().padStart(2, '0')}`
}

function createNewLesson(dateTime: string) {
  ;[studentStore.eventDate, studentStore.eventStartTime] = dateTime.split(' ')
  studentStore.eventTitle = `Fahrstunde hinzufügen am ${studentStore.eventDate.split('-').reverse().join('.')}`
  studentStore.eventStartTime = findClosestHalfHour(studentStore.eventStartTime)
  // reset defaults
  studentStore.eventNumHours = 2
  studentStore.eventType = 'übung'

  studentStore.notifyOpenDialog = true
}

function editLesson(lessonEvent: CalendarEvent) {
  console.log(lessonEvent)
}

watch(
  () => studentStore.notifySaveLesson,
  (val) => {
    if (!val) return
    saveLesson()
    studentStore.notifySaveLesson = false
  },
)

function saveLesson() {
  const newLesson = {
    id: generateId(),
    title: `${studentStore.eventTypeShort} ${studentStore.selectedStudentFullName}`,
    start: `${studentStore.eventDate} ${studentStore.eventStartTime}`,
    end: `${studentStore.eventDate} ${studentStore.eventEndTime}`,
  }
  eventsServicePlugin.add(newLesson)
  studentStore.studentLessons?.push(newLesson)

  studentStore.notifyCloseDialog = true
  toast('Fahrstunde wurde erstellt!')
  // TODO save to DB
  studentStore.notifyCloseDialog = true
}
</script>

<template>
  <ScheduleXCalendar :calendar-app="calendarApp" />
  <LessonDialog />
</template>

<style>
.sx-vue-calendar-wrapper {
  width: 100%;
  height: calc(100vh - 19.5rem);
}
.sx__current-time-indicator {
  height: 1px;
  border: 1px solid var(--color-neutral-400);
}
.sx__current-time-indicator::before {
  background-color: var(--color-neutral-400);
}
.sx__calendar {
  border: 1px solid var(--color-neutral-700);
}
</style>
