<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { Student } from '@/interfaces'
import { StudentColumns } from '@/columns'
import DataTable from '@/components/ui/data-table.vue'
import mockStudents from '@/stores/mockStudents'
import type { Row } from '@tanstack/vue-table'

const router = useRouter()

const data = ref<Student[]>([])
async function getData(): Promise<Student[]> {
  await new Promise((resolve) => setTimeout(resolve, 500)) // TODO: remove
  return mockStudents
}

function selectStudent(row: Row<Student>) {
  const selectedObject = row.original
  console.log(`This is student ${selectedObject.id}`)

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
