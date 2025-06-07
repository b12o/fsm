<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { Row } from '@tanstack/vue-table'

import DataTable from '@/components/ui/data-table.vue'
import mockStudents from '@/stores/mockStudents'
import type { Student } from '@/interfaces'
import { StudentColumns } from '@/columns'
import { useStore } from '@/stores/store'

const router = useRouter()
const store = useStore()

const data = ref<Student[]>([])
async function getData(): Promise<Student[]> {
  await new Promise((resolve) => setTimeout(resolve, 500)) // TODO: remove
  return mockStudents
}

function selectStudent(row: Row<Student>) {
  const selectedObject = row.original
  // TODO: HTTP GET /student/<studentId>
  // then store object in Pinia
  // let's mock this for now
  const mockStudent: Student = {
    id: '123abc',
    firstName: 'Herbert',
    lastName: 'Sperbert',
    email: 'herbert@sperbert.de',
    phoneNumber: '0177 123 456 78',
    licenseType: 'manual',
    instructorId: 'David',
    preferredVehicleId: 'Blau',
    numLessons: 17,
    balance: '€ 00,00',
    status: 'active',
    isBf17: false,
    drivingSchoolId: '123',
  }
  store.setSelectedStudent(mockStudent)

  router.push({
    name: 'student',
    params: {
      studentId: selectedObject.id,
    },
  })
}

onMounted(async () => {
  data.value = await getData()
})
</script>

<template>
  <DataTable :columns="StudentColumns" :data="data" :row-select="selectStudent" />
</template>

<style scoped></style>
