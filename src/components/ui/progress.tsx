import * as React from "react"
import { Progress as ProgressPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

// Progress Bar
const Progress = React.forwardRef<
  React.ComponentRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    indicatorColor?: string
  }
>(({ className, value, indicatorColor, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    data-slot="progress"
    className={cn(
      // 토스 스타일 Progress
      "relative h-2 w-full overflow-hidden rounded-full bg-muted",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn(
        "h-full rounded-full transition-all duration-300 ease-out",
        indicatorColor || "bg-primary"
      )}
      style={{ width: `${value || 0}%` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

// Circular Progress (Spinner)
export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "default" | "lg"
  color?: string
}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size = "default", color, ...props }, ref) => {
    const sizeMap = {
      sm: "size-4",
      default: "size-6",
      lg: "size-8",
    }

    return (
      <div
        ref={ref}
        role="status"
        data-slot="spinner"
        className={cn("animate-spin", sizeMap[size], className)}
        {...props}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="size-full"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke={color || "currentColor"}
            strokeWidth="3"
          />
          <path
            className="opacity-75"
            fill={color || "currentColor"}
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    )
  }
)
Spinner.displayName = "Spinner"

// Loading Dots - 토스 스타일 로딩 점
const LoadingDots = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      role="status"
      data-slot="loading-dots"
      className={cn("flex items-center gap-1", className)}
      {...props}
    >
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={cn(
            "size-2 rounded-full bg-primary",
            "animate-bounce"
          )}
          style={{
            animationDelay: `${i * 0.15}s`,
            animationDuration: "0.6s",
          }}
        />
      ))}
      <span className="sr-only">Loading...</span>
    </div>
  )
})
LoadingDots.displayName = "LoadingDots"

// Loading Overlay
export interface LoadingOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  loading?: boolean
  blur?: boolean
}

const LoadingOverlay = React.forwardRef<HTMLDivElement, LoadingOverlayProps>(
  ({ className, loading = true, blur = false, children, ...props }, ref) => {
    if (!loading) return <>{children}</>

    return (
      <div ref={ref} className={cn("relative", className)} {...props}>
        {children}
        <div
          data-slot="loading-overlay"
          className={cn(
            "absolute inset-0 flex items-center justify-center",
            "bg-background/60 rounded-inherit",
            blur && "backdrop-blur-sm"
          )}
        >
          <Spinner size="lg" />
        </div>
      </div>
    )
  }
)
LoadingOverlay.displayName = "LoadingOverlay"

export { Progress, Spinner, LoadingDots, LoadingOverlay }
