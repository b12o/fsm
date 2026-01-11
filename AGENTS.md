# AGENTS Guide for fsm

A Vue 3 + TypeScript + Vite driving school management application using Pinia, TailwindCSS 4, and reka-ui components.

## Project Commands

### Development & Build

- **Dev server**: `npm run dev` - Start Vite dev server with HMR
- **Build**: `npm run build` - Type-check and build for production
- **Build only**: `npm run build-only` - Build without type-checking
- **Preview**: `npm run preview` - Preview production build locally
- **Type-check**: `npm run type-check` - Run Vue TSC build-mode type checking

### Code Quality

- **Lint**: `npm run lint` - Run ESLint with auto-fix
- **Format**: `npm run format` - Format `src/` with Prettier

### Testing

- **No test runner configured yet**
- If adding Vitest + Vue Test Utils:
  - Run all tests: `npx vitest run`
  - Watch mode: `npx vitest`
  - Single file: `npx vitest run path/to/file.test.ts`
  - Single test: `npx vitest run -t "test name"`

## Code Style Guidelines

### Import Organization

Order imports in these groups (blank line between groups):

1. Vue core (vue, vue-router, pinia)
2. Third-party libraries (lucide-vue-next, @schedule-x/\*, etc.)
3. Project aliases (`@/*`)
4. Relative imports (`./`, `../`)

```typescript
// Example
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { defineStore } from 'pinia'

import { toast } from 'vue-sonner'
import { Users, Car } from 'lucide-vue-next'

import type { Student } from '@/types'
import { useStudentStore } from '@/stores/studentStore'

import StudentInfo from './StudentInfo.vue'
```

### Path Aliases

- Use `@/*` for absolute imports: `@/types`, `@/stores/studentStore`, `@/components/ui/button`
- Configured in `tsconfig.json` and `vite.config.ts`
- Prefer `@/*` over relative paths for cross-folder imports

### Component Conventions

- **Filenames**: PascalCase for Vue SFCs (`StudentView.vue`, `TheHeader.vue`, `InfoBox.vue`)
- **Directory names**: kebab-case (`src/components/ui/dropdown-menu/`)
- **Structure**: Use `<script setup lang="ts">` with default exports
- **Props**: Use TypeScript with `defineProps<Props>()` and explicit type interfaces
- **UI components**: Keep in `src/components/ui/*` using reka-ui primitives

```vue
<script setup lang="ts">
import type { Student } from '@/types'

type Props = {
  studentId: string
  showDetails?: boolean
}

const props = defineProps<Props>()
</script>
```

### Naming Conventions

- **Variables/functions**: camelCase (`studentId`, `setSelectedStudent`, `eventStartTime`)
- **Constants**: UPPER_SNAKE_CASE (`LESSON_HOUR`, `API_BASE_URL`)
- **Types/Interfaces**: PascalCase (`Student`, `Instructor`, `LearningProgress`)
- **Stores**: `useXxxStore` pattern (`useStudentStore`, `useSidebarStore`)
- **Composables**: `useXxx` pattern (if added: `useStudentData`, `useFormValidation`)
- **Component names**: PascalCase, descriptive (`StudentInfo`, `LearningProgress`, `TheHeader`)

### TypeScript Guidelines

- **Strict mode**: Enabled - no implicit any
- **Explicit types**: Required for function parameters and return types
- **Type definitions**: Centralize in `src/types.ts`
- **Ref annotations**: Annotate refs when type isn't obvious: `ref<Student | null>(null)`
- **Computed types**: Annotate return types for complex computeds
- **Avoid**: `any`, `as any`, type assertions unless absolutely necessary
- **Union types**: Use where appropriate (`PhaseItem` uses `boolean | number`)

```typescript
// Good
const selectedStudent = ref<Student>({ ... })
const studentName = computed((): string => {
  return `${student.value.firstName} ${student.value.lastName}`
})

// Avoid
const data = ref(null) // implicit any
```

### Formatting (Prettier)

- **No semicolons** (semi: false)
- **Single quotes** (singleQuote: true)
- **Line width**: 100 characters (printWidth: 100)
- **Auto-format**: `npm run format` (formats `src/`)
- **ESLint**: Uses `skipFormatting` - DO NOT add formatting rules to ESLint config

### Error Handling

- **Async code**: Wrap in `try/catch` blocks
- **Logging**: Use `console.log/error` with context (e.g., `console.log(student.id)`)
- **User feedback**: Surface errors with `vue-sonner` toasts
  ```typescript
  import { toast } from 'vue-sonner'
  toast('Fahrstunde wurde erstellt!')
  ```
- **No silent failures**: Either handle, log, or rethrow
- **Return types**: Prefer typed results over throwing for expected failures
- **API calls**: When added, wrap in try/catch and show toast on error

### Vue Router

- **Routes**: Define in `src/router/index.ts`
- **Props mode**: Use `props: true` for route params
  ```typescript
  {
    path: '/student/:studentId',
    name: 'student',
    component: StudentView,
    props: true, // Pass params as props
  }
  ```
- **Route names**: Keep stable (used in navigation: `router.push({ name: 'student' })`)
- **Not found**: Redirect to home with catch-all `/:notFound(.*)` → `/`

### State Management (Pinia)

- **Location**: `src/stores/*Store.ts` (`studentStore.ts`, `sidebarStore.ts`)
- **Setup syntax**: Use composition API style with `defineStore('name', () => { ... })`
- **Serialization**: Keep state serializable (no functions, classes in state)
- **Getters**: Avoid side effects; use `computed` for derived state
- **Actions**: Regular functions for mutations and async operations
- **Naming**: `useXxxStore` exports

```typescript
export const useStudentStore = defineStore('student', () => {
  const selectedStudent = ref<Student>({ ... })
  const fullName = computed(() => `${selectedStudent.value.firstName} ...`)

  function setStudent(student: Student) {
    selectedStudent.value = student
  }

  return { selectedStudent, fullName, setStudent }
})
```

### Styling (TailwindCSS)

- **Version**: TailwindCSS 4.x with `@tailwindcss/vite` plugin
- **Utilities-first**: Prefer Tailwind utilities over custom CSS
- **Component CSS**: Keep minimal; use Tailwind classes in templates
- **Global styles**: `src/assets/main.css`
- **Dark mode**: Respect system defaults (if configured)
- **Class merging**: Use `cn()` helper from `src/lib/utils.ts` for conditional classes
  ```typescript
  import { cn } from '@/lib/utils'
  const classes = cn('base-class', condition && 'conditional-class')
  ```

### Accessibility

- **UI components**: Use reka-ui primitives (headless, accessible by default)
- **Interactive elements**: Ensure proper labels and ARIA attributes
- **Keyboard support**: Test navigation with Tab/Enter/Escape
- **Focus management**: Visible focus indicators, logical tab order
- **Icons**: Pair with text or aria-labels (lucide-vue-next for icons)

### File Structure

- **Feature folders**: Prefer organizing by feature when appropriate
- **Colocation**: Keep small helpers/types next to usage
- **Shared utilities**: `src/lib/` for cross-cutting concerns
- **Types**: `src/types.ts` for shared type definitions
- **Components**:
  - Views: `src/views/` (routed components)
  - Components: `src/components/` (reusable components)
  - UI: `src/components/ui/` (design system primitives)

### Internationalization (i18n)

- **Library**: `vue-i18n` installed but not yet configured
- **When adding**: Localize all user-visible strings
- **Keys**: Keep stable to avoid breaking translations
- **Pattern**: `$t('key.path')` or `useI18n()` composable

### Git Commit Guidelines

- **Size**: Small, focused commits (single concern per commit)
- **Messages**: Clear, concise - capture the "why" not just "what"
- **Format**: Conventional style encouraged (e.g., `feat:`, `fix:`, `refactor:`)
- **Examples**:
  - `feat: add student lesson scheduling dialog`
  - `fix: correct time calculation in duration helper`
  - `refactor: extract calendar event logic to composable`

## Special Notes

- **No Cursor/Copilot rules** found (`.cursor/`, `.cursorrules`, `.github/copilot-instructions.md` absent)
- **PWA**: `vite-plugin-pwa` installed but not yet configured
- **DevTools**: `vite-plugin-vue-devtools` available but commented out in config

## Dependencies Highlights

- **Vue 3.5** with Composition API
- **Pinia 3.0** for state management
- **TailwindCSS 4.x** for styling
- **reka-ui** for headless UI components
- **@schedule-x/** for calendar/scheduling
- **@tanstack/vue-table** for data tables
- **lucide-vue-next** for icons
- **vue-sonner** for toast notifications
