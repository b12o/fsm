<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { Row } from '@tanstack/vue-table'

import DataTable from '@/components/ui/data-table.vue'
import mockVehicles from '@/stores/mockVehicles'
import type { Vehicle } from '@/types'
import { VehicleColumns } from '@/columns'

const router = useRouter()

const data = ref<Vehicle[]>([])

async function getData(): Promise<Vehicle[]> {
  await new Promise((resolve) => setTimeout(resolve, 500))
  return mockVehicles
}

function selectVehicle(row: Row<Vehicle>): void {
  const selectedObject = row.original
  console.log(`Selected vehicle: ${selectedObject.id}`)
  router.push({
    name: 'vehicle',
    params: {
      vehicleId: selectedObject.id,
    },
  })
}

onMounted(async () => {
  data.value = await getData()
})
</script>

<template>
  <div>
    <DataTable :columns="VehicleColumns" :data="data" :row-select="selectVehicle" />
  </div>
</template>

<style scoped></style>
