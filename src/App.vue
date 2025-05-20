<script setup lang="ts">
import { RouterView } from 'vue-router'
import { SidebarProvider, SidebarTrigger } from './components/ui/sidebar'
import { Separator } from '@/components/ui/separator'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import TheSidebar from '@/components/TheSidebar.vue'
import SidebarInset from '@/components/ui/sidebar/SidebarInset.vue'
</script>

<template>
  <SidebarProvider>
    <TheSidebar />
    <SidebarInset>
      <header
        class="flex h-16 shrink-0 items-center gap-2 group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12"
      >
        <div class="flex items-center gap-2 px-4">
          <SidebarTrigger class="-ml-1" />
          <Separator orientation="vertical" class="mr-2 h-4" />
          <Breadcrumb class="mt-0.5">
            <BreadcrumbList>
              <BreadcrumbItem class="hidden md:block"> Übersicht </BreadcrumbItem>
              <BreadcrumbSeparator class="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Fahrschüler</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div class="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div class="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
          <RouterView />
        </div>
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>
