import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Vehicle } from '@/types'

export const useVehicleStore = defineStore('vehicle', () => {
  const selectedVehicle = ref<Vehicle | null>(null)
  const vehicles = ref<Vehicle[]>([])

  function setSelectedVehicle(vehicle: Vehicle): void {
    selectedVehicle.value = vehicle
  }

  function setVehicles(vehicleList: Vehicle[]): void {
    vehicles.value = vehicleList
  }

  function addVehicle(vehicle: Vehicle): void {
    vehicles.value.push(vehicle)
  }

  function updateVehicle(id: string, updates: Partial<Vehicle>): void {
    const index = vehicles.value.findIndex((v) => v.id === id)
    if (index !== -1) {
      vehicles.value[index] = { ...vehicles.value[index], ...updates }
    }
  }

  function deleteVehicle(id: string): void {
    vehicles.value = vehicles.value.filter((v) => v.id !== id)
  }

  return {
    selectedVehicle,
    vehicles,
    setSelectedVehicle,
    setVehicles,
    addVehicle,
    updateVehicle,
    deleteVehicle,
  }
})
