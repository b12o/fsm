<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Pen } from 'lucide-vue-next'
const props = defineProps<{
  title: string
}>()
</script>

<template>
  <Card class="rounded-none">
    <CardHeader class="-my-2 flex justify-between">
      <CardTitle class="font-semibold text-xl">{{ props.title }}</CardTitle>
      <Button variant="outline" class="-my-1"><Pen />Bearbeiten</Button>
    </CardHeader>
    <Separator />
    <CardContent class="flex flex-wrap gap-y-4">
      <slot></slot>
    </CardContent>
  </Card>
</template>
