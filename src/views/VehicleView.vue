<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import { useVehicleStore } from '@/stores/vehicleStore'
import mockVehicles from '@/stores/mockVehicles'
import VehicleInfo from '@/components/VehicleInfo.vue'

type Props = {
  vehicleId: string
}

const props = defineProps<Props>()
const router = useRouter()
const vehicleStore = useVehicleStore()

const vehicle = computed(() => {
  return mockVehicles.find((v) => v.id === props.vehicleId)
})

onMounted(() => {
  if (!vehicle.value) {
    router.push({ name: 'vehicles' })
    return
  }
  vehicleStore.setSelectedVehicle(vehicle.value)
})
</script>

<template>
  <div class="space-y-6">
    <VehicleInfo v-if="vehicle" :vehicle="vehicle" />
  </div>
</template>

<style scoped></style>
