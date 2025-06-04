<script setup lang="ts" generic="TData, TValue">
import { onMounted, ref } from 'vue'
import type { ColumnDef, Row, SortingState } from '@tanstack/vue-table'
import { ChevronLeft, ChevronRight, Search } from 'lucide-vue-next'
import {
  FlexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useVueTable,
} from '@tanstack/vue-table'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { valueUpdater } from '@/lib/utils'

interface Props {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  rowSelect: (row: Row<TData>) => void
}
const props = defineProps<Props>()

const sorting = ref<SortingState>([])
const table = useVueTable({
  initialState: {
    pagination: {
      pageIndex: 0,
      pageSize: 20,
    },
  },
  state: {
    get sorting() {
      return sorting.value
    },
  },
  get data() {
    return props.data
  },
  get columns() {
    return props.columns
  },
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  globalFilterFn: 'includesString',
  onSortingChange: (updateOrValue) => valueUpdater(updateOrValue, sorting),
})

onMounted(() => {
  document.getElementById('data-table-search-input')?.focus()
})
</script>

<template>
  <div class="flex items-center py-4">
    <span class="absolute start-6 flex items-center justify-center px-2">
      <Search class="size-5 text-muted-foreground" />
    </span>
    <Input
      id="data-table-search-input"
      class="max-w-sm pl-8"
      placeholder="Suche"
      @update:model-value="table.setGlobalFilter($event)"
    />
  </div>
  <div class="border rounded-md">
    <Table>
      <TableHeader>
        <TableRow v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
          <TableHead v-for="header in headerGroup.headers" :key="header.id">
            <FlexRender
              v-if="!header.isPlaceholder"
              :render="header.column.columnDef.header"
              :props="header.getContext()"
            />
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <template v-if="table.getRowModel().rows?.length">
          <TableRow
            v-for="row in table.getRowModel().rows"
            :key="row.id"
            :data-state="row.getIsSelected() ? 'selected' : 'undefined'"
            @click="rowSelect(row)"
          >
            <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id">
              <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
            </TableCell>
          </TableRow>
        </template>
        <template v-else>
          <TableRow>
            <TableCell :colspan="columns.length" class="h-24 text-center">
              Wird geladen...
            </TableCell>
          </TableRow>
        </template>
      </TableBody>
    </Table>
  </div>
  <div class="flex items-center justify-center py-4 space-x-2">
    <Button
      variant="outline"
      size="sm"
      :disabled="!table.getCanPreviousPage()"
      @click="table.previousPage()"
    >
      <ChevronLeft />
    </Button>
    <Button
      variant="outline"
      size="sm"
      :disabled="!table.getCanNextPage()"
      @click="table.nextPage()"
    >
      <ChevronRight />
    </Button>
  </div>
</template>
