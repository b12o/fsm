<script setup lang="ts">
import { Button } from '@/components/ui/button'
import InfoItem from '@/components/InfoItem.vue'
import InfoBox from '@/components/InfoBox.vue'
import type { Student } from '@/types'
import { ref } from 'vue'

defineProps<{
  data: Student
}>()

const hidePaymentInfo = ref<boolean>(true)
const showPaymentInfo = function () {
  hidePaymentInfo.value = false
}
</script>

<template>
  <InfoBox :title="'Persönliche Daten'">
    <InfoItem :item-key="'Vorname'" :item-value="data.firstName"></InfoItem>
    <InfoItem :item-key="'Nachname'" :item-value="data.lastName"></InfoItem>
    <InfoItem :item-key="'Geb. am'" :item-value="data.birthday"></InfoItem>
    <InfoItem :item-key="'Email'" :item-value="data.email"></InfoItem>
    <InfoItem :item-key="'Telefon-Nr'" :item-value="data.phoneNumber"></InfoItem>
    <InfoItem :item-key="'Wohnadresse'" :item-value="'Müllerstraße 12'"></InfoItem>
    <InfoItem :item-key="'PLZ'" :item-value="'10499'"></InfoItem>
    <InfoItem :item-key="'Ort'" :item-value="'Berlin'"></InfoItem>
  </InfoBox>

  <InfoBox class="mt-4" :title="'Fahrinformationen'">
    <InfoItem :item-key="'Sehhilfe'" :item-value="'Ja'"></InfoItem>
    <InfoItem :item-key="'Lizenz-Typ'" :item-value="data.licenseType"></InfoItem>
    <InfoItem :item-key="'Anz. Fahrstuden'" :item-value="data.numLessons"></InfoItem>
    <InfoItem :item-key="'Fahrlehrer'" :item-value="'David'"></InfoItem>
    <InfoItem :item-key="'Bevorzugtes Fahrzeug'" :item-value="'Blaue Rakete'"></InfoItem>
    <InfoItem :item-key="'Theo. Prüfung bestanden am'" :item-value="'-'"></InfoItem>
    <InfoItem :item-key="'Prak. Prüfung am'" :item-value="'-'"></InfoItem>
    <InfoItem :item-key="'Prak. Prüfung bestanden am'" :item-value="'-'"></InfoItem>
  </InfoBox>

  <InfoBox class="mt-4" :title="'Zahlungsdetails'">
    <div v-if="hidePaymentInfo">
      <Button variant="outline" @click="showPaymentInfo">Anzeigen</Button>
    </div>
    <div v-else class="flex flex-row w-full">
      <InfoItem :item-key="'Insgesamt Bezahlt'" :item-value="'€1.250,00'"></InfoItem>
      <InfoItem :item-key="'Saldo'" :item-value="data.balance"></InfoItem>
    </div>
  </InfoBox>
</template>
