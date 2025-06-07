<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'
import InfoItem from '@/components/InfoItem.vue'
import type { Student } from '@/interfaces'

defineProps<{
  data: Student
}>()
</script>

<template>
  <Card>
    <CardContent class="flex flex-wrap">
      <InfoItem :item-key="'Vorname'" :item-value="data.firstName"></InfoItem>
      <InfoItem :item-key="'Nachname'" :item-value="data.lastName"></InfoItem>
      <InfoItem :item-key="'Email'" :item-value="data.email"></InfoItem>
      <InfoItem :item-key="'Telefon-Nr'" :item-value="data.phoneNumber"></InfoItem>
      <InfoItem :item-key="'Lizenz-Typ'" :item-value="data.licenseType"></InfoItem>
      <InfoItem :item-key="'Anz. Fahrstuden'" :item-value="data.numLessons"></InfoItem>

      <!-- mock data since DB call is required for these properties -->
      <InfoItem :item-key="'Fahrlehrer'" :item-value="'David'"></InfoItem>
      <InfoItem :item-key="'Bevorzugtes Fahrzeug'" :item-value="'Blaue Rakete'"></InfoItem>

      <InfoItem :item-key="'Saldo'" :item-value="data.balance"></InfoItem>
      <InfoItem :item-key="'Status'" :item-value="data.status"></InfoItem>
    </CardContent>
  </Card>
</template>

<style scoped></style>
