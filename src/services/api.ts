import type { Student, Instructor, Vehicle } from '@/types'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api'

type ApiResponse<T> = {
  data: T
  error?: string
}

class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
  ) {
    super(message)
    this.name = 'ApiError'
  }
}

async function fetchApi<T>(endpoint: string, options?: RequestInit): Promise<T> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    })

    if (!response.ok) {
      throw new ApiError(`HTTP error! status: ${response.status}`, response.status)
    }

    const data = await response.json()
    return data
  } catch (error) {
    if (error instanceof ApiError) {
      throw error
    }
    throw new ApiError('Network error occurred', 0)
  }
}

export const studentApi = {
  async getAll(): Promise<Student[]> {
    return fetchApi<Student[]>('/students')
  },

  async getById(id: string): Promise<Student> {
    return fetchApi<Student>(`/students/${id}`)
  },

  async create(student: Omit<Student, 'id'>): Promise<Student> {
    return fetchApi<Student>('/students', {
      method: 'POST',
      body: JSON.stringify(student),
    })
  },

  async update(id: string, student: Partial<Student>): Promise<Student> {
    return fetchApi<Student>(`/students/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(student),
    })
  },

  async delete(id: string): Promise<void> {
    return fetchApi<void>(`/students/${id}`, {
      method: 'DELETE',
    })
  },
}

export const instructorApi = {
  async getAll(): Promise<Instructor[]> {
    return fetchApi<Instructor[]>('/instructors')
  },

  async getById(id: string): Promise<Instructor> {
    return fetchApi<Instructor>(`/instructors/${id}`)
  },

  async create(instructor: Omit<Instructor, 'id'>): Promise<Instructor> {
    return fetchApi<Instructor>('/instructors', {
      method: 'POST',
      body: JSON.stringify(instructor),
    })
  },

  async update(id: string, instructor: Partial<Instructor>): Promise<Instructor> {
    return fetchApi<Instructor>(`/instructors/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(instructor),
    })
  },

  async delete(id: string): Promise<void> {
    return fetchApi<void>(`/instructors/${id}`, {
      method: 'DELETE',
    })
  },
}

export const vehicleApi = {
  async getAll(): Promise<Vehicle[]> {
    return fetchApi<Vehicle[]>('/vehicles')
  },

  async getById(id: string): Promise<Vehicle> {
    return fetchApi<Vehicle>(`/vehicles/${id}`)
  },

  async create(vehicle: Omit<Vehicle, 'id'>): Promise<Vehicle> {
    return fetchApi<Vehicle>('/vehicles', {
      method: 'POST',
      body: JSON.stringify(vehicle),
    })
  },

  async update(id: string, vehicle: Partial<Vehicle>): Promise<Vehicle> {
    return fetchApi<Vehicle>(`/vehicles/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(vehicle),
    })
  },

  async delete(id: string): Promise<void> {
    return fetchApi<void>(`/vehicles/${id}`, {
      method: 'DELETE',
    })
  },
}

export { ApiError }
export type { ApiResponse }
