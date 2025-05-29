<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import mockInstructors from '@/stores/mockInstructors'
</script>

<template>
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Vorname</TableHead>
        <TableHead>Nachname</TableHead>
        <TableHead>Email</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="instructor in mockInstructors" :key="instructor.id">
        <TableCell>{{ instructor.firstName }}</TableCell>
        <TableCell>{{ instructor.lastName }}</TableCell>
        <TableCell>{{ instructor.email }}</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>

<style scoped></style>
