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
</script>

<template>
  <Accordion type="single" collapsible class="w-full">
    <!-- Grundstufe -->
    <AccordionItem value="basic">
      <AccordionTrigger class="text-black text-xl bg-orange-500 px-4">
        Grundstufe: 100%
        <template #icon>
          <ChevronDown
            class="text-black pointer-events-none size-6 shrink-0 translate-y-0.5 transition-transform duration-200"
          />
        </template>
      </AccordionTrigger>
      <AccordionContent>
        <Card class="mt-2 -mb-4 border border-orange-300 bg-orange-300 text-black rounded-lg">
          <CardContent>
            <ScrollArea class="h-100 pr-4">
              <div class="flex justify-between items-center">
                <p class="text-lg">Besonderheiten beim Einsteigen</p>
                <Checkbox />
              </div>
              <Separator class="mt-1" />
              <div class="flex justify-between items-center mt-1">
                <p class="text-lg">Einstellen</p>
                <Checkbox />
              </div>
              <Separator class="mt-1" />
              <div class="flex justify-between items-center mt-1">
                <p class="text-lg">Lenkradhaltung</p>
                <Checkbox />
              </div>
              <Separator class="mt-1" />
              <div class="flex justify-between items-center mt-1">
                <p class="text-lg">Pedale</p>
                <Checkbox />
              </div>
              <Separator class="mt-1" />
              <div class="flex justify-between items-center mt-1">
                <p class="text-lg">Gurt anlegen / anpassen</p>
                <Checkbox />
              </div>
              <Separator class="mt-1" />
              <div class="flex justify-between items-center mt-1">
                <p class="text-lg">Schalt- / Wählhebel</p>
                <Checkbox />
              </div>
              <Separator class="mt-1" />
              <div class="flex justify-between items-center mt-1">
                <p class="text-lg">Zündschloss</p>
                <Checkbox />
              </div>
              <Separator class="mt-1" />
              <div class="flex justify-between items-center mt-1">
                <p class="text-lg">Motor anlassen</p>
                <Checkbox />
              </div>
              <Separator class="mt-1" />
              <div class="flex justify-between items-center mt-1">
                <p class="text-lg">Anfahr- / Anhalteübungen</p>
                <Checkbox />
              </div>
              <Separator class="mt-1" />
              <div class="flex justify-between items-center mt-1">
                <p class="text-lg">Schaltübungen (umweltschonend)</p>
                <Checkbox />
              </div>
              <Separator class="mt-1" />
              <div class="flex justify-between items-center mt-1">
                <p class="text-lg">Schalt- / Wählhebel</p>
                <Checkbox />
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </AccordionContent>
    </AccordionItem>

    <!-- Grundfahraufgaben -->
    <AccordionItem value="tasks" class="mt-2">
      <AccordionTrigger class="text-black text-xl bg-orange-600 px-4">
        Grundfahraufgaben: 75%
        <template #icon>
          <ChevronDown
            class="text-black pointer-events-none size-6 shrink-0 translate-y-0.5 transition-transform duration-200"
          />
        </template>
      </AccordionTrigger>
      <AccordionContent>
        <Card class="mt-2 -mb-4 border border-orange-300 bg-orange-300 text-black rounded-lg">
          <CardContent>
            <ScrollArea class="h64 pr-4">
              <div class="flex justify-between items-center">
                <p class="text-lg">Rückwärtsfahren</p>
                <Checkbox />
              </div>
              <Separator class="mt-1" />
              <div class="flex justify-between items-center">
                <p class="text-lg">Umkehren</p>
                <Checkbox />
              </div>
              <Separator class="mt-1" />
              <div class="flex justify-between items-center">
                <p class="text-lg">Gefahrbremsung</p>
                <Checkbox />
              </div>
              <Separator class="mt-1" />
              <div class="flex justify-between items-center">
                <p class="text-lg">Einparken längs</p>
                <Checkbox />
              </div>
              <Separator class="mt-1" />
              <div class="flex justify-between items-center">
                <p class="text-lg">Einparken quer</p>
                <Checkbox />
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </AccordionContent>
    </AccordionItem>

    <!-- Aufbaustufe -->
    <AccordionItem value="intermediate" class="mt-2">
      <AccordionTrigger class="text-xl bg-orange-700 px-4">
        Aufbaustufe: 67%
        <template #icon>
          <ChevronDown
            class="pointer-events-none size-6 shrink-0 translate-y-0.5 transition-transform duration-200"
          />
        </template>
      </AccordionTrigger>
      <AccordionContent>
        <Card class="mt-2 -mb-4 border border-orange-300 bg-orange-300 text-black rounded-lg">
          <CardContent>
            <ScrollArea>
              <div class="flex justify-between items-center">
                <p class="text-lg">Rollen und Schalten</p>
                <Checkbox />
              </div>
              <Separator class="mt-1" />
              <div class="flex justify-between items-center">
                <p class="text-lg">Abbremsen und Schalten</p>
                <Checkbox />
              </div>
              <Separator class="mt-1" />
              <div class="flex justify-between items-center">
                <p class="text-lg">Bremsübungen</p>
                <Checkbox />
              </div>
              <Separator class="mt-1" />
              <div class="flex justify-between items-center">
                <p class="text-lg">Tastgeschwindigkeit</p>
                <Checkbox />
              </div>
              <Separator class="mt-1" />
              <div class="flex justify-between items-center">
                <p class="text-lg">Bedienungs + Kontrolleinrichtungen</p>
                <Checkbox />
              </div>
              <Separator class="mt-1" />
              <div class="flex justify-between items-center">
                <p class="text-lg">Örtliche Besonderheiten</p>
                <Checkbox />
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </AccordionContent>
    </AccordionItem>

    <!-- Leistungsstufe -->
    <AccordionItem value="advanced" class="mt-2">
      <AccordionTrigger class="text-xl bg-orange-800 px-4">
        Leistungsstufe: 12%
        <template #icon>
          <ChevronDown
            class="pointer-events-none size-6 shrink-0 translate-y-0.5 transition-transform duration-200"
          />
        </template>
      </AccordionTrigger>
      <AccordionContent>
        <Card class="mt-2 -mb-4 border border-orange-300 bg-orange-300 rounded-lg text-black">
          <CardContent>
            <ScrollArea>
              <div class="flex justify-between items-center">
                <p class="text-lg">Fahrbahnbenutzung</p>
                <Checkbox />
              </div>
              <Separator class="mt-1" />
              <div class="flex justify-between items-center">
                <p class="text-lg">Fahrstreifenwechsel</p>
                <Checkbox />
              </div>
              <Separator class="mt-1" />
              <div class="flex justify-between items-center">
                <p class="text-lg">Vorbeifahren / Überholen</p>
                <Checkbox />
              </div>
              <Separator class="mt-1" />
              <div class="flex justify-between items-center">
                <p class="text-lg">Abbiegen</p>
                <Checkbox />
              </div>
              <Separator class="mt-1" />
              <div class="flex justify-between items-center">
                <p class="text-lg">Vorfahrt</p>
                <Checkbox />
              </div>
              <Separator class="mt-1" />
              <div class="flex justify-between items-center">
                <p class="text-lg">Geschwindigkeit / Abstand</p>
                <Checkbox />
              </div>
              <Separator class="mt-1" />
              <div class="flex justify-between items-center">
                <p class="text-lg">Situationen mit anderen Verkehrsteilnehmern</p>
                <Checkbox />
              </div>
              <Separator class="mt-1" />
              <div class="flex justify-between items-center">
                <p class="text-lg">Schwierige Verkehrsführung</p>
                <Checkbox />
              </div>
              <Separator class="mt-1" />
              <div class="flex justify-between items-center">
                <p class="text-lg">Engpass</p>
                <Checkbox />
              </div>
              <Separator class="mt-1" />
              <div class="flex justify-between items-center">
                <p class="text-lg">Kreisverkehr</p>
                <Checkbox />
              </div>
              <Separator class="mt-1" />
              <div class="flex justify-between items-center">
                <p class="text-lg">Bahnübergang (warten)</p>
                <Checkbox />
              </div>
              <Separator class="mt-1" />
              <div class="flex justify-between items-center">
                <p class="text-lg">Kritische Verkehrssituationen</p>
                <Checkbox />
              </div>
              <Separator class="mt-1" />
              <div class="flex justify-between items-center">
                <p class="text-lg">Fußgänger Schutzbereich</p>
                <Checkbox />
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </AccordionContent>
    </AccordionItem>

    <!-- Überlandfahrt -->
    <AccordionItem value="trip-country" class="mt-2">
      <AccordionTrigger class="text-xl text-black bg-yellow-400 px-4">
        Überlandfahrt: 100%
        <template #icon>
          <ChevronDown
            class="text-black pointer-events-none size-6 shrink-0 translate-y-0.5 transition-transform duration-200"
          />
        </template>
      </AccordionTrigger>
      <AccordionContent>
        <Card class="mt-2 -mb-4 border border-yellow-200 bg-yellow-200 text-black">
          <CardContent>
            <div class="flex justify-between items-center">
              <p class="text-lg">Angepasste Geschwindigkeit / Gangwahl (alle Gänge)</p>
              <Checkbox />
            </div>
            <Separator class="mt-1" />
            <div class="flex justify-between items-center">
              <p class="text-lg">Abstand</p>
              <Checkbox />
            </div>
            <Separator class="mt-1" />
            <div class="flex justify-between items-center">
              <p class="text-lg">Beobachtung / Spiegel</p>
              <Checkbox />
            </div>
            <Separator class="mt-1" />
            <div class="flex justify-between items-center">
              <p class="text-lg">Verkehrszeichen</p>
              <Checkbox />
            </div>
            <Separator class="mt-1" />
            <div class="flex justify-between items-center">
              <p class="text-lg">Kreuzungen / Einmündungen</p>
              <Checkbox />
            </div>
            <Separator class="mt-1" />
            <div class="flex justify-between items-center">
              <p class="text-lg">Kurven</p>
              <Checkbox />
            </div>
            <Separator class="mt-1" />
            <div class="flex justify-between items-center">
              <p class="text-lg">Steigungen</p>
              <Checkbox />
            </div>
            <Separator class="mt-1" />
            <div class="flex justify-between items-center">
              <p class="text-lg">Steigungen</p>
              <Checkbox />
            </div>
            <Separator class="mt-1" />
            <div class="flex justify-between items-center">
              <p class="text-lg">Gefälle</p>
              <Checkbox />
            </div>
            <Separator class="mt-1" />
            <div class="flex justify-between items-center">
              <p class="text-lg">Alleen</p>
              <Checkbox />
            </div>
            <Separator class="mt-1" />
            <div class="flex justify-between items-center">
              <p class="text-lg">Überholen</p>
              <Checkbox />
            </div>
            <Separator class="mt-1" />
            <div class="flex justify-between items-center">
              <p class="text-lg">Besondere Situationen</p>
              <Checkbox />
            </div>
            <Separator class="mt-1" />
            <div class="flex justify-between items-center">
              <p class="text-lg">Besondere Anforderungen</p>
              <Checkbox />
            </div>
          </CardContent>
        </Card>
      </AccordionContent>
    </AccordionItem>

    <!-- Autobahnfahrt -->
    <AccordionItem value="trip-highway" class="mt-2">
      <AccordionTrigger class="text-xl text-black bg-yellow-400 px-4">
        Autobahnfahrt: 100%
        <template #icon>
          <ChevronDown
            class="text-black pointer-events-none size-6 shrink-0 translate-y-0.5 transition-transform duration-200"
          />
        </template>
      </AccordionTrigger>
      <AccordionContent>
        <Card class="mt-2 -mb-4 border border-yellow-200 bg-yellow-200 text-black">
          <CardContent>
            <div class="flex justify-between items-center">
              <p class="text-lg">Fahrtplanung</p>
              <Checkbox />
            </div>
            <Separator class="mt-1" />
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Einfahren in Bundesautobahn (BAB)</p>
              <Checkbox />
            </div>
            <Separator class="mt-1" />
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Fahrstreifenwahl</p>
              <Checkbox />
            </div>
            <Separator class="mt-1" />
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Geschwindigkeit</p>
              <Checkbox />
            </div>
            <Separator class="mt-1" />
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Abstand</p>
              <Checkbox />
            </div>
            <Separator class="mt-1" />
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Überholen</p>
              <Checkbox />
            </div>
            <Separator class="mt-1" />
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Schilder / Markierungen</p>
              <Checkbox />
            </div>
            <Separator class="mt-1" />
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Vorbeifahren / Anschlussstellen</p>
              <Checkbox />
            </div>
            <Separator class="mt-1" />
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Rest- / Parkplätze, Tankstellen</p>
              <Checkbox />
            </div>
            <Separator class="mt-1" />
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Verhalten bei Unfällen</p>
              <Checkbox />
            </div>
            <Separator class="mt-1" />
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Dichter Verkehr / Stau</p>
              <Checkbox />
            </div>
            <Separator class="mt-1" />
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Besondere Situationen</p>
              <Checkbox />
            </div>
            <Separator class="mt-1" />
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Besondere Anforderungen</p>
              <Checkbox />
            </div>
            <Separator class="mt-1" />
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Verlassen der Bundesautobahn (BAB)</p>
              <Checkbox />
            </div>
          </CardContent>
        </Card>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="trip-night" class="mt-2">
      <AccordionTrigger class="text-xl text-black bg-yellow-400 px-4"
        >Nachtfahrt: 100%
        <template #icon>
          <ChevronDown
            class="text-black pointer-events-none size-6 shrink-0 translate-y-0.5 transition-transform duration-200"
          />
        </template>
      </AccordionTrigger>
      <AccordionContent>
        <Card class="mt-2 -mb-4 border rounded-lg border-yellow-200 bg-yellow-200 text-black">
          <CardContent>
            <div class="flex justify-between items-center">
              <p class="text-lg">Beleuchtung</p>
              <Checkbox />
            </div>
            <Separator class="mt-1" />
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Beleuchtete Straßen</p>
              <Checkbox />
            </div>
            <Separator class="mt-1" />
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Unbeleuchtete Straßen</p>
              <Checkbox />
            </div>
            <Separator class="mt-1" />
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Parken</p>
              <Checkbox />
            </div>
            <Separator class="mt-1" />
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Besondere Situationen</p>
              <Checkbox />
            </div>
            <Separator class="mt-1" />
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Besondere Anforderungen</p>
              <Checkbox />
            </div>
            <Separator class="mt-1" />
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Abschlussbesprechung</p>
              <Checkbox />
            </div>
          </CardContent>
        </Card>
      </AccordionContent>
    </AccordionItem>

    <!-- Reife- und Teststufe -->
    <AccordionItem value="maturation" class="mt-2">
      <AccordionTrigger class="text-xl bg-green-700 px-4">
        Reife- und Teststufe: 0%
        <template #icon>
          <ChevronDown
            class="text-white pointer-events-none size-6 shrink-0 translate-y-0.5 transition-transform duration-200"
          />
        </template>
      </AccordionTrigger>
      <AccordionContent>
        <Card class="mt-2 -mb-4 border border-green-300 bg-green-300 text-black">
          <CardContent>
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Selbstständiges Fahren</p>
              <Checkbox />
            </div>
            <Separator class="mt-1" />
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Verantwortungsbewusstes Fahren</p>
              <Checkbox />
            </div>
            <Separator class="mt-1" />
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Testfahrt unter Prüfungsbedingungen</p>
              <Checkbox />
            </div>
            <Separator class="mt-1" />
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Wiederholung / Vertiefung</p>
              <Checkbox />
            </div>
            <Separator class="mt-1" />
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Leistungsbewertung</p>
              <Checkbox />
            </div>
          </CardContent>
        </Card>
      </AccordionContent>
    </AccordionItem>

    <!-- Situative Bausteine -->
    <AccordionItem value="situational" class="mt-2">
      <AccordionTrigger class="text-xl bg-blue-500 px-4">
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
              <Checkbox />
            </div>
            <Separator class="mt-1" />
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Funktion Prüfen</p>
              <Checkbox />
            </div>
            <Separator class="mt-1" />
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Kontrollleuchten benennen</p>
              <Checkbox />
            </div>
            <Separator class="mt-1" />
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Rückstrahler</p>
              <Checkbox />
            </div>
            <Separator class="mt-1" />
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Lenkung</p>
              <Checkbox />
            </div>
            <Separator class="mt-1" />
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Funktionsprüfung der Bremsen</p>
              <Checkbox />
            </div>
            <Separator class="mt-1" />
            <p class="mt-2 text-lg font-semibold">Beim Fahrer (vor Fahrtbeginn)</p>
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Richtige Sitzeinstellung</p>
              <Checkbox />
            </div>
            <Separator class="mt-1" />
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Einstellung der Rückspiegel</p>
              <Checkbox />
            </div>
            <Separator class="mt-1" />
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Anlegen des Sicherheitsgurtes</p>
              <Checkbox />
            </div>
            <p class="mt-4 text-xl font-semibold underline">Heizung und Lüftung</p>
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Bedienen der Aggregate</p>
              <Checkbox />
            </div>
            <Separator class="mt-1" />
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Energiesparende Nutzung</p>
              <Checkbox />
            </div>

            <p class="mt-4 text-xl font-semibold underline">Betriebs- und Verkehrssicherheit</p>
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Motorraum / Flüssigkeitsstände</p>
              <Checkbox />
            </div>
            <Separator class="mt-1" />
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Tanken</p>
              <Checkbox />
            </div>
            <Separator class="mt-1" />
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Sicherungsmittel</p>
              <Checkbox />
            </div>
            <Separator class="mt-1" />
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Außenkontrolle</p>
              <Checkbox />
            </div>
            <Separator class="mt-1" />
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Bremsen</p>
              <Checkbox />
            </div>
            <Separator class="mt-1" />
            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Ladung</p>
              <Checkbox />
            </div>

            <p class="mt-4 text-xl font-semibold underline">Witterung</p>

            <div class="mt-2 flex justify-between items-center">
              <p class="text-lg">Fahren bei schlechter Witterung</p>
              <Checkbox />
            </div>
          </CardContent>
        </Card>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>

<style scoped></style>
