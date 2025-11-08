<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ScheduleXCalendar } from '@schedule-x/vue'
import { createEventsServicePlugin } from '@schedule-x/events-service'
import { createDragAndDropPlugin } from '@schedule-x/drag-and-drop'
import { createCurrentTimePlugin } from '@schedule-x/current-time'
import { createCalendar, createViewWeek } from '@schedule-x/calendar'
import { useInstructorStore } from '@/stores/instructorStore'

import '@schedule-x/theme-default/dist/index.css'

const instructorStore = useInstructorStore()
const eventsServicePlugin = createEventsServicePlugin()
const calendarApp = createCalendar({
  isDark: true,
  locale: 'de-DE',
  showWeekNumbers: true,
  dayBoundaries: {
    start: '06:00',
    end: '23:00',
  },
  views: [createViewWeek()],
  plugins: [createDragAndDropPlugin(), createCurrentTimePlugin(), eventsServicePlugin],
  weekOptions: {
    nDays: 6,
    gridHeight: 1000,
    eventWidth: 95,
  },
  events: instructorStore.events,
  callbacks: {
    onDoubleClickDateTime() {
      console.log('stub')
    },
    onDoubleClickEvent() {
      console.log('stub')
    },
  },
})

const scheduleInvisible = ref<boolean>(true)
onMounted(async () => {
  await new Promise(() =>
    setTimeout(() => {
      scheduleInvisible.value = false
    }, 100),
  )
})
</script>

<template>
  <ScheduleXCalendar :class="{ hidden: scheduleInvisible }" :calendar-app="calendarApp" />
</template>

<style scoped>
.sx-vue-calendar-wrapper {
  width: 100%;
  height: calc(100vh - 18rem);
  animation: none;
}
.sx__current-time-indicator {
  height: 1px;
  border: 1px solid var(--color-neutral-400);
}
.sx__current-time-indicator::before {
  background-color: var(--color-neutral-400);
}
.sx__calendar {
  border: 1px solid var(--color-neutral-800);
  margin-bottom: 0;
  border-radius: 0;
}
.hidden {
  visibility: hidden;
}
</style>
