<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { Users, Car, GraduationCap } from 'lucide-vue-next'

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card'
import mockStudents from '@/stores/mockStudents'
import mockInstructors from '@/stores/mockInstructors'
import mockVehicles from '@/stores/mockVehicles'

const router = useRouter()

const totalStudents = computed(() => mockStudents.length)
const activeStudents = computed(() => mockStudents.filter((s) => s.status === 'active').length)
const totalInstructors = computed(() => mockInstructors.length)
const totalVehicles = computed(() => mockVehicles.length)
const activeVehicles = computed(() => mockVehicles.filter((v) => v.status === 'active').length)
const vehiclesInMaintenance = computed(
  () => mockVehicles.filter((v) => v.status === 'maintenance').length,
)

function navigateToStudents(): void {
  router.push({ name: 'students' })
}

function navigateToInstructors(): void {
  router.push({ name: 'instructors' })
}

function navigateToVehicles(): void {
  router.push({ name: 'vehicles' })
}
</script>

<template>
  <div class="space-y-6">
    <div>
      <h1 class="text-3xl font-bold">Dashboard</h1>
      <p class="text-muted-foreground">Willkommen bei Ihrer Fahrschulverwaltung</p>
    </div>

    <div class="grid gap-4 md:grid-cols-3">
      <Card class="cursor-pointer hover:bg-accent/50 transition-colors" @click="navigateToStudents">
        <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle class="text-sm font-medium">Fahrschüler</CardTitle>
          <Users class="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">{{ totalStudents }}</div>
          <p class="text-xs text-muted-foreground">{{ activeStudents }} aktiv</p>
        </CardContent>
      </Card>

      <Card
        class="cursor-pointer hover:bg-accent/50 transition-colors"
        @click="navigateToInstructors"
      >
        <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle class="text-sm font-medium">Fahrlehrer</CardTitle>
          <GraduationCap class="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">{{ totalInstructors }}</div>
          <p class="text-xs text-muted-foreground">Alle aktiv</p>
        </CardContent>
      </Card>

      <Card class="cursor-pointer hover:bg-accent/50 transition-colors" @click="navigateToVehicles">
        <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle class="text-sm font-medium">Fahrzeuge</CardTitle>
          <Car class="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">{{ totalVehicles }}</div>
          <p class="text-xs text-muted-foreground">
            {{ activeVehicles }} aktiv, {{ vehiclesInMaintenance }} in Wartung
          </p>
        </CardContent>
      </Card>
    </div>

    <div class="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Kürzlich hinzugefügt</CardTitle>
          <CardDescription>Die neuesten Fahrschüler</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="space-y-4">
            <div
              v-for="student in mockStudents.slice(0, 5)"
              :key="student.id"
              class="flex items-center justify-between border-b pb-2 last:border-0"
            >
              <div>
                <p class="font-medium">{{ student.firstName }} {{ student.lastName }}</p>
                <p class="text-sm text-muted-foreground">{{ student.email }}</p>
              </div>
              <div class="text-sm text-muted-foreground">{{ student.licenseType }}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Fahrzeugstatus</CardTitle>
          <CardDescription>Übersicht der Fahrzeugflotte</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="space-y-4">
            <div
              v-for="vehicle in mockVehicles.slice(0, 5)"
              :key="vehicle.id"
              class="flex items-center justify-between border-b pb-2 last:border-0"
            >
              <div>
                <p class="font-medium">{{ vehicle.make }} {{ vehicle.model }}</p>
                <p class="text-sm text-muted-foreground">{{ vehicle.licensePlate }}</p>
              </div>
              <div
                class="text-sm font-medium"
                :class="{
                  'text-green-600': vehicle.status === 'active',
                  'text-yellow-600': vehicle.status === 'maintenance',
                  'text-gray-600': vehicle.status === 'inactive',
                }"
              >
                {{
                  vehicle.status === 'active'
                    ? 'Aktiv'
                    : vehicle.status === 'maintenance'
                      ? 'Wartung'
                      : 'Inaktiv'
                }}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>
