<script setup lang="ts">
import { Sun, Moon } from 'lucide-vue-next'
import { useColorMode } from '@vueuse/core'
import { Switch } from '@/components/ui/switch'

const mode = useColorMode()

function toggleTheme() {
  mode.value = mode.value == 'light' ? 'dark' : 'light'
}
</script>

<template>
  <div class="flex w-23 justify-between">
    <Sun height="20" />
    <Switch class="test" :model-value="mode == 'dark'" @update:model-value="toggleTheme" />
    <Moon height="20" />
  </div>
</template>

<style scoped>
.test {
	color: black;
}
</style>
