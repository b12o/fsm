<script setup lang="ts">
import { Separator } from '@/components/ui/separator'
import InfoBox from '@/components/InfoBox.vue'
import DrivingInfo from '@/components/DrivingInfo.vue'

interface Props {
  studentId: string
}

const props = defineProps<Props>()
console.log(props.studentId)

// use vue store for student info instead of passing student Id
// the row-select script of the students overview should make the API call and store the result in pinia
// for this component (and child components) to retrieve
</script>

<template>
  <InfoBox :id="studentId" />
  <Separator class="my-4" />
  <DrivingInfo :id="studentId" />
</template>

<style scoped></style>
