import { h } from 'vue'
import { Check, ArrowUpDown } from 'lucide-vue-next'
import type { ColumnDef } from '@tanstack/vue-table'
import type { Student, Instructor, Vehicle } from '@/types'
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

export const VehicleColumns: ColumnDef<Vehicle>[] = [
  {
    accessorKey: 'licensePlate',
    header: ({ column }) => {
      return h(
        Button,
        {
          variant: 'ghost',
          class: '-ml-3',
          onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
        },
        () => ['Kennzeichen', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })],
      )
    },
    cell: ({ row }) => {
      return h('div', { class: 'font-medium' }, row.getValue('licensePlate'))
    },
  },
  {
    accessorKey: 'make',
    header: ({ column }) => {
      return h(
        Button,
        {
          variant: 'ghost',
          class: '-ml-3',
          onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
        },
        () => ['Marke', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })],
      )
    },
    cell: ({ row }) => {
      return h('div', { class: 'font-medium' }, row.getValue('make'))
    },
  },
  {
    accessorKey: 'model',
    header: ({ column }) => {
      return h(
        Button,
        {
          variant: 'ghost',
          class: '-ml-3',
          onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
        },
        () => ['Modell', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })],
      )
    },
    cell: ({ row }) => {
      return h('div', { class: 'font-medium' }, row.getValue('model'))
    },
  },
  {
    accessorKey: 'year',
    header: () => h('div', { class: 'text-left' }, 'Jahr'),
    cell: ({ row }) => {
      return h('div', { class: 'font-medium' }, row.getValue('year'))
    },
  },
  {
    accessorKey: 'transmission',
    header: () => h('div', { class: 'text-left' }, 'Getriebe'),
    cell: ({ row }) => {
      const transmission = row.getValue('transmission')
      return h('div', { class: 'font-medium' }, transmission === 'manual' ? 'Manuell' : 'Automatik')
    },
  },
  {
    accessorKey: 'color',
    header: () => h('div', { class: 'text-left' }, 'Farbe'),
    cell: ({ row }) => {
      return h('div', { class: 'font-medium' }, row.getValue('color'))
    },
  },
  {
    accessorKey: 'mileage',
    header: ({ column }) => {
      return h(
        Button,
        {
          variant: 'ghost',
          class: '-ml-3',
          onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
        },
        () => ['Kilometerstand', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })],
      )
    },
    cell: ({ row }) => {
      const mileage = row.getValue('mileage') as number
      return h('div', { class: 'font-medium' }, `${mileage.toLocaleString('de-DE')} km`)
    },
  },
  {
    accessorKey: 'status',
    header: () => h('div', { class: 'text-left' }, 'Status'),
    cell: ({ row }) => {
      const status = row.getValue('status') as string
      const statusMap: Record<string, string> = {
        active: 'Aktiv',
        maintenance: 'Wartung',
        inactive: 'Inaktiv',
      }
      return h('div', { class: 'font-medium' }, statusMap[status] || status)
    },
  },
]
