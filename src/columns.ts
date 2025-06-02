import { h } from 'vue'
import { Check, ArrowUpDown } from 'lucide-vue-next'
import type { ColumnDef } from '@tanstack/vue-table'
import type { Student } from '@/interfaces'
import type { Instructor } from '@/interfaces'
import { Button } from '@/components/ui/button'

export const StudentColumns: ColumnDef<Student>[] = [
  {
    accessorKey: 'firstName',
    header: ({ column }) => {
      return h(
        Button,
        {
          variant: 'ghost',
          class: '-ml-3',
          onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
        },
        () => ['Vorname', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })],
      )
    },
    cell: ({ row }) => {
      return h('div', { class: 'font-medium' }, row.getValue('firstName'))
    },
  },
  {
    accessorKey: 'lastName',
    header: ({ column }) => {
      return h(
        Button,
        {
          variant: 'ghost',
          class: '-ml-3',
          onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
        },
        () => ['Nachname', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })],
      )
    },
    cell: ({ row }) => {
      return h('div', { class: 'font-medium' }, row.getValue('lastName'))
    },
  },
  {
    accessorKey: 'email',
    header: ({ column }) => {
      return h(
        Button,
        {
          variant: 'ghost',
          class: '-ml-3',
          onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
        },
        () => ['Email', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })],
      )
    },
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
    header: ({ column }) => {
      return h(
        Button,
        {
          variant: 'ghost',
          class: '-ml-3',
          onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
        },
        () => ['Vorname', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })],
      )
    },
    cell: ({ row }) => {
      return h('div', { class: 'font-medium' }, row.getValue('firstName'))
    },
  },
  {
    accessorKey: 'lastName',
    header: ({ column }) => {
      return h(
        Button,
        {
          variant: 'ghost',
          class: '-ml-3',
          onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
        },
        () => ['Nachname', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })],
      )
    },
    cell: ({ row }) => {
      return h('div', { class: 'font-medium' }, row.getValue('lastName'))
    },
  },
  {
    accessorKey: 'email',
    header: ({ column }) => {
      return h(
        Button,
        {
          variant: 'ghost',
          class: '-ml-3',
          onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
        },
        () => ['Email', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })],
      )
    },
    cell: ({ row }) => {
      return h('div', { class: 'font-medium' }, row.getValue('email'))
    },
  },
]
