import * as React from "react"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

// Toast Context
interface Toast {
  id: string
  message: string
  action?: {
    label: string
    onClick: () => void
  }
  duration?: number
}

interface ToastContextType {
  toasts: Toast[]
  toast: (message: string, options?: { action?: Toast["action"]; duration?: number }) => void
  dismiss: (id: string) => void
}

const ToastContext = React.createContext<ToastContextType | undefined>(undefined)

export function useToast() {
  const context = React.useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context
}

// Toast Provider
export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<Toast[]>([])

  const toast = React.useCallback(
    (message: string, options?: { action?: Toast["action"]; duration?: number }) => {
      const id = Math.random().toString(36).substring(2, 9)
      const newToast: Toast = { id, message, ...options }
      setToasts((prev) => [...prev, newToast])

      // 자동 제거 (기본 2.5초)
      const duration = options?.duration ?? 2500
      if (duration > 0) {
        setTimeout(() => {
          setToasts((prev) => prev.filter((t) => t.id !== id))
        }, duration)
      }
    },
    []
  )

  const dismiss = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ toasts, toast, dismiss }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  )
}

// 토스 스타일 Toast (하단 스낵바)
function ToastContainer() {
  const { toasts, dismiss } = useToast()

  return (
    <div
      data-slot="toast-container"
      className={cn(
        "fixed inset-x-0 bottom-0 z-[100]",
        "flex flex-col items-center gap-2",
        "p-4 pb-[max(16px,calc(env(safe-area-inset-bottom)+60px))]",
        "pointer-events-none"
      )}
    >
      {toasts.map((t) => (
        <div
          key={t.id}
          role="status"
          className={cn(
            // 토스 실제 스낵바 스타일
            "pointer-events-auto",
            "inline-flex items-center gap-3",
            "px-4 py-3 rounded-[14px]",
            "bg-[#333D4B] text-white",
            "shadow-lg",
            "text-[14px] font-medium",
            // 애니메이션
            "animate-in slide-in-from-bottom-4 fade-in-0 duration-200"
          )}
        >
          <span className="flex-1">{t.message}</span>
          {t.action && (
            <button
              onClick={() => {
                t.action?.onClick()
                dismiss(t.id)
              }}
              className="shrink-0 font-semibold text-[#4593FC] hover:text-[#85B8FF] transition-colors"
            >
              {t.action.label}
            </button>
          )}
        </div>
      ))}
    </div>
  )
}

// Snackbar (직접 사용 시)
export interface SnackbarProps extends React.HTMLAttributes<HTMLDivElement> {
  message: string
  action?: {
    label: string
    onClick: () => void
  }
  onClose?: () => void
}

const Snackbar = React.forwardRef<HTMLDivElement, SnackbarProps>(
  ({ className, message, action, onClose, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="status"
        data-slot="snackbar"
        className={cn(
          // 토스 스타일 Snackbar
          "inline-flex items-center gap-3",
          "px-4 py-3 rounded-[14px]",
          "bg-[#333D4B] text-white",
          "shadow-lg",
          "text-[14px] font-medium",
          className
        )}
        {...props}
      >
        <span className="flex-1">{message}</span>
        {action && (
          <button
            onClick={action.onClick}
            className="shrink-0 font-semibold text-[#4593FC]"
          >
            {action.label}
          </button>
        )}
        {onClose && (
          <button
            onClick={onClose}
            className="shrink-0 p-0.5 -mr-1 text-white/60 hover:text-white transition-colors"
          >
            <X className="size-4" />
          </button>
        )}
      </div>
    )
  }
)
Snackbar.displayName = "Snackbar"

export { ToastContainer, Snackbar }
