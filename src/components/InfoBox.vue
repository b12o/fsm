<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'
</script>

<template>
  <Card>
    <CardContent class="flex flex-wrap justify-between">
      <div class="basis-1/5 p-2">
        <div class="font-bold text-xs">Vorname</div>
        <div class="text-sm">Herbert</div>
      </div>
      <div class="basis-1/5 p-2">
        <div class="font-bold text-xs">Nachname</div>
        <div class="text-sm">Sperbert</div>
      </div>
      <div class="basis-1/5 p-2">
        <div class="font-bold text-xs">Email</div>
        <div class="text-sm">herbert@sperbert.de</div>
      </div>
      <div class="basis-1/5 p-2">
        <div class="font-bold text-xs">Telefon-Nr</div>
        <div class="text-sm">0177 123 456 78</div>
      </div>
      <div class="basis-1/5 p-2">
        <div class="font-bold text-xs">Lizenz-Typ</div>
        <div class="text-sm">Manuell</div>
      </div>
      <div class="basis-1/5 p-2">
        <div class="font-bold text-xs">Fahrlehrer</div>
        <div class="text-sm">David</div>
      </div>
      <div class="basis-1/5 p-2">
        <div class="font-bold text-xs">Fahrzeug</div>
        <!-- nickname of vehicle -->
        <div class="text-sm">Blau</div>
      </div>
      <div class="basis-1/5 p-2">
        <div class="font-bold text-xs">Fahrstunden</div>
        <div class="text-sm">17</div>
      </div>
      <div class="basis-1/5 p-2">
        <div class="font-bold text-xs">Saldo</div>
        <div class="text-sm">€ 00.00</div>
      </div>
      <div class="basis-1/5 p-2">
        <div class="font-bold text-xs">Status</div>
        <div class="text-sm">Aktiv</div>
      </div>
    </CardContent>
  </Card>
</template>

<style scoped></style>
