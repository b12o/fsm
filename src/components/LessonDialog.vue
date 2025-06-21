<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
</script>

<template>
  <Dialog>
    <DialogTrigger ref="dialogTrigger" class="hidden"></DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{{ eventTitle }}</DialogTitle>
        <DialogDescription class="hidden"></DialogDescription>
      </DialogHeader>
      <div class="flex mt-4 gap-2">
        <div class="flex-1">
          <Label for="new_event_student" class="mb-2">Fahrschüler</Label>
          <div id="new_event_student" class="border border-neutral-800 h-9 rounded-lg">
            <p class="flex items-center h-full px-2">{{ store.selectedStudentFullName }}</p>
          </div>
        </div>
        <div>
          <Label for="new_event_lesson_type" class="mb-2">Typ</Label>
          <Select id="new_event_lesson_type" v-model="eventType">
            <SelectTrigger>
              <SelectValue placeholder="Fahrttyp" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="übung">Übung</SelectItem>
              <SelectItem value="überland">Überland</SelectItem>
              <SelectItem value="beleuchtung">Beleuchtung</SelectItem>
              <SelectItem value="autobahn">Autobahn</SelectItem>
              <SelectItem value="prüfung">Prüfung</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div class="mt-4 flex gap-2">
        <div class="flex-1">
          <Label for="new_event_start_time" class="mb-2">Beginn</Label>
          <Select id="new_event_lesson_type" v-model="eventStartTime">
            <SelectTrigger class="w-full">
              <SelectValue placeholder="Startzeit" />
            </SelectTrigger>
            <SelectContent class="min-w-12 w-24 h-64">
              <SelectGroup>
                <SelectItem value="06:00">06:00</SelectItem>
                <SelectItem value="06:30">06:30</SelectItem>
                <SelectItem value="07:00">07:00</SelectItem>
                <SelectItem value="07:30">07:30</SelectItem>
                <SelectItem value="08:00">08:00</SelectItem>
                <SelectItem value="08:30">08:30</SelectItem>
                <SelectItem value="09:00">09:00</SelectItem>
                <SelectItem value="09:30">09:30</SelectItem>
                <SelectItem value="10:00">10:00</SelectItem>
                <SelectItem value="10:30">10:30</SelectItem>
                <SelectItem value="11:00">11:00</SelectItem>
                <SelectItem value="11:30">11:30</SelectItem>
                <SelectItem value="12:00">12:00</SelectItem>
                <SelectItem value="12:30">12:30</SelectItem>
                <SelectItem value="13:00">13:00</SelectItem>
                <SelectItem value="13:30">13:30</SelectItem>
                <SelectItem value="14:00">14:00</SelectItem>
                <SelectItem value="14:30">14:30</SelectItem>
                <SelectItem value="15:00">15:00</SelectItem>
                <SelectItem value="15:30">15:30</SelectItem>
                <SelectItem value="16:00">16:00</SelectItem>
                <SelectItem value="16:30">16:30</SelectItem>
                <SelectItem value="17:00">17:00</SelectItem>
                <SelectItem value="17:30">17:30</SelectItem>
                <SelectItem value="18:00">18:00</SelectItem>
                <SelectItem value="18:30">18:30</SelectItem>
                <SelectItem value="19:00">19:00</SelectItem>
                <SelectItem value="19:30">19:30</SelectItem>
                <SelectItem value="20:00">20:00</SelectItem>
                <SelectItem value="20:30">20:30</SelectItem>
                <SelectItem value="21:00">21:00</SelectItem>
                <SelectItem value="21:30">21:30</SelectItem>
                <SelectItem value="22:00">22:00</SelectItem>
                <SelectItem value="22:30">22:30</SelectItem>
                <SelectItem value="23:00">23:00</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div class="flex-1">
          <Label for="new_event_num_lessons" class="mb-2">Fahrstunden</Label>
          <NumberField
            id="new_event_num_lessons"
            v-model="eventNumHours"
            :default-value="2"
            :min="1"
            :max="10"
            class="w-full"
          >
            <NumberFieldContent>
              <NumberFieldDecrement />
              <NumberFieldInput />
              <NumberFieldIncrement />
            </NumberFieldContent>
          </NumberField>
        </div>
        <div class="flex-1">
          <Label for="new_event_end_time" class="mb-2">Ende</Label>
          <div id="new_event_end_time" class="border border-neutral-800 h-9 rounded-lg">
            <p class="flex items-center h-full px-2 text-sm">{{ eventEndTime }}</p>
          </div>
        </div>
      </div>
      <div class="mt-4 flex gap-2">
        <div class="flex-1">
          <Label for="new_event_instructor" class="mb-2">Fahrlehrer</Label>
          <Select id="new_event_instructor" default-value="breana">
            <SelectTrigger class="w-full">
              <SelectValue placeholder="Fahrlehrer" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="brandon">Brandon</SelectItem>
              <SelectItem value="kennedy">Kennedy</SelectItem>
              <SelectItem value="jimmy">Jimmy</SelectItem>
              <SelectItem value="breana">Breana</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div class="flex-1">
          <Label for="new_event_vehicle" class="mb-2">Fahrzeug</Label>
          <Select id="new_event_vehicle" default-value="toto">
            <SelectTrigger class="w-full">
              <SelectValue placeholder="Fahrzeug" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="toto">Toto</SelectItem>
              <SelectItem value="audi">Audi</SelectItem>
              <SelectItem value="blaue-rakete">Blaue Rakete</SelectItem>
              <SelectItem value="zafaerys">Zafaerys</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div class="mt-4">
        <Textarea placeholder="Notizen" class="mb-1" />
      </div>
      <Separator />
      <div class="flex gap-2 justify-end mt-2">
        <Button class="flex-1" @click="saveLesson">Speichern</Button>
        <Button class="flex-1" variant="secondary" @click="closeDialog">Abbrechen</Button>
      </div>
    </DialogContent>
  </Dialog>
</template>

<style scoped></style>
