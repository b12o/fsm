<script setup lang="ts">
import type { Student } from '@/types'
import { useStudentStore } from '@/stores/studentStore'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Info, CalendarCheck, ListChecks, NotebookPen } from 'lucide-vue-next'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import StudentInfo from '@/components/StudentInfo.vue'
import DrivingSchedule from '@/components/DrivingSchedule.vue'
import LearningProgress from '@/components/LearningProgress.vue'

type Props = {
  studentId: string
}

const store = useStudentStore()
const mockStudent = store.selectedStudent as Student

const props = defineProps<Props>()
console.log(props.studentId)
</script>

<template>
  <Card class="rounded-none">
    <CardContent>
      <div class="flex flex-row">
        <Avatar class="h-24 w-24">
          <AvatarImage src="https://i.postimg.cc/P5NtqzVy/www-thispersondoesnotexist.jpg" />
          <AvatarFallback>MM</AvatarFallback>
        </Avatar>
        <div class="ml-8">
          <h1 class="text-3xl">Maria Mustermann</h1>
          <h4>Fahrschüler:in</h4>
          <h4>Berlin, DE</h4>
        </div>
      </div>
    </CardContent>
  </Card>
  <div class="flex flex-col mt-4">
    <Tabs default-value="info">
      <TabsList class="flex justify-between w-full mb-2 rounded-none">
        <TabsTrigger value="info" class="rounded-none">
          <Info />
          Details
        </TabsTrigger>
        <TabsTrigger value="plan" class="rounded-none">
          <CalendarCheck />
          Fahrplan
        </TabsTrigger>
        <TabsTrigger value="progress" class="rounded-none">
          <ListChecks />
          Fortschritt
        </TabsTrigger>
        <TabsTrigger value="protocol" class="rounded-none">
          <NotebookPen />
          Notizen
        </TabsTrigger>
      </TabsList>
      <TabsContent value="info">
        <StudentInfo :data="mockStudent" />
      </TabsContent>
      <TabsContent value="plan">
        <DrivingSchedule />
      </TabsContent>
      <TabsContent value="progress">
        <LearningProgress />
      </TabsContent>
      <TabsContent value="protocol">
        <Card class="rounded-none">
          <CardContent class="italic">Noch keine notizen</CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  </div>
</template>
