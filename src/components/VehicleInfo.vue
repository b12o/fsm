<script setup lang="ts">
import InfoItem from '@/components/InfoItem.vue'
import InfoBox from '@/components/InfoBox.vue'
import type { Vehicle } from '@/types'

type Props = {
  vehicle: Vehicle
}

defineProps<Props>()

function formatTransmission(transmission: string): string {
  return transmission === 'manual' ? 'Manuell' : 'Automatik'
}

function formatFuelType(fuelType: string): string {
  const fuelTypeMap: Record<string, string> = {
    gasoline: 'Benzin',
    diesel: 'Diesel',
    electric: 'Elektrisch',
    hybrid: 'Hybrid',
  }
  return fuelTypeMap[fuelType] || fuelType
}

function formatStatus(status: string): string {
  const statusMap: Record<string, string> = {
    active: 'Aktiv',
    maintenance: 'Wartung',
    inactive: 'Inaktiv',
  }
  return statusMap[status] || status
}
</script>

<template>
  <InfoBox :title="'Fahrzeugdaten'">
    <InfoItem :item-key="'Kennzeichen'" :item-value="vehicle.licensePlate" />
    <InfoItem :item-key="'Marke'" :item-value="vehicle.make" />
    <InfoItem :item-key="'Modell'" :item-value="vehicle.model" />
    <InfoItem :item-key="'Baujahr'" :item-value="vehicle.year.toString()" />
    <InfoItem :item-key="'Farbe'" :item-value="vehicle.color" />
    <InfoItem :item-key="'FIN/VIN'" :item-value="vehicle.vin" />
  </InfoBox>

  <InfoBox class="mt-4" :title="'Technische Daten'">
    <InfoItem :item-key="'Getriebe'" :item-value="formatTransmission(vehicle.transmission)" />
    <InfoItem :item-key="'Kraftstoff'" :item-value="formatFuelType(vehicle.fuelType)" />
    <InfoItem
      :item-key="'Kilometerstand'"
      :item-value="`${vehicle.mileage.toLocaleString('de-DE')} km`"
    />
    <InfoItem :item-key="'Status'" :item-value="formatStatus(vehicle.status)" />
  </InfoBox>

  <InfoBox class="mt-4" :title="'Wartung & Dokumente'">
    <InfoItem :item-key="'Letzte Wartung'" :item-value="vehicle.lastService" />
    <InfoItem :item-key="'Nächste Wartung'" :item-value="vehicle.nextService" />
    <InfoItem :item-key="'Versicherung gültig bis'" :item-value="vehicle.insuranceExpiry" />
    <InfoItem :item-key="'Zulassung gültig bis'" :item-value="vehicle.registrationExpiry" />
  </InfoBox>
</template>
