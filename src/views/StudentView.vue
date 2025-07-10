<script setup lang="ts">
import DrivingInfo from '@/components/DrivingInfo.vue'

interface Props {
  studentId: string
}

const props = defineProps<Props>()
console.log(props.studentId)
</script>

<template>
  <div class="">
    <h1 class="text-2xl pl-1">Herbert Sperbert</h1>
  </div>
  <div class="flex flex-col">
    <DrivingInfo class="grow mt-4" />
  </div>
</template>
