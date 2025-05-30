<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Student } from '@/interfaces'
import { StudentColumns } from '@/columns'
import DataTable from '@/components/ui/data-table.vue'
import mockStudents from '@/stores/mockStudents'

const data = ref<Student[]>([])
async function getData(): Promise<Student[]> {
  await new Promise((resolve) => setTimeout(resolve, 500)) // TODO: remove
  return mockStudents
}
onMounted(async () => {
  data.value = await getData()
})
</script>

<template>
  <DataTable :columns="StudentColumns" :data="data" />
</template>

<style scoped></style>
