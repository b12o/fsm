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
  </InfoBox>
</template>
