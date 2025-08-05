<script setup lang="ts">
import { RouterView } from 'vue-router'
import { SidebarProvider } from './components/ui/sidebar'
import TheSidebar from '@/components/TheSidebar.vue'
import TheHeader from './components/TheHeader.vue'
import SidebarInset from '@/components/ui/sidebar/SidebarInset.vue'
import { Toaster } from '@/components/ui/sonner'
import { useColorMode } from '@vueuse/core'

const mode = useColorMode()
mode.value = 'dark'

import 'vue-sonner/style.css'
</script>

<template>
  <Toaster />
  <SidebarProvider>
    <TheSidebar />
    <SidebarInset>
      <div class="px-2">
        <TheHeader />
      </div>
      <div class="flex flex-1 flex-col p-2 bg-neutral-950 md:rounded-lg md:mt-2 md:mb-2 md:mr-2">
        <RouterView class="h-full" />
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>
