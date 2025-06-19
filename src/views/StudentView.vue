<script setup lang="ts">
import InfoBox from '@/components/InfoBox.vue'
import DrivingInfo from '@/components/DrivingInfo.vue'
import { useStudentStore } from '@/stores/studentStore'
import type { Student } from '@/interfaces'

interface Props {
  studentId: string
}

const store = useStudentStore()

const props = defineProps<Props>()
console.log(props.studentId)

const mockStudent = store.selectedStudent as Student
</script>

<template>
  <div class="flex flex-col">
    <InfoBox :data="mockStudent" />
    <DrivingInfo class="grow mt-4" />
  </div>
</template>
