<script setup lang="ts">
import mockStudents from '@/stores/mockStudents'
import { onMounted, ref } from 'vue'
import type { Student } from '@/interfaces'
import { columns } from '@/components/students/columns'
import DataTable from '@/components/students/DataTable.vue'

const data = ref<Student[]>([])
async function getData(): Promise<Student[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000)) // TODO: remove
  return mockStudents
}
onMounted(async () => {
  data.value = await getData()
})
</script>

<template>
  <DataTable :columns="columns" :data="data" />
</template>

<style scoped></style>
