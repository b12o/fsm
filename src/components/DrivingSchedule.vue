<script setup lang="ts">
import { ScheduleXCalendar } from '@schedule-x/vue'
import { createDragAndDropPlugin } from '@schedule-x/drag-and-drop'
import { createResizePlugin } from '@schedule-x/resize'
import { createEventModalPlugin } from '@schedule-x/event-modal'
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

import { Button } from '@/components/ui/button'

const eventModal = createEventModalPlugin()

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
  plugins: [createDragAndDropPlugin(), createResizePlugin(), createCurrentTimePlugin(), eventModal],
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
    },
  },
})
</script>

<template>
  <!--
	// the initial idea was for clicking the event to open an "edit event" dialog
	// but in the background the event modal is opened by default anyway, which makes the experience a bit clunky.
	// the better option is to use the built-in modal, but add an "edit event" button, which opens the dialog.
	-->
  <ScheduleXCalendar :calendar-app="calendarApp">
    <template #eventModal="{ calendarEvent }">
      <div class="p-4 rounded-xl border border-[#666] bg-[#141218]">
        <div>
          {{ calendarEvent.title }}
        </div>

        <Dialog>
          <DialogTrigger>
            <Button variant="outline" class="test">Bearbeiten</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Test title</DialogTitle>
              <DialogDescription>Test description</DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </template>
  </ScheduleXCalendar>
</template>

<style>
.test {
  border: 1px solid white !important;
}
.sx-vue-calendar-wrapper {
  width: 100%;
  height: calc(100vh - 20.5rem);
}
.sx__event-modal {
  background-color: transparent !important;
}
</style>
