<script setup lang="ts">
import type { Instructor } from '@/types'
import InfoItem from '@/components/InfoItem.vue'
import InfoBox from '@/components/InfoBox.vue'

defineProps<{
  data: Instructor
}>()
</script>

<template>
  <InfoBox :title="'Persönliche Daten'">
    <InfoItem :item-key="'Vorname'" :item-value="data.firstName" />
    <InfoItem :item-key="'Nachname'" :item-value="data.lastName" />
    <InfoItem :item-key="'Geb am'" :item-value="data.birthday" />
    <InfoItem :item-key="'Email'" :item-value="data.email" />
    <InfoItem :item-key="'Telefonnummer'" :item-value="data.phoneNumber" />
    <InfoItem :item-key="'Wohnadresse'" :item-value="'Berliner Straße 12b'" />
    <InfoItem :item-key="'PLZ'" :item-value="'10499'"></InfoItem>
    <InfoItem :item-key="'Ort'" :item-value="'Berlin'"></InfoItem>
  </InfoBox>

  <InfoBox class="mt-4" :title="'Fahrinformationen'">
    <InfoItem :item-key="'Führerscheinklassen'" :item-value="data.licensesTaught"></InfoItem>
    <InfoItem :item-key="'Anzahl Fahrschüler'" :item-value="data.numStudents"></InfoItem>
    <InfoItem :item-key="'Bevorzugtes Fahrzeug'" :item-value="'Blaue Rakete'"></InfoItem>
  </InfoBox>
</template>
