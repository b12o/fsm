<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Instructor } from '@/interfaces'
import { InstructorColumns } from '@/columns'
import DataTable from '@/components/ui/data-table.vue'
import mockInstructors from '@/stores/mockInstructors'

const data = ref<Instructor[]>([])
async function getData(): Promise<Instructor[]> {
  await new Promise((resolve) => setTimeout(resolve, 500)) // TODO: remove
  return mockInstructors
}
onMounted(async () => {
  data.value = await getData()
})
</script>

<template>
  <DataTable :columns="InstructorColumns" :data="data"> </DataTable>
</template>

<style scoped></style>
