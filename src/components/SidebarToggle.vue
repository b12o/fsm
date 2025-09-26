<script setup lang="ts">
import { PanelLeftOpen, PanelLeftClose } from 'lucide-vue-next'
import { useSidebarStore } from '@/stores/sidebarStore'

const sidebarStore = useSidebarStore()
function toggleSidebar() {
  sidebarStore.sidebar.isOpen = !sidebarStore.sidebar.isOpen
}
</script>

<template>
  <PanelLeftClose v-if="sidebarStore.sidebar.isOpen" @click="toggleSidebar()" class="ml-1 cursor-w-resize" />
  <PanelLeftOpen v-else @click="toggleSidebar()" class="ml-1 cursor-e-resize" />
</template>

<style scoped></style>
