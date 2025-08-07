<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Card, CardContent } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Checkbox } from '@/components/ui/checkbox'
import { Separator } from '@/components/ui/separator'
import { ChevronDown } from 'lucide-vue-next'

import ProgressItem from '@/components/ProgressItem.vue'
</script>

<template>
  <Accordion type="single" collapsible class="w-full">
    <!-- Grundstufe -->
    <ProgressItem :value="'basic'" :title="'Grundstufe: 100%'" :color="'orange-400'" class="-mt-2">
      <Card class="mt-2 -mb-4 border border-orange-400 bg-neutral-900 text-white rounded-lg">
        <CardContent>
          <ScrollArea class="h-100 pr-4">
            <div class="flex justify-between items-center">
              <p class="text-lg">Besonderheiten beim Einsteigen</p>
            </div>
            <Separator class="mt-1 bg-neutral-800" />
            <div class="flex justify-between items-center mt-1">
              <p class="text-lg">Einstellen</p>
              <Checkbox class="rounded-lg border border-neutral-500" />
            </div>
            <Separator class="mt-1 bg-neutral-800" />
            <div class="flex justify-between items-center mt-1">
              <p class="text-lg">Lenkradhaltung</p>
              <Checkbox class="rounded-lg border border-neutral-500" />
            </div>
            <Separator class="mt-1 bg-neutral-800" />
            <div class="flex justify-between items-center mt-1">
              <p class="text-lg">Pedale</p>
              <Checkbox class="rounded-lg border border-neutral-500" />
            </div>
            <Separator class="mt-1 bg-neutral-800" />
            <div class="flex justify-between items-center mt-1">
              <p class="text-lg">Gurt anlegen / anpassen</p>
              <Checkbox class="rounded-lg border border-neutral-500" />
            </div>
            <Separator class="mt-1 bg-neutral-800" />
            <div class="flex justify-between items-center mt-1">
              <p class="text-lg">Schalt- / Wählhebel</p>
              <Checkbox class="rounded-lg border border-neutral-500" />
            </div>
            <Separator class="mt-1 bg-neutral-800" />
            <div class="flex justify-between items-center mt-1">
              <p class="text-lg">Zündschloss</p>
              <Checkbox class="rounded-lg border border-neutral-500" />
            </div>
            <Separator class="mt-1 bg-neutral-800" />
            <div class="flex justify-between items-center mt-1">
              <p class="text-lg">Motor anlassen</p>
              <Checkbox class="rounded-lg border border-neutral-500" />
            </div>
            <Separator class="mt-1 bg-neutral-800" />
            <div class="flex justify-between items-center mt-1">
              <p class="text-lg">Anfahr- / Anhalteübungen</p>
              <Checkbox class="rounded-lg border border-neutral-500" />
            </div>
            <Separator class="mt-1 bg-neutral-800" />
            <div class="flex justify-between items-center mt-1">
              <p class="text-lg">Schaltübungen (umweltschonend)</p>
              <Checkbox class="rounded-lg border border-neutral-500" />
            </div>
            <Separator class="mt-1 bg-neutral-800" />
            <div class="flex justify-between items-center mt-1">
              <p class="text-lg">Schalt- / Wählhebel</p>
              <Checkbox class="rounded-lg border border-neutral-500" />
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </ProgressItem>

    <!-- Grundfahraufgaben -->
    <ProgressItem :value="'tasks'" :title="'Grundfahraufgaben: 10%'" :color="'orange-500'">
      <Card class="mt-2 -mb-4 border border-orange-500 bg-neutral-900 rounded-lg">
        <CardContent>
          <ScrollArea class="h64 pr-4">
            <div class="flex justify-between items-center">
              <p class="text-lg">Rückwärtsfahren</p>
              <Checkbox class="rounded-lg" />
            </div>
            <Separator class="mt-1" />
            <div class="flex justify-between items-center">
              <p class="text-lg">Umkehren</p>
              <Checkbox class="rounded-lg" />
            </div>
            <Separator class="mt-1" />
            <div class="flex justify-between items-center">
              <p class="text-lg">Gefahrbremsung</p>
              <Checkbox class="rounded-lg" />
            </div>
            <Separator class="mt-1" />
            <div class="flex justify-between items-center">
              <p class="text-lg">Einparken längs</p>
              <Checkbox class="rounded-lg" />
            </div>
            <Separator class="mt-1" />
            <div class="flex justify-between items-center">
              <p class="text-lg">Einparken quer</p>
              <Checkbox class="rounded-lg" />
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </ProgressItem>

    <!-- Aufbaustufe -->
    <ProgressItem :value="'intermediate'" :title="'Aufbaustufe: 35%'" :color="'orange-600'">
      <Card class="mt-2 -mb-4 bg-neutral-900 border border-orange-600 rounded-lg">
        <CardContent>
          <ScrollArea>
            <div class="flex justify-between items-center">
              <p class="text-lg">Rollen und Schalten</p>
              <Checkbox class="rounded-lg" />
            </div>
            <Separator class="mt-1" />
            <div class="flex justify-between items-center">
              <p class="text-lg">Abbremsen und Schalten</p>
              <Checkbox class="rounded-lg" />
            </div>
            <Separator class="mt-1" />
            <div class="flex justify-between items-center">
              <p class="text-lg">Bremsübungen</p>
              <Checkbox class="rounded-lg" />
            </div>
            <Separator class="mt-1" />
            <div class="flex justify-between items-center">
              <p class="text-lg">Tastgeschwindigkeit</p>
              <Checkbox class="rounded-lg" />
            </div>
            <Separator class="mt-1" />
            <div class="flex justify-between items-center">
              <p class="text-lg">Bedienungs + Kontrolleinrichtungen</p>
              <Checkbox class="rounded-lg" />
            </div>
            <Separator class="mt-1" />
            <div class="flex justify-between items-center">
              <p class="text-lg">Örtliche Besonderheiten</p>
              <Checkbox class="rounded-lg" />
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </ProgressItem>

    <!-- Leistungsstufe -->
    <ProgressItem :value="'advanced'" :title="'Leistungsstufe: 15%'" :color="'orange-800'">
      <Card class="mt-2 -mb-4 border border-orange-800 bg-neutral-900 rounded-lg">
        <CardContent>
          <ScrollArea>
            <div class="flex justify-between items-center">
              <p class="text-lg">Fahrbahnbenutzung</p>
              <Checkbox class="rounded-lg" />
            </div>
            <Separator class="mt-1" />
            <div class="flex justify-between items-center">
              <p class="text-lg">Fahrstreifenwechsel</p>
              <Checkbox class="rounded-lg" />
            </div>
            <Separator class="mt-1" />
            <div class="flex justify-between items-center">
              <p class="text-lg">Vorbeifahren / Überholen</p>
              <Checkbox class="rounded-lg" />
            </div>
            <Separator class="mt-1" />
            <div class="flex justify-between items-center">
              <p class="text-lg">Abbiegen</p>
              <Checkbox class="rounded-lg" />
            </div>
            <Separator class="mt-1" />
            <div class="flex justify-between items-center">
              <p class="text-lg">Vorfahrt</p>
              <Checkbox class="rounded-lg" />
            </div>
            <Separator class="mt-1" />
            <div class="flex justify-between items-center">
              <p class="text-lg">Geschwindigkeit / Abstand</p>
              <Checkbox class="rounded-lg" />
            </div>
            <Separator class="mt-1" />
            <div class="flex justify-between items-center">
              <p class="text-lg">Situationen mit anderen Verkehrsteilnehmern</p>
              <Checkbox class="rounded-lg" />
            </div>
            <Separator class="mt-1" />
            <div class="flex justify-between items-center">
              <p class="text-lg">Schwierige Verkehrsführung</p>
              <Checkbox class="rounded-lg" />
            </div>
            <Separator class="mt-1" />
            <div class="flex justify-between items-center">
              <p class="text-lg">Engpass</p>
              <Checkbox class="rounded-lg" />
            </div>
            <Separator class="mt-1" />
            <div class="flex justify-between items-center">
              <p class="text-lg">Kreisverkehr</p>
              <Checkbox class="rounded-lg" />
            </div>
            <Separator class="mt-1" />
            <div class="flex justify-between items-center">
              <p class="text-lg">Bahnübergang (warten)</p>
              <Checkbox class="rounded-lg" />
            </div>
            <Separator class="mt-1" />
            <div class="flex justify-between items-center">
              <p class="text-lg">Kritische Verkehrssituationen</p>
              <Checkbox class="rounded-lg" />
            </div>
            <Separator class="mt-1" />
            <div class="flex justify-between items-center">
              <p class="text-lg">Fußgänger Schutzbereich</p>
              <Checkbox class="rounded-lg" />
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </ProgressItem>

    <!-- Überlandfahrt -->
    <ProgressItem :value="'trip-country'" :title="'Überlandfahrt: 100%'" :color="'yellow-500'">
      <Card class="mt-2 -mb-4 border border-yellow-500 bg-neutral-900">
        <CardContent>
          <div class="flex justify-between items-center">
            <p class="text-lg">Angepasste Geschwindigkeit / Gangwahl (alle Gänge)</p>
            <Checkbox class="rounded-lg" />
          </div>
          <Separator class="mt-1" />
          <div class="flex justify-between items-center">
            <p class="text-lg">Abstand</p>
            <Checkbox class="rounded-lg" />
          </div>
          <Separator class="mt-1" />
          <div class="flex justify-between items-center">
            <p class="text-lg">Beobachtung / Spiegel</p>
            <Checkbox class="rounded-lg" />
          </div>
          <Separator class="mt-1" />
          <div class="flex justify-between items-center">
            <p class="text-lg">Verkehrszeichen</p>
            <Checkbox class="rounded-lg" />
          </div>
          <Separator class="mt-1" />
          <div class="flex justify-between items-center">
            <p class="text-lg">Kreuzungen / Einmündungen</p>
            <Checkbox class="rounded-lg" />
          </div>
          <Separator class="mt-1" />
          <div class="flex justify-between items-center">
            <p class="text-lg">Kurven</p>
            <Checkbox class="rounded-lg" />
          </div>
          <Separator class="mt-1" />
          <div class="flex justify-between items-center">
            <p class="text-lg">Steigungen</p>
            <Checkbox class="rounded-lg" />
          </div>
          <Separator class="mt-1" />
          <div class="flex justify-between items-center">
            <p class="text-lg">Steigungen</p>
            <Checkbox class="rounded-lg" />
          </div>
          <Separator class="mt-1" />
          <div class="flex justify-between items-center">
            <p class="text-lg">Gefälle</p>
            <Checkbox class="rounded-lg" />
          </div>
          <Separator class="mt-1" />
          <div class="flex justify-between items-center">
            <p class="text-lg">Alleen</p>
            <Checkbox class="rounded-lg" />
          </div>
          <Separator class="mt-1" />
          <div class="flex justify-between items-center">
            <p class="text-lg">Überholen</p>
            <Checkbox class="rounded-lg" />
          </div>
          <Separator class="mt-1" />
          <div class="flex justify-between items-center">
            <p class="text-lg">Besondere Situationen</p>
            <Checkbox class="rounded-lg" />
          </div>
          <Separator class="mt-1" />
          <div class="flex justify-between items-center">
            <p class="text-lg">Besondere Anforderungen</p>
            <Checkbox class="rounded-lg" />
          </div>
        </CardContent>
      </Card>
    </ProgressItem>

    <!-- Autobahnfahrt -->
    <ProgressItem :value="'trip-highway'" :title="'Autobahnfahrt: 100%'" :color="'yellow-500'">
      <Card class="mt-2 -mb-4 border border-yellow-500 bg-neutral-900">
        <CardContent>
          <div class="flex justify-between items-center">
            <p class="text-lg">Fahrtplanung</p>
            <Checkbox class="rounded-lg" />
          </div>
          <Separator class="mt-1" />
          <div class="mt-2 flex justify-between items-center">
            <p class="text-lg">Einfahren in Bundesautobahn (BAB)</p>
            <Checkbox class="rounded-lg" />
          </div>
          <Separator class="mt-1" />
          <div class="mt-2 flex justify-between items-center">
            <p class="text-lg">Fahrstreifenwahl</p>
            <Checkbox class="rounded-lg" />
          </div>
          <Separator class="mt-1" />
          <div class="mt-2 flex justify-between items-center">
            <p class="text-lg">Geschwindigkeit</p>
            <Checkbox class="rounded-lg" />
          </div>
          <Separator class="mt-1" />
          <div class="mt-2 flex justify-between items-center">
            <p class="text-lg">Abstand</p>
            <Checkbox class="rounded-lg" />
          </div>
          <Separator class="mt-1" />
          <div class="mt-2 flex justify-between items-center">
            <p class="text-lg">Überholen</p>
            <Checkbox class="rounded-lg" />
          </div>
          <Separator class="mt-1" />
          <div class="mt-2 flex justify-between items-center">
            <p class="text-lg">Schilder / Markierungen</p>
            <Checkbox class="rounded-lg" />
          </div>
          <Separator class="mt-1" />
          <div class="mt-2 flex justify-between items-center">
            <p class="text-lg">Vorbeifahren / Anschlussstellen</p>
            <Checkbox class="rounded-lg" />
          </div>
          <Separator class="mt-1" />
          <div class="mt-2 flex justify-between items-center">
            <p class="text-lg">Rest- / Parkplätze, Tankstellen</p>
            <Checkbox class="rounded-lg" />
          </div>
          <Separator class="mt-1" />
          <div class="mt-2 flex justify-between items-center">
            <p class="text-lg">Verhalten bei Unfällen</p>
            <Checkbox class="rounded-lg" />
          </div>
          <Separator class="mt-1" />
          <div class="mt-2 flex justify-between items-center">
            <p class="text-lg">Dichter Verkehr / Stau</p>
            <Checkbox class="rounded-lg" />
          </div>
          <Separator class="mt-1" />
          <div class="mt-2 flex justify-between items-center">
            <p class="text-lg">Besondere Situationen</p>
            <Checkbox class="rounded-lg" />
          </div>
          <Separator class="mt-1" />
          <div class="mt-2 flex justify-between items-center">
            <p class="text-lg">Besondere Anforderungen</p>
            <Checkbox class="rounded-lg" />
          </div>
          <Separator class="mt-1" />
          <div class="mt-2 flex justify-between items-center">
            <p class="text-lg">Verlassen der Bundesautobahn (BAB)</p>
            <Checkbox class="rounded-lg" />
          </div>
        </CardContent>
      </Card>
    </ProgressItem>

    <!-- Nachtfahrt -->
    <ProgressItem :value="'trip-night'" :title="'Nachtfahrt: 100%'" :color="'yellow-500'">
      <Card class="mt-2 -mb-4 border rounded-lg border-yellow-500 bg-neutral-900">
        <CardContent>
          <div class="flex justify-between items-center">
            <p class="text-lg">Beleuchtung</p>
            <Checkbox class="rounded-lg" />
          </div>
          <Separator class="mt-1" />
          <div class="mt-2 flex justify-between items-center">
            <p class="text-lg">Beleuchtete Straßen</p>
            <Checkbox class="rounded-lg" />
          </div>
          <Separator class="mt-1" />
          <div class="mt-2 flex justify-between items-center">
            <p class="text-lg">Unbeleuchtete Straßen</p>
            <Checkbox class="rounded-lg" />
          </div>
          <Separator class="mt-1" />
          <div class="mt-2 flex justify-between items-center">
            <p class="text-lg">Parken</p>
            <Checkbox class="rounded-lg" />
          </div>
          <Separator class="mt-1" />
          <div class="mt-2 flex justify-between items-center">
            <p class="text-lg">Besondere Situationen</p>
            <Checkbox class="rounded-lg" />
          </div>
          <Separator class="mt-1" />
          <div class="mt-2 flex justify-between items-center">
            <p class="text-lg">Besondere Anforderungen</p>
            <Checkbox class="rounded-lg" />
          </div>
          <Separator class="mt-1" />
          <div class="mt-2 flex justify-between items-center">
            <p class="text-lg">Abschlussbesprechung</p>
            <Checkbox class="rounded-lg" />
          </div>
        </CardContent>
      </Card>
    </ProgressItem>

    <!-- Reife- und Teststufe -->
    <ProgressItem :value="'maturation'" :title="'Reife- und Teststufe: 15%'" :color="'green-400'">
      <Card class="mt-2 -mb-4 border border-green-400 bg-neutral-900 text-black">
        <CardContent>
          <div class="mt-2 flex justify-between items-center">
            <p class="text-lg">Selbstständiges Fahren</p>
            <Checkbox class="rounded-lg" />
          </div>
          <Separator class="mt-1" />
          <div class="mt-2 flex justify-between items-center">
            <p class="text-lg">Verantwortungsbewusstes Fahren</p>
            <Checkbox class="rounded-lg" />
          </div>
          <Separator class="mt-1" />
          <div class="mt-2 flex justify-between items-center">
            <p class="text-lg">Testfahrt unter Prüfungsbedingungen</p>
            <Checkbox class="rounded-lg" />
          </div>
          <Separator class="mt-1" />
          <div class="mt-2 flex justify-between items-center">
            <p class="text-lg">Wiederholung / Vertiefung</p>
            <Checkbox class="rounded-lg" />
          </div>
          <Separator class="mt-1" />
          <div class="mt-2 flex justify-between items-center">
            <p class="text-lg">Leistungsbewertung</p>
            <Checkbox class="rounded-lg" />
          </div>
        </CardContent>
      </Card>
    </ProgressItem>

    <!-- Situative Bausteine -->
    <AccordionItem value="situational" class="mt-2">
      <AccordionTrigger class="text-xl bg-neutral-800 px-4">
        Situative Bausteine: 0%
        <template #icon>
          <ChevronDown
            class="text-white pointer-events-none size-6 shrink-0 translate-y-0.5 transition-transform duration-200"
          />
        </template>
      </AccordionTrigger>
      <AccordionContent>
        <Card class="mt-2 border border-blue-300 bg-blue-300 text-black">
          <CardContent>
            <p class="text-xl font-bold underline">Checkliste zur fahrtechnischen Vorbereitung</p>
            <p class="mt-2 text-lg font-semibold">Beim Fahrzeug</p>
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Scheinwerfer, Leuchten, Blinker, Hupe</p>
              <Checkbox class="rounded-lg" />
            </div>
            <Separator class="mt-1" />
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Funktion Prüfen</p>
              <Checkbox class="rounded-lg" />
            </div>
            <Separator class="mt-1" />
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Kontrollleuchten benennen</p>
              <Checkbox class="rounded-lg" />
            </div>
            <Separator class="mt-1" />
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Rückstrahler</p>
              <Checkbox class="rounded-lg" />
            </div>
            <Separator class="mt-1" />
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Lenkung</p>
              <Checkbox class="rounded-lg" />
            </div>
            <Separator class="mt-1" />
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Funktionsprüfung der Bremsen</p>
              <Checkbox class="rounded-lg" />
            </div>
            <Separator class="mt-1" />
            <p class="mt-2 text-lg font-semibold">Beim Fahrer (vor Fahrtbeginn)</p>
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Richtige Sitzeinstellung</p>
              <Checkbox class="rounded-lg" />
            </div>
            <Separator class="mt-1" />
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Einstellung der Rückspiegel</p>
              <Checkbox class="rounded-lg" />
            </div>
            <Separator class="mt-1" />
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Anlegen des Sicherheitsgurtes</p>
              <Checkbox class="rounded-lg" />
            </div>
            <p class="mt-4 text-xl font-semibold underline">Heizung und Lüftung</p>
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Bedienen der Aggregate</p>
              <Checkbox class="rounded-lg" />
            </div>
            <Separator class="mt-1" />
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Energiesparende Nutzung</p>
              <Checkbox class="rounded-lg" />
            </div>

            <p class="mt-4 text-xl font-semibold underline">Betriebs- und Verkehrssicherheit</p>
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Motorraum / Flüssigkeitsstände</p>
              <Checkbox class="rounded-lg" />
            </div>
            <Separator class="mt-1" />
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Tanken</p>
              <Checkbox class="rounded-lg" />
            </div>
            <Separator class="mt-1" />
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Sicherungsmittel</p>
              <Checkbox class="rounded-lg" />
            </div>
            <Separator class="mt-1" />
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Außenkontrolle</p>
              <Checkbox class="rounded-lg" />
            </div>
            <Separator class="mt-1" />
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Bremsen</p>
              <Checkbox class="rounded-lg" />
            </div>
            <Separator class="mt-1" />
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Ladung</p>
              <Checkbox class="rounded-lg" />
            </div>

            <p class="mt-4 text-xl font-semibold underline">Witterung</p>

            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Fahren bei schlechter Witterung</p>
              <Checkbox class="rounded-lg" />
            </div>
          </CardContent>
        </Card>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>

<style scoped></style>
