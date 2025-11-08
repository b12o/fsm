AGENTS Guide for fsm

- Build: `npm run build`; Dev: `npm run dev`; Preview: `npm run preview`; Type-check: `npm run type-check`.
- Lint/Format: `npm run lint` (ESLint) and `npm run format` (Prettier).
- Tests: no runner configured. If adding Vitest + VTU: all `npx vitest run`, watch `npx vitest`, single file `npx vitest run path/to/file.test.ts`, single test `npx vitest run -t "test name"`.
- Imports: prefer `@/*` alias for cross-folder; order groups: Vue/Router/Pinia → third‑party → `@/*` → relative (`./`,`../`).
- Components: SFC filenames PascalCase (e.g., `StudentView.vue`); default export; directories kebab-case.
- Naming: variables camelCase; constants UPPER_SNAKE_CASE; composables/stores `useXxx`/`useXxxStore`.
- Types: use TypeScript strictly; avoid `any`; reuse `src/types.ts`; annotate refs `ref<Type>()` and computed return types where helpful.
- Formatting: Prettier enforced (no semicolons, single quotes, width 100); do not add ESLint formatting rules (eslint uses `skipFormatting`).
- Errors: wrap async code in `try/catch`; log with context; surface user-facing issues via `vue-sonner` toasts; avoid silent failures; either rethrow or return typed results.
- Router: define routes in `src/router/index.ts`; use `props: true` for route params; keep route names stable.
- State: Pinia stores under `src/stores/*`; keep state serializable; avoid side effects in getters; derive with `computed` when possible.
- Styles: TailwindCSS 4 utilities preferred; keep component CSS minimal; respect dark mode defaults.
- Accessibility: use headless UI patterns in `src/components/ui/*`; ensure interactive elements have labels and keyboard support.
- Files/structure: prefer feature folders; colocate small helpers next to usage; shared utils in `src/lib`.
- i18n: `vue-i18n` available—localize user-visible strings; keep keys stable.
- Commit hygiene: small, focused commits; message should capture the “why”.
- Cursor/Copilot rules: none found (`.cursor/`, `.cursorrules`, `.github/copilot-instructions.md` absent).
