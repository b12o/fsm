<script setup lang="ts">
import { Card, CardTitle, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Pen } from 'lucide-vue-next'
const props = defineProps<{
  title: string
}>()
</script>

<template>
  <Card class="rounded-none">
    <div class="px-8 flex justify-between">
      <CardTitle class="font-semibold text-xl">{{ props.title }}</CardTitle>
      <Button variant="outline"><Pen />Bearbeiten</Button>
    </div>
    <Separator />
    <CardContent class="flex flex-wrap gap-y-4">
      <slot></slot>
    </CardContent>
  </Card>
</template>
