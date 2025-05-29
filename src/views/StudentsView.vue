<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import mockStudents from '@/stores/mockStudents'
</script>

<template>
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Vorname</TableHead>
        <TableHead>Nachname</TableHead>
        <TableHead>Email</TableHead>
        <TableHead>Telefonnummer</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Typ</TableHead>
        <TableHead>BF17</TableHead>
        <TableHead>Stunden</TableHead>
        <TableHead>Saldo</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="student in mockStudents" :key="student.id">
        <TableCell>{{ student.firstName }}</TableCell>
        <TableCell>{{ student.lastName }}</TableCell>
        <TableCell>{{ student.email }}</TableCell>
        <TableCell>{{ student.phoneNumber }}</TableCell>
        <TableCell>{{ student.status }}</TableCell>
        <TableCell>{{ student.licenseType }}</TableCell>
        <TableCell>{{ student.isBf17 }}</TableCell>
        <TableCell>{{ student.numLessons }}</TableCell>
        <TableCell>{{ student.balance }}</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>

<style scoped></style>
