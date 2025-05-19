<script setup lang="ts">
import {
  GraduationCap,
  Users,
  Car,
  ChevronsUpDown,
  LogOut,
  GalleryVerticalEnd,
} from 'lucide-vue-next'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'

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
  useSidebar,
} from '@/components/ui/sidebar'

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const isMobile = useSidebar()

const overview = [
  {
    title: 'Fahrschüler',
    url: '#',
    icon: GraduationCap,
  },
  {
    title: 'Fahrlehrer',
    url: '#',
    icon: Users,
  },
  {
    title: 'Fahrzeuge',
    url: '#',
    icon: Car,
  },
]

const userInfo = {
  username: 'b12o',
  email: 'barny@edubio.de',
}
</script>

<template>
  <Sidebar variant="floating">
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg" as-child>
            <a href="#">
              <div
                class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"
              >
                <GalleryVerticalEnd class="size-4" />
              </div>
              <div class="flex flex-col gap-0.5 leading-none">
                <span class="font-semibold">FSM</span>
                <span class="">v1.0.0</span>
              </div>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup class="group-data[collapsible-icon]:hidden">
        <SidebarGroupLabel class="font-bold">Übersicht</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuItem v-for="item in overview" :key="item.title">
            <SidebarMenuButton as-child class="h-10 mt-2 text-base">
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
                  <AvatarFallback>BE</AvatarFallback>
                </Avatar>
                <div class="grid flex-1 text-left leading-tight">
                  <span class="truncate font-semibold">{{ userInfo.username }}</span>
                  <span class="truncate text-xs">{{ userInfo.email }}</span>
                </div>
                <ChevronsUpDown />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent :side="isMobile ? 'bottom' : 'right'" :side-offset="4" align="end">
              <DropdownMenuItem>
                <LogOut />
                Abmelden
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  </Sidebar>
</template>

<style scoped></style>
