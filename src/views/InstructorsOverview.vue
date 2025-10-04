<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { Instructor } from '@/types'
import { InstructorColumns } from '@/columns'
import DataTable from '@/components/ui/data-table.vue'
import mockInstructors from '@/stores/mockInstructors'
import type { Row } from '@tanstack/vue-table'

const router = useRouter()

const data = ref<Instructor[]>([])
async function getData(): Promise<Instructor[]> {
  await new Promise((resolve) => setTimeout(resolve, 500)) // TODO: remove
  return mockInstructors
}

function selectInstructor(row: Row<Instructor>) {
  const selectedObject = row.original
  console.log(`This is instructor ${selectedObject.id}`)
  router.push({
    name: 'instructor',
    params: {
      instructorId: selectedObject.id,
    },
  })
}

onMounted(async () => {
  data.value = await getData()
})
</script>

<template>
  <DataTable :columns="InstructorColumns" :data="data" :row-select="selectInstructor" />
</template>

<style scoped></style>
