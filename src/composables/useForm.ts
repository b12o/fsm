import { ref, computed, type ComputedRef, type Ref } from 'vue'
import type { ValidationRules, ValidationErrors } from '@/lib/validation'
import { validate, hasErrors } from '@/lib/validation'

export type FormState<T> = {
  values: Ref<T>
  errors: Ref<ValidationErrors>
  touched: Ref<Record<keyof T, boolean>>
  isValid: ComputedRef<boolean>
  isDirty: ComputedRef<boolean>
}

export function useForm<T extends Record<string, unknown>>(
  initialValues: T,
  validationRules?: ValidationRules,
): FormState<T> & {
  handleSubmit: (callback: (values: T) => void | Promise<void>) => Promise<void>
  resetForm: () => void
  setFieldValue: (field: keyof T, value: unknown) => void
  setFieldTouched: (field: keyof T, touched?: boolean) => void
  validateField: (field: keyof T) => void
  validateForm: () => boolean
} {
  const values = ref({ ...initialValues }) as Ref<T>
  const errors = ref<ValidationErrors>({})
  const touched = ref(
    Object.keys(initialValues).reduce(
      (acc, key) => {
        acc[key as keyof T] = false
        return acc
      },
      {} as Record<keyof T, boolean>,
    ),
  ) as Ref<Record<keyof T, boolean>>
  const storedInitialValues = { ...initialValues }

  const isValid = computed(() => !hasErrors(errors.value))
  const isDirty = computed(() => {
    return Object.keys(values.value).some(
      (key) => values.value[key as keyof T] !== storedInitialValues[key as keyof T],
    )
  })

  function validateField(field: keyof T): void {
    if (!validationRules || !validationRules[field as string]) return

    const fieldRules = validationRules[field as string]
    const value = values.value[field]
    const fieldErrors: string[] = []

    for (const rule of fieldRules) {
      const result = rule(value as string)
      if (result !== true) {
        fieldErrors.push(result)
      }
    }

    if (fieldErrors.length > 0) {
      errors.value[field as string] = fieldErrors
    } else {
      delete errors.value[field as string]
    }
  }

  function validateForm(): boolean {
    if (!validationRules) return true

    errors.value = validate(values.value, validationRules)
    return isValid.value
  }

  function setFieldValue(field: keyof T, value: unknown): void {
    values.value[field] = value as T[keyof T]
    if (touched.value[field]) {
      validateField(field)
    }
  }

  function setFieldTouched(field: keyof T, isTouched = true): void {
    touched.value[field] = isTouched
    if (isTouched) {
      validateField(field)
    }
  }

  async function handleSubmit(callback: (values: T) => void | Promise<void>): Promise<void> {
    Object.keys(values.value).forEach((key) => {
      touched.value[key as keyof T] = true
    })

    if (!validateForm()) {
      return
    }

    await callback(values.value)
  }

  function resetForm(): void {
    values.value = { ...storedInitialValues }
    errors.value = {}
    Object.keys(touched.value).forEach((key) => {
      touched.value[key as keyof T] = false
    })
  }

  return {
    values,
    errors,
    touched,
    isValid,
    isDirty,
    handleSubmit,
    resetForm,
    setFieldValue,
    setFieldTouched,
    validateField,
    validateForm,
  }
}
