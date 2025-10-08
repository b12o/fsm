<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Info, CalendarCheck, GraduationCap } from 'lucide-vue-next'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import InstructorInfo from '@/components/InstructorInfo.vue'
import { useInstructorStore } from '@/stores/instructorStore'

import TeacherDrivingSchedule from '@/components/TeacherDrivingSchedule.vue'

import DataTable from '@/components/ui/data-table.vue'
import mockStudents from '@/stores/mockStudents'
import type { Student } from '@/types'
import { StudentColumns } from '@/columns'

const props = defineProps<{
  instructorId: string
}>()

const instructorStore = useInstructorStore()
const mockInstructor = instructorStore.selectedInstructor
console.log(props.instructorId)

const data = ref<Student[]>([])
async function getData(): Promise<Student[]> {
  await new Promise((resolve) => setTimeout(resolve, 500)) // TODO: remove
  return mockStudents.slice(0, 8)
}
onMounted(async () => {
  data.value = await getData()
})
function selectStudent() {
  console.log('stub')
}
</script>

<template>
  <div>
    <Card class="rounded-none">
      <CardContent>
        <div class="flex flex-row">
          <Avatar class="h-24 w-24">
            <AvatarImage src="https://i.postimg.cc/8zKNNCwx/thispersondoesnotexist.jpg" />
            <AvatarFallback>TM</AvatarFallback>
          </Avatar>
          <div class="ml-8">
            <h1 class="text-3xl">Thomas Müller</h1>
            <h4>Fahrlerer</h4>
            <h4>Berlin, DE</h4>
          </div>
        </div>
      </CardContent>
    </Card>
    <div class="flex flex-col mt-4">
      <Tabs default-value="students">
        <TabsList class="flex justify-between w-full mb-2 rounded-none">
          <TabsTrigger value="info" class="rounded-none"> <Info />Details </TabsTrigger>
          <TabsTrigger value="plan" class="rounded-none"> <CalendarCheck /> Fahrplan </TabsTrigger>
          <TabsTrigger value="students" class="rounded-none">
            <GraduationCap /> Fahrschüler
          </TabsTrigger>
        </TabsList>
        <TabsContent value="info">
          <InstructorInfo :data="mockInstructor" />
        </TabsContent>
        <TabsContent value="plan">
          <TeacherDrivingSchedule />
        </TabsContent>
        <TabsContent value="students">
          <DataTable :columns="StudentColumns" :data="data" :row-select="selectStudent" />
        </TabsContent>
      </Tabs>
    </div>
  </div>
</template>
