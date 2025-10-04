<script setup lang="ts">
import { AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { Progress } from '@/components/ui/progress'
import { ChevronDown } from 'lucide-vue-next'
import { computed } from 'vue'

interface Props {
  value: string
  title: string
  color: string
  progress: number
}

const borderColor = computed(() => `border border-${props.color}`)

const props = defineProps<Props>()
</script>

<template>
  <AccordionItem :value="props.value">
    <AccordionTrigger class="text-white bg-neutral-900 text-xl px-4 mt-2 rounded-none" :class="borderColor">
      <div class="w-72">
        {{ props.title }}
      </div>
      <Progress :model-value="props.progress" class="mt-2.5 w-275 text-red-500" />
      <template #icon>
        <ChevronDown
          class="text-white pointer-events-none size-6 shrink-0 translate-y-0.5 transition-transform duration-200"
        />
      </template>
    </AccordionTrigger>
    <AccordionContent>
      <slot></slot>
    </AccordionContent>
  </AccordionItem>
</template>

<style scoped></style>
