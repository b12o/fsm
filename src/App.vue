<script setup lang="ts">
import { RouterView } from 'vue-router'
import { SidebarProvider } from './components/ui/sidebar'
import TheSidebar from '@/components/TheSidebar.vue'
import TheHeader from './components/TheHeader.vue'
import SidebarInset from '@/components/ui/sidebar/SidebarInset.vue'
import { Toaster } from '@/components/ui/sonner'
import { useColorMode } from '@vueuse/core'
import { useSidebarStore } from '@/stores/sidebarStore'

const mode = useColorMode()
const sidebarStore = useSidebarStore()

mode.value = 'dark'
import 'vue-sonner/style.css'
</script>

<template>
  <Toaster />
  <SidebarProvider v-model:open="sidebarStore.sidebar.isOpen">
    <TheSidebar />
    <SidebarInset>
      <TheHeader />
      <div class="flex flex-1 flex-col bg-neutral-900 p-2">
        <RouterView class="p-2 h-full" />
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>
