<script setup lang="ts">
import { ScheduleXCalendar } from '@schedule-x/vue'
import {
  createCalendar,
  createViewDay,
  createViewMonthGrid,
  createViewWeek,
} from '@schedule-x/calendar'
import '@schedule-x/theme-default/dist/index.css'

// Do not use a ref here, as the calendar instance is not reactive, and doing so might cause issues
// For updating events, use the events service plugin
const calendarApp = createCalendar({
  locale: 'de-DE',
  dayBoundaries: {
    start: '06:00',
    end: '23:00',
  },
  isDark: true,
  selectedDate: '2025-06-06',
  views: [createViewDay(), createViewWeek(), createViewMonthGrid()],
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
  ],
})
</script>

<template>
  <div class="h-full flex">
    <ScheduleXCalendar :calendar-app="calendarApp" />
  </div>
</template>

<style>
.sx-vue-calendar-wrapper {
  width: 100%;
  height: calc(100vh - 20.5rem);
}
</style>
