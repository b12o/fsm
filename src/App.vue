<script setup lang="ts">
import { RouterView } from 'vue-router'
import { SidebarProvider, SidebarTrigger } from './components/ui/sidebar'
import TheSidebar from '@/components/TheSidebar.vue'
import SidebarInset from './components/ui/sidebar/SidebarInset.vue'
</script>

<template>
  <SidebarProvider>
    <TheSidebar />
    <SidebarInset>
      <SidebarTrigger class="ml-4 mt-4" />
      <RouterView />
    </SidebarInset>
  </SidebarProvider>
</template>
