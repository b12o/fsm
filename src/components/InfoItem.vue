<script setup lang="ts">
const props = defineProps<{
  itemKey: string
  itemValue: string | number | boolean
}>()
</script>

<template>
  <div class="basis-1/4 p-2">
    <div class="font-bold text-sm">{{ props.itemKey }}</div>
    <div class="text-lg">{{ props.itemValue }}</div>
  </div>
</template>

<style scoped></style>
