<script setup lang="ts">
import { ref, type ComponentPublicInstance } from 'vue'
import { ScheduleXCalendar } from '@schedule-x/vue'
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

// Do not use a ref here, as the calendar instance is not reactive, and doing so might cause issues
// For updating events, use the events service plugin
// taken from https://schedule-x.dev/docs/frameworks/vue

const calendarApp = createCalendar({
  isDark: true,
  locale: 'de-DE',
  dayBoundaries: {
    start: '06:00',
    end: '23:00',
  },
  views: [createViewDay(), createViewWeek(), createViewMonthGrid()],
  plugins: [createDragAndDropPlugin(), createResizePlugin(), createCurrentTimePlugin()],
  weekOptions: {
    nDays: 6,
    gridHeight: 1000,
  },
  events: [
    {
      id: 1,
      title: 'Event 1',
      start: '2025-06-06',
      end: '2025-06-06',
    },
    {
      id: 2,
      title: 'Matea Miskovic',
      start: '2025-06-06 12:00',
      end: '2025-06-06 13:20',
    },
    {
      id: 3,
      title: 'Boris Becker',
      start: '2025-06-06 13:40',
      end: '2025-06-06 15:00',
    },
    {
      id: 4,
      title: 'Boris Becker',
      start: '2025-06-07 13:40',
      end: '2025-06-07 15:00',
    },
  ],
  callbacks: {
    onClickDateTime(dateTime) {
      console.log('onClickDateTime', dateTime) // e.g. 2024-01-01 12:37
    },
    onEventClick(calendarEvent) {
      console.log('onEventClick', calendarEvent)
      openDialog()
    },
  },
})

const dialogTrigger = ref<ComponentPublicInstance | null>(null)

function openDialog() {
  dialogTrigger.value?.$el.click()
}
</script>

<template>
  <ScheduleXCalendar :calendar-app="calendarApp" />
  <Dialog>
    <DialogTrigger ref="dialogTrigger" class="hidden"></DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Matea Miskovic</DialogTitle>
        <DialogDescription> <Clock :size="15" class="inline" /> 12:00 - 13:20 </DialogDescription>
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
