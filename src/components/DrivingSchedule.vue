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

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
} from '@/components/ui/number-field'

import { Clock } from 'lucide-vue-next'
import { useStudentStore } from '@/stores/studentStore'

const store = useStudentStore()

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
  plugins: [
    createDragAndDropPlugin(),
    createResizePlugin(),
    createCurrentTimePlugin(),
    eventsServicePlugin,
  ],
  weekOptions: {
    nDays: 6,
    gridHeight: 1000,
  },
  events: store.studentLessons,
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
const eventTitle = ref('')
const eventDate = ref('')
const eventStartTime = ref('')
const eventEndTime = ref('')
const duration = '80' // TODO: make computed, based on number of lessons (one lesson takes 40 minutes)

function addNewEvent(dateTime: string) {
  console.log(dateTime)
  eventDate.value = dateTime.split(' ')[0]
  eventStartTime.value = findClosestHalfHour(dateTime.split(' ')[1])
  console.log(eventStartTime.value)
  eventEndTime.value = addDuration(eventStartTime.value, duration)
  openDialog()
  return
  eventsServicePlugin.add({
    title: 'Event 1',
    start: `${eventDate.value} ${eventStartTime.value}`,
    end: `${eventDate.value} ${eventEndTime.value}`,
    id: eventId.value,
  })
  // openDialog()
}

// e.g. 10:38 -> return 10:40
// e.g. 10:32 -> return 10:30
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

// addDuration
function addDuration(timeStr: string, durationMinutes: string | number): string {
  const [hours, minutes] = timeStr.split(':').map(Number)
  let totalMinutes = hours * 60 + minutes + Number(durationMinutes)
  totalMinutes %= 24 * 60

  const newHours = Math.floor(totalMinutes / 60)
  const newMinutes = totalMinutes % 60

  return `${String(newHours).padStart(2, '0')}:${String(newMinutes).padStart(2, '0')}`
}

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
function testFunc() {
  console.log('test')
}
</script>

<template>
  <ScheduleXCalendar :calendar-app="calendarApp" />
  <Dialog>
    <DialogTrigger ref="dialogTrigger" class="hidden"></DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Fahrstunde Hinzufügen</DialogTitle>
        <DialogDescription class="hidden"></DialogDescription>
      </DialogHeader>
      <div class="flex mt-4 gap-2">
        <div class="flex-1">
          <Label for="new_event_student" class="mb-2">Fahrschüler</Label>
          <div id="new_event_student" class="border border-neutral-800 h-9 rounded-lg">
            <p class="flex items-center h-full px-2">{{ store.selectedStudentFullName }}</p>
          </div>
        </div>
        <div>
          <Label for="new_event_lesson_type" class="mb-2">Typ</Label>
          <Select id="new_event_lesson_type" defaultValue="übung">
            <SelectTrigger>
              <SelectValue placeholder="Fahrttyp" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="übung">Übung</SelectItem>
              <SelectItem value="überland">Überland</SelectItem>
              <SelectItem value="beleuchtung">Beleuchtung</SelectItem>
              <SelectItem value="autobahn">Autobahn</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div class="mt-4 flex gap-2">
        <div class="flex-1">
          <Label for="new_event_start_time" class="mb-2">Beginn</Label>
          <Select id="new_event_lesson_type" default-value="9:30" v-model="eventStartTime">
            <SelectTrigger class="w-full">
              <SelectValue placeholder="Startzeit" />
            </SelectTrigger>
            <SelectContent class="min-w-12 w-24 h-64">
              <SelectGroup>
                <SelectItem value="07:00">07:00</SelectItem>
                <SelectItem value="07:30">07:30</SelectItem>
                <SelectItem value="08:00">08:00</SelectItem>
                <SelectItem value="08:30">08:30</SelectItem>
                <SelectItem value="09:00">09:00</SelectItem>
                <SelectItem value="09:30">09:30</SelectItem>
                <SelectItem value="10:00">10:00</SelectItem>
                <SelectItem value="10:30">10:30</SelectItem>
                <SelectItem value="11:00">11:00</SelectItem>
                <SelectItem value="11:30">11:30</SelectItem>
                <SelectItem value="12:00">12:00</SelectItem>
                <SelectItem value="12:30">12:30</SelectItem>
                <SelectItem value="13:00">13:00</SelectItem>
                <SelectItem value="13:30">13:30</SelectItem>
                <SelectItem value="14:00">14:00</SelectItem>
                <SelectItem value="14:30">14:30</SelectItem>
                <SelectItem value="15:00">15:00</SelectItem>
                <SelectItem value="15:30">15:30</SelectItem>
                <SelectItem value="16:00">16:00</SelectItem>
                <SelectItem value="16:30">16:30</SelectItem>
                <SelectItem value="17:00">17:00</SelectItem>
                <SelectItem value="17:30">17:30</SelectItem>
                <SelectItem value="18:00">18:00</SelectItem>
                <SelectItem value="18:30">18:30</SelectItem>
                <SelectItem value="19:00">19:00</SelectItem>
                <SelectItem value="19:30">19:30</SelectItem>
                <SelectItem value="20:00">20:00</SelectItem>
                <SelectItem value="20:30">20:30</SelectItem>
                <SelectItem value="21:00">21:00</SelectItem>
                <SelectItem value="21:30">21:30</SelectItem>
                <SelectItem value="22:00">22:00</SelectItem>
                <SelectItem value="22:30">22:30</SelectItem>
                <SelectItem value="23:00">23:00</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div class="flex-1">
          <Label for="new_event_num_lessons" class="mb-2">Fahrstunden</Label>
          <NumberField
            id="new_event_num_lessons"
            :default-value="2"
            :min="1"
            :max="10"
            class="w-full"
          >
            <NumberFieldContent>
              <NumberFieldDecrement />
              <NumberFieldInput />
              <NumberFieldIncrement />
            </NumberFieldContent>
          </NumberField>
        </div>
        <div class="flex-1">
          <Label for="new_event_end_time" class="mb-2">Ende</Label>
          <div id="new_event_end_time" class="border border-neutral-800 h-9 rounded-lg">
            <p class="flex items-center h-full px-2 text-sm">{{ eventEndTime }}</p>
          </div>
        </div>
      </div>
      <div class="mt-4 flex gap-2">
        <div class="flex-1">
          <Label for="new_event_instructor" class="mb-2">Fahrlehrer</Label>
          <Select id="new_event_instructor" default-value="breana">
            <SelectTrigger class="w-full">
              <SelectValue placeholder="Fahrlehrer" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="brandon">Brandon</SelectItem>
              <SelectItem value="kennedy">Kennedy</SelectItem>
              <SelectItem value="jimmy">Jimmy</SelectItem>
              <SelectItem value="breana">Breana</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div class="flex-1">
          <Label for="new_event_vehicle" class="mb-2">Fahrzeug</Label>
          <Select id="new_event_vehicle" default-value="toto">
            <SelectTrigger class="w-full">
              <SelectValue placeholder="Fahrzeug" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="toto">Toto</SelectItem>
              <SelectItem value="audi">Audi</SelectItem>
              <SelectItem value="blaue-rakete">Blaue Rakete</SelectItem>
              <SelectItem value="zafaerys">Zafaerys</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div class="mt-4">
        <Textarea placeholder="Notizen" class="mb-1" />
      </div>
      <Separator />
      <div class="flex gap-2 justify-end mt-2">
        <Button class="flex-1">Speichern</Button>
        <Button class="flex-1" variant="secondary">Abbrechen</Button>
      </div>
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
