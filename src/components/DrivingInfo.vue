<script setup lang="ts">
import type { Student } from '@/interfaces'
import { useStudentStore } from '@/stores/studentStore'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Info, CalendarCheck, ListChecks, NotebookPen } from 'lucide-vue-next'
import { Card, CardContent } from '@/components/ui/card'
import InfoBox from '@/components/InfoBox.vue'
import DrivingSchedule from '@/components/DrivingSchedule.vue'
import LearningProgress from '@/components/LearningProgress.vue'

const store = useStudentStore()
const mockStudent = store.selectedStudent as Student
</script>

<template>
  <Tabs default-value="progress">
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
</template>

<style scoped></style>
