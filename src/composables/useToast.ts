import { toast } from 'vue-sonner'

export function useToast() {
  function success(message: string): void {
    toast(message)
  }

  function error(message: string): void {
    toast.error(message)
  }

  function warning(message: string): void {
    toast.warning(message)
  }

  function info(message: string): void {
    toast.info(message)
  }

  return {
    success,
    error,
    warning,
    info,
  }
}
