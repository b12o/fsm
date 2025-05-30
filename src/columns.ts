import { h } from 'vue'
import { Check } from 'lucide-vue-next'
import type { ColumnDef } from '@tanstack/vue-table'
import type { Student } from '@/interfaces'
import type { Instructor } from '@/interfaces'

export const StudentColumns: ColumnDef<Student>[] = [
  {
    accessorKey: 'firstName',
    header: () => h('div', { class: 'text-left' }, 'Vorname'),
    cell: ({ row }) => {
      return h('div', { class: 'font-medium' }, row.getValue('firstName'))
    },
  },
  {
    accessorKey: 'lastName',
    header: () => h('div', { class: 'text-left' }, 'Nachname'),
    cell: ({ row }) => {
      return h('div', { class: 'font-medium' }, row.getValue('lastName'))
    },
  },
  {
    accessorKey: 'email',
    header: () => h('div', { class: 'text-left' }, 'Email'),
    cell: ({ row }) => {
      return h('div', { class: 'font-medium' }, row.getValue('email'))
    },
  },
  {
    accessorKey: 'phoneNumber',
    header: () => h('div', { class: 'text-left' }, 'Telefonnummer'),
    cell: ({ row }) => {
      return h('div', { class: 'font-medium' }, row.getValue('phoneNumber'))
    },
  },
  {
    accessorKey: 'licenseType',
    header: () => h('div', { class: 'text-left' }, 'Typ'),
    cell: ({ row }) => {
      return h('div', { class: 'font-medium' }, row.getValue('licenseType'))
    },
  },
  {
    accessorKey: 'isBf17',
    header: () => h('div', { class: 'text-left' }, 'BF17'),
    cell: ({ row }) => {
      if (row.getValue('isBf17')) {
        return h(Check, { height: 18 })
      }
    },
  },
  {
    accessorKey: 'status',
    header: () => h('div', { class: 'text-left' }, 'Status'),
    cell: ({ row }) => {
      return h(
        'div',
        { class: 'font-medium' },
        row.getValue('status') === 'active' ? 'aktiv' : 'inaktiv',
      )
    },
  },
]

export const InstructorColumns: ColumnDef<Instructor>[] = [
  {
    accessorKey: 'firstName',
    header: () => h('div', { class: 'text-left' }, 'Vorname'),
    cell: ({ row }) => {
      return h('div', { class: 'font-medium' }, row.getValue('firstName'))
    },
  },
  {
    accessorKey: 'lastName',
    header: () => h('div', { class: 'text-left' }, 'Nachname'),
    cell: ({ row }) => {
      return h('div', { class: 'font-medium' }, row.getValue('lastName'))
    },
  },
  {
    accessorKey: 'email',
    header: () => h('div', { class: 'text-left' }, 'Email'),
    cell: ({ row }) => {
      return h('div', { class: 'font-medium' }, row.getValue('email'))
    },
  },
]
