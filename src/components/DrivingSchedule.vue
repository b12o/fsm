<script setup lang="ts">
import { ref, type ComponentPublicInstance } from 'vue'
import { ScheduleXCalendar } from '@schedule-x/vue'
import { createEventsServicePlugin } from '@schedule-x/events-service'
import { createDragAndDropPlugin } from '@schedule-x/drag-and-drop'
import { createResizePlugin } from '@schedule-x/resize'
import { createCurrentTimePlugin } from '@schedule-x/current-time'
import {
  createCalendar,
  createViewDay,
  createViewMonthGrid,
  createViewWeek,
} from '@schedule-x/calendar'
import '@schedule-x/theme-default/dist/index.css'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { Clock } from 'lucide-vue-next'
import { useStore } from '@/stores/store'

// Do not use a ref here, as the calendar instance is not reactive, and doing so might cause issues
// For updating events, use the events service plugin
// taken from https://schedule-x.dev/docs/frameworks/vue

const store = useStore()

const calendarApp = createCalendar({
  isDark: true,
  locale: 'de-DE',
  showWeekNumbers: true,
  dayBoundaries: {
    start: '06:00',
    end: '23:00',
  },
  views: [createViewDay(), createViewWeek(), createViewMonthGrid()],
  plugins: [
    createDragAndDropPlugin(),
    createResizePlugin(),
    createCurrentTimePlugin(),
    createEventsServicePlugin(),
  ],
  weekOptions: {
    nDays: 6,
    gridHeight: 1000,
  },
  events: store.lessons,
  callbacks: {
    onClickDateTime(dateTime) {
      addNewEvent(dateTime)
    },
    onEventClick(calendarEvent) {
      console.log(calendarEvent)
      editEvent()
    },
  },
})

const eventId = ref('')
const eventTitle = ref('Neue Fahrstunde für ' + store.selectedStudent['firstName'])
const eventDate = ref('')
const eventStartTime = ref('')
const eventEndTime = ref('')
const duration = '80' // TODO: make computed, based on number of lessons (one lesson takes 40 minutes)

function addNewEvent(dateTime: string) {
  console.log(dateTime)
  eventDate.value = dateTime.split(' ')[0]
  eventStartTime.value = findClosest10(dateTime.split(' ')[1])
  eventEndTime.value = calculateEndTime(eventStartTime.value, duration)
  openDialog()
}

// e.g. 10:38 -> return 10:40
// e.g. 10:32 -> return 10:30
function findClosest10(time: string): string {
  const hour = time.split(':')[0]
  const minute = Number(time.split(':')[1])
  let delta = Infinity
  let current = Infinity

  const tens = [0, 10, 20, 30, 40, 50]
  tens.forEach((item) => {
    const newDelta = Math.abs(item - minute)
    if (newDelta < delta) {
      current = item
      delta = newDelta
    }
  })
  return `${hour}:${current.toString().padStart(2, '0')}`
}

// addDuration

function editEvent() {
  openDialog()
}

const dialogTrigger = ref<ComponentPublicInstance | null>(null)
function openDialog() {
  // store.lessons?.push({
  // id: 5,
  // title: 'Louis Armstrong',
  // start: '2025-06-20 10:40',
  // end: '2025-06-20 13:00',
  // _options: {
  // additionalClasses: [],
  // },
  // })
  dialogTrigger.value?.$el.click()
}
</script>

<template>
  <ScheduleXCalendar :calendar-app="calendarApp" />
  <Dialog>
    <DialogTrigger ref="dialogTrigger" class="hidden"></DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{{ eventTitle }}</DialogTitle>
        <DialogDescription>
          <Clock :size="15" class="inline" /> {{ eventStartTime }} - 13:20
        </DialogDescription>
      </DialogHeader>
      Some more stuff here...
    </DialogContent>
  </Dialog>
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
