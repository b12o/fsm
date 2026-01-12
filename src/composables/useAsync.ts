import { ref, type Ref } from 'vue'

export type AsyncState<T> = {
  data: Ref<T | null>
  loading: Ref<boolean>
  error: Ref<Error | null>
}

export function useAsync<T>(
  asyncFunction: () => Promise<T>,
): AsyncState<T> & { execute: () => Promise<void>; reset: () => void } {
  const data = ref<T | null>(null)
  const loading = ref(false)
  const error = ref<Error | null>(null)

  async function execute(): Promise<void> {
    loading.value = true
    error.value = null

    try {
      data.value = await asyncFunction()
    } catch (e) {
      error.value = e instanceof Error ? e : new Error(String(e))
      console.error('useAsync error:', error.value)
    } finally {
      loading.value = false
    }
  }

  function reset(): void {
    data.value = null
    loading.value = false
    error.value = null
  }

  return {
    data: data as Ref<T | null>,
    loading,
    error,
    execute,
    reset,
  }
}
