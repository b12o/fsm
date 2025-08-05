<script setup lang="ts">
import type { Student } from '@/interfaces'
import { useStudentStore } from '@/stores/studentStore'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Info, CalendarCheck, ListChecks, NotebookPen } from 'lucide-vue-next'
import { Card, CardContent } from '@/components/ui/card'
import InfoBox from '@/components/InfoBox.vue'
import DrivingSchedule from '@/components/DrivingSchedule.vue'
import LearningProgress from '@/components/LearningProgress.vue'

interface Props {
  studentId: string
}

const store = useStudentStore()
const mockStudent = store.selectedStudent as Student

const props = defineProps<Props>()
console.log(props.studentId)
</script>

<template>
  <div class="flex items-center border border-neutral-800 bg-neutral-900 h-16 rounded-lg p-2">
    <p class="text-2xl pl-2">Matea Miskovic</p>
  </div>
  <div class="flex flex-col mt-4">
    <Tabs default-value="info">
      <TabsList class="flex justify-between w-full mb-2">
        <TabsTrigger value="info">
          <Info />
          Details
        </TabsTrigger>
        <TabsTrigger value="plan">
          <CalendarCheck />
          Fahrplan
        </TabsTrigger>
        <TabsTrigger value="progress">
          <ListChecks />
          Fortschritt
        </TabsTrigger>
        <TabsTrigger value="protocol">
          <NotebookPen />
          Notizen
        </TabsTrigger>
      </TabsList>
      <TabsContent value="info">
        <StudentInfo :data="mockStudent" />
        <InfoBox :data="mockStudent" />
      </TabsContent>
      <TabsContent value="plan">
        <DrivingSchedule />
      </TabsContent>
      <TabsContent value="progress">
        <LearningProgress />
      </TabsContent>
      <TabsContent value="protocol">
        <Card>
          <CardContent>Protocol</CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  </div>
</template>
