export type ValidationRule<T = string> = (value: T) => string | true

export type ValidationRules<T = string> = {
  [key: string]: ValidationRule<T>[]
}

export type ValidationErrors = {
  [key: string]: string[]
}

export const required = (message = 'Dieses Feld ist erforderlich'): ValidationRule => {
  return (value: string) => {
    if (!value || value.trim() === '') {
      return message
    }
    return true
  }
}

export const email = (
  message = 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
): ValidationRule => {
  return (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(value)) {
      return message
    }
    return true
  }
}

export const minLength = (length: number, message?: string): ValidationRule => {
  return (value: string) => {
    if (value.length < length) {
      return message || `Mindestens ${length} Zeichen erforderlich`
    }
    return true
  }
}

export const maxLength = (length: number, message?: string): ValidationRule => {
  return (value: string) => {
    if (value.length > length) {
      return message || `Maximal ${length} Zeichen erlaubt`
    }
    return true
  }
}

export const phoneNumber = (
  message = 'Bitte geben Sie eine gültige Telefonnummer ein',
): ValidationRule => {
  return (value: string) => {
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/
    if (value && !phoneRegex.test(value)) {
      return message
    }
    return true
  }
}

export const numeric = (
  message = 'Bitte geben Sie nur Zahlen ein',
): ValidationRule<string | number> => {
  return (value: string | number) => {
    if (isNaN(Number(value))) {
      return message
    }
    return true
  }
}

export const min = (minValue: number, message?: string): ValidationRule<number> => {
  return (value: number) => {
    if (value < minValue) {
      return message || `Wert muss mindestens ${minValue} sein`
    }
    return true
  }
}

export const max = (maxValue: number, message?: string): ValidationRule<number> => {
  return (value: number) => {
    if (value > maxValue) {
      return message || `Wert darf maximal ${maxValue} sein`
    }
    return true
  }
}

export const pattern = (regex: RegExp, message = 'Ungültiges Format'): ValidationRule => {
  return (value: string) => {
    if (!regex.test(value)) {
      return message
    }
    return true
  }
}

export const licensePlate = (
  message = 'Bitte geben Sie ein gültiges Kennzeichen ein',
): ValidationRule => {
  return (value: string) => {
    const licensePlateRegex = /^[A-ZÄÖÜ]{1,3}-[A-Z]{1,2}\s?\d{1,4}[EH]?$/
    if (!licensePlateRegex.test(value)) {
      return message
    }
    return true
  }
}

export const vin = (
  message = 'Bitte geben Sie eine gültige Fahrzeug-Identifizierungsnummer ein',
): ValidationRule => {
  return (value: string) => {
    const vinRegex = /^[A-HJ-NPR-Z0-9]{17}$/
    if (!vinRegex.test(value)) {
      return message
    }
    return true
  }
}

export const date = (
  message = 'Bitte geben Sie ein gültiges Datum ein (TT.MM.JJJJ)',
): ValidationRule => {
  return (value: string) => {
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[012])\.(19|20)\d\d$/
    if (!dateRegex.test(value)) {
      return message
    }
    return true
  }
}

export function validate<T extends Record<string, unknown>>(
  data: T,
  rules: ValidationRules,
): ValidationErrors {
  const errors: ValidationErrors = {}

  for (const field in rules) {
    const fieldRules = rules[field]
    const value = data[field] as string
    const fieldErrors: string[] = []

    for (const rule of fieldRules) {
      const result = rule(value)
      if (result !== true) {
        fieldErrors.push(result)
      }
    }

    if (fieldErrors.length > 0) {
      errors[field] = fieldErrors
    }
  }

  return errors
}

export function hasErrors(errors: ValidationErrors): boolean {
  return Object.keys(errors).length > 0
}
