<script setup lang="ts">
import { ChevronsUpDown, LogOut, GalleryVerticalEnd } from 'lucide-vue-next'

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from '@/components/ui/sidebar'

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'

import { useStore } from '@/stores/store'

const store = useStore()
</script>

<template>
  <Sidebar variant="floating">
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg" as-child>
            <a href="#">
              <div
                class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground mr-1"
              >
                <GalleryVerticalEnd class="size-4" />
              </div>
              <div class="flex flex-col gap-0.5 leading-none">
                <span class="font-semibold">{{ store.applicationTitle }}</span>
                <span class="">{{ store.applicationVersion }}</span>
              </div>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup class="group-data[collapsible-icon]:hidden">
        <SidebarGroupLabel class="font-bold">{{ store.sidebar.overviewLabel }}</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuItem v-for="item in store.sidebar.navItems" :key="item.title">
            <SidebarMenuButton
              as-child
              class="h-10 mt-2 text-base"
              @click="store.sidebarNavigateTo(item.route)"
            >
              <span>
                <component :is="item.icon" />
                <span>{{ item.title }}</span>
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <SidebarMenuButton size="lg">
                <Avatar class="h-8 w-8 rounded-lg">
                  <AvatarFallback>{{ store.sidebar.footerInfo.initials }}</AvatarFallback>
                </Avatar>
                <div class="grid flex-1 text-left leading-tight">
                  <span class="truncate font-semibold">{{ store.sidebar.footerInfo.username }}</span>
                  <span class="truncate text-xs">{{ store.sidebar.footerInfo.email }}</span>
                </div>
                <ChevronsUpDown />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="bottom" :side-offset="4" align="end">
              <DropdownMenuItem>
                <LogOut />
                {{ store.sidebar.footerInfo.actions.signOut.label }}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  </Sidebar>
</template>

<style scoped></style>
