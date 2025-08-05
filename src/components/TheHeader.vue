<script setup lang="ts">
import { SidebarTrigger } from '@/components/ui/sidebar'
</script>

<template>
  <header
    class="flex items-center border border-neutral-800 bg-neutral-900 h-16 md:h-12 md:mt-2 md:mr-2 md:rounded-lg"
  >
    <div class="flex items-center gap-2 px-4 w-full">
      <SidebarTrigger class="-ml-1" />
    </div>
  </header>
</template>

<style scoped></style>
