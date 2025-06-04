<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
</script>

<template>
  <Tabs default-value="plan">
    <TabsList class="flex justify-between w-full mb-2">
      <TabsTrigger value="plan"> Fahrplan </TabsTrigger>
      <TabsTrigger value="progress"> Fortschritt </TabsTrigger>
      <TabsTrigger value="protocol"> Protokoll </TabsTrigger>
    </TabsList>
    <TabsContent value="plan">
      <Card>
        <CardContent>Plan</CardContent>
      </Card>
    </TabsContent>
    <TabsContent value="progress">
      <Card>
        <CardContent>Progress</CardContent>
      </Card>
    </TabsContent>
    <TabsContent value="protocol">
      <Card>
        <CardContent>Protocol</CardContent>
      </Card>
    </TabsContent>
  </Tabs>
</template>

<style scoped></style>
