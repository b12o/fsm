<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'
import InfoItem from '@/components/InfoItem.vue'

defineProps<{
  data: object
}>()
</script>

<template>
  <Card>
    <CardContent class="flex flex-wrap justify-between">
      <InfoItem v-for="(value, key) in data" :key="key" :item-key="key" :item-value="value" />
    </CardContent>
  </Card>
</template>

<style scoped></style>
