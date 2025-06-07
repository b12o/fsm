<script setup lang="ts">
import { Separator } from '@/components/ui/separator'
import InfoBox from '@/components/InfoBox.vue'
import DrivingInfo from '@/components/DrivingInfo.vue'
import { useStore } from '@/stores/store'
import type { Student } from '@/interfaces'

interface Props {
  studentId: string
}

const store = useStore()

const props = defineProps<Props>()
console.log(props.studentId)

const mockStudent = store.selectedStudent as Student
</script>

<template>
  <div class="flex flex-col">
    <InfoBox :data="mockStudent" />
    <Separator class="my-4" />
    <DrivingInfo class="grow" />
  </div>
</template>
