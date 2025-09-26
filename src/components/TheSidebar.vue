<script setup lang="ts">
import { ChevronsUpDown, LogOut } from 'lucide-vue-next'

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
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

import SidebarToggle from '@/components/SidebarToggle.vue'

import { useSidebarStore } from '@/stores/sidebarStore'

const store = useSidebarStore()

</script>

<template>
  <Sidebar variant="sidebar" collapsible="icon">
    <SidebarHeader>
      <SidebarToggle />
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup v-for="group in store.sidebar.navGroups" :key="group.name">
        <SidebarMenu>
          <SidebarMenuItem v-for="item in group.items" :key="item.title">
            <SidebarMenuButton
              as-child
              class="h-10 mt-2 text-base"
              @click="store.sidebarNavigateTo(item)"
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
                  <AvatarFallback>{{ store.sidebar.footer.initials }}</AvatarFallback>
                </Avatar>
                <div class="grid flex-1 text-left leading-tight">
                  <span class="truncate font-semibold">{{ store.sidebar.footer.username }}</span>
                  <span class="truncate text-xs">{{ store.sidebar.footer.email }}</span>
                </div>
                <ChevronsUpDown />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="bottom" :side-offset="4" align="end">
              <DropdownMenuItem>
                <LogOut />
                abmelden
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  </Sidebar>
</template>
