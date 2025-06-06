<script setup lang="ts">
import { RouterView } from 'vue-router'
import { SidebarProvider } from './components/ui/sidebar'
import TheSidebar from '@/components/TheSidebar.vue'
import TheHeader from './components/TheHeader.vue'
import SidebarInset from '@/components/ui/sidebar/SidebarInset.vue'
</script>

<template>
  <SidebarProvider>
    <TheSidebar />
    <SidebarInset>
      <TheHeader />
      <div class="flex flex-1 flex-col mr-1.5 mb-2">
        <div class="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min p-4">
          <RouterView />
        </div>
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>
