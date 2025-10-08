<script setup lang="ts">
import { computed } from 'vue'
import { Accordion } from '@/components/ui/accordion'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import ProgressItem from '@/components/ProgressItem.vue'

import { useStudentStore } from '@/stores/studentStore'

const studentStore = useStudentStore()

// for checkbox @update:modelValue
// function handleCheckboxChange(checked: boolean | string) {
// console.log(checked)
// }

// Computed properties for each phase's completion ratio
const phaseProgressRatios = computed(() => {
  const ratios: { [key: string]: number } = {}
  const learningProgress = studentStore.studentLearningProgress
  for (const phaseName in learningProgress) {
    const phaseItem = learningProgress[phaseName]
    let trueCount = 0
    let totalBooleanProperties = 0

    for (const key in phaseItem) {
      if (typeof phaseItem[key] === 'boolean') {
        totalBooleanProperties++
        if (phaseItem[key] === true) {
          trueCount++
        }
      }
    }
    ratios[phaseName] =
      totalBooleanProperties > 0 ? Math.round((trueCount / totalBooleanProperties) * 100) : 0
  }
  return ratios
})
</script>

<template>
  <Accordion type="single" collapsible class="w-full">
    <!-- Grundstufe -->
    <!-- color: orange-400 -->
    <ProgressItem
      :value="'basic'"
      :title="'Grundstufe'"
      :color="'neutral-800'"
      :progress="phaseProgressRatios['Grundstufe']"
      class="-mt-2"
    >
      <Card class="mt-2 -mb-4 border border-neutral-800 rounded-none bg-neutral-900 text-white">
        <CardContent>
          <div class="flex items-center">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Grundstufe'][
                  'Besonderheiten beim Einsteigen'
                ] as boolean
              "
            />
            <p class="text-lg">Besonderheiten beim Einsteigen</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Grundstufe']['Einstellen'] as boolean
              "
            />
            <p class="text-lg">Einstellen</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Grundstufe']['Lenkradhaltung'] as boolean
              "
            />
            <p class="text-lg">Lenkradhaltung</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Grundstufe']['Pedale'] as boolean
              "
            />
            <p class="text-lg">Pedale</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Grundstufe'][
                  'Gurt anlegen / anpassen'
                ] as boolean
              "
            />
            <p class="text-lg">Gurt anlegen / anpassen</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Grundstufe']['Schalt- / Wählhebel'] as boolean
              "
            />
            <p class="text-lg">Schalt- / Wählhebel</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Grundstufe']['Zündschloss'] as boolean
              "
            />
            <p class="text-lg">Zündschloss</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Grundstufe']['Motor anlassen'] as boolean
              "
            />
            <p class="text-lg">Motor anlassen</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Grundstufe'][
                  'Anfahr- / Anhalteübungen'
                ] as boolean
              "
            />
            <p class="text-lg">Anfahr- / Anhalteübungen</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Grundstufe'][
                  'Schaltübungen (umweltschonend)'
                ] as boolean
              "
            />
            <p class="text-lg">Schaltübungen (umweltschonend)</p>
          </div>
        </CardContent>
      </Card>
    </ProgressItem>

    <!-- Grundfahraufgaben -->
    <!-- color: orange-500 -->
    <ProgressItem
      :value="'tasks'"
      :title="'Grundfahraufgaben'"
      :color="'neutral-800'"
      :progress="phaseProgressRatios['Grundfahraufgaben']"
    >
      <Card class="mt-2 -mb-4 border border-neutral-800 rounded-none">
        <CardContent>
          <div class="flex items-center">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Grundfahraufgaben'][
                  'Rückwärtsfahren'
                ] as boolean
              "
            />
            <p class="text-lg">Rückwärtsfahren</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Grundfahraufgaben']['Umkehren'] as boolean
              "
            />
            <p class="text-lg">Umkehren</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Grundfahraufgaben'][
                  'Gefahrenbremsung'
                ] as boolean
              "
            />
            <p class="text-lg">Gefahrenbremsung</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Grundfahraufgaben'][
                  'Einparken längs'
                ] as boolean
              "
            />
            <p class="text-lg">Einparken längs</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Grundfahraufgaben'][
                  'Einparken quer'
                ] as boolean
              "
            />
            <p class="text-lg">Einparken quer</p>
          </div>
        </CardContent>
      </Card>
    </ProgressItem>

    <!-- Aufbaustufe -->
    <ProgressItem
      :value="'intermediate'"
      :title="'Aufbaustufe'"
      :color="'neutral-800'"
      :progress="phaseProgressRatios['Aufbaustufe']"
    >
      <Card class="mt-2 -mb-4 border border-neutral-800 rounded-none">
        <CardContent>
          <div class="flex items-center">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Aufbaustufe'][
                  'Rollen und Schalten'
                ] as boolean
              "
            />
            <p class="text-lg">Rollen und Schalten</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Aufbaustufe'][
                  'Abbremsen und Schalten'
                ] as boolean
              "
            />
            <p class="text-lg">Abbremsen und Schalten</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Aufbaustufe']['Bremsübungen'] as boolean
              "
            />
            <p class="text-lg">Bremsübungen</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Aufbaustufe'][
                  'Tastgeschwindigkeit'
                ] as boolean
              "
            />
            <p class="text-lg">Tastgeschwindigkeit</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Aufbaustufe'][
                  'Bedienungs- und Kontrolleinrichtungen'
                ] as boolean
              "
            />
            <p class="text-lg">Bedienungs- und Kontrolleinrichtungen</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Aufbaustufe'][
                  'Örtliche Besonderheiten'
                ] as boolean
              "
            />
            <p class="text-lg">Örtliche Besonderheiten</p>
          </div>
        </CardContent>
      </Card>
    </ProgressItem>

    <!-- Leistungsstufe -->
    <!-- color: orange-800 -->
    <ProgressItem
      :value="'advanced'"
      :title="'Leistungsstufe'"
      :color="'neutral-800'"
      :progress="phaseProgressRatios['Leistungsstufe']"
    >
      <Card class="mt-2 -mb-4 border border-neutral-800 rounded-none">
        <CardContent>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Leistungsstufe'][
                  'Fahrbahnbenutzung'
                ] as boolean
              "
            />
            <p class="text-lg">Fahrbahnbenutzung</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Leistungsstufe'][
                  'Fahrstreifenwechsel'
                ] as boolean
              "
            />
            <p class="text-lg">Fahrstreifenwechsel</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Leistungsstufe'][
                  'Vorbeifahren / Überholen'
                ] as boolean
              "
            />
            <p class="text-lg">Vorbeifahren / Überholen</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Leistungsstufe']['Abbiegen'] as boolean
              "
            />
            <p class="text-lg">Abbiegen</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Leistungsstufe']['Vorfahrt'] as boolean
              "
            />
            <p class="text-lg">Vorfahrt</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Leistungsstufe'][
                  'Geschwindigkeit / Abstand'
                ] as boolean
              "
            />
            <p class="text-lg">Geschwindigkeit / Abstand</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Leistungsstufe'][
                  'Situationen mit anderen Verkehrsteilnehmern'
                ] as boolean
              "
            />
            <p class="text-lg">Situationen mit anderen Verkehrsteilnehmern</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Leistungsstufe'][
                  'Schwierige Verkehrsführung'
                ] as boolean
              "
            />
            <p class="text-lg">Schwierige Verkehrsführung</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Leistungsstufe']['Engpass'] as boolean
              "
            />
            <p class="text-lg">Engpass</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Leistungsstufe']['Kreisverkehr'] as boolean
              "
            />
            <p class="text-lg">Kreisverkehr</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Leistungsstufe'][
                  'Bahnübergang (warten)'
                ] as boolean
              "
            />
            <p class="text-lg">Bahnübergang (warten)</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Leistungsstufe'][
                  'Kritische Verkehrssituationen'
                ] as boolean
              "
            />
            <p class="text-lg">Kritische Verkehrssituationen</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Leistungsstufe'][
                  'Fußgänger Schutzbereich'
                ] as boolean
              "
            />
            <p class="text-lg">Fußgänger Schutzbereich</p>
          </div>
        </CardContent>
      </Card>
    </ProgressItem>

    <!-- Überlandfahrt -->
    <!-- color: yellow-500 -->
    <ProgressItem
      :value="'trip-country'"
      :title="'Überlandfahrt'"
      :color="'neutral-800'"
      :progress="phaseProgressRatios['Überlandfahrt']"
    >
      <Card class="mt-2 -mb-4 border border-neutral-800 rounded-none">
        <CardContent>
          <div class="flex items-center">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Überlandfahrt'][
                  'Angepasste Geschwindigkeit / Gangwahl (alle Gänge)'
                ] as boolean
              "
            />
            <p class="text-lg">Angepasste Geschwindigkeit / Gangwahl (alle Gänge)</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Überlandfahrt']['Abstand'] as boolean
              "
            />
            <p class="text-lg">Abstand</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Überlandfahrt'][
                  'Beobachtung / Spiegel'
                ] as boolean
              "
            />
            <p class="text-lg">Beobachtung / Spiegel</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Überlandfahrt']['Verkehrszeichen'] as boolean
              "
            />
            <p class="text-lg">Verkehrszeichen</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Überlandfahrt'][
                  'Kreuzungen / Einmündungen'
                ] as boolean
              "
            />
            <p class="text-lg">Kreuzungen / Einmündungen</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Überlandfahrt']['Kurven'] as boolean
              "
            />
            <p class="text-lg">Kurven</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Überlandfahrt']['Steigungen'] as boolean
              "
            />
            <p class="text-lg">Steigungen</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Überlandfahrt']['Gefälle'] as boolean
              "
            />
            <p class="text-lg">Gefälle</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Überlandfahrt']['Alleen'] as boolean
              "
            />
            <p class="text-lg">Alleen</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Überlandfahrt']['Überholen'] as boolean
              "
            />
            <p class="text-lg">Überholen</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Überlandfahrt'][
                  'Besondere Situationen'
                ] as boolean
              "
            />
            <p class="text-lg">Besondere Situationen</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Überlandfahrt'][
                  'Besondere Anforderungen'
                ] as boolean
              "
            />
            <p class="text-lg">Besondere Anforderungen</p>
          </div>
        </CardContent>
      </Card>
    </ProgressItem>

    <!-- Autobahnfahrt -->
    <!-- color: yellow-500 -->
    <ProgressItem
      :value="'trip-highway'"
      :title="'Autobahnfahrt'"
      :color="'neutral-800'"
      :progress="phaseProgressRatios['Autobahnfahrt']"
    >
      <Card class="mt-2 -mb-4 border border-neutral-800 rounded-none">
        <CardContent>
          <div class="flex items-center">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Autobahnfahrt']['Fahrtplanung'] as boolean
              "
            />
            <p class="text-lg">Fahrtplanung</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Autobahnfahrt'][
                  'Einfahren in Bundesautobahn (BAB)'
                ] as boolean
              "
            />
            <p class="text-lg">Einfahren in Bundesautobahn (BAB)</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Autobahnfahrt'][
                  'Fahrstreifenwechsel'
                ] as boolean
              "
            />
            <p class="text-lg">Fahrstreifenwahl</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Autobahnfahrt']['Geschwindigkeit'] as boolean
              "
            />
            <p class="text-lg">Geschwindigkeit</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Autobahnfahrt']['Abstand'] as boolean
              "
            />
            <p class="text-lg">Abstand</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Autobahnfahrt']['Überholen'] as boolean
              "
            />
            <p class="text-lg">Überholen</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Autobahnfahrt'][
                  'Schilder / Markierungen'
                ] as boolean
              "
            />
            <p class="text-lg">Schilder / Markierungen</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Autobahnfahrt'][
                  'Vorbeifahren / Anschlussstellen'
                ] as boolean
              "
            />
            <p class="text-lg">Vorbeifahren / Anschlussstellen</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Autobahnfahrt'][
                  'Rest- / Parkplätze, Tankstellen'
                ] as boolean
              "
            />
            <p class="text-lg">Rest- / Parkplätze, Tankstellen</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Autobahnfahrt'][
                  'Verhalten bei Unfällen'
                ] as boolean
              "
            />
            <p class="text-lg">Verhalten bei Unfällen</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Autobahnfahrt'][
                  'Dichter Verkehr / Stau'
                ] as boolean
              "
            />
            <p class="text-lg">Dichter Verkehr / Stau</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Autobahnfahrt'][
                  'Besondere Situationen'
                ] as boolean
              "
            />
            <p class="text-lg">Besondere Situationen</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Autobahnfahrt'][
                  'Besondere Anforderungen'
                ] as boolean
              "
            />
            <p class="text-lg">Besondere Anforderungen</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Autobahnfahrt'][
                  'Verlassen der Bundesautobahn (BAB)'
                ] as boolean
              "
            />
            <p class="text-lg">Verlassen der Bundesautobahn (BAB)</p>
          </div>
        </CardContent>
      </Card>
    </ProgressItem>

    <!-- Nachtfahrt -->
    <!-- color: yellow-500 -->
    <ProgressItem
      :value="'trip-night'"
      :title="'Nachtfahrt'"
      :color="'neutral-800'"
      :progress="phaseProgressRatios['Nachtfahrt']"
    >
      <Card class="mt-2 -mb-4 border rounded-none border-neutral-800">
        <CardContent>
          <div class="flex items-center">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Nachtfahrt']['Beleuchtung'] as boolean
              "
            />
            <p class="text-lg">Beleuchtung</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Nachtfahrt']['Beleuchtete Straßen'] as boolean
              "
            />
            <p class="text-lg">Beleuchtete Straßen</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Nachtfahrt'][
                  'Unbeleuchtete Straßen'
                ] as boolean
              "
            />
            <p class="text-lg">Unbeleuchtete Straßen</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Nachtfahrt']['Parken'] as boolean
              "
            />
            <p class="text-lg">Parken</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Nachtfahrt'][
                  'Besondere Situationen'
                ] as boolean
              "
            />
            <p class="text-lg">Besondere Situationen</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Nachtfahrt'][
                  'Besondere Anforderungen'
                ] as boolean
              "
            />
            <p class="text-lg">Besondere Anforderungen</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Nachtfahrt'][
                  'Abschlussbesprechung'
                ] as boolean
              "
            />
            <p class="text-lg">Abschlussbesprechung</p>
          </div>
        </CardContent>
      </Card>
    </ProgressItem>

    <!-- Reife- und Teststufe -->
    <!-- color: green-400 -->
    <ProgressItem
      :value="'maturation'"
      :title="'Reife- und Teststufe'"
      :color="'neutral-800'"
      :progress="phaseProgressRatios['Reife- und Teststufe']"
    >
      <Card class="mt-2 -mb-4 border border-neutral-800 rounded-none">
        <CardContent>
          <div class="flex items-center">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Reife- und Teststufe'][
                  'Selbstständiges Fahren'
                ] as boolean
              "
            />
            <p class="text-lg">Selbstständiges Fahren</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Reife- und Teststufe'][
                  'Verantwortungsbewusstes Fahren'
                ] as boolean
              "
            />
            <p class="text-lg">Verantwortungsbewusstes Fahren</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Reife- und Teststufe'][
                  'Testfahrt unter Prüfungsbedingungen'
                ] as boolean
              "
            />
            <p class="text-lg">Testfahrt unter Prüfungsbedingungen</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Reife- und Teststufe'][
                  'Wiederholung / Vertiefung'
                ] as boolean
              "
            />
            <p class="text-lg">Wiederholung / Vertiefung</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Reife- und Teststufe'][
                  'Leistungsbewertung'
                ] as boolean
              "
            />
            <p class="text-lg">Leistungsbewertung</p>
          </div>
        </CardContent>
      </Card>
    </ProgressItem>

    <!-- Situative Bausteine -->
    <!-- color: blue-500 -->
    <ProgressItem
      :value="'situational'"
      :title="'Situative Bausteine'"
      :color="'neutral-800'"
      :progress="phaseProgressRatios['Situative Bausteine']"
    >
      <Card class="mt-2 border border-neutral-800 rounded-none">
        <CardHeader>
          <CardTitle class="text-lg">Checkliste zur fahrtechnischen Vorbereitung</CardTitle>
        </CardHeader>
        <CardContent>
          <p class="text-lg font-semibold">Beim Fahrzeug</p>
          <div class="flex items-center mt-2">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Situative Bausteine'][
                  'Scheinwerfer, Leuchten, Blinker, Hupe'
                ] as boolean
              "
            />
            <p class="text-lg">Scheinwerfer, Leuchten, Blinker, Hupe</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Situative Bausteine'][
                  'Funktionsprüfung der Lichter / Leuchten'
                ] as boolean
              "
            />
            <p class="text-lg">Funktionsprüfung der Lichter / Leuchten</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Situative Bausteine'][
                  'Kontrollleuchten benennen'
                ] as boolean
              "
            />
            <p class="text-lg">Kontrollleuchten benennen</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Situative Bausteine'][
                  'Rückstrahler'
                ] as boolean
              "
            />
            <p class="text-lg">Rückstrahler</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Situative Bausteine']['Lenkung'] as boolean
              "
            />
            <p class="text-lg">Lenkung</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Situative Bausteine'][
                  'Funktionsprüfung der Bremsen'
                ] as boolean
              "
            />
            <p class="text-lg">Funktionsprüfung der Bremsen</p>
          </div>
          <p class="mt-6 text-lg font-semibold">Beim Fahrer (vor Fahrtbeginn)</p>
          <div class="flex items-center mt-2">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Situative Bausteine'][
                  'Richtige Sitzeinstellung'
                ] as boolean
              "
            />
            <p class="text-lg">Richtige Sitzeinstellung</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Situative Bausteine'][
                  'Einstellung der Rückspiegel'
                ] as boolean
              "
            />
            <p class="text-lg">Einstellung der Rückspiegel</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Situative Bausteine'][
                  'Anlegen des Sicherheitsgurtes'
                ] as boolean
              "
            />
            <p class="text-lg">Anlegen des Sicherheitsgurtes</p>
          </div>
        </CardContent>
      </Card>
      <Card class="mt-2 border border-neutral-800 rounded-none">
        <CardHeader>
          <CardTitle class="text-lg"> Heizung und Lüftung </CardTitle>
        </CardHeader>
        <CardContent>
          <div class="flex items-center">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Situative Bausteine'][
                  'Bedienen der Aggregate'
                ] as boolean
              "
            />
            <p class="text-lg">Bedienen der Aggregate</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Situative Bausteine'][
                  'Energiesparende Nutzung'
                ] as boolean
              "
            />
            <p class="text-lg">Energiesparende Nutzung</p>
          </div>
        </CardContent>
      </Card>
      <Card class="mt-2 border border-neutral-800 rounded-none">
        <CardHeader>
          <CardTitle class="text-lg">Betriebs- und Verkehrssicherheit</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="flex items-center">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Situative Bausteine'][
                  'Motorraum / Flüssigkeitsstände'
                ] as boolean
              "
            />
            <p class="text-lg">Motorraum / Flüssigkeitsstände</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Situative Bausteine']['Tanken'] as boolean
              "
            />
            <p class="text-lg">Tanken</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Situative Bausteine'][
                  'Sicherungsmittel'
                ] as boolean
              "
            />
            <p class="text-lg">Sicherungsmittel</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Situative Bausteine'][
                  'Außenkontrolle'
                ] as boolean
              "
            />
            <p class="text-lg">Außenkontrolle</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Situative Bausteine']['Bremsen'] as boolean
              "
            />
            <p class="text-lg">Bremsen</p>
          </div>
          <div class="flex items-center mt-1">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Situative Bausteine']['Ladung'] as boolean
              "
            />
            <p class="text-lg">Ladung</p>
          </div>
        </CardContent>
      </Card>
      <Card class="mt-2 border border-neutral-800 rounded-none">
        <CardHeader>
          <CardTitle class="text-lg">Witterung</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="flex items-center">
            <Checkbox
              class="rounded-lg border border-neutral-500 mr-4 cursor-pointer"
              v-model:modelValue="
                studentStore.studentLearningProgress['Situative Bausteine'][
                  'Fahren bei schlechter Witterung'
                ] as boolean
              "
            />
            <p class="text-lg">Fahren bei schlechter Witterung</p>
          </div>
        </CardContent>
      </Card>
    </ProgressItem>
  </Accordion>
</template>
