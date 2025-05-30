<script setup lang="ts">
import { Sun, Moon } from 'lucide-vue-next'
import { useColorMode } from '@vueuse/core'

const mode = useColorMode()

function toggleLight() {
  mode.value = 'light'
}

function toggleDark() {
  mode.value = 'dark'
}
</script>

<template>
  <div>
    <Sun height="20" class="opacity-80 cursor-pointer" v-if="mode == 'dark'" @click="toggleLight" />
    <Moon height="20" class="opacity-80 cursor-pointer" v-else @click="toggleDark" />
  </div>
</template>
