<script setup lang="ts">
const props = defineProps<{
  itemKey: string
  itemValue: string | number | boolean
}>()
</script>

<template>
  <div class="basis-1/5 p-2">
    <div class="font-bold text-xs">{{ props.itemKey }}</div>
    <div class="text-sm">{{ props.itemValue }}</div>
  </div>
</template>

<style scoped></style>
