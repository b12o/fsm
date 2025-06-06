<script setup lang="ts">
import { Separator } from '@/components/ui/separator'
import InfoBox from '@/components/InfoBox.vue'
import DrivingInfo from '@/components/DrivingInfo.vue'

interface Props {
  studentId: string
}

const props = defineProps<Props>()
console.log(props.studentId)

// TODO: use pinia for storing student info when selecting datatable row
// That way we can retrieve information in child components without having to pass them through

const mockData = {
  firstName: 'Herbert',
  lastName: 'Sperbert',
  email: 'herbert@sperbert.de',
  phoneNumber: '0177 123 456 78',
  licenseType: 'manual',
  instructor: 'David',
  vehicle: 'Blau',
  numLessons: 17,
  balance: '€ 00,00',
  status: 'active',
}
</script>

<template>
  <div class="flex flex-col">
    <InfoBox :data="mockData" />
    <Separator class="my-4" />
    <DrivingInfo class="grow" />
  </div>
</template>
